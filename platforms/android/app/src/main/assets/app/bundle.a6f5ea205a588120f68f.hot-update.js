webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
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
// var auth_service_1 = require("../auth-service");


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      errors: [],
      isLoggingIn: true,
      user: {
        name: "parth",
        contactNumber: 213333,
        email: "parth@gmail.com",
        password: 123334
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
      } else if (!this.user.password.length < 8) {
        this.error.password = "Password Length Must Be Greater Then 8.";
      }

      if (!this.error.email && !this.error.password && this.user.email == user.email && this.user.password == user.password) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
      }

      if (!this.user.name) {
        this.error.username = "Username required.";
      }

      if (!this.user.contactNumber) {
        this.error.contactnumber = "Contact Number required.";
      }

      var isEmpty = Object.values(this.error).every(x => x === null || x === "");

      if (isEmpty) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:5000/api/user", this.user, {
          headers: {
            "content-type": "application/json"
          }
        }).then(function (response) {
          console.log(response);
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }).catch(error => {
          console.log("error==", error);
        });
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
            cookie: true,
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

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=style&index=0&id=611af486&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-611af486] {\r\n  align-items: center;\r\n  flex-direction: column;\n}\n.form[data-v-611af486] {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\n}\n.logo[data-v-611af486] {\r\n  margin-bottom: 12;\r\n  height: 90;\r\n  font-weight: bold;\n}\n.header[data-v-611af486] {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #d51a1a;\n}\n.input-field[data-v-611af486] {\r\n  margin-bottom: 25;\n}\n.input[data-v-611af486] {\r\n  font-size: 18;\r\n  placeholder-color: #a8a8a8;\n}\n.input-field .input[data-v-611af486] {\r\n  font-size: 54;\n}\n.btn-primary[data-v-611af486] {\r\n  height: 50;\r\n  margin: 30 5 15 5;\r\n  background-color: #d51a1a;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\n}\n.login-label[data-v-611af486] {\r\n  horizontal-align: center;\r\n  color: #a8a8a8;\r\n  font-size: 16;\n}\n.sign-up-label[data-v-611af486] {\r\n  margin-bottom: 20;\n}\n.bold[data-v-611af486] {\r\n  color: #000000;\n}\r\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/custom/login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZT9mOTdlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBLHFCQURBO0FBRUEsNkJBRkE7QUFHQSxnQ0FIQTtBQUlBO0FBSkEsT0FIQTtBQVNBO0FBQ0Esb0JBREE7QUFFQSx5QkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBLEdBbEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBOztBQVNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBOztBQU9BO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBLFVBQ0EscUJBQ0Esb0JBREEsSUFFQSw2QkFGQSxJQUdBLG1DQUpBLEVBS0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLG9EQUNBLDJCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQSxXQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLEVBT0EsS0FQQSxDQU9BO0FBQ0E7QUFDQSxTQVRBO0FBVUE7QUFDQSxLQXpFQTs7QUEyRUE7QUFDQTtBQUNBO0FBQ0EsS0E5RUE7O0FBK0VBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQSxLQXZGQTs7QUF3RkE7QUFDQTtBQUNBLEtBMUZBOztBQTJGQTtBQUNBO0FBQ0EsS0E3RkE7O0FBOEZBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQTtBQVZBO0FBV0EsS0F6R0E7O0FBMkdBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEE7QUFLQSxTQU5BO0FBRkE7QUFTQSxLQXBIQTs7QUFxSEE7QUFBQTtBQUNBO0FBQUEsWUFDQSxrQ0FEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVVBOztBQS9IQSxHQW5CQTs7QUFvSkE7O0FBcEpBO0FBc0pBO0FBQ0E7QUFDQTtBQUNBLEdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQUNBLDBCQURBO0FBRUE7QUFGQSxFOzs7Ozs7O0FDN1BBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLDBCQUEwQiw2QkFBNkIsR0FBRywwQkFBMEIsc0JBQXNCLHVCQUF1QixtQkFBbUIsNkJBQTZCLEdBQUcsMEJBQTBCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsNEJBQTRCLCtCQUErQixvQkFBb0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIscUJBQXFCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDJCQUEyQixvQkFBb0IsaUNBQWlDLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLGlDQUFpQyxpQkFBaUIsd0JBQXdCLGdDQUFnQyx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLGlDQUFpQywrQkFBK0IscUJBQXFCLG9CQUFvQixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRywwQkFBMEIscUJBQXFCLEdBQUc7O0FBRTlrQzs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix1REFBdUQ7QUFDdEYsU0FBUztBQUNUIiwiZmlsZSI6ImJ1bmRsZS5hNmY1ZWEyMDVhNTg4MTIwZjY4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlXHJcbiAgICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCJcclxuICAgIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCJcclxuICAgIEBsb2FkZWQ9XCJvbkxvYWRlZFwiXHJcbiAgPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubmFtZVwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLnVzZXJuYW1lXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJjb250YWN0TnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLmNvbnRhY3RudW1iZXJcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5lbWFpbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5wYXNzd29yZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCJcclxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cclxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1wiIGNsYXNzPVwiYm9sZFwiPjwvU3Bhbj5cclxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIlxyXG4gICAgICAgIHRleHQ9XCJGYWNlYm9vayBMb2dpblwiXHJcbiAgICAgICAgQHRhcD1cImxvZ0luV2l0aEZhY2Vib29rKClcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1hY3RpdmVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIHZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hdXRoLXNlcnZpY2VcIik7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcnM6IFtdLFxyXG4gICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6IFwicGFydGhcIixcclxuICAgICAgICBjb250YWN0TnVtYmVyOiAyMTMzMzMsXHJcbiAgICAgICAgZW1haWw6IFwicGFydGhAZ21haWwuY29tXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IDEyMzMzNCxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICB0aGlzLmVycm9yID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLmVycm9yLnBhc3N3b3JkID0gXCJQYXNzd29yZCByZXF1aXJlZC5cIjtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgICB0aGlzLmVycm9yLnBhc3N3b3JkID0gXCJQYXNzd29yZCBMZW5ndGggTXVzdCBCZSBHcmVhdGVyIFRoZW4gOC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuZXJyb3IuZW1haWwgJiZcclxuICAgICAgICAhdGhpcy5lcnJvci5wYXNzd29yZCAmJlxyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9PSB1c2VyLmVtYWlsICYmXHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID09IHVzZXIucGFzc3dvcmRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgdGhpcy5lcnJvciA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLmVycm9yLnBhc3N3b3JkID0gXCJQYXNzd29yZCByZXF1aXJlZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci51c2VybmFtZSA9IFwiVXNlcm5hbWUgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFjdE51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuY29udGFjdG51bWJlciA9IFwiQ29udGFjdCBOdW1iZXIgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC52YWx1ZXModGhpcy5lcnJvcikuZXZlcnkoXHJcbiAgICAgICAgKHgpID0+IHggPT09IG51bGwgfHwgeCA9PT0gXCJcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaXNFbXB0eSkge1xyXG4gICAgICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXJcIiwgdGhpcy51c2VyLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yPT1cIiwgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRFbWFpbChlbWFpbCkge1xyXG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICB0aGlzLmVycm9yID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIH0sXHJcbiAgICBvbkxvZ2luVGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ2luKFwiZmFjZWJvb2tcIik7XHJcbiAgICB9LFxyXG4gICAgb25Mb2dvdXRUYXAoKSB7XHJcbiAgICAgIGF1dGhfc2VydmljZV8xLnRuc09hdXRoTG9nb3V0KCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9nSW5XaXRoRmFjZWJvb2soKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZEZhY2Vib29rU0RLKGRvY3VtZW50LCBcInNjcmlwdFwiLCBcImZhY2Vib29rLWpzc2RrXCIpO1xyXG4gICAgICBhd2FpdCB0aGlzLmluaXRGYWNlYm9vaygpO1xyXG4gICAgICB3aW5kb3cuRkIubG9naW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmF1dGhSZXNwb25zZSkge1xyXG4gICAgICAgICAgYWxlcnQoXCJZb3UgYXJlIGxvZ2dlZCBpbiAmYW1wOyBjb29raWUgc2V0IVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCJVc2VyIGNhbmNlbGxlZCBsb2dpbiBvciBkaWQgbm90IGZ1bGx5IGF1dGhvcml6ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBpbml0RmFjZWJvb2soKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW5cIik7XHJcbiAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cuRkIuaW5pdCh7XHJcbiAgICAgICAgICBhcHBJZDogXCI4MjIwMTc5WFhYWFhYWFhYXCIsIFxyXG4gICAgICAgICAgY29va2llOiB0cnVlLCBcclxuICAgICAgICAgIHZlcnNpb246IFwidjEzLjBcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2FkRmFjZWJvb2tTREsoZCwgcywgaWQpIHtcclxuICAgICAgdmFyIGpzLFxyXG4gICAgICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcclxuICAgICAganMuaWQgPSBpZDtcclxuICAgICAganMuc3JjID0gXCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xyXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5pdCgpIHt9LFxyXG59O1xyXG5jb25zdCB1c2VyU2VydmljZSA9IHtcclxuICByZWdpc3Rlcih1c2VyKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gIH0sXHJcbiAgbG9naW4odXNlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XHJcbiAgfSxcclxufTtcclxuY29uc3QgdXNlciA9IHtcclxuICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICBwYXNzd29yZDogMTIzNCxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEyO1xyXG4gIGhlaWdodDogOTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZDUxYTFhO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogNTQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uc2lnbi11cC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG4gIGhlaWdodDogOTA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2Q1MWExYTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTg7XFxyXFxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcXG59XFxuLmlucHV0LWZpZWxkIC5pbnB1dFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTQ7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGhlaWdodDogNTA7XFxyXFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5sb2dpbi1sYWJlbFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjYThhOGE4O1xcclxcbiAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWxbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGRbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=