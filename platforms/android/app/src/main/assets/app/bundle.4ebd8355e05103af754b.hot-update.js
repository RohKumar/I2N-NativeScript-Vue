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
      this.errors = [];

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
        this.errors.push("Valid email required.");
      }

      if (!this.user.password) {
        console.log("password error");
        this.errors.push("password required.");
      }

      if (!this.errors.length && this.user.email == user.email && this.user.password == user.password) {
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

      if (!this.errors.length) {
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

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    {
      staticClass: "anim-page",
      attrs: { actionBarHidden: "true", backgroundSpanUnderStatusBar: "true" },
      on: { loaded: _vm.onLoaded }
    },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Label"),
              _c(
                "StackLayout",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoggingIn,
                      expression: "!isLoggingIn"
                    }
                  ],
                  staticClass: "input-field"
                },
                [
                  _c("TextField", {
                    ref: "username",
                    staticClass: "input",
                    attrs: {
                      hint: "User Name",
                      secure: "true",
                      returnKeyType: "done",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.user.username,
                      callback: function($event) {
                        _vm.$set(_vm.user, "username", $event.object["text"])
                      },
                      expression: "user.username"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoggingIn,
                      expression: "!isLoggingIn"
                    }
                  ],
                  staticClass: "input-field"
                },
                [
                  _c("TextField", {
                    ref: "contactNumber",
                    staticClass: "input",
                    attrs: {
                      hint: "Contact Number",
                      secure: "true",
                      returnKeyType: "done",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.user.contactnumber,
                      callback: function($event) {
                        _vm.$set(
                          _vm.user,
                          "contactnumber",
                          $event.object["text"]
                        )
                      },
                      expression: "user.contactnumber"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "Email",
                      keyboardType: "email",
                      autocorrect: "false",
                      autocapitalizationType: "none",
                      returnKeyType: "next",
                      fontSize: "18",
                      required: ""
                    },
                    model: {
                      value: _vm.user.email,
                      callback: function($event) {
                        _vm.$set(_vm.user, "email", $event.object["text"])
                      },
                      expression: "user.email"
                    }
                  }),
                  _c("label", { attrs: { text: _vm.error.email } }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    ref: "password",
                    staticClass: "input",
                    attrs: {
                      hint: "Password",
                      secure: "true",
                      fontSize: "18",
                      required: ""
                    },
                    model: {
                      value: _vm.user.password,
                      callback: function($event) {
                        _vm.$set(_vm.user, "password", $event.object["text"])
                      },
                      expression: "user.password"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: { text: _vm.isLoggingIn ? "Log In" : "Sign Up" },
                on: { tap: _vm.submit }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isLoggingIn,
                expression: "!isLoggingIn"
              }
            ],
            staticClass: "btn btn-info btn-active",
            attrs: { text: "Facebook Login" },
            on: {
              tap: function($event) {
                return _vm.logInWithFacebook()
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZT80NDQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQSxvQkFEQTtBQUVBLDJCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BSEE7QUFTQTtBQUNBLG9CQURBO0FBRUEseUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkE7QUFUQTtBQWdCQSxHQWxCQTs7QUFtQkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUNBLHVCQUNBLDZCQURBLElBRUEsbUNBSEEsRUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakNBOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6REE7O0FBMkRBO0FBQ0E7QUFDQTtBQUNBLEtBOURBOztBQStEQTtBQUNBO0FBQ0EsS0FqRUE7O0FBa0VBO0FBQ0E7QUFDQSxLQXBFQTs7QUFxRUE7QUFDQTtBQUNBLEtBdkVBOztBQXdFQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNGViZDgzNTVlMDUxMDNhZjc1NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZVxyXG4gICAgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiXHJcbiAgICBjbGFzcz1cImFuaW0tcGFnZVwiXHJcbiAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiXHJcbiAgICBAbG9hZGVkPVwib25Mb2FkZWRcIlxyXG4gID5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPCEtLSA8TGlzdFZpZXcgZm9yPVwiZXJyb3IgaW4gZXJyb3JzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDoxMjUwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXJyb3JcIiBjbGFzcz1cInQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz4tLT5cclxuICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICA8IS0tIDxGb3JtYXR0ZWRTdHJpbmcgdi1mb3I9XCJlcnJvciBpbiBlcnJvcnNcIiB2LWJpbmQ6a2V5PVwiZXJyb3JcIj5cclxuXHJcbiAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz4tLT5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIudXNlcm5hbWVcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cImNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbnRhY3RudW1iZXJcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5lbWFpbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCJcclxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cclxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1wiIGNsYXNzPVwiYm9sZFwiPjwvU3Bhbj5cclxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgPCEtLSA8YnV0dG9uIHRleHQ9XCJMb2dpbiB3aXRoIEZhY2Vib29rXCIgY2xhc3M9XCJmYmJ1dHRvblwiIEB0YXA9XCJsb2dJbldpdGhGYWNlYm9va1wiID48L2J1dHRvbj4gLS0+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCJcclxuICAgICAgICB0ZXh0PVwiRmFjZWJvb2sgTG9naW5cIlxyXG4gICAgICAgIEB0YXA9XCJsb2dJbldpdGhGYWNlYm9vaygpXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgICAgPCEtLSA8QnV0dG9uIHRleHQ9XCJMb2dvdXRcIiBAdGFwPVwib25Mb2dvdXRUYXAoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiAvPiAtLT5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyB2YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYXV0aC1zZXJ2aWNlXCIpO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vSG9tZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yczogW10sXHJcbiAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogbnVsbCxcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAvLyB1c2VyU2VydmljZVxyXG4gICAgICAvLyAgIC5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC8vICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWwgZXJyb3JcIik7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbWFpbCBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiVmFsaWQgZW1haWwgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwicGFzc3dvcmQgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5lcnJvcnMubGVuZ3RoICYmXHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID09IHVzZXIuZW1haWwgJiZcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPT0gdXNlci5wYXNzd29yZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsIGVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJFbWFpbCByZXF1aXJlZC5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbWFpbCBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiVmFsaWQgZW1haWwgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwicGFzc3dvcmQgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcInVzZXJuYW1lIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5jb250YWN0bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcImNvbnRhY3QgbnVtYmVyIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkRW1haWwoZW1haWwpIHtcclxuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfSxcclxuICAgIG9uTG9naW5UYXAoKSB7XHJcbiAgICAgIGF1dGhfc2VydmljZV8xLnRuc09hdXRoTG9naW4oXCJmYWNlYm9va1wiKTtcclxuICAgIH0sXHJcbiAgICBvbkxvZ291dFRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dvdXQoKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2dJbldpdGhGYWNlYm9vaygpIHtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkRmFjZWJvb2tTREsoZG9jdW1lbnQsIFwic2NyaXB0XCIsIFwiZmFjZWJvb2stanNzZGtcIik7XHJcbiAgICAgIGF3YWl0IHRoaXMuaW5pdEZhY2Vib29rKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gbm90XCIpO1xyXG4gICAgICB3aW5kb3cuRkIubG9naW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhbGVydChcIllvdSBhcmUgbG9nZ2VkIGluICZhbXA7IGNvb2tpZSBzZXQhXCIpO1xyXG4gICAgICAgICAgLy8gTm93IHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3IgZG8gYW4gQUpBWCByZXF1ZXN0IHRvXHJcbiAgICAgICAgICAvLyBhIFBIUCBzY3JpcHQgdGhhdCBncmFicyB0aGUgc2lnbmVkIHJlcXVlc3QgZnJvbSB0aGUgY29va2llLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydChcIlVzZXIgY2FuY2VsbGVkIGxvZ2luIG9yIGRpZCBub3QgZnVsbHkgYXV0aG9yaXplLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGluaXRGYWNlYm9vaygpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcclxuICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93LkZCLmluaXQoe1xyXG4gICAgICAgICAgYXBwSWQ6IFwiODIyMDE3OVhYWFhYWFhYWFwiLCAvL1lvdSB3aWxsIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICAgICAgICAgIGNvb2tpZTogdHJ1ZSwgLy8gVGhpcyBpcyBpbXBvcnRhbnQsIGl0J3Mgbm90IGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgdmVyc2lvbjogXCJ2MTMuMFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9hZEZhY2Vib29rU0RLKGQsIHMsIGlkKSB7XHJcbiAgICAgIHZhciBqcyxcclxuICAgICAgICBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XHJcbiAgICAgIGpzLmlkID0gaWQ7XHJcbiAgICAgIGpzLnNyYyA9IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcclxuICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgcmVnaXN0ZXIodXNlcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9LFxyXG4gIGxvZ2luKHVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9naW5cIik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gIH1cclxufTtcclxuY29uc3QgdXNlciA9IHtcclxuICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICBwYXNzd29yZDogMTIzNFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNkNTFhMWE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhbmltLXBhZ2VcIixcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH0sXG4gICAgICBvbjogeyBsb2FkZWQ6IF92bS5vbkxvYWRlZCB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJVc2VyIE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwidXNlcm5hbWVcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIudXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbnRhY3ROdW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbnRhY3QgTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmNvbnRhY3RudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhY3RudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5jb250YWN0bnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IuZW1haWwgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IG1hcmdpbkJvdHRvbTogXCIyNVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJMb2cgSW5cIiA6IFwiU2lnbiBVcFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiLFxuICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVGb3JtIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCYWNrIHRvIExvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiU2lnbiB1cFwiIDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm8gYnRuLWFjdGl2ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGYWNlYm9vayBMb2dpblwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9nSW5XaXRoRmFjZWJvb2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==