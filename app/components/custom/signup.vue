<template>
  <Page
    actionBarHidden="true"
    class="anim-page"
    backgroundSpanUnderStatusBar="true"
    @loaded="onLoaded"
  >
  <ScrollView>
    <FlexboxLayout class="page">
      <StackLayout class="form" marginBottom="50">
        <StackLayout class="input-field" height="50">
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

        <StackLayout class="input-field" height="50">
          <DropDown
            ref="dropDownCountryList"
            selectedIndex="0"
            :items="countryCodeList"
            class="item-drop-down"
            @selectedIndexChanged="dropDownSelectedCountryChanged"
          ></DropDown>

          <StackLayout class="hr-light" />
          <label :text="error.countryCode"></label>
        </StackLayout>
        <GridLayout columns="1*,*3*" horizontalAlignment="left" verticalAlignment="top" height="50">
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
              v-model="contactNumber"
              returnKeyType="done"
              fontSize="18"
            />
            <StackLayout class="hr-light" />
            <label :text="error.contactnumber"></label>
          </StackLayout>
        </GridLayout>

        <StackLayout class="input-field" height="50">
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

        <StackLayout class="input-field" height="50">
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

        <StackLayout height="50" >
          <DropDown
            ref="dropDownList"
            selectedIndex="0"
            hint="Role"
            :items="roleListByName"
            v-model="user.role"
            @selectedIndexChanged="dropDownSelectedIndexChanged"
            class="item-drop-down"
          ></DropDown>
          <label :text="error.role"></label>
        </StackLayout>

        <StackLayout class="input-field" v-show="isRestrauntOwner" height="50">
          <TextField
            ref="res-name"
            class="input"
            hint="Restraunt Name"
            v-model="user.restaurantName"
            returnKeyType="done"
            fontSize="18"
          />
        </StackLayout>
        
        <StackLayout class="input-field" v-show="isRestrauntOwner">
          <TextField
            ref="res-address"
            class="input"
            hint="Restraunt Address"
            v-model="user.restaurantAddress"
            returnKeyType="done"
            fontSize="18"
            @textChange="getAddress($event)"
          />
          <ListView v-show="this.user.restaurantAddress.length >=3" ref="addressLists" id="places_list" for="address in addressList" height="100">
            <v-template>
              <Label :text="address.description"  @tap="bindToAddress(address.description)" style="color: blue;" padding="8"/>
            </v-template>
          </ListView>
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout height="50" v-show="isDriver">
          <DropDown
            ref="dropDownRestaurantList"
            selectedIndex="0"
            hint="Restaurant List"
            :items="restaurantListName"
            @selectedIndexChanged="dropDownSelectedRestaurantChanged"
            class="item-drop-down"
          ></DropDown>
        </StackLayout>

      </StackLayout>
      <Button :text="signIn" @tap="register" class="btn btn-primary m-t-15" />
      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span :text="backToLogin"></Span>
        </FormattedString>
      </Label>

      <Button text="google Login" @tap="onLoginTap()" class="btn btn-info btn-active" />
    </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script >
var auth_service_1 = require("../../auth-service");
import * as Toast from 'nativescript-toast';
import * as application from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import * as pages from 'tns-core-modules/ui/page';
import { TextField } from "tns-core-modules/ui/text-field";
import { ListView } from "tns-core-modules/ui/list-view";
import { configureOAuthProviders, tnsOauthLogin } from "../../auth-service";
import Home from "../Home";
import GeoTracker from "../custom/geo-tracker";
import Login from "../custom/login";
import constant from "../../assets/json/constant.json";
import SignupService from "../../services/signup.service";
import countryCode from "../../assets/json/countryCode.json";
import { validEmail,toastMessage } from "../../services/utils";
import { isIOS, isAndroid } from 'tns-core-modules/platform'
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

let API_KEY = "AIzaSyAo5TDtdF5YVlvQ-6QrNh2GZIG9q_xrRbA";
let googlePlacesAutocomplete = new GooglePlacesAutocomplete(API_KEY);
const signupService = new SignupService();
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
      contactNumber: null,
      resAddress: "",
      addressList: [],
      isRestrauntOwner: false,
      isDriver: false,
      places: [],
      restaurantList: [], 
      restaurantListName: [], 
      user: {
        role: '',
        name: "",
        contactNumber: null,
        email: "",
        password: null,
        restaurantName:"",
        restaurantAddress:"",
        restaurantId:""
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
    this.tempCountryCode = countryCode[0].dial_code;
    signupService.getRoles(this.user).then(
      (response) => {
        this.roleList = response.content.toJSON().payload;
        this.roleListByName = response.content.toJSON().payload.map(role => {
          return role.name;
        })
      },
      (e) => {
        console.log("error", e);
      }
    );
     signupService.getRestaurantList().then(
      (response) => {
        this.restaurantList = response.content.toJSON().payload
        this.restaurantListName = response.content.toJSON().payload.map(res => {
          return res.name;
        })
      },
      (e) => {
        console.log("error", e);
      }
    );
  
  },

  methods: {
    dropDownSelectedIndexChanged() {
      const index = this.$refs.dropDownList.nativeView.selectedIndex;
      this.user.role = this.roleList[index].value;
      this.addTextField(this.roleList[index].value);
      this.error.role = "";
    },

    dropDownSelectedCountryChanged() {
      const index = this.$refs.dropDownCountryList.nativeView.selectedIndex;
      this.tempCountryCode = countryCode[index].dial_code;
    },
    dropDownSelectedRestaurantChanged() {
      const index = this.$refs.dropDownRestaurantList.nativeView.selectedIndex;
      this.user.restaurantId = this.restaurantList[index]._id;
    },

    validateLogin() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
        role:""
      };

      if (!this.user.email) {
        this.error.email = "Email required.";
      } else if (!validEmail(this.user.email)) {
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
      this.user.contactNumber = this.contactNumber + this.tempCountryCode;
      this.validateLogin();
      const isEmpty = Object.values(this.error).every(
        (x) => x === null || x === ""
      );

      if (isEmpty) {
        signupService.signUp(this.user).then((response) => {
          const result = response.content.toJSON();
          if (isAndroid) {
            toastMessage(response.content.toJSON().message);
          }
          console.log(response.content.toJSON().message);
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
    addTextField(value) {
      if (value == 2) {
        this.isDriver = this.isDriver == true ? false : false;
        this.isRestrauntOwner = this.isRestrauntOwner == false ? true : false;
      } else if (value == 1) {
        this.isDriver = this.isDriver == true ? false : false;
        this.isRestrauntOwner = this.isRestrauntOwner == true ? false : false;
      } else if (value == 3) {
        this.isRestrauntOwner = this.isRestrauntOwner == true ? false : false;
        this.isDriver = this.isDriver == false ? true : false;
      }
    },
    getAddress(args) {
      googlePlacesAutocomplete.search(this.user.restaurantAddress)
            .then((places) => {
              this.addressList = places;
            }, (error => {
                console.log('error===',error)
            }));
      },
      bindToAddress(params) {
        this.user.restaurantAddress =  params;
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