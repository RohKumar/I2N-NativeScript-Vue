webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var auth_service_1 = require("../auth-service");
var axios = __webpack_require__("../node_modules/axios/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      errors: [],
      isLoggingIn: true,
      user: {
        username: "",
        contactnumber: null,
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
      } else if (!this.user.password.length <= 8) {
        this.error.password = "Password Length Must Be Greater Then .";
      }

      if (!this.error.email && !this.error.password && this.user.email == user.email && this.user.password == user.password) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

      if (!this.user.password) {
        this.error.password = "Password required.";
      } else if (!this.user.password.length <= 8) {
        this.error.password = "Password Length Must Be Greater Then .";
      }

      if (!this.user.username) {
        this.error.username = "Username required.";
      }

      if (!this.user.contactnumber) {
        this.error.contactnumber = "Contact Number required.";
      }

      if (!this.error) {
        axios.post('http://localhost:5000/api/user', {
          name: this.user.username,
          contactNumber: this.user.contactnumber,
          email: this.user.email,
          password: this.user.password
        }).then(function (response) {
          console.log(response);
        }); // this.$navigateTo(Home);
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

    logInWithFacebook() {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield _this.loadFacebookSDK(document, "script", "facebook-jssdk");
        yield _this.initFacebook();
        console.log("login not");
        window.FB.login(function (response) {
          if (response.authResponse) {
            alert("You are logged in &amp; cookie set!");
          } else {
            alert("User cancelled login or did not fully authorize.");
          }
        });
        return false;
      })();
    },

    initFacebook() {
      return _asyncToGenerator(function* () {
        console.log("login");

        window.fbAsyncInit = function () {
          window.FB.init({
            appId: "8220179XXXXXXXXX",
            //You will need to change this
            cookie: true,
            // This is important, it's not enabled by default
            version: "v13.0"
          });
        };
      })();
    },

    loadFacebookSDK(d, s, id) {
      return _asyncToGenerator(function* () {
        var js,
            fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) {
          return;
        }

        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })();
    }

  },

  init() {}

});
var userService = {
  register(user) {
    return Promise.resolve(user);
  },

  login(user) {
    console.log("login");
    return Promise.resolve(user);
  }

};
var user = {
  email: "parth@gmail.com",
  password: 1234
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQSxvQkFEQTtBQUVBLDJCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BSEE7QUFTQTtBQUNBLG9CQURBO0FBRUEseUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkE7QUFUQTtBQWdCQSxHQWxCQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFTQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTs7QUFPQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQSxVQUNBLHFCQUNBLG9CQURBLElBRUEsNkJBRkEsSUFHQSxtQ0FKQSxFQUtBO0FBQ0E7QUFDQTtBQUNBLEtBbkNBOztBQXFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxTQUhBLEVBREEsQ0FLQTtBQUNBO0FBQ0EsS0FuRUE7O0FBcUVBO0FBQ0E7QUFDQTtBQUNBLEtBeEVBOztBQXlFQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0EsS0FqRkE7O0FBa0ZBO0FBQ0E7QUFDQSxLQXBGQTs7QUFxRkE7QUFDQTtBQUNBLEtBdkZBOztBQXdGQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLFNBUEE7QUFRQTtBQVpBO0FBYUEsS0FyR0E7O0FBdUdBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFDQTtBQUNBLHdCQUZBO0FBRUE7QUFDQTtBQUhBO0FBS0EsU0FOQTtBQUZBO0FBU0EsS0FoSEE7O0FBaUhBO0FBQUE7QUFDQTtBQUFBLFlBQ0Esa0NBREE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFVQTs7QUEzSEEsR0FuQkE7O0FBZ0pBOztBQWhKQTtBQWtKQTtBQUNBO0FBQ0E7QUFDQSxHQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBU0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsRSIsImZpbGUiOiJidW5kbGUuZTZiOTNjOGE4NzEyNzJlMGU4OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZVxyXG4gICAgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiXHJcbiAgICBjbGFzcz1cImFuaW0tcGFnZVwiXHJcbiAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiXHJcbiAgICBAbG9hZGVkPVwib25Mb2FkZWRcIlxyXG4gID5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci51c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IudXNlcm5hbWVcIiA+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJjb250YWN0TnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5jb250YWN0bnVtYmVyXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5jb250YWN0bnVtYmVyXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuZW1haWxcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IucGFzc3dvcmRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiXHJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/ICcgOiAnQmFjayB0byBMb2dpbidcIj48L1NwYW4+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XHJcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgIDwvTGFiZWw+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCJcclxuICAgICAgICB0ZXh0PVwiRmFjZWJvb2sgTG9naW5cIlxyXG4gICAgICAgIEB0YXA9XCJsb2dJbldpdGhGYWNlYm9vaygpXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyB2YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYXV0aC1zZXJ2aWNlXCIpO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JzOiBbXSxcclxuICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwpIHtcclxuICAgICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCByZXF1aXJlZC5cIjtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcclxuICAgICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCBpcyBpbnZhbGlkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZighdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8PTgpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIExlbmd0aCBNdXN0IEJlIEdyZWF0ZXIgVGhlbiAuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmVycm9yLmVtYWlsICYmXHJcbiAgICAgICAgIXRoaXMuZXJyb3IucGFzc3dvcmQgJiZcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPT0gdXNlci5lbWFpbCAmJlxyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9PSB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCkge1xyXG4gICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCByZXF1aXJlZC5cIjtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcclxuICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQgKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZighdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8PTgpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIExlbmd0aCBNdXN0IEJlIEdyZWF0ZXIgVGhlbiAuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgdGhpcy5lcnJvci51c2VybmFtZSA9IFwiVXNlcm5hbWUgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFjdG51bWJlcikge1xyXG4gICAgICAgdGhpcy5lcnJvci5jb250YWN0bnVtYmVyID0gXCJDb250YWN0IE51bWJlciByZXF1aXJlZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuZXJyb3IpIHtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLHtuYW1lOnRoaXMudXNlci51c2VybmFtZSxjb250YWN0TnVtYmVyOnRoaXMudXNlci5jb250YWN0bnVtYmVyLGVtYWlsOnRoaXMudXNlci5lbWFpbCxwYXNzd29yZDp0aGlzLnVzZXIucGFzc3dvcmR9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy4kbmF2aWdhdGVUbyhIb21lKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZEVtYWlsKGVtYWlsKSB7XHJcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9LFxyXG4gICAgb25Mb2dpblRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dpbihcImZhY2Vib29rXCIpO1xyXG4gICAgfSxcclxuICAgIG9uTG9nb3V0VGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ291dCgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvZ0luV2l0aEZhY2Vib29rKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRGYWNlYm9va1NESyhkb2N1bWVudCwgXCJzY3JpcHRcIiwgXCJmYWNlYm9vay1qc3Nka1wiKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0RmFjZWJvb2soKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBub3RcIik7XHJcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBsb2dnZWQgaW4gJmFtcDsgY29va2llIHNldCFcIik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydChcIlVzZXIgY2FuY2VsbGVkIGxvZ2luIG9yIGRpZCBub3QgZnVsbHkgYXV0aG9yaXplLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGluaXRGYWNlYm9vaygpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcclxuICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93LkZCLmluaXQoe1xyXG4gICAgICAgICAgYXBwSWQ6IFwiODIyMDE3OVhYWFhYWFhYWFwiLCAvL1lvdSB3aWxsIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICAgICAgICAgIGNvb2tpZTogdHJ1ZSwgLy8gVGhpcyBpcyBpbXBvcnRhbnQsIGl0J3Mgbm90IGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgdmVyc2lvbjogXCJ2MTMuMFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9hZEZhY2Vib29rU0RLKGQsIHMsIGlkKSB7XHJcbiAgICAgIHZhciBqcyxcclxuICAgICAgICBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XHJcbiAgICAgIGpzLmlkID0gaWQ7XHJcbiAgICAgIGpzLnNyYyA9IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcclxuICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdCgpIHt9XHJcbn07XHJcbmNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIHJlZ2lzdGVyKHVzZXIpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XHJcbiAgfSxcclxuICBsb2dpbih1c2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHVzZXIgPSB7XHJcbiAgZW1haWw6IFwicGFydGhAZ21haWwuY29tXCIsXHJcbiAgcGFzc3dvcmQ6IDEyMzRcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEyO1xyXG4gIGhlaWdodDogOTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZDUxYTFhO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogNTQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uc2lnbi11cC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufSBcclxuXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==