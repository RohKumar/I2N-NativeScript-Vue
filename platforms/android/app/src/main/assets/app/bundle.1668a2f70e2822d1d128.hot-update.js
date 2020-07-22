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
      this.init();
      this.errorDisplay();

      if (!this.error.email && !this.error.password && this.user.email == user.email && this.user.password == user.password) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }
    },

    register() {
      this.init();
      this.errorDisplay();

      if (!this.user.username) {
        this.errors.push("username required.");
      }

      if (!this.user.contactnumber) {
        this.errors.push("contact number required.");
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
    },

    init() {
      this.user = {
        username: "",
        contactnumber: null,
        email: "",
        password: ""
      }, this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };
    }

  },

  errorDisplay() {
    if (!this.user.email) {
      this.errors.push("Email required.");
    } else if (!this.validEmail(this.user.email)) {
      this.errors.push("Valid email required.");
    }

    if (!this.user.password) {
      this.errors.push("password required.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQSxvQkFEQTtBQUVBLDJCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BSEE7QUFTQTtBQUNBLG9CQURBO0FBRUEseUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkE7QUFUQTtBQWdCQSxHQWxCQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBQ0EsVUFDQSxxQkFDQSxvQkFEQSxJQUVBLDZCQUZBLElBR0EsbUNBSkEsRUFLQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQTs7QUFzQkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsQ0E7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBLEtBdkNBOztBQXdDQTtBQUNBO0FBQ0EsS0ExQ0E7O0FBMkNBO0FBQ0E7QUFDQSxLQTdDQTs7QUE4Q0E7QUFDQTtBQUNBLEtBaERBOztBQWlEQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQURBLENBRUE7QUFDQTtBQUNBLFdBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxTQVJBO0FBU0E7QUFiQTtBQWNBLEtBL0RBOztBQWlFQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBQ0E7QUFDQSx3QkFGQTtBQUVBO0FBQ0E7QUFIQTtBQUtBLFNBTkE7QUFGQTtBQVNBLEtBMUVBOztBQTJFQTtBQUFBO0FBQ0E7QUFBQSxZQUNBLGtDQURBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBVUEsS0FyRkE7O0FBdUZBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLDJCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLFNBTUE7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BTkE7QUFZQTs7QUFwR0EsR0FuQkE7O0FBMkhBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcElBO0FBc0lBO0FBQ0E7QUFDQTtBQUNBLEdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQUNBLDBCQURBO0FBRUE7QUFGQSxFIiwiZmlsZSI6ImJ1bmRsZS4xNjY4YTJmNzBlMjgyMmQxZDEyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlXHJcbiAgICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCJcclxuICAgIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCJcclxuICAgIEBsb2FkZWQ9XCJvbkxvYWRlZFwiXHJcbiAgPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cImNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbnRhY3RudW1iZXJcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuZW1haWxcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IucGFzc3dvcmRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiXHJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/ICcgOiAnQmFjayB0byBMb2dpbidcIj48L1NwYW4+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XHJcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIDwhLS0gPGJ1dHRvbiB0ZXh0PVwiTG9naW4gd2l0aCBGYWNlYm9va1wiIGNsYXNzPVwiZmJidXR0b25cIiBAdGFwPVwibG9nSW5XaXRoRmFjZWJvb2tcIiA+PC9idXR0b24+IC0tPlxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiXHJcbiAgICAgICAgdGV4dD1cIkZhY2Vib29rIExvZ2luXCJcclxuICAgICAgICBAdGFwPVwibG9nSW5XaXRoRmFjZWJvb2soKVwiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLWFjdGl2ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDwhLS0gPEJ1dHRvbiB0ZXh0PVwiTG9nb3V0XCIgQHRhcD1cIm9uTG9nb3V0VGFwKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYWN0aXZlXCIgLz4gLS0+XHJcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gdmFyIGF1dGhfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2F1dGgtc2VydmljZVwiKTtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcnM6IFtdLFxyXG4gICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IG51bGwsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIHRoaXMuZXJyb3JEaXNwbGF5KCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5lcnJvci5lbWFpbCAmJlxyXG4gICAgICAgICF0aGlzLmVycm9yLnBhc3N3b3JkICYmXHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID09IHVzZXIuZW1haWwgJiZcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPT0gdXNlci5wYXNzd29yZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgdGhpcy5lcnJvckRpc3BsYXkoKTtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwidXNlcm5hbWUgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmNvbnRhY3RudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiY29udGFjdCBudW1iZXIgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5lcnJvcikge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRFbWFpbChlbWFpbCkge1xyXG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9LFxyXG4gICAgb25Mb2dpblRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dpbihcImZhY2Vib29rXCIpO1xyXG4gICAgfSxcclxuICAgIG9uTG9nb3V0VGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ291dCgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvZ0luV2l0aEZhY2Vib29rKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRGYWNlYm9va1NESyhkb2N1bWVudCwgXCJzY3JpcHRcIiwgXCJmYWNlYm9vay1qc3Nka1wiKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0RmFjZWJvb2soKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBub3RcIik7XHJcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBsb2dnZWQgaW4gJmFtcDsgY29va2llIHNldCFcIik7XHJcbiAgICAgICAgICAvLyBOb3cgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBkbyBhbiBBSkFYIHJlcXVlc3QgdG9cclxuICAgICAgICAgIC8vIGEgUEhQIHNjcmlwdCB0aGF0IGdyYWJzIHRoZSBzaWduZWQgcmVxdWVzdCBmcm9tIHRoZSBjb29raWUuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgaW5pdEZhY2Vib29rKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuRkIuaW5pdCh7XHJcbiAgICAgICAgICBhcHBJZDogXCI4MjIwMTc5WFhYWFhYWFhYXCIsIC8vWW91IHdpbGwgbmVlZCB0byBjaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgY29va2llOiB0cnVlLCAvLyBUaGlzIGlzIGltcG9ydGFudCwgaXQncyBub3QgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgICB2ZXJzaW9uOiBcInYxMy4wXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2FkRmFjZWJvb2tTREsoZCwgcywgaWQpIHtcclxuICAgICAgdmFyIGpzLFxyXG4gICAgICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcclxuICAgICAganMuaWQgPSBpZDtcclxuICAgICAganMuc3JjID0gXCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xyXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgaW5pdCgpIHtcclxuICAgICh0aGlzLnVzZXIgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBjb250YWN0bnVtYmVyOiBudWxsLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pLFxyXG4gICAgICAodGhpcy5lcnJvciA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgfSxcclxuXHJcblxyXG4gIGVycm9yRGlzcGxheSgpIHtcclxuICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJFbWFpbCByZXF1aXJlZC5cIik7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICB0aGlzLmVycm9ycy5wdXNoKFwiVmFsaWQgZW1haWwgcmVxdWlyZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5lcnJvcnMucHVzaChcInBhc3N3b3JkIHJlcXVpcmVkLlwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIHJlZ2lzdGVyKHVzZXIpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XHJcbiAgfSxcclxuICBsb2dpbih1c2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHVzZXIgPSB7XHJcbiAgZW1haWw6IFwicGFydGhAZ21haWwuY29tXCIsXHJcbiAgcGFzc3dvcmQ6IDEyMzRcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEyO1xyXG4gIGhlaWdodDogOTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZDUxYTFhO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogNTQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uc2lnbi11cC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=