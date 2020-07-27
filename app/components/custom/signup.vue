<template>
  <Page
    actionBarHidden="true"
    class="anim-page"
    backgroundSpanUnderStatusBar="true"
    @loaded="onLoaded"
  >
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <StackLayout class="input-field">
          <TextField
            ref="username"
            class="input"
            hint="User Name"
            v-model="user.name"
            returnKeyType="done"
            fontSize="18"
          />

          <StackLayout class="hr-light" />
          <label :text="error.username"></label>
        </StackLayout>

        <GridLayout columns="2*,1*,*3*" horizontalAlignment="left" verticalAlignment="top">
          <DropDown
            col="0"
            ref="dropDownList1"
            selectedIndex="0"
            :items="countryCode"
            class="item-drop-down"
            @selectedIndexChanged="dropDownSelectedCountryChanged"
          ></DropDown>
          <label col="1" class="input" :text="tempCountryCode"></label>
          <StackLayout class="input-field" col="2">
            <TextField
              ref="contactNumber"
              class="input"
              hint="Contact Number"
              keyboardType="number"
              minlength="10"
              v-model="tempContactNumber"
              returnKeyType="done"
              fontSize="18"
            />
            <StackLayout class="hr-light" />
            <label :text="error.countryCode"></label>
            <label :text="error.contactnumber"></label>
          </StackLayout>
        </GridLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="Email"
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
            v-model="user.email"
            returnKeyType="next"
            fontSize="18"
            required
          />

          <StackLayout class="hr-light" />
          <label :text="error.email"></label>
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            v-model="user.password"
            fontSize="18"
            required
          />
          <StackLayout class="hr-light" />
          <label :text="error.password"></label>
        </StackLayout>

        <StackLayout>
          <DropDown
            ref="dropDownList2"
            selectedIndex="0"
            :items="roleListByName"
            @selectedIndexChanged="dropDownSelectedIndexChanged"
            class="item-drop-down"
          ></DropDown>
          <label :text="error.role"></label>
        </StackLayout>
        <Button :text="signIn" @tap="register" class="btn btn-primary m-t-20" />
      </StackLayout>
      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span :text="backToLogin"></Span>

        </FormattedString>
      </Label>

      <Button text="google Login" @tap="onLoginTap()" class="btn btn-info btn-active" />
    </FlexboxLayout>
  </Page>
</template>

<script>
var auth_service_1 = require("../../auth-service");
var Toast = require("nativescript-toast");
var countryCode = require("../../assets/countryCode.json");
import * as application from "tns-core-modules/application";
import { configureOAuthProviders, tnsOauthLogin } from "../../auth-service";
import Home from "../Home";
import GeoTracker from "../custom/geo-tracker";
import Admin from "../custom/admin";
import Login from "../custom/login";
import VueTelInput from "vue-tel-input";
import * as http from "tns-core-modules/http";
import { Telephony } from "nativescript-telephony";

configureOAuthProviders();

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      countryCode: [],
      roleListByName: [],
      errors: [],
      roleList: [],
      signIn:'Sign Up',
      backToLogin: "Back to Login",
      tempCountryCode: null,
      tempContactNumber: null,
      user: {
        role: "",
        name: "",
        contactNumber: null,
        email: "",
        password: null,
      },
      error: {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
        role: "",
        countryCode: "",
      },
    };
  },

  mounted() {
    http
      .request({
        url: "http://172.16.9.77:5000/api/role",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(
        (response) => {
          this.roleListByName = response.content
            .toJSON()
            .payload.map((e) => e.name);
          this.roleList = response.content.toJSON().payload;
        },
        (e) => {
          console.log("error", e);
        }
      );
    this.countryCode = countryCode.map((e) => e.code + " "+ e.dial_code );
  },

  methods: {
    dropDownSelectedIndexChanged() {
      const index = this.$refs.dropDownList2.nativeView.selectedIndex;
      this.user.role = this.roleList[index].value;
      this.error.role = "";
    },
    dropDownSelectedCountryChanged() {
      const index = this.$refs.dropDownList1.nativeView.selectedIndex;
      this.tempCountryCode = countryCode[index].dial_code;
    },
    register() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
      };
      this.user.contactNumber = this.tempCountryCode + this.tempContactNumber;
      if (!this.user.email) {
        this.error.email = "Email required.";
      } else if (!this.validEmail(this.user.email)) {
        this.error.email = "Email is invalid.";
      }
      if (!this.user.password) {
        this.error.password = "Password required.";
      } else if (this.user.password.length < 8) {
        this.error.password = "Password Length Must Be Greater then 8.";
      }
      if (!this.user.name) {
        this.error.username = "Username required.";
      }
      if (!this.tempCountryCode) {
        this.countryCode = "Contry Code Require";
      }
      if (!this.user.contactNumber) {
        this.error.contactnumber = "Contact Number required.";
      }
      if (!this.user.role) {
        this.error.role = "Role required.";
      }
      const isEmpty = Object.values(this.error).every(
        (x) => x === null || x === ""
      );
      if (isEmpty) {
        http
          .request({
            url: "http://172.16.9.77:5000/api/user",
            method: "POST",
            content: JSON.stringify(this.user),
            headers: { "Content-Type": "application/json" },
          })
          .then(
            (response) => {
              console.log("response====", response.content.toJSON().status);
              this.toastMessage(response.content.toJSON().message);
              if (response.content.toJSON().payload !== null) {
                (this.user = {
                  role: "",
                  name: "",
                  contactNumber: null,
                  email: "",
                  password: null,
                }),
                  (this.isLoggingIn = !this.isLoggingIn);
              }
            },
            (e) => {
              console.log("error", e);
            }
          );
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    onLoginTap() {
      auth_service_1.tnsOauthLogin("google");
    },

    onLogoutTap() {
      auth_service_1.tnsOauthLogout();
    },
    toggleForm() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
      };
      this.$navigateTo(Login, {});
    },
    toastMessage(message) {
      var toast = Toast.makeText(message);
      toast.show();
    },
  },
};
</script>
<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
}

.input-field {
  margin-bottom: 5;
}

.input {
  font-size: 12;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 10;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
.item-drop-down{
    font-size: 15;
    height: 40;
    padding: 4;
    width: 100%;
    border: 10;
    border-color:#000000;
}
</style>