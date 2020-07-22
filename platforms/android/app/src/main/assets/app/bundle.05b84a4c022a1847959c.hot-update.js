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
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      // userService
      //   .login(this.user)
      //   .then(() => {
      if (!this.user.email) {
        console.log("email error");
        this.error.email = "Email required.";
      } else if (!this.validEmail(this.user.email)) {
        console.log("email error");
        this.error.email = "Email is invalid.";
      }

      if (!this.user.password) {
        console.log("password error");
        this.error.password = "Password required.";
      }

      if (!this.error.email && !this.error.password && this.user.email == user.email && this.user.password == user.password) {
        console.log("working");
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }
    },

    register() {
      if (!this.user.email) {
        console.log("email error");
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.user.email)) {
        console.log("email error");
        this.errors.push("Valid email required.");
      }

      if (!this.user.password) {
        console.log("password error");
        this.errors.push("password required.");
      }

      if (!this.user.username) {
        this.errors.push("username required.");
      }

      if (!this.user.contactnumber) {
        this.errors.push("contact number required.");
      }

      if (!this.error) {
        console.log("working");
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    toggleForm() {
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

  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBLG9CQURBO0FBRUEsMkJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkEsT0FIQTtBQVNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBLEdBbEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FiQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSx1REFDQSw2QkFEQSxJQUVBLG1DQUZBLEVBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJDQTs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBOURBOztBQWdFQTtBQUNBO0FBQ0E7QUFDQSxLQW5FQTs7QUFvRUE7QUFDQTtBQUNBLEtBdEVBOztBQXVFQTtBQUNBO0FBQ0EsS0F6RUE7O0FBMEVBO0FBQ0E7QUFDQSxLQTVFQTs7QUE2RUE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFEQSxDQUVBO0FBQ0E7QUFDQSxXQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsU0FSQTtBQVNBO0FBYkE7QUFjQSxLQTNGQTs7QUE2RkE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUNBO0FBQ0Esd0JBRkE7QUFFQTtBQUNBO0FBSEE7QUFLQSxTQU5BO0FBRkE7QUFTQSxLQXRHQTs7QUF1R0E7QUFBQTtBQUNBO0FBQUEsWUFDQSxrQ0FEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVVBOztBQWpIQTtBQW5CQTtBQXVJQTtBQUNBO0FBQ0E7QUFDQSxHQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBU0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsRSIsImZpbGUiOiJidW5kbGUuMDViODRhNGMwMjJhMTg0Nzk1OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZVxyXG4gICAgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiXHJcbiAgICBjbGFzcz1cImFuaW0tcGFnZVwiXHJcbiAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiXHJcbiAgICBAbG9hZGVkPVwib25Mb2FkZWRcIlxyXG4gID5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPCEtLSA8TGlzdFZpZXcgZm9yPVwiZXJyb3IgaW4gZXJyb3JzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDoxMjUwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXJyb3JcIiBjbGFzcz1cInQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz4tLT5cclxuICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICA8IS0tIDxGb3JtYXR0ZWRTdHJpbmcgdi1mb3I9XCJlcnJvciBpbiBlcnJvcnNcIiB2LWJpbmQ6a2V5PVwiZXJyb3JcIj5cclxuXHJcbiAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz4tLT5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIudXNlcm5hbWVcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cImNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbnRhY3RudW1iZXJcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLmVtYWlsXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5wYXNzd29yZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCJcclxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cclxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1wiIGNsYXNzPVwiYm9sZFwiPjwvU3Bhbj5cclxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgPCEtLSA8YnV0dG9uIHRleHQ9XCJMb2dpbiB3aXRoIEZhY2Vib29rXCIgY2xhc3M9XCJmYmJ1dHRvblwiIEB0YXA9XCJsb2dJbldpdGhGYWNlYm9va1wiID48L2J1dHRvbj4gLS0+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCJcclxuICAgICAgICB0ZXh0PVwiRmFjZWJvb2sgTG9naW5cIlxyXG4gICAgICAgIEB0YXA9XCJsb2dJbldpdGhGYWNlYm9vaygpXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgICAgPCEtLSA8QnV0dG9uIHRleHQ9XCJMb2dvdXRcIiBAdGFwPVwib25Mb2dvdXRUYXAoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiAvPiAtLT5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyB2YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYXV0aC1zZXJ2aWNlXCIpO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vSG9tZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yczogW10sXHJcbiAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogbnVsbCxcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgdGhpcy5lcnJvciA9ICB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgLy8gdXNlclNlcnZpY2VcclxuICAgICAgLy8gICAubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAvLyAgIC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsIGVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWwgZXJyb3JcIik7XHJcbiAgICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5lcnJvci5lbWFpbCAmJiAhdGhpcy5lcnJvci5wYXNzd29yZCAmJlxyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9PSB1c2VyLmVtYWlsICYmXHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID09IHVzZXIucGFzc3dvcmRcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbWFpbCBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiRW1haWwgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWwgZXJyb3JcIik7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIlZhbGlkIGVtYWlsIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgZXJyb3JcIik7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcInBhc3N3b3JkIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci51c2VybmFtZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJ1c2VybmFtZSByZXF1aXJlZC5cIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFjdG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJjb250YWN0IG51bWJlciByZXF1aXJlZC5cIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xyXG5cclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkRW1haWwoZW1haWwpIHtcclxuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfSxcclxuICAgIG9uTG9naW5UYXAoKSB7XHJcbiAgICAgIGF1dGhfc2VydmljZV8xLnRuc09hdXRoTG9naW4oXCJmYWNlYm9va1wiKTtcclxuICAgIH0sXHJcbiAgICBvbkxvZ291dFRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dvdXQoKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2dJbldpdGhGYWNlYm9vaygpIHtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkRmFjZWJvb2tTREsoZG9jdW1lbnQsIFwic2NyaXB0XCIsIFwiZmFjZWJvb2stanNzZGtcIik7XHJcbiAgICAgIGF3YWl0IHRoaXMuaW5pdEZhY2Vib29rKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gbm90XCIpO1xyXG4gICAgICB3aW5kb3cuRkIubG9naW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhbGVydChcIllvdSBhcmUgbG9nZ2VkIGluICZhbXA7IGNvb2tpZSBzZXQhXCIpO1xyXG4gICAgICAgICAgLy8gTm93IHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3IgZG8gYW4gQUpBWCByZXF1ZXN0IHRvXHJcbiAgICAgICAgICAvLyBhIFBIUCBzY3JpcHQgdGhhdCBncmFicyB0aGUgc2lnbmVkIHJlcXVlc3QgZnJvbSB0aGUgY29va2llLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydChcIlVzZXIgY2FuY2VsbGVkIGxvZ2luIG9yIGRpZCBub3QgZnVsbHkgYXV0aG9yaXplLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGluaXRGYWNlYm9vaygpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcclxuICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93LkZCLmluaXQoe1xyXG4gICAgICAgICAgYXBwSWQ6IFwiODIyMDE3OVhYWFhYWFhYWFwiLCAvL1lvdSB3aWxsIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICAgICAgICAgIGNvb2tpZTogdHJ1ZSwgLy8gVGhpcyBpcyBpbXBvcnRhbnQsIGl0J3Mgbm90IGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgdmVyc2lvbjogXCJ2MTMuMFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9hZEZhY2Vib29rU0RLKGQsIHMsIGlkKSB7XHJcbiAgICAgIHZhciBqcyxcclxuICAgICAgICBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XHJcbiAgICAgIGpzLmlkID0gaWQ7XHJcbiAgICAgIGpzLnNyYyA9IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcclxuICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgcmVnaXN0ZXIodXNlcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9LFxyXG4gIGxvZ2luKHVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9naW5cIik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gIH1cclxufTtcclxuY29uc3QgdXNlciA9IHtcclxuICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICBwYXNzd29yZDogMTIzNFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNkNTFhMWE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==