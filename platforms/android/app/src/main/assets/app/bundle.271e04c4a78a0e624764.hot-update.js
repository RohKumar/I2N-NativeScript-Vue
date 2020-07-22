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
//
//
// var auth_service_1 = require("../auth-service");

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
      } else if (!this.user.password.length >= 8) {
        this.error.password = "Password Length Must Be Greater Then *.";
      }

      if (!this.user.username) {
        this.error.username = "Password required.";
      }

      if (!this.user.contactnumber) {
        this.error.contactnumber = "Password required.";
      }

      if (!this.error) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
            alert("You are logged in &amp; cookie set!"); // Now you can redirect the user or do an AJAX request to
            // a PHP script that grabs the signed request from the cookie.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBLG9CQURBO0FBRUEsMkJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkEsT0FIQTtBQVNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBLEdBbEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBOztBQVNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBOztBQU9BO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUNBLHFCQUNBLG9CQURBLElBRUEsNkJBRkEsSUFHQSxtQ0FKQSxFQUtBO0FBQ0E7QUFDQTtBQUNBLEtBakNBOztBQW1DQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0RBOztBQStEQTtBQUNBO0FBQ0E7QUFDQSxLQWxFQTs7QUFtRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEseUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkE7QUFNQTtBQUNBLEtBM0VBOztBQTRFQTtBQUNBO0FBQ0EsS0E5RUE7O0FBK0VBO0FBQ0E7QUFDQSxLQWpGQTs7QUFrRkE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFEQSxDQUVBO0FBQ0E7QUFDQSxXQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsU0FSQTtBQVNBO0FBYkE7QUFjQSxLQWhHQTs7QUFrR0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUNBO0FBQ0Esd0JBRkE7QUFFQTtBQUNBO0FBSEE7QUFLQSxTQU5BO0FBRkE7QUFTQSxLQTNHQTs7QUE0R0E7QUFBQTtBQUNBO0FBQUEsWUFDQSxrQ0FEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVVBOztBQXRIQSxHQW5CQTs7QUEySUE7O0FBM0lBO0FBNklBO0FBQ0E7QUFDQTtBQUNBLEdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQUNBLDBCQURBO0FBRUE7QUFGQSxFIiwiZmlsZSI6ImJ1bmRsZS4yNzFlMDRjNGE3OGEwZTYyNDc2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlXHJcbiAgICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCJcclxuICAgIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCJcclxuICAgIEBsb2FkZWQ9XCJvbkxvYWRlZFwiXHJcbiAgPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci51c2VybmFtZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwiY29udGFjdE51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuY29udGFjdG51bWJlclwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuY29udGFjdG51bWJlclwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkVtYWlsXCJcclxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLmVtYWlsXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLnBhc3N3b3JkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIlxyXG4gICAgICAgICAgQHRhcD1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCBjbGFzcz1cImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIiBAdGFwPVwidG9nZ2xlRm9ybVwiPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxyXG4gICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXCIgY2xhc3M9XCJib2xkXCI+PC9TcGFuPlxyXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8IS0tIDxidXR0b24gdGV4dD1cIkxvZ2luIHdpdGggRmFjZWJvb2tcIiBjbGFzcz1cImZiYnV0dG9uXCIgQHRhcD1cImxvZ0luV2l0aEZhY2Vib29rXCIgPjwvYnV0dG9uPiAtLT5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIlxyXG4gICAgICAgIHRleHQ9XCJGYWNlYm9vayBMb2dpblwiXHJcbiAgICAgICAgQHRhcD1cImxvZ0luV2l0aEZhY2Vib29rKClcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1hY3RpdmVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiIEB0YXA9XCJvbkxvZ291dFRhcCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVwiIC8+IC0tPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIHZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hdXRoLXNlcnZpY2VcIik7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JzOiBbXSxcclxuICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwpIHtcclxuICAgICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCByZXF1aXJlZC5cIjtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcclxuICAgICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCBpcyBpbnZhbGlkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmVycm9yLmVtYWlsICYmXHJcbiAgICAgICAgIXRoaXMuZXJyb3IucGFzc3dvcmQgJiZcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPT0gdXNlci5lbWFpbCAmJlxyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9PSB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCkge1xyXG4gICAgICB0aGlzLmVycm9yLmVtYWlsID0gXCJFbWFpbCByZXF1aXJlZC5cIjtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcclxuICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQgKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZighdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA+PTgpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIExlbmd0aCBNdXN0IEJlIEdyZWF0ZXIgVGhlbiAqLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IudXNlcm5hbWUgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmNvbnRhY3RudW1iZXIpIHtcclxuICAgICAgIHRoaXMuZXJyb3IuY29udGFjdG51bWJlciA9IFwiUGFzc3dvcmQgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmVycm9yKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZEVtYWlsKGVtYWlsKSB7XHJcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9LFxyXG4gICAgb25Mb2dpblRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dpbihcImZhY2Vib29rXCIpO1xyXG4gICAgfSxcclxuICAgIG9uTG9nb3V0VGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ291dCgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvZ0luV2l0aEZhY2Vib29rKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRGYWNlYm9va1NESyhkb2N1bWVudCwgXCJzY3JpcHRcIiwgXCJmYWNlYm9vay1qc3Nka1wiKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0RmFjZWJvb2soKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBub3RcIik7XHJcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBsb2dnZWQgaW4gJmFtcDsgY29va2llIHNldCFcIik7XHJcbiAgICAgICAgICAvLyBOb3cgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBkbyBhbiBBSkFYIHJlcXVlc3QgdG9cclxuICAgICAgICAgIC8vIGEgUEhQIHNjcmlwdCB0aGF0IGdyYWJzIHRoZSBzaWduZWQgcmVxdWVzdCBmcm9tIHRoZSBjb29raWUuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgaW5pdEZhY2Vib29rKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuRkIuaW5pdCh7XHJcbiAgICAgICAgICBhcHBJZDogXCI4MjIwMTc5WFhYWFhYWFhYXCIsIC8vWW91IHdpbGwgbmVlZCB0byBjaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgY29va2llOiB0cnVlLCAvLyBUaGlzIGlzIGltcG9ydGFudCwgaXQncyBub3QgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgICB2ZXJzaW9uOiBcInYxMy4wXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2FkRmFjZWJvb2tTREsoZCwgcywgaWQpIHtcclxuICAgICAgdmFyIGpzLFxyXG4gICAgICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcclxuICAgICAganMuaWQgPSBpZDtcclxuICAgICAganMuc3JjID0gXCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xyXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0KCkge31cclxufTtcclxuY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgcmVnaXN0ZXIodXNlcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9LFxyXG4gIGxvZ2luKHVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9naW5cIik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gIH1cclxufTtcclxuY29uc3QgdXNlciA9IHtcclxuICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICBwYXNzd29yZDogMTIzNFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNkNTFhMWE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==