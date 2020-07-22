<template>
  <Page
    actionBarHidden="true"
    class="anim-page"
    backgroundSpanUnderStatusBar="true"
    @loaded="onLoaded"
  >
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <StackLayout v-show="!isLoggingIn" class="input-field">
          <TextField
            ref="username"
            class="input"
            hint="User Name"
         
            v-model="user.name"
            returnKeyType="done"
            fontSize="18"
          />

          <StackLayout class="hr-light" />
            <label :text="error.username" ></label>
        </StackLayout>

        <StackLayout v-show="!isLoggingIn" class="input-field">
          <TextField
            ref="contactNumber"
            class="input"
            hint="Contact Number"
          
            v-model="user.contactNumber"
            returnKeyType="done"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
          <label :text="error.contactnumber"></label>
        </StackLayout>

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

        <Button
          :text="isLoggingIn ? 'Log In' : 'Sign Up'"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
      </StackLayout>
      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
          <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
        </FormattedString>
      </Label>

      <Button
        v-show="!isLoggingIn"
        text="Facebook Login"
        @tap="logInWithFacebook()"
        class="btn btn-info btn-active"
      />
    </FlexboxLayout>
  </Page>
</template>

<script>
// var auth_service_1 = require("../auth-service");
// const axios = require('axios');
import axios from 'axios';
import Home from "../Home";
export default {
  data() {
    return {
      errors: [],
      isLoggingIn: true,
      user: {
        name: "",
        contactNumber: null,
        email: "",
        password: ""
      },
      error: {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };

      if (!this.user.email) {
        this.error.email = "Email required.";
      } else if (!this.validEmail(this.user.email)) {
        this.error.email = "Email is invalid.";
      }
      if (!this.user.password) {
        this.error.password = "Password required.";
      } else if(!this.user.password.length <8) {
          this.error.password = "Password Length Must Be Greater Then 8.";
      }
      if (
        !this.error.email &&
        !this.error.password &&
        this.user.email == user.email &&
        this.user.password == user.password
      ) {
        this.$navigateTo(Home);
      }
    },

    register() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };
      if (!this.user.email) {
      this.error.email = "Email required.";
      } else if (!this.validEmail(this.user.email)) {
       this.error.email = "Email is invalid.";
      }
      if (!this.user.password ) {
        this.error.password = "Password required.";
      }
      if (!this.user.name) {
      this.error.username = "Username required.";
      }
      if (!this.user.contactNumber) {
       this.error.contactnumber = "Contact Number required.";
      }
      if (!this.error) {
        this.axios.
        axios.post('http://localhost:5000/api/user',this.user)
        .then(function (response) {
           console.log(response);
       })
        // this.$navigateTo(Home);
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    toggleForm() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };
      this.isLoggingIn = !this.isLoggingIn;
    },
    onLoginTap() {
      auth_service_1.tnsOauthLogin("facebook");
    },
    onLogoutTap() {
      auth_service_1.tnsOauthLogout();
    },
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      console.log("login not");
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");

        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },

    async initFacebook() {
      console.log("login");
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "8220179XXXXXXXXX", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  },
  init() {}
};
const userService = {
  register(user) {
    return Promise.resolve(user);
  },
  login(user) {
    console.log("login");
    return Promise.resolve(user);
  }
};
const user = {
  email: "parth@gmail.com",
  password: 1234
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
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 54;
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

</style>