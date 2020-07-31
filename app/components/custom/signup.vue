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
      <StackLayout class="input-field">
          <DropDown
            ref="dropDownList1"
            selectedIndex="0"
            :items="countryCodeList"
            class="item-drop-down"
            @selectedIndexChanged="dropDownSelectedCountryChanged"
          ></DropDown>

          <StackLayout class="hr-light" />
          <label :text="error.countryCode"></label>
        </StackLayout>
        <GridLayout columns="1*,*3*" horizontalAlignment="left" verticalAlignment="top">
          <StackLayout class="input-field" col="0">
            <TextField
              ref="tempCountryCode"
              class="input"
              keyboardType="number"
              minlength="10"
              isEnabled="false"
              v-model="tempCountryCode"
              returnKeyType="done"
              fontSize="12"
            />
            <StackLayout class="hr-light" />
          </StackLayout>
          <StackLayout class="input-field" col="1">
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
            <label :text="error.contactnumber"></label>
          </StackLayout>
        </GridLayout>

        <StackLayout class="input-field">
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
            v-model="user.role"
            @selectedIndexChanged="dropDownSelectedIndexChanged"
            class="item-drop-down"
          ></DropDown>
          <label :text="error.role"></label>
        </StackLayout>

        <StackLayout class="input-field" v-show="isRestrauntOwner">
          <TextField
            ref="res-name"
            class="input"
            hint="Restraunt Name"
            v-model="user.restaurantName"
            returnKeyType="done"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
  <StackLayout class="input-field" v-show="isRestrauntOwner">
          <TextField
            ref="res-address"
            class="input"
            hint="Restraunt Address"
            v-model="user.restaurantAddress"
            returnKeyType="done"
            fontSize="18"
            @tap="getAddress()"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button :text="signIn" @tap="register" class="btn btn-primary m-t-15" />
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

<script >
var auth_service_1 = require("../../auth-service");
import * as Toast from 'nativescript-toast';
import * as application from "tns-core-modules/application";
import { configureOAuthProviders, tnsOauthLogin } from "../../auth-service";
import Home from "../Home";
import GeoTracker from "../custom/geo-tracker";
import Admin from "../custom/admin";
import Login from "../custom/login";
import constant from "../../assets/json/constant.json";
import LoginService from "../../services/loginService";
import countryCode from "../../assets/json/countryCode.json";
import Utils from "../../services/utils";
import { isIOS, isAndroid } from 'tns-core-modules/platform'
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

let API_KEY = "AIzaSyAOYKrNk8B72AcOnF9SD3WjcemZHmuUcRY";
let googlePlacesAutocomplete = new GooglePlacesAutocomplete(API_KEY);
const loginService = new LoginService();
configureOAuthProviders();

export default {
  data() {
    return {
      countryCodeList: [],
      roleListByName: [],
      errors: [],
      roleList: [],
      signIn: "Sign Up",
      backToLogin: "Back to Login",
      tempCountryCode: null,
      tempContactNumber: null,
      resAddress: "",
      addressList: [],
      isRestrauntOwner: false,
      user: {
        role: 2,
        name: "parth",
        contactNumber: 465476541651,
        email: "parth34@gmail",
        password: 12345678,
        restaurantName:"subway",
        restaurantAddress:"fategunj"
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
    this.countryCodeList = countryCode.map((e) => e.name);
    return loginService.getRoll(this.user).then(
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
          googlePlacesAutocomplete.search("new ")
          .then((places) => {
              console.log(places);
           }, (error => {
              console.log(error)
          }));
  //   googlePlacesAutocomplete.getPlaceById(place.placeId).then((place) => {
  //      .then(() => { });
  //       }, error => {
  //           console.log(error)
  //       })     
  },

  methods: {
    dropDownSelectedIndexChanged() {
      const index = this.$refs.dropDownList2.nativeView.selectedIndex;
      this.user.role = this.roleList[index].value;
      this.addTextField(this.roleList[index].value);
      this.error.role = "";
    },

    dropDownSelectedCountryChanged() {
      const index = this.$refs.dropDownList1.nativeView.selectedIndex;
      this.tempCountryCode = countryCode[index].dial_code;
    },

    validateLogin() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
      };

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
      if (!this.user.contactNumber) {
        this.error.contactnumber = "Contact Number required.";
      }
      if (!this.user.role) {
        this.error.role = "Role required.";
      }
    },

    register() {
      this.user.contactNumber = this.tempContactNumber;
      this.validateLogin();

      const isEmpty = Object.values(this.error).every(
        (x) => x === null || x === ""
      );

      if (isEmpty) {
        loginService.signUp(this.user).then((response) => {
          const result = response.content.toJSON();
          console.log('Response Signup', result)
          if (isAndroid) {
            this.toastMessage(response.content.toJSON().message);
          }
            if (result.payload !== null) {
              (this.user = {
                role: "",
                name: "",
                contactNumber: null,
                email: "",
                password: null,
              }),
                this.$navigateTo(Login);
            }
          },
          (e) => {}
        );
      }
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
      const toast = Toast.makeText(message);
      toast.show();
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    addTextField(value) {
      if (value == 2) {
        this.isRestrauntOwner = this.isRestrauntOwner == false ? true : false;
      } else if (value == 1) {
        this.isRestrauntOwner = this.isRestrauntOwner == true ? false : false;
      } else if (value == 3) {
        this.isRestrauntOwner = this.isRestrauntOwner == true ? false : false;
      }
    },
  getAddress() {
    debugger
      console.log('resAddress',this.user.restaurantAddress);
    googlePlacesAutocomplete.search(this.user.restaurantAddress)
          .then((places) => {
            this.addressList = places
              console.log('places===',JSON.stringify(this.addressList) );
           }, (error => {
              console.log('error===',error)
          }));
    }
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
  margin-bottom: 0;
}

.input {
  font-size: 10;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 10;
}


.btn-primary {
  height: 50;
  margin: 5 5 5 5;
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
.item-drop-down {
  font-size: 15;
  height: 25;
  padding: 4;
  width: 100%;
  border: 10;
  background-color: white;
  color: black;
  border-color: #000000;
}
label {
  background-color: #ffffff;
  color: #d44848;
  font-size: 14;
}
</style>