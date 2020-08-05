<template>
  <Page
    actionBarHidden="true"
    class="anim-page"
    backgroundSpanUnderStatusBar="true"
    @loaded="onLoaded"
  >
    <FlexboxLayout class="page">
      <StackLayout class="form">
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

        <Button :text="'Login'" @tap="login" class="btn btn-primary m-t-20" />
      </StackLayout>
      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span :text="signAsk"></Span>
          <Span :text="signUp" class="bold"></Span>
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
import { isIOS, isAndroid } from 'tns-core-modules/platform'
import * as Toast from 'nativescript-toast';
import Home from "../Home";
import Tabs from "./tabs";
import Signup from "../custom/signup";
import GeoTracker from "./geo-tracker";
import LoginService from '../../services/loginService';
import { validEmail,toastMessage } from "../../services/utils";

const loginService = new LoginService();

export default {

  data() {
    return {
      signUp: "Sign up",
      signAsk: "Don’t have an account?",
      user: {
        email: "",
        password: null,
      },
      error: {
        email: "",
        password: "",
      },
    };
  },

  mounted() {
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    login() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
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

      if (this.user.email && this.user.password) {
        loginService.login(this.user)
        .then((response) => {
          const result = response.content.toJSON();
          if (isAndroid) {
            toastMessage(result.message);
          }
              if (result.payload) {
                this.user = {
                  email: "",
                  password: null,
                };
                this.saveUserData(result.payload);
                if (result.payload.role == 1) {
                  this.$navigateTo(Home);
                } else if (result.payload.role == 2) {
                  this.$navigateTo(Tabs);
                } else if (result.payload.role == 3)
                  this.$navigateTo(GeoTracker);
              }
            },
            (e) => {console.log(e)}
          );
      }
    },
    toggleForm() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
      };
      this.$navigateTo(Signup, {});
    },

    saveUserData(data) {
			this.$store.commit("save", data);
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
label {
  background-color: #ffffff;
  color: #d44848;
  font-size: 14;
}
</style>