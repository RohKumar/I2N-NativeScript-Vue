require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_navBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/navBottom.vue");
/* harmony import */ var _custom_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/item.vue");
/* harmony import */ var _custom_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/custom/category.vue");
/* harmony import */ var _custom_offerQrModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/custom/offerQrModal.vue");
/* harmony import */ var _ItemDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/ItemDetails.vue");
/* harmony import */ var _custom_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/custom/login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { SwissArmyKnife } from "nativescript-swiss-army-knife";








var gestures = __webpack_require__("../node_modules/@nativescript/core/ui/gestures/gestures.js");

var app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    navBottom: _custom_navBottom__WEBPACK_IMPORTED_MODULE_1__["default"],
    Item: _custom_item__WEBPACK_IMPORTED_MODULE_2__["default"],
    Category: _custom_category__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    itemsCategory() {
      return this.category.slice().reverse();
    }

  },

  mounted() {// SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },

  data() {
    return {
      routes: {
        login: _custom_login__WEBPACK_IMPORTED_MODULE_6__["default"]
      },
      lastDelY: 0,
      headerCollapsed: false,
      selectedTab: 0,
      selectedTabview: 0,
      items: [{
        name: "Manila Ultimate Tombstone Burger",
        cover: "~/assets/images/food/burger640.jpg",
        images: [{
          src: "~/assets/images/food/burger/burger1.jpg"
        }, {
          src: "~/assets/images/food/burger/burger2.jpg"
        }, {
          src: "~/assets/images/food/burger/burger3.jpg"
        }, {
          src: "~/assets/images/food/burger/burger4.jpg"
        }, {
          src: "~/assets/images/food/burger/burger5.jpg"
        }, {
          src: "~/assets/images/food/burger/burger6.jpg"
        }],
        category: "Burger",
        categoryTag: "#2D9CDB",
        price: "300.00",
        likes: 987,
        isLike: false,
        isFavorite: true,
        comments: 13,
        rating: "4.5",
        description: "a"
      }, {
        name: "Quezon Chocolate Marble Pancake",
        cover: "~/assets/images/food/pancake640.jpg",
        images: [{
          src: "~/assets/images/food/pancake/pancake1.jpg"
        }, {
          src: "~/assets/images/food/pancake/pancake2.jpg"
        }, {
          src: "~/assets/images/food/pancake/pancake3.jpg"
        }, {
          src: "~/assets/images/food/pancake/pancake4.jpg"
        }, {
          src: "~/assets/images/food/pancake/pancake5.jpg"
        }, {
          src: "~/assets/images/food/pancake/pancake6.jpg"
        }],
        category: "Pancake",
        categoryTag: "#e4ce0d",
        price: "230.00",
        likes: 891,
        isLike: true,
        isFavorite: true,
        comments: 7,
        rating: "4.0",
        description: "a"
      }, {
        name: "Binondo Black Forest Cake",
        cover: "~/assets/images/food/cake640.jpg",
        images: [{
          src: "~/assets/images/food/cake/cake1.jpg"
        }, {
          src: "~/assets/images/food/cake/cake2.jpg"
        }, {
          src: "~/assets/images/food/cake/cake3.jpg"
        }, {
          src: "~/assets/images/food/cake/cake4.jpg"
        }],
        category: "Cake",
        categoryTag: "#27AE60",
        price: "300.00",
        likes: 730,
        isLike: true,
        isFavorite: true,
        comments: 11,
        rating: "4.0",
        description: "a"
      }],
      category: [{
        cover: "~/assets/images/food/burger640.jpg",
        category: "BURGER",
        count: "13"
      }, {
        cover: "~/assets/images/food/pancake640.jpg",
        category: "PANCAKE",
        count: "5"
      }, {
        cover: "~/assets/images/food/cake640.jpg",
        category: "CAKE",
        count: "9"
      }, {
        cover: "~/assets/images/food/beer640.jpg",
        category: "BEER",
        count: "7"
      }]
    };
  },

  methods: {
    search() {
      console.log("search");
    },

    bell() {
      console.log("bell");
    },

    offer() {
      console.log("QR");
      this.$showModal(_custom_offerQrModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
    },

    goToLogin() {
      this.$navigateTo(_custom_login__WEBPACK_IMPORTED_MODULE_6__["default"], {});
    },

    showItem(payload) {
      this.$navigateTo(_ItemDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          item: payload
        },
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    popular() {
      this.selectedTabview = 0;
    },

    showCategory() {
      this.selectedTabview = 1;
    },

    showPromos() {
      this.selectedTabview = 2;
    },

    home() {
      this.selectedTab = 0;
    },

    cart() {
      this.selectedTab = 1;
    },

    history() {
      this.selectedTab = 2;
    },

    about() {
      this.selectedTab = 3;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  components: {},
  computed: {
    categoryIcon() {
      switch (this.item.category) {
        case "Burger":
          return "fa-cutlery";
          break;

        case "Beer":
          return "fa-beer";
          break;

        case "Pancake":
          return "fa-coffee";
          break;

        case "Cake":
          return "fa-birthday-cake";
          break;

        default:
          return "fa-fire";
          break;
      }
    }

  },

  created() {
    this.images = [{
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }];
    this.isLike = this.item.isLike;
    this.isHeart = this.item.isFavorite;
  },

  mounted() {},

  methods: {
    onLoaded() {// this.animateFrom()
    },

    animateFrom() {
      var cover = this.$refs.cover.nativeView;
      var images = this.$refs.images.nativeView;
      var page = this.$refs.page.nativeView;
      images.translateY = 200;
      images.opacity = 0;
      images.scaleX = 0;
      cover.scaleY = 0;
      cover.translateY = 200;
      cover.opacity = 0;
      cover.scaleX = 0;
      cover.scaleY = 0;
      page.backgroundColor = "#d4d6d8", this.animateTo();
    },

    animateTo() {
      var cover = this.$refs.cover.nativeView;
      var images = this.$refs.images.nativeView;
      var page = this.$refs.page.nativeView; // images.animate({
      // 	scale: { x: 1, y: 1 } ,
      // 	translate: { x: 0, y: 0},
      // 	opacity: 1,
      // 	duration: 1000,
      // 	delay: 150
      // });

      cover.animate({
        scale: {
          x: 0.5,
          y: 0.5
        },
        opacity: 1,
        duration: 1000,
        delay: 0
      });
      cover.animate({
        translate: {
          x: 0,
          y: 0
        },
        scale: {
          x: 1,
          y: 1
        },
        duration: 1000,
        delay: 1000
      });
      page.animate({
        backgroundColor: "#ffffff",
        duration: 2000,
        delay: 0
      });
    },

    close() {
      this.$navigateBack();
    },

    animateLike() {
      var imgLogo = this.$refs.like.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 100,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    animateFavorite() {
      var imgLogo = this.$refs.favorite.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 50,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    toggleLike() {
      this.animateLike();
      this.isLike = !this.isLike;

      if (this.isLike) {
        this.item.likes += 1;
      } else {
        this.item.likes -= 1;
      }
    },

    toggleHeart() {
      this.animateFavorite();
      this.isHeart = !this.isHeart;
    },

    onClickButton() {
      this.$emit("clicked");
    }

  },

  data() {
    return {
      images: null,
      isLike: false,
      isHeart: false,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\t"
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  methods: {
    onClickButton(data) {
      this.$emit("clicked", data.id);
    }

  },

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/itemLike.vue");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  components: {
    ItemLike: _itemLike__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    categoryIcon() {
      switch (this.item.category) {
        case "Burger":
          return "fa-cutlery";
          break;

        case "Beer":
          return "fa-beer";
          break;

        case "Pancake":
          return "fa-coffee";
          break;

        case "Cake":
          return "fa-birthday-cake";
          break;

        default:
          return "fa-fire";
          break;
      }
    }

  },

  created() {// this.isLike =  this.item.isLike
    // this.isHeart =  this.item.isFavorite
  },

  mounted() {},

  methods: {
    animateLike() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
        return;
      }

      var imgLogo = this.$refs.like.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 100,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    animateFavorite() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
        return;
      }

      var imgLogo = this.$refs.favorite.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 50,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    toggleLike() {
      this.animateLike();
      this.item.isLike = !this.item.isLike;

      if (this.item.isLike) {
        this.item.likes += 1;
      } else {
        this.item.likes -= 1;
      }
    },

    toggleHeart() {
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    },

    onClickButton() {
      this.$emit("clicked", this.item);
    }

  },

  data() {
    return {
      isLike: false,
      isHeart: false
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  components: {},
  computed: {
    categoryIcon() {
      switch (this.item.category) {
        case "Burger":
          return "fa-cutlery";
          break;

        case "Beer":
          return "fa-beer";
          break;

        case "Pancake":
          return "fa-coffee";
          break;

        case "Cake":
          return "fa-birthday-cake";
          break;

        default:
          return "fa-fire";
          break;
      }
    }

  },

  created() {// this.isLike =  this.item.isLike
    // this.isHeart =  this.item.isFavorite
  },

  mounted() {},

  methods: {
    animateLike() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
        return;
      }

      var imgLogo = this.$refs.like.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 100,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    animateFavorite() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
        return;
      }

      var imgLogo = this.$refs.favorite.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 50,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    toggleLike() {
      this.animateLike();
      this.item.isLike = !this.item.isLike;

      if (this.item.isLike) {
        this.item.likes += 1;
      } else {
        this.item.likes -= 1;
      }
    },

    toggleHeart() {
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    },

    onClickButton() {
      this.$emit("clicked", this.item);
    }

  },

  data() {
    return {
      isLike: false,
      isHeart: false
    };
  }

});

/***/ }),

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
    }

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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      selectedTab: 0
    };
  },

  methods: {
    home() {
      this.selectedTab = 0;
    },

    cart() {
      this.selectedTab = 1;
    },

    history() {
      this.selectedTab = 2;
    },

    about() {
      this.selectedTab = 3;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/offerQrModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabview.active {\r\n  border-bottom-color: white;\r\n  border-bottom-width: 3;\r\n  margin: 0;\r\n  height: 50;\n}\n.tabviewText {\r\n  margin-top: 15;\r\n  margin-bottom: 5;\r\n  font-size: 13;\r\n  color: #d8d2d2;\r\n  horizontal-align: center;\n}\n.tabviewText.active {\r\n  margin-top: 0;\r\n  margin-bottom: 5;\r\n  font-weight: bold;\r\n  color: white;\r\n  vertical-align: center;\n}\n.navTab {\r\n  background-color: #bd2122;\n}\n.navTabview {\r\n  background-color: blue;\n}\n.status-img {\r\n  margin-top: 4;\r\n  margin-right: 20;\r\n  width: 30;\r\n  height: 30;\n}\n.status-profile {\r\n  border-width: 1;\r\n  border-color: #ffffff;\r\n  background-color: #f1ebeb;\r\n  border-radius: 50%;\r\n  margin-top: 4;\r\n  margin-right: 15;\r\n  width: 30;\r\n  height: 30;\n}\n.status-title {\r\n  color: white;\r\n  font-size: 18;\r\n  margin-left: 15;\r\n  margin-top: 8;\r\n  horizontal-align: left;\r\n  vertical-align: center;\n}\r\n\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=style&index=0&id=350c3624&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.close[data-v-350c3624] {\n    font-size: 20;\n    color: rgb(226, 229, 229);\n    margin: 15 0 0 15;\n}\nTextView[data-v-350c3624] {\n    border-width: 1;\n    border-color: #ffffff;\n}\n.description-text[data-v-350c3624] {\n    font-size: 14;\n    font-weight: bold;\n    color: black;\n}\n.description-icon[data-v-350c3624] {\n    font-size: 16;\n    font-weight: bold;\n    color: #3e9edb;\n    margin-right: 8;\n    vertical-align: center;\n}\n.description-value[data-v-350c3624] {\n    font-size: 14;\n    color: black;\n}\n.rate[data-v-350c3624] {\n    padding-top: 3;\n    margin: 0;\n    color: #FFE900;\n    font-size: 18;\n}\n.rating-value[data-v-350c3624] {\n    margin-left: 5;\n}\n.liked-active[data-v-350c3624] {\n    color: #4080FF;\n}\n.heart-active[data-v-350c3624] {\n    color: #b51213;\n}\n.default[data-v-350c3624] {\n    color: #828282;\n}\n.layout[data-v-350c3624] {\n    vertical-align: bottom;\n    color: #828282;\n    font-size: 14;\n    height: 30;\n    padding: 5 0 5 0;\n}\n.like-icon[data-v-350c3624] {\n    vertical-align: bottom;\n    height: 30;\n    font-size: 16;\n    margin-right: 2;\n    padding: 5 5 5 5;\n}\n.item-name[data-v-350c3624] {\n    font-size: 14;\n    font-weight: bold;\n}\n.item-category[data-v-350c3624] {\n    font-size: 14;\n    color: #828282;\n}\n.category-icon[data-v-350c3624] {\n    text-align: center;\n    padding-top: 5;\n    color: white;\n    vertical-align: center;\n    font-size: 25;\n    border-width: 1;\n    border-color: #ffffff;\n    border-radius: 50%;\n    margin-top: 4;\n    margin-right: 15;\n    width: 40;\n    height: 40;\n}\n.content[data-v-350c3624] {\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 3;\n    /* margin-top: 16; */\n}\n.card-img[data-v-350c3624] {\n    width: 100%;\n    height: 250;\n    margin-bottom: 5;\n}\n.card-img-thumb[data-v-350c3624] {\n    background-color: #828282;\n    vertical-align: center;\n    border-radius: 5;\n    width: 130;\n    height: 70;\n    margin-left: 5;\n}\n.line[data-v-350c3624] {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n.lineBreak[data-v-350c3624] {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n.anim-page[data-v-350c3624] {\n    background-color: #d4d6d8;\n    animation-name: key-page-data-v-350c3624;\n    animation-duration: 2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-page-data-v-350c3624 {\n0% {\n        background-color: #dadada;\n}\n20% {\n        background-color: #dbd2d5;\n}\n100% {\n        background-color: white;\n}\n}\n.anim-cover[data-v-350c3624] {\n    opacity: 0;\n    animation-name: key-cover-data-v-350c3624;\n    animation-duration: 1;\n    animation-delay: 0.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-cover-data-v-350c3624 {\n0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-images[data-v-350c3624] {\n    opacity: 0;\n    animation-name: key-images-data-v-350c3624;\n    animation-duration: 1;\n    animation-delay: 0.7;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-images-data-v-350c3624 {\n0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-itemInfo[data-v-350c3624] {\n    opacity: 0;\n    animation-name: key-itemInfo-data-v-350c3624;\n    animation-duration: 1;\n    animation-delay: 1.2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-itemInfo-data-v-350c3624 {\n0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-likes[data-v-350c3624] {\n    opacity: 0;\n    animation-name: key-likes-data-v-350c3624;\n    animation-duration: 1;\n    animation-delay: 1.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-likes-data-v-350c3624 {\n0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-content[data-v-350c3624] {\n    opacity: 0;\n    animation-name: key-content-data-v-350c3624;\n    animation-duration: 1;\n    animation-delay: 1.8;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-content-data-v-350c3624 {\n0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/ItemDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=style&index=0&id=7d507771&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.default-img[data-v-7d507771] {\n    color: #d1cece5b;\n}\n.category-name[data-v-7d507771] {\n    color: #f7f7f7;\n    font-size: 14;\n    font-weight: bold;\n    horizontal-align: center;\n    vertical-align: center;\n    margin: 5 0 15 0\n}\n.banner[data-v-7d507771] {\n    color: #bdbdbd;\n    opacity: .3;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/custom/category.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=style&index=0&id=c1b86ef4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.item-category[data-v-c1b86ef4] {\n    font-size: 14;\n    color: #828282;\n}\n.rating-icon[data-v-c1b86ef4] {\n    padding-top: 3;\n    color: #FFE900;\n    font-size: 14;\n    margin-left: 10;\n}\n.rating-value[data-v-c1b86ef4] {\n    margin-left: 5;\n}\n.liked-active[data-v-c1b86ef4] {\n    color: #4080FF;\n}\n.heart-active[data-v-c1b86ef4] {\n    color: #b51213;\n}\n.default[data-v-c1b86ef4] {\n    color: #828282;\n}\n.layout[data-v-c1b86ef4] {\n    vertical-align: bottom;\n    color: #828282;\n    font-size: 14;\n    height: 30;\n    padding: 5 0 5 0;\n}\n.like-icon[data-v-c1b86ef4] {\n    vertical-align: bottom;\n    height: 30;\n    font-size: 16;\n    margin-right: 2;\n    padding: 5 5 5 5;\n}\n.item-name[data-v-c1b86ef4] {\n    font-size: 14;\n    font-weight: bold;\n}\n.item-category[data-v-c1b86ef4] {\n    font-size: 14;\n    color: #828282;\n}\n.category-icon[data-v-c1b86ef4] {\n    text-align: center;\n    padding-top: 5;\n    color: white;\n    border-color: white;\n    vertical-align: center;\n    font-size: 25;\n    border-width: 1;\n    border-radius: 50%;\n    margin-top: 4;\n    margin-right: 15;\n    width: 40;\n    height: 40;\n}\n.content[data-v-c1b86ef4] {\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 3;\n    margin-top: 16;\n}\n.card-img[data-v-c1b86ef4] {\n    width: 100%;\n    height: 150;\n    margin-bottom: 5;\n}\n.line[data-v-c1b86ef4] {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n.lineBreak[data-v-c1b86ef4] {\n    height: 7;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/custom/item.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=style&index=0&id=69cedc86&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.item-category[data-v-69cedc86] {\n    font-size: 14;\n    color: #828282;\n}\n.rating-icon[data-v-69cedc86] {\n    padding-top: 3;\n    color: #FFE900;\n    font-size: 14;\n    margin-left: 10;\n}\n.rating-value[data-v-69cedc86] {\n    margin-left: 5;\n}\n.liked-active[data-v-69cedc86] {\n    color: #4080FF;\n}\n.heart-active[data-v-69cedc86] {\n    color: #b51213;\n}\n.default[data-v-69cedc86] {\n    color: #828282;\n}\n.layout[data-v-69cedc86] {\n    vertical-align: bottom;\n    color: #828282;\n    font-size: 14;\n    height: 30;\n    padding: 5 0 5 0;\n}\n.like-icon[data-v-69cedc86] {\n    vertical-align: bottom;\n    height: 30;\n    font-size: 16;\n    margin-right: 2;\n    padding: 5 5 5 5;\n}\n.item-name[data-v-69cedc86] {\n    font-size: 14;\n    font-weight: bold;\n}\n.item-category[data-v-69cedc86] {\n    font-size: 14;\n    color: #828282;\n}\n.category-icon[data-v-69cedc86] {\n    text-align: center;\n    padding-top: 5;\n    border-color: white;\n    color: white;\n    vertical-align: center;\n    font-size: 25;\n    border-width: 1;\n    border-radius: 50%;\n    margin-top: 4;\n    margin-right: 15;\n    width: 40;\n    height: 40;\n}\n.content[data-v-69cedc86] {\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 3;\n    margin-top: 16;\n}\n.card-img[data-v-69cedc86] {\n    width: 100%;\n    height: 150;\n    margin-bottom: 10;\n}\n.line[data-v-69cedc86] {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n.lineBreak[data-v-69cedc86] {\n    height: 7;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/custom/itemLike.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

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

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navBottom {\n    background-color: #f4f4f4;\n    border-color: red;\n}\n.nav {\n    height: 100%;\n    width: 100%;\n}\n.nav.active {\n    background-color: #0Dc43776;\n}\n.navIcon {\n    horizontal-align: center;\n    vertical-align: center;\n    height: 25\n}\n.navIcon.active {\n    vertical-align: bottom;\n}\n.navText {\n    margin-bottom: 2;\n    font-size: 12;\n    /* color: #c43776; */\n    color: #d62526;\n    horizontal-align: center;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/custom/navBottom.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
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
    "page",
    {
      attrs: { actionBarHidden: "true", backgroundSpanUnderStatusBar: "true" }
    },
    [
      _c(
        "GridLayout",
        { attrs: { rows: "auto,auto,*,auto", columns: "auto" } },
        [
          _c(
            "GridLayout",
            {
              ref: "navStatusBar",
              staticClass: "navStatusBar",
              attrs: {
                row: "0",
                backgroundColor: "#bd2122",
                verticalAlignment: "top",
                height: "40",
                width: "100%",
                rows: "auto",
                columns: "*,auto,auto,auto"
              }
            },
            [
              _c("Label", {
                staticClass: "status-title",
                attrs: { col: "0", row: "0", text: "Home" }
              }),
              _c("Image", {
                staticClass: "status-img",
                attrs: {
                  col: "0",
                  row: "0",
                  horizontalAlignment: "right",
                  src: "~/assets/images/search.png"
                },
                on: { tap: _vm.search }
              }),
              _c("Image", {
                staticClass: "status-img",
                attrs: {
                  col: "1",
                  row: "0",
                  horizontalAlignment: "right",
                  src: "~/assets/images/bell.png"
                },
                on: { tap: _vm.bell }
              }),
              _c("Image", {
                staticClass: "status-img",
                attrs: {
                  col: "2",
                  row: "0",
                  horizontalAlignment: "right",
                  src: "~/assets/images/offer.png"
                },
                on: { tap: _vm.offer }
              }),
              _c("Image", {
                staticClass: "status-profile",
                attrs: {
                  horizontalAlignment: "right",
                  stretch: "aspectFill",
                  col: "3",
                  row: "0",
                  src: "~/assets/images/me.jpg"
                },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              ref: "navTab",
              staticClass: "navTab",
              attrs: {
                row: "1",
                verticalAlignment: "top",
                height: "50",
                width: "100%",
                rows: "auto",
                columns: "auto,auto,auto"
              }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "tabview",
                  class: _vm.selectedTabview == 0 ? "active" : "",
                  attrs: {
                    rows: "*,auto",
                    cols: "auto",
                    col: "0",
                    row: "0",
                    width: "33%"
                  },
                  on: { tap: _vm.popular }
                },
                [
                  _c("Image", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.selectedTabview == 0,
                        expression: "selectedTabview==0"
                      }
                    ],
                    staticClass: "navIcon",
                    attrs: {
                      row: "0",
                      src:
                        _vm.selectedTabview == 0
                          ? "~/assets/images/popular.png"
                          : ""
                    }
                  }),
                  _c("Label", {
                    staticClass: "tabviewText",
                    class: _vm.selectedTabview == 0 ? "active" : "",
                    attrs: { row: "1", text: "POPULAR" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "tabview",
                  class: _vm.selectedTabview == 1 ? "active" : "",
                  attrs: {
                    rows: "*,auto",
                    cols: "auto",
                    col: "1",
                    row: "0",
                    width: "34%"
                  },
                  on: { tap: _vm.showCategory }
                },
                [
                  _c("Image", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.selectedTabview == 1,
                        expression: "selectedTabview == 1"
                      }
                    ],
                    staticClass: "navIcon",
                    attrs: {
                      row: "0",
                      src:
                        _vm.selectedTabview == 1
                          ? "~/assets/images/category.png"
                          : ""
                    }
                  }),
                  _c("Label", {
                    staticClass: "tabviewText",
                    class: _vm.selectedTabview == 1 ? "active" : "",
                    attrs: { row: "1", text: "CATEGORY" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "tabview",
                  class: _vm.selectedTabview == 2 ? "active" : "",
                  attrs: {
                    rows: "*,auto",
                    cols: "auto",
                    col: "2",
                    row: "0",
                    width: "33%"
                  },
                  on: { tap: _vm.showPromos }
                },
                [
                  _c("Image", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.selectedTabview == 2,
                        expression: "selectedTabview == 2"
                      }
                    ],
                    staticClass: "navIcon",
                    attrs: {
                      row: "0",
                      src:
                        _vm.selectedTabview == 2
                          ? "~/assets/images/category.png"
                          : ""
                    }
                  }),
                  _c("Label", {
                    staticClass: "tabviewText",
                    class: _vm.selectedTabview == 2 ? "active" : "",
                    attrs: { row: "1", text: "PROMOS" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedTabview == 0,
                  expression: "selectedTabview == 0"
                }
              ],
              attrs: { row: "2", width: "100%", backgroundColor: "white" }
            },
            [
              _c(
                "ListView",
                {
                  key: _vm.index,
                  ref: "listview",
                  attrs: {
                    separatorColor: "transparent",
                    items: _vm.items,
                    "+alias": "item"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("item", {
                            attrs: { item: item },
                            on: {
                              clicked: function($event) {
                                return _vm.showItem(item)
                              }
                            }
                          })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedTabview == 1,
                  expression: "selectedTabview == 1"
                }
              ],
              attrs: { row: "2", width: "100%", backgroundColor: "white" }
            },
            [
              _c(
                "ListView",
                {
                  key: _vm.index,
                  ref: "listview",
                  attrs: {
                    separatorColor: "transparent",
                    items: _vm.itemsCategory,
                    "+alias": "item"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("Category", { attrs: { item: item } })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _c("GridLayout", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedTabview == 2,
                expression: "selectedTabview == 2"
              }
            ],
            attrs: { row: "2", width: "100%", backgroundColor: "white" }
          }),
          _c("navBottom", { attrs: { row: "3" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&":
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
        "StackLayout",
        { staticClass: "main", attrs: { verticalAlignment: "top" } },
        [
          _c(
            "GridLayout",
            {
              staticClass: "anim-cover",
              attrs: { rows: "auto", columns: "*" }
            },
            [
              _c("Image", {
                staticClass: "card-img",
                attrs: {
                  row: "0",
                  col: "0",
                  marginTop: "-40",
                  height: "180",
                  stretch: "aspectFill",
                  src: _vm.item.cover
                }
              }),
              _c("Label", {
                staticClass: "fa close",
                attrs: {
                  row: "0",
                  col: "0",
                  verticalAlignment: "top",
                  horizontalAlignment: "left",
                  text: _vm._f("fonticon")("fa-arrow-left"),
                  fontSize: "24"
                },
                on: { tap: _vm.close }
              })
            ],
            1
          ),
          _c(
            "ScrollView",
            {
              staticClass: "anim-images",
              attrs: { orientation: "horizontal" }
            },
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                _vm._l(_vm.item.images, function(image) {
                  return _c(
                    "GridLayout",
                    { attrs: { rows: "auto", columns: "*" } },
                    [
                      _c("Image", {
                        staticClass: "card-img-thumb",
                        attrs: {
                          row: "0",
                          col: "0",
                          src: image.src,
                          stretch: "aspectFill"
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "content",
              attrs: { rows: "auto,auto,auto,auto", columns: "auto" }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "anim-itemInfo",
                  attrs: {
                    marginTop: "15",
                    row: "1",
                    width: "100%",
                    columns: "auto,*",
                    rows: "auto,auto,auto,auto",
                    verticalAlignment: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa category-icon",
                    attrs: {
                      text: _vm._f("fonticon")(_vm.categoryIcon),
                      row: "0",
                      col: "0",
                      rowSpan: "2",
                      backgroundColor: _vm.item.categoryTag
                    }
                  }),
                  _c("Label", {
                    staticClass: "item-name",
                    attrs: {
                      row: "0",
                      col: "1",
                      textwrap: "true",
                      verticalAlignment: "bottom",
                      horizontalAlignment: "left",
                      text: _vm.item.name
                    }
                  }),
                  _c("Label", {
                    staticClass: "item-category",
                    attrs: {
                      row: "1",
                      col: "1",
                      textwrap: "true",
                      verticalAlignment: "top",
                      horizontalAlignment: "left",
                      text: _vm.item.category
                    }
                  }),
                  _c("Label", {
                    staticClass: "item-category",
                    attrs: {
                      row: "2",
                      col: "1",
                      text: "Average Rate:" + _vm.item.rating
                    }
                  }),
                  _c(
                    "StackLayout",
                    {
                      attrs: { row: "3", col: "1", orientation: "horizontal" }
                    },
                    [
                      _c("Label", {
                        staticClass: "fa rate",
                        attrs: { text: _vm._f("fonticon")("fa-star") }
                      }),
                      _c("Label", {
                        staticClass: "fa rate",
                        attrs: { text: _vm._f("fonticon")("fa-star") }
                      }),
                      _c("Label", {
                        staticClass: "fa rate",
                        attrs: { text: _vm._f("fonticon")("fa-star") }
                      }),
                      _c("Label", {
                        staticClass: "fa rate",
                        attrs: { text: _vm._f("fonticon")("fa-star") }
                      }),
                      _c("Label", {
                        staticClass: "fa rate",
                        attrs: { text: _vm._f("fonticon")("fa-star-half-o") }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("StackLayout", {
                staticClass: "line anim-likes",
                attrs: { row: "2", width: "100%", marginTop: "10" }
              }),
              _c(
                "GridLayout",
                {
                  staticClass: "anim-likes",
                  attrs: {
                    marginTop: "5",
                    width: "100%",
                    row: "3",
                    columns: "auto,*,auto,auto",
                    rows: "auto"
                  }
                },
                [
                  _c(
                    "GridLayout",
                    {
                      attrs: { col: "0", rows: "auto", columns: "auto,auto" },
                      on: { tap: _vm.toggleLike }
                    },
                    [
                      _c("Label", {
                        ref: "like",
                        staticClass: "like-icon fa",
                        class: [_vm.isLike ? "liked-active" : "default"],
                        attrs: {
                          col: "0",
                          row: "0",
                          text: _vm._f("fonticon")(
                            _vm.isLike ? "fa-thumbs-up" : "fa-thumbs-o-up"
                          )
                        }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { col: "1", row: "0", text: _vm.item.likes }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      attrs: {
                        col: "1",
                        orientation: "horizontal",
                        marginLeft: "15"
                      }
                    },
                    [
                      _c("Label", {
                        ref: "",
                        staticClass: "like-icon layout fa",
                        attrs: { text: _vm._f("fonticon")("fa-comment-o") }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { text: _vm.item.comments }
                      })
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    {
                      attrs: {
                        col: "2",
                        rows: "auto",
                        columns: "auto,auto",
                        marginRight: "15"
                      },
                      on: { tap: _vm.toggleHeart }
                    },
                    [
                      _c("Label", {
                        ref: "favorite",
                        staticClass: "like-icon  fa",
                        class: [_vm.isHeart ? "heart-active" : "default"],
                        attrs: {
                          col: "0",
                          row: "0",
                          text: _vm._f("fonticon")(
                            _vm.isHeart ? "fa-heart" : "fa-heart-o"
                          )
                        }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { col: "1", row: "0", text: "Favorite" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { attrs: { col: "3", orientation: "horizontal" } },
                    [
                      _c("Label", {
                        ref: "",
                        staticClass: "like-icon layout fa",
                        attrs: { text: _vm._f("fonticon")("fa-share-square-o") }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { text: "Share" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("StackLayout", {
            staticClass: "lineBreak anim-likes",
            attrs: { width: "100%" }
          }),
          _c(
            "Gridlayout",
            {
              staticClass: "content anim-content",
              attrs: { rows: "auto,*", marginTop: "15" }
            },
            [
              _c(
                "GridLayout",
                {
                  attrs: {
                    row: "0",
                    rows: "auto",
                    marginBottom: "5",
                    columns: "auto, auto"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa description-icon",
                    attrs: {
                      col: "0",
                      text: _vm._f("fonticon")("fa-tags"),
                      textWrap: "true"
                    }
                  }),
                  _c("Label", {
                    staticClass: "description-text",
                    attrs: { col: "1", text: "Description", textWrap: "true" }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { row: "1" } },
                [
                  _c(
                    "ScrollView",
                    [
                      _c(
                        "StackLayout",
                        {
                          attrs: {
                            verticalAlignment: "top",
                            horizontalAlignment: "left"
                          }
                        },
                        [
                          _c("Textview", {
                            staticClass: "description-value",
                            attrs: {
                              editable: "false",
                              textWrap: "true",
                              text: _vm.description
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&":
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
    "GridLayout",
    { attrs: { rows: "*", columns: "*" } },
    [
      _c("Image", {
        attrs: {
          height: "150",
          width: "100%",
          marginBottom: "10",
          stretch: "aspectFill",
          src: _vm.item.cover
        }
      }),
      _vm._v(" />\n    "),
      _c(
        "GridLayout",
        { attrs: { verticalAlignment: "bottom" } },
        [
          _c(
            "StackLayout",
            { staticClass: "banner2", attrs: { backgroundColor: "#489e9e9e" } },
            [
              _c("Label", {
                staticClass: "category-name  m-b-10 m-t-10",
                attrs: {
                  text: _vm.item.category + " (" + _vm.item.count + ")",
                  textwrap: "true"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&":
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
    "StackLayout",
    { staticClass: "main" },
    [
      _c(
        "StackLayout",
        { staticClass: "content" },
        [
          _c("Image", {
            staticClass: "card-img",
            attrs: { stretch: "aspectFill", src: _vm.item.cover },
            on: {
              tap: function($event) {
                return _vm.onClickButton()
              }
            }
          }),
          _c(
            "GridLayout",
            {
              attrs: {
                width: "100%",
                columns: "auto,*",
                rows: "auto,auto",
                verticalAlignment: "center"
              }
            },
            [
              _c("Label", {
                staticClass: "fa category-icon",
                attrs: {
                  text: _vm._f("fonticon")(_vm.categoryIcon),
                  row: "0",
                  col: "0",
                  rowSpan: "2",
                  backgroundColor: _vm.item.categoryTag
                }
              }),
              _c("Label", {
                staticClass: "item-name",
                attrs: {
                  row: "0",
                  col: "1",
                  textwrap: "true",
                  verticalAlignment: "bottom",
                  horizontalAlignment: "left",
                  text: _vm.item.name
                }
              }),
              _c(
                "GridLayout",
                {
                  attrs: {
                    row: "1",
                    col: "1",
                    rows: "auto",
                    columns: "auto,auto,auto"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "item-category",
                    attrs: {
                      row: "0",
                      col: "0",
                      textwrap: "true",
                      verticalAlignment: "top",
                      horizontalAlignment: "left",
                      text: _vm.item.category
                    }
                  }),
                  _c("Label", {
                    staticClass: "fa rating-icon",
                    attrs: {
                      col: "1",
                      row: "0",
                      text: _vm._f("fonticon")("fa-star")
                    }
                  }),
                  _c("Label", {
                    staticClass: "rating-value item-category",
                    attrs: { col: "2", row: "0", text: _vm.item.rating }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c("StackLayout", {
            staticClass: "line",
            attrs: { width: "100%", marginTop: "5" }
          }),
          _c("ItemLike", { attrs: { item: _vm.item } })
        ],
        1
      ),
      _c("StackLayout", { staticClass: "lineBreak", attrs: { width: "100%" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&":
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
    "GridLayout",
    { attrs: { columns: "auto,*,auto,auto", rows: "auto" } },
    [
      _c(
        "GridLayout",
        {
          attrs: { col: "0", rows: "auto", columns: "auto,auto" },
          on: { tap: _vm.toggleLike }
        },
        [
          _c("Label", {
            ref: "like",
            staticClass: "like-icon fa",
            class: [_vm.item.isLike ? "liked-active" : "default"],
            attrs: {
              col: "0",
              row: "0",
              text: _vm._f("fonticon")(
                _vm.item.isLike ? "fa-thumbs-up" : "fa-thumbs-o-up"
              )
            }
          }),
          _c("Label", {
            staticClass: "layout",
            attrs: { col: "1", row: "0", text: _vm.item.likes }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { col: "1", orientation: "horizontal", marginLeft: "15" } },
        [
          _c("Label", {
            ref: "",
            staticClass: "like-icon layout fa",
            attrs: { text: _vm._f("fonticon")("fa-comment-o") }
          }),
          _c("Label", {
            staticClass: "layout",
            attrs: { text: _vm.item.comments }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        {
          attrs: {
            col: "2",
            rows: "auto",
            columns: "auto,auto",
            marginRight: "15"
          },
          on: { tap: _vm.toggleHeart }
        },
        [
          _c("Label", {
            ref: "favorite",
            staticClass: "like-icon  fa",
            class: [_vm.item.isFavorite ? "heart-active" : "default"],
            attrs: {
              col: "0",
              row: "0",
              text: _vm._f("fonticon")(
                _vm.item.isFavorite ? "fa-heart" : "fa-heart-o"
              )
            }
          }),
          _c("Label", {
            staticClass: "layout",
            attrs: { col: "1", row: "0", text: "Favorite" }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { col: "3", orientation: "horizontal" } },
        [
          _c("Label", {
            ref: "",
            staticClass: "like-icon layout fa",
            attrs: { text: _vm._f("fonticon")("fa-share-square-o") }
          }),
          _c("Label", { staticClass: "layout", attrs: { text: "Share" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
                  _c("StackLayout", { staticClass: "hr-light" }),
                  _c("label", { attrs: { text: _vm.error.email } })
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
                  _c("StackLayout", { staticClass: "hr-light" }),
                  _c("label", { attrs: { text: _vm.error.password } })
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



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=template&id=35bb194b&":
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
    "GridLayout",
    {
      staticClass: "navBottom",
      attrs: {
        height: "50",
        width: "100%",
        row: "3",
        rows: "auto",
        columns: "auto,auto,auto,auto"
      }
    },
    [
      _c(
        "GridLayout",
        {
          staticClass: "nav",
          class: _vm.selectedTab == 0 ? "active" : "",
          attrs: {
            rows: "*,auto",
            cols: "auto",
            col: "0",
            row: "0",
            width: "25%"
          },
          on: { tap: _vm.home }
        },
        [
          _c("Image", {
            staticClass: "navIcon",
            class: _vm.selectedTab == 0 ? "active" : "",
            attrs: {
              row: "0",
              src:
                _vm.selectedTab == 0
                  ? "~/assets/images/navhomem.png"
                  : "~/assets/images/navhome.png"
            }
          }),
          _c("Label", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedTab == 0,
                expression: "selectedTab==0"
              }
            ],
            staticClass: "navText",
            attrs: { row: "1", text: "Home" }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        {
          staticClass: "nav",
          class: _vm.selectedTab == 1 ? "active" : "",
          attrs: {
            rows: "*,auto",
            cols: "auto",
            col: "1",
            row: "0",
            width: "25%"
          },
          on: { tap: _vm.cart }
        },
        [
          _c("Image", {
            staticClass: "navIcon",
            class: _vm.selectedTab == 1 ? "active" : "",
            attrs: {
              row: "0",
              src:
                _vm.selectedTab == 1
                  ? "~/assets/images/navcartm.png"
                  : "~/assets/images/navcart.png"
            }
          }),
          _c("Label", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedTab == 1,
                expression: "selectedTab == 1"
              }
            ],
            staticClass: "navText",
            attrs: { row: "1", text: "Cart" }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        {
          staticClass: "nav",
          class: _vm.selectedTab == 2 ? "active" : "",
          attrs: {
            rows: "*,auto",
            cols: "auto",
            col: "2",
            row: "0",
            width: "25%"
          },
          on: { tap: _vm.history }
        },
        [
          _c("Image", {
            staticClass: "navIcon",
            class: _vm.selectedTab == 2 ? "active" : "",
            attrs: {
              row: "0",
              src:
                _vm.selectedTab == 2
                  ? "~/assets/images/navordersm.png"
                  : "~/assets/images/navorders.png"
            }
          }),
          _c("Label", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedTab == 2,
                expression: "selectedTab == 2"
              }
            ],
            staticClass: "navText",
            attrs: { row: "1", text: "History" }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        {
          staticClass: "nav",
          class: _vm.selectedTab == 3 ? "active" : "",
          attrs: {
            rows: "*,auto",
            cols: "auto",
            col: "3",
            row: "0",
            width: "25%"
          },
          on: { tap: _vm.about }
        },
        [
          _c("Image", {
            staticClass: "navIcon",
            class: _vm.selectedTab == 3 ? "active" : "",
            attrs: {
              row: "0",
              src:
                _vm.selectedTab == 3
                  ? "~/assets/images/navusm.png"
                  : "~/assets/images/navus.png"
            }
          }),
          _c("Label", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedTab == 3,
                expression: "selectedTab == 3"
              }
            ],
            staticClass: "navText",
            attrs: { row: "1", text: "About" }
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



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&":
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
    "StackLayout",
    { staticClass: "p-15", attrs: { backgroundColor: "white" } },
    [
      _c("Image", {
        attrs: { src: "~/assets/images/qr.png", stretch: "none" }
      }),
      _c("Button", {
        staticClass: "btn btn-outline",
        attrs: { text: "Close Modal" },
        on: {
          tap: function($event) {
            return _vm.$modal.close()
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./auth-service.js": "./auth-service.js",
	"./fonts/font-awesome.css": "./fonts/font-awesome.css",
	"./fonts/ionicons.css": "./fonts/ionicons.css",
	"./nativescript-fonticon/lib.js": "./nativescript-fonticon/lib.js",
	"./nativescript-fonticon/nativescript-fonticon.js": "./nativescript-fonticon/nativescript-fonticon.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\nThe imported CSS rules must precede all other types of rules.\r\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\", \"fontawesome-webfont\""}]},{"type":"rule","selectors":[".ion"],"declarations":[{"type":"declaration","property":"font-family","value":"\"ionicons\""}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./nativescript-fonticon/nativescript-fonticon.js");
/* harmony import */ var _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;


_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].debug = false;
_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].paths = {
  'fa': './fonts/font-awesome.css',
  'ion': './fonts/ionicons.css'
};
_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].loadCss();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('fonticon', _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["fonticon"]);
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./auth-service.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
}); // var nativescript_oauth2_1 = require('nativescript-oauth2')
// var providers_1 = require("nativescript-oauth2/providers");

var client = null;

function configureOAuthProviders() {
  var microsoftProvider = configureOAuthProviderMicrosoft();
  var googleProvider = configureOAuthProviderGoogle();
  var facebookProvider = configureOAuthProviderFacebook();
  nativescript_oauth2_1.configureTnsOAuth([microsoftProvider, googleProvider, facebookProvider]);
}

exports.configureOAuthProviders = configureOAuthProviders;

function configureOAuthProviderGoogle() {
  var googleProviderOptions = {
    openIdSupport: "oid-full",
    clientId: "932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb.apps.googleusercontent.com",
    redirectUri: "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb:/auth",
    urlScheme: "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb",
    scopes: ["email"]
  };
  var googleProvider = new providers_1.TnsOaProviderGoogle(googleProviderOptions);
  return googleProvider;
}

function configureOAuthProviderFacebook() {
  var facebookProviderOptions = {
    openIdSupport: "oid-none",
    clientId: "691208554415645",
    clientSecret: "d8725ac416fa1bb1917ccffd1670e3c6",
    redirectUri: "https://www.facebook.com/connect/login_success.html",
    scopes: ["email"]
  };
  var facebookProvider = new providers_1.TnsOaProviderFacebook(facebookProviderOptions);
  return facebookProvider;
}

function configureOAuthProviderMicrosoft() {
  var microsoftProviderOptions = {
    openIdSupport: "oid-full",
    clientId: "f376fa87-64a9-49a1-8b56-e0d48fc0810b",
    // redirectUri: "urn:ietf:wg:oauth:2.0:oob",
    redirectUri: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b://auth",
    urlScheme: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b",
    scopes: ["https://outlook.office.com/mail.read"]
  };
  var microsoftProvider = new providers_1.TnsOaProviderMicrosoft(microsoftProviderOptions);
  return microsoftProvider;
}

function tnsOauthLogin(providerType) {
  client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
  client.loginWithCompletion(function (tokenResult, error) {
    if (error) {
      console.error("back to main page with error: ");
      console.error(error);
    } else {
      console.log("back to main page with access token: ");
      console.log(tokenResult);
    }
  });
}

exports.tnsOauthLogin = tnsOauthLogin;

function tnsOauthLogout() {
  if (client) {
    client.logout();
  }
}

exports.tnsOauthLogout = tnsOauthLogout;

/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ItemDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&");
/* harmony import */ var _ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ItemDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ItemDetails.vue?vue&type=style&index=0&id=350c3624&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "350c3624",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('350c3624')) {
      api.createRecord('350c3624', component.options)
    } else {
      api.reload('350c3624', component.options)
    }
    module.hot.accept("./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&");
(function () {
      api.rerender('350c3624', {
        render: _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ItemDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ItemDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ItemDetails.vue?vue&type=style&index=0&id=350c3624&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=style&index=0&id=350c3624&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_350c3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ItemDetails.vue?vue&type=template&id=350c3624&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_350c3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/category.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/category.vue?vue&type=style&index=0&id=7d507771&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d507771",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7d507771')) {
      api.createRecord('7d507771', component.options)
    } else {
      api.reload('7d507771', component.options)
    }
    module.hot.accept("./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&");
(function () {
      api.rerender('7d507771', {
        render: _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/category.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/category.vue?vue&type=style&index=0&id=7d507771&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=style&index=0&id=7d507771&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_7d507771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/category.vue?vue&type=template&id=7d507771&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7d507771_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/item.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/item.vue?vue&type=style&index=0&id=c1b86ef4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c1b86ef4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c1b86ef4')) {
      api.createRecord('c1b86ef4', component.options)
    } else {
      api.reload('c1b86ef4', component.options)
    }
    module.hot.accept("./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&");
(function () {
      api.rerender('c1b86ef4', {
        render: _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/item.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/item.vue?vue&type=style&index=0&id=c1b86ef4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=style&index=0&id=c1b86ef4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_c1b86ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/item.vue?vue&type=template&id=c1b86ef4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_c1b86ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/itemLike.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&");
/* harmony import */ var _itemLike_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/itemLike.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/itemLike.vue?vue&type=style&index=0&id=69cedc86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _itemLike_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69cedc86",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('69cedc86')) {
      api.createRecord('69cedc86', component.options)
    } else {
      api.reload('69cedc86', component.options)
    }
    module.hot.accept("./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&");
(function () {
      api.rerender('69cedc86', {
        render: _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/itemLike.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/itemLike.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/itemLike.vue?vue&type=style&index=0&id=69cedc86&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=style&index=0&id=69cedc86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_style_index_0_id_69cedc86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/itemLike.vue?vue&type=template&id=69cedc86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemLike_vue_vue_type_template_id_69cedc86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/login.vue?vue&type=style&index=0&id=611af486&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "611af486",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('611af486')) {
      api.createRecord('611af486', component.options)
    } else {
      api.reload('611af486', component.options)
    }
    module.hot.accept("./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&");
(function () {
      api.rerender('611af486', {
        render: _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/login.vue?vue&type=style&index=0&id=611af486&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=style&index=0&id=611af486&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_611af486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=template&id=611af486&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/navBottom.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/navBottom.vue?vue&type=template&id=35bb194b&");
/* harmony import */ var _navBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/navBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/navBottom.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _navBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('35bb194b')) {
      api.createRecord('35bb194b', component.options)
    } else {
      api.reload('35bb194b', component.options)
    }
    module.hot.accept("./components/custom/navBottom.vue?vue&type=template&id=35bb194b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/navBottom.vue?vue&type=template&id=35bb194b&");
(function () {
      api.rerender('35bb194b', {
        render: _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/navBottom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/navBottom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/navBottom.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/navBottom.vue?vue&type=template&id=35bb194b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/navBottom.vue?vue&type=template&id=35bb194b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navBottom_vue_vue_type_template_id_35bb194b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/custom/offerQrModal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&");
/* harmony import */ var _offerQrModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/offerQrModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _offerQrModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('624af9fa')) {
      api.createRecord('624af9fa', component.options)
    } else {
      api.reload('624af9fa', component.options)
    }
    module.hot.accept("./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&");
(function () {
      api.rerender('624af9fa', {
        render: _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/offerQrModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/offerQrModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_offerQrModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/offerQrModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_offerQrModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/offerQrModal.vue?vue&type=template&id=624af9fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offerQrModal_vue_vue_type_template_id_624af9fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./fonts/font-awesome.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-glass:before {\r\n  content: \"\\F000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\F001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\F002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\F003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\F004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\F005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\F006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\F007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\F008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\F009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\F00A\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\F00B\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\F00C\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\F00D\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\F00E\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\F010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\F011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\F012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\F013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\F014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\F015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\F016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\F017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\F018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\F019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\F01A\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\F01B\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\F01C\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\F01D\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\F01E\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\F021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\F022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\F023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\F024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\F025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\F026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\F027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\F028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\F029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\F02A\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\F02B\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\F02C\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\F02D\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\F02E\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\F02F\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\F030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\F031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\F032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\F033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\F034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\F035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\F036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\F037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\F038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\F039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\F03A\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\F03B\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\F03C\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\F03D\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\F03E\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\F040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\F041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\F042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\F043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\F044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\F045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\F046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\F047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\F048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\F049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\F04A\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\F04B\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\F04C\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\F04D\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\F04E\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\F050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\F051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\F052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\F053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\F054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\F055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\F056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\F057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\F058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\F059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\F05A\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\F05B\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\F05C\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\F05D\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\F05E\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\F060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\F061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\F062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\F063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\F064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\F065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\F066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\F067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\F068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\F069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\F06A\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\F06B\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\F06C\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\F06D\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\F06E\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\F070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\F071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\F072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\F073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\F074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\F075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\F076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\F077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\F078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\F079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\F07A\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\F07B\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\F07C\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\F07D\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\F07E\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\F080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\F081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\F082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\F083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\F084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\F085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\F086\";\r\n}\r\n\r\n\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\F087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\F088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\F089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\F08A\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\F08B\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\F08C\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\F08D\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\F08E\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\F090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\F091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\F092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\F093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\F094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\F095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\F096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\F097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\F098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\F099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\F09A\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\F09B\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\F09C\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\F09D\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\F09E\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\F0A0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\F0A1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\F0F3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\F0A3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\F0A4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\F0A5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\F0A6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\F0A7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\F0A8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\F0A9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\F0AA\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\F0AB\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\F0AC\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\F0AD\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\F0AE\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\F0B0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\F0B1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\F0B2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\F0C0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\F0C1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\F0C2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\F0C3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\F0C4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\F0C5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\F0C6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\F0C7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\F0C8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\F0C9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\F0CA\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\F0CB\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\F0CC\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\F0CD\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\F0CE\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\F0D0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\F0D1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\F0D2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\F0D3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\F0D4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\F0D5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\F0D6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\F0D7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\F0D8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\F0D9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\F0DA\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\F0DB\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\F0DC\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\F0DD\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\F0DE\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\F0E0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\F0E1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\F0E2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\F0E3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\F0E4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\F0E5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\F0E6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\F0E7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\F0E8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\F0E9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\F0EA\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\F0EB\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\F0EC\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\F0ED\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\F0EE\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\F0F0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\F0F1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\F0F2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\F0A2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\F0F4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\F0F5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\F0F6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\F0F7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\F0F8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\F0F9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\F0FA\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\F0FB\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\F0FC\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\F0FD\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\F0FE\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\F100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\F101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\F102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\F103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\F104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\F105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\F106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\F107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\F108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\F109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\F10A\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\F10B\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\F10C\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\F10D\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\F10E\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\F110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\F111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\F112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\F113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\F114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\F115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\F118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\F119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\F11A\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\F11B\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\F11C\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\F11D\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\F11E\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\F120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\F121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\F122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\F123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\F124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\F125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\F126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\F127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\F128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\F129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\F12A\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\F12B\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\F12C\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\F12D\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\F12E\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\F130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\F131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\F132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\F133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\F134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\F135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\F136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\F137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\F138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\F139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\F13A\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\F13B\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\F13C\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\F13D\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\F13E\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\F140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\F141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\F142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\F143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\F144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\F145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\F146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\F147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\F148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\F149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\F14A\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\F14B\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\F14C\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\F14D\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\F14E\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\F150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\F151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\F152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\F153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\F154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\F155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\F156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\F157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\F158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\F159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\F15A\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\F15B\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\F15C\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\F15D\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\F15E\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\F160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\F161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\F162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\F163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\F164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\F165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\F166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\F167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\F168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\F169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\F16A\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\F16B\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\F16C\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\F16D\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\F16E\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\F170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\F171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\F172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\F173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\F174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\F175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\F176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\F177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\F178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\F179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\F17A\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\F17B\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\F17C\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\F17D\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\F17E\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\F180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\F181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\F182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\F183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\F184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\F185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\F186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\F187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\F188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\F189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\F18A\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\F18B\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\F18C\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\F18D\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\F18E\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\F190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\F191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\F192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\F193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\F194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\F195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\F196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\F197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\F198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\F199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\F19A\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\F19B\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\F19C\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\F19D\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\F19E\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\F1A0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\F1A1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\F1A2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\F1A3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\F1A4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\F1A5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\F1A6\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\F1A7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\F1A8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\F1A9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\F1AA\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\F1AB\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\F1AC\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\F1AD\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\F1AE\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\F1B0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\F1B1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\F1B2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\F1B3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\F1B4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\F1B5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\F1B6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\F1B7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\F1B8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\F1B9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\F1BA\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\F1BB\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\F1BC\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\F1BD\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\F1BE\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\F1C0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\F1C1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\F1C2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\F1C3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\F1C4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\F1C5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\F1C6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\F1C7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\F1C8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\F1C9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\F1CA\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\F1CB\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\F1CC\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\F1CD\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\F1CE\";\r\n}\r\n.fa-ra:before,\r\n.fa-rebel:before {\r\n  content: \"\\F1D0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\F1D1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\F1D2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\F1D3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\F1D4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\F1D5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\F1D6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\F1D7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\F1D8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\F1D9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\F1DA\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\F1DB\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\F1DC\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\F1DD\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\F1DE\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\F1E0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\F1E1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\F1E2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\F1E3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\F1E4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\F1E5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\F1E6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\F1E7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\F1E8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\F1E9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\F1EA\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\F1EB\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\F1EC\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\F1ED\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\F1EE\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\F1F0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\F1F1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\F1F2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\F1F3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\F1F4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\F1F5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\F1F6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\F1F7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\F1F8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\F1F9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\F1FA\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\F1FB\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\F1FC\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\F1FD\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\F1FE\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\F200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\F201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\F202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\F203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\F204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\F205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\F206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\F207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\F208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\F209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\F20A\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\F20B\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\F20C\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\F20D\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\F20E\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\F210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\F211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\F212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\F213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\F214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\F215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\F216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\F217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\F218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\F219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\F21A\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\F21B\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\F21C\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\F21D\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\F21E\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\F221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\F222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\F223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\F224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\F225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\F226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\F227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\F228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\F229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\F22A\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\F22B\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\F22C\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\F22D\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\F230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\F231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\F232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\F233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\F234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\F235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\F236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\F237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\F238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\F239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\F23A\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\F23B\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\F23C\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\F23D\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\F23E\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery-full:before {\r\n  content: \"\\F240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\F241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\F242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\F243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\F244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\F245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\F246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\F247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\F248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\F249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\F24A\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\F24B\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\F24C\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\F24D\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\F24E\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\F250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\F251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\F252\";\r\n}\r\n.fa-hourglass-end:before {\r\n  content: \"\\F253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\F254\";\r\n}\r\n.fa-hand-rock-o:before {\r\n  content: \"\\F255\";\r\n}\r\n.fa-hand-paper-o:before {\r\n  content: \"\\F256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\F257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\F258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\F259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\F25A\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\F25B\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\F25C\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\F25D\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\F25E\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\F260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\F261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\F262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\F263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\F264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\F265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\F266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\F267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\F268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\F269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\F26A\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\F26B\";\r\n}\r\n.fa-television:before {\r\n  content: \"\\F26C\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\F26D\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\F26E\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\F270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\F271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\F272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\F273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\F274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\F275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\F276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\F277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\F278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\F279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\F27A\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\F27B\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\F27C\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\F27D\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\F27E\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\F280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\F281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\F282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\F283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\F284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\F285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\F286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\F287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\F288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\F289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\F28A\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\F28B\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\F28C\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\F28D\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\F28E\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\F290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\F291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\F292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\F293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\F294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\F295\";\r\n}\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './fonts/font-awesome.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./fonts/ionicons.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.ion-alert:before { content: \"\\F101\"; }\r\n\r\n.ion-alert-circled:before { content: \"\\F100\"; }\r\n\r\n.ion-android-add:before { content: \"\\F2C7\"; }\r\n\r\n.ion-android-add-circle:before { content: \"\\F359\"; }\r\n\r\n.ion-android-alarm-clock:before { content: \"\\F35A\"; }\r\n\r\n.ion-android-alert:before { content: \"\\F35B\"; }\r\n\r\n.ion-android-apps:before { content: \"\\F35C\"; }\r\n\r\n.ion-android-archive:before { content: \"\\F2C9\"; }\r\n\r\n.ion-android-arrow-back:before { content: \"\\F2CA\"; }\r\n\r\n.ion-android-arrow-down:before { content: \"\\F35D\"; }\r\n\r\n.ion-android-arrow-dropdown:before { content: \"\\F35F\"; }\r\n\r\n.ion-android-arrow-dropdown-circle:before { content: \"\\F35E\"; }\r\n\r\n.ion-android-arrow-dropleft:before { content: \"\\F361\"; }\r\n\r\n.ion-android-arrow-dropleft-circle:before { content: \"\\F360\"; }\r\n\r\n.ion-android-arrow-dropright:before { content: \"\\F363\"; }\r\n\r\n.ion-android-arrow-dropright-circle:before { content: \"\\F362\"; }\r\n\r\n.ion-android-arrow-dropup:before { content: \"\\F365\"; }\r\n\r\n.ion-android-arrow-dropup-circle:before { content: \"\\F364\"; }\r\n\r\n.ion-android-arrow-forward:before { content: \"\\F30F\"; }\r\n\r\n.ion-android-arrow-up:before { content: \"\\F366\"; }\r\n\r\n.ion-android-attach:before { content: \"\\F367\"; }\r\n\r\n.ion-android-bar:before { content: \"\\F368\"; }\r\n\r\n.ion-android-bicycle:before { content: \"\\F369\"; }\r\n\r\n.ion-android-boat:before { content: \"\\F36A\"; }\r\n\r\n.ion-android-bookmark:before { content: \"\\F36B\"; }\r\n\r\n.ion-android-bulb:before { content: \"\\F36C\"; }\r\n\r\n.ion-android-bus:before { content: \"\\F36D\"; }\r\n\r\n.ion-android-calendar:before { content: \"\\F2D1\"; }\r\n\r\n.ion-android-call:before { content: \"\\F2D2\"; }\r\n\r\n.ion-android-camera:before { content: \"\\F2D3\"; }\r\n\r\n.ion-android-cancel:before { content: \"\\F36E\"; }\r\n\r\n.ion-android-car:before { content: \"\\F36F\"; }\r\n\r\n.ion-android-cart:before { content: \"\\F370\"; }\r\n\r\n.ion-android-chat:before { content: \"\\F2D4\"; }\r\n\r\n.ion-android-checkbox:before { content: \"\\F374\"; }\r\n\r\n.ion-android-checkbox-blank:before { content: \"\\F371\"; }\r\n\r\n.ion-android-checkbox-outline:before { content: \"\\F373\"; }\r\n\r\n.ion-android-checkbox-outline-blank:before { content: \"\\F372\"; }\r\n\r\n.ion-android-checkmark-circle:before { content: \"\\F375\"; }\r\n\r\n.ion-android-clipboard:before { content: \"\\F376\"; }\r\n\r\n.ion-android-close:before { content: \"\\F2D7\"; }\r\n\r\n.ion-android-cloud:before { content: \"\\F37A\"; }\r\n\r\n.ion-android-cloud-circle:before { content: \"\\F377\"; }\r\n\r\n.ion-android-cloud-done:before { content: \"\\F378\"; }\r\n\r\n.ion-android-cloud-outline:before { content: \"\\F379\"; }\r\n\r\n.ion-android-color-palette:before { content: \"\\F37B\"; }\r\n\r\n.ion-android-compass:before { content: \"\\F37C\"; }\r\n\r\n.ion-android-contact:before { content: \"\\F2D8\"; }\r\n\r\n.ion-android-contacts:before { content: \"\\F2D9\"; }\r\n\r\n.ion-android-contract:before { content: \"\\F37D\"; }\r\n\r\n.ion-android-create:before { content: \"\\F37E\"; }\r\n\r\n.ion-android-delete:before { content: \"\\F37F\"; }\r\n\r\n.ion-android-desktop:before { content: \"\\F380\"; }\r\n\r\n.ion-android-document:before { content: \"\\F381\"; }\r\n\r\n.ion-android-done:before { content: \"\\F383\"; }\r\n\r\n.ion-android-done-all:before { content: \"\\F382\"; }\r\n\r\n.ion-android-download:before { content: \"\\F2DD\"; }\r\n\r\n.ion-android-drafts:before { content: \"\\F384\"; }\r\n\r\n.ion-android-exit:before { content: \"\\F385\"; }\r\n\r\n.ion-android-expand:before { content: \"\\F386\"; }\r\n\r\n.ion-android-favorite:before { content: \"\\F388\"; }\r\n\r\n.ion-android-favorite-outline:before { content: \"\\F387\"; }\r\n\r\n.ion-android-film:before { content: \"\\F389\"; }\r\n\r\n.ion-android-folder:before { content: \"\\F2E0\"; }\r\n\r\n.ion-android-folder-open:before { content: \"\\F38A\"; }\r\n\r\n.ion-android-funnel:before { content: \"\\F38B\"; }\r\n\r\n.ion-android-globe:before { content: \"\\F38C\"; }\r\n\r\n.ion-android-hand:before { content: \"\\F2E3\"; }\r\n\r\n.ion-android-hangout:before { content: \"\\F38D\"; }\r\n\r\n.ion-android-happy:before { content: \"\\F38E\"; }\r\n\r\n.ion-android-home:before { content: \"\\F38F\"; }\r\n\r\n.ion-android-image:before { content: \"\\F2E4\"; }\r\n\r\n.ion-android-laptop:before { content: \"\\F390\"; }\r\n\r\n.ion-android-list:before { content: \"\\F391\"; }\r\n\r\n.ion-android-locate:before { content: \"\\F2E9\"; }\r\n\r\n.ion-android-lock:before { content: \"\\F392\"; }\r\n\r\n.ion-android-mail:before { content: \"\\F2EB\"; }\r\n\r\n.ion-android-map:before { content: \"\\F393\"; }\r\n\r\n.ion-android-menu:before { content: \"\\F394\"; }\r\n\r\n.ion-android-microphone:before { content: \"\\F2EC\"; }\r\n\r\n.ion-android-microphone-off:before { content: \"\\F395\"; }\r\n\r\n.ion-android-more-horizontal:before { content: \"\\F396\"; }\r\n\r\n.ion-android-more-vertical:before { content: \"\\F397\"; }\r\n\r\n.ion-android-navigate:before { content: \"\\F398\"; }\r\n\r\n.ion-android-notifications:before { content: \"\\F39B\"; }\r\n\r\n.ion-android-notifications-none:before { content: \"\\F399\"; }\r\n\r\n.ion-android-notifications-off:before { content: \"\\F39A\"; }\r\n\r\n.ion-android-open:before { content: \"\\F39C\"; }\r\n\r\n.ion-android-options:before { content: \"\\F39D\"; }\r\n\r\n.ion-android-people:before { content: \"\\F39E\"; }\r\n\r\n.ion-android-person:before { content: \"\\F3A0\"; }\r\n\r\n.ion-android-person-add:before { content: \"\\F39F\"; }\r\n\r\n.ion-android-phone-landscape:before { content: \"\\F3A1\"; }\r\n\r\n.ion-android-phone-portrait:before { content: \"\\F3A2\"; }\r\n\r\n.ion-android-pin:before { content: \"\\F3A3\"; }\r\n\r\n.ion-android-plane:before { content: \"\\F3A4\"; }\r\n\r\n.ion-android-playstore:before { content: \"\\F2F0\"; }\r\n\r\n.ion-android-print:before { content: \"\\F3A5\"; }\r\n\r\n.ion-android-radio-button-off:before { content: \"\\F3A6\"; }\r\n\r\n.ion-android-radio-button-on:before { content: \"\\F3A7\"; }\r\n\r\n.ion-android-refresh:before { content: \"\\F3A8\"; }\r\n\r\n.ion-android-remove:before { content: \"\\F2F4\"; }\r\n\r\n.ion-android-remove-circle:before { content: \"\\F3A9\"; }\r\n\r\n.ion-android-restaurant:before { content: \"\\F3AA\"; }\r\n\r\n.ion-android-sad:before { content: \"\\F3AB\"; }\r\n\r\n.ion-android-search:before { content: \"\\F2F5\"; }\r\n\r\n.ion-android-send:before { content: \"\\F2F6\"; }\r\n\r\n.ion-android-settings:before { content: \"\\F2F7\"; }\r\n\r\n.ion-android-share:before { content: \"\\F2F8\"; }\r\n\r\n.ion-android-share-alt:before { content: \"\\F3AC\"; }\r\n\r\n.ion-android-star:before { content: \"\\F2FC\"; }\r\n\r\n.ion-android-star-half:before { content: \"\\F3AD\"; }\r\n\r\n.ion-android-star-outline:before { content: \"\\F3AE\"; }\r\n\r\n.ion-android-stopwatch:before { content: \"\\F2FD\"; }\r\n\r\n.ion-android-subway:before { content: \"\\F3AF\"; }\r\n\r\n.ion-android-sunny:before { content: \"\\F3B0\"; }\r\n\r\n.ion-android-sync:before { content: \"\\F3B1\"; }\r\n\r\n.ion-android-textsms:before { content: \"\\F3B2\"; }\r\n\r\n.ion-android-time:before { content: \"\\F3B3\"; }\r\n\r\n.ion-android-train:before { content: \"\\F3B4\"; }\r\n\r\n.ion-android-unlock:before { content: \"\\F3B5\"; }\r\n\r\n.ion-android-upload:before { content: \"\\F3B6\"; }\r\n\r\n.ion-android-volume-down:before { content: \"\\F3B7\"; }\r\n\r\n.ion-android-volume-mute:before { content: \"\\F3B8\"; }\r\n\r\n.ion-android-volume-off:before { content: \"\\F3B9\"; }\r\n\r\n.ion-android-volume-up:before { content: \"\\F3BA\"; }\r\n\r\n.ion-android-walk:before { content: \"\\F3BB\"; }\r\n\r\n.ion-android-warning:before { content: \"\\F3BC\"; }\r\n\r\n.ion-android-watch:before { content: \"\\F3BD\"; }\r\n\r\n.ion-android-wifi:before { content: \"\\F305\"; }\r\n\r\n.ion-aperture:before { content: \"\\F313\"; }\r\n\r\n.ion-archive:before { content: \"\\F102\"; }\r\n\r\n.ion-arrow-down-a:before { content: \"\\F103\"; }\r\n\r\n.ion-arrow-down-b:before { content: \"\\F104\"; }\r\n\r\n.ion-arrow-down-c:before { content: \"\\F105\"; }\r\n\r\n.ion-arrow-expand:before { content: \"\\F25E\"; }\r\n\r\n.ion-arrow-graph-down-left:before { content: \"\\F25F\"; }\r\n\r\n.ion-arrow-graph-down-right:before { content: \"\\F260\"; }\r\n\r\n.ion-arrow-graph-up-left:before { content: \"\\F261\"; }\r\n\r\n.ion-arrow-graph-up-right:before { content: \"\\F262\"; }\r\n\r\n.ion-arrow-left-a:before { content: \"\\F106\"; }\r\n\r\n.ion-arrow-left-b:before { content: \"\\F107\"; }\r\n\r\n.ion-arrow-left-c:before { content: \"\\F108\"; }\r\n\r\n.ion-arrow-move:before { content: \"\\F263\"; }\r\n\r\n.ion-arrow-resize:before { content: \"\\F264\"; }\r\n\r\n.ion-arrow-return-left:before { content: \"\\F265\"; }\r\n\r\n.ion-arrow-return-right:before { content: \"\\F266\"; }\r\n\r\n.ion-arrow-right-a:before { content: \"\\F109\"; }\r\n\r\n.ion-arrow-right-b:before { content: \"\\F10A\"; }\r\n\r\n.ion-arrow-right-c:before { content: \"\\F10B\"; }\r\n\r\n.ion-arrow-shrink:before { content: \"\\F267\"; }\r\n\r\n.ion-arrow-swap:before { content: \"\\F268\"; }\r\n\r\n.ion-arrow-up-a:before { content: \"\\F10C\"; }\r\n\r\n.ion-arrow-up-b:before { content: \"\\F10D\"; }\r\n\r\n.ion-arrow-up-c:before { content: \"\\F10E\"; }\r\n\r\n.ion-asterisk:before { content: \"\\F314\"; }\r\n\r\n.ion-at:before { content: \"\\F10F\"; }\r\n\r\n.ion-backspace:before { content: \"\\F3BF\"; }\r\n\r\n.ion-backspace-outline:before { content: \"\\F3BE\"; }\r\n\r\n.ion-bag:before { content: \"\\F110\"; }\r\n\r\n.ion-battery-charging:before { content: \"\\F111\"; }\r\n\r\n.ion-battery-empty:before { content: \"\\F112\"; }\r\n\r\n.ion-battery-full:before { content: \"\\F113\"; }\r\n\r\n.ion-battery-half:before { content: \"\\F114\"; }\r\n\r\n.ion-battery-low:before { content: \"\\F115\"; }\r\n\r\n.ion-beaker:before { content: \"\\F269\"; }\r\n\r\n.ion-beer:before { content: \"\\F26A\"; }\r\n\r\n.ion-bluetooth:before { content: \"\\F116\"; }\r\n\r\n.ion-bonfire:before { content: \"\\F315\"; }\r\n\r\n.ion-bookmark:before { content: \"\\F26B\"; }\r\n\r\n.ion-bowtie:before { content: \"\\F3C0\"; }\r\n\r\n.ion-briefcase:before { content: \"\\F26C\"; }\r\n\r\n.ion-bug:before { content: \"\\F2BE\"; }\r\n\r\n.ion-calculator:before { content: \"\\F26D\"; }\r\n\r\n.ion-calendar:before { content: \"\\F117\"; }\r\n\r\n.ion-camera:before { content: \"\\F118\"; }\r\n\r\n.ion-card:before { content: \"\\F119\"; }\r\n\r\n.ion-cash:before { content: \"\\F316\"; }\r\n\r\n.ion-chatbox:before { content: \"\\F11B\"; }\r\n\r\n.ion-chatbox-working:before { content: \"\\F11A\"; }\r\n\r\n.ion-chatboxes:before { content: \"\\F11C\"; }\r\n\r\n.ion-chatbubble:before { content: \"\\F11E\"; }\r\n\r\n.ion-chatbubble-working:before { content: \"\\F11D\"; }\r\n\r\n.ion-chatbubbles:before { content: \"\\F11F\"; }\r\n\r\n.ion-checkmark:before { content: \"\\F122\"; }\r\n\r\n.ion-checkmark-circled:before { content: \"\\F120\"; }\r\n\r\n.ion-checkmark-round:before { content: \"\\F121\"; }\r\n\r\n.ion-chevron-down:before { content: \"\\F123\"; }\r\n\r\n.ion-chevron-left:before { content: \"\\F124\"; }\r\n\r\n.ion-chevron-right:before { content: \"\\F125\"; }\r\n\r\n.ion-chevron-up:before { content: \"\\F126\"; }\r\n\r\n.ion-clipboard:before { content: \"\\F127\"; }\r\n\r\n.ion-clock:before { content: \"\\F26E\"; }\r\n\r\n.ion-close:before { content: \"\\F12A\"; }\r\n\r\n.ion-close-circled:before { content: \"\\F128\"; }\r\n\r\n.ion-close-round:before { content: \"\\F129\"; }\r\n\r\n.ion-closed-captioning:before { content: \"\\F317\"; }\r\n\r\n.ion-cloud:before { content: \"\\F12B\"; }\r\n\r\n.ion-code:before { content: \"\\F271\"; }\r\n\r\n.ion-code-download:before { content: \"\\F26F\"; }\r\n\r\n.ion-code-working:before { content: \"\\F270\"; }\r\n\r\n.ion-coffee:before { content: \"\\F272\"; }\r\n\r\n.ion-compass:before { content: \"\\F273\"; }\r\n\r\n.ion-compose:before { content: \"\\F12C\"; }\r\n\r\n.ion-connection-bars:before { content: \"\\F274\"; }\r\n\r\n.ion-contrast:before { content: \"\\F275\"; }\r\n\r\n.ion-crop:before { content: \"\\F3C1\"; }\r\n\r\n.ion-cube:before { content: \"\\F318\"; }\r\n\r\n.ion-disc:before { content: \"\\F12D\"; }\r\n\r\n.ion-document:before { content: \"\\F12F\"; }\r\n\r\n.ion-document-text:before { content: \"\\F12E\"; }\r\n\r\n.ion-drag:before { content: \"\\F130\"; }\r\n\r\n.ion-earth:before { content: \"\\F276\"; }\r\n\r\n.ion-easel:before { content: \"\\F3C2\"; }\r\n\r\n.ion-edit:before { content: \"\\F2BF\"; }\r\n\r\n.ion-egg:before { content: \"\\F277\"; }\r\n\r\n.ion-eject:before { content: \"\\F131\"; }\r\n\r\n.ion-email:before { content: \"\\F132\"; }\r\n\r\n.ion-email-unread:before { content: \"\\F3C3\"; }\r\n\r\n.ion-erlenmeyer-flask:before { content: \"\\F3C5\"; }\r\n\r\n.ion-erlenmeyer-flask-bubbles:before { content: \"\\F3C4\"; }\r\n\r\n.ion-eye:before { content: \"\\F133\"; }\r\n\r\n.ion-eye-disabled:before { content: \"\\F306\"; }\r\n\r\n.ion-female:before { content: \"\\F278\"; }\r\n\r\n.ion-filing:before { content: \"\\F134\"; }\r\n\r\n.ion-film-marker:before { content: \"\\F135\"; }\r\n\r\n.ion-fireball:before { content: \"\\F319\"; }\r\n\r\n.ion-flag:before { content: \"\\F279\"; }\r\n\r\n.ion-flame:before { content: \"\\F31A\"; }\r\n\r\n.ion-flash:before { content: \"\\F137\"; }\r\n\r\n.ion-flash-off:before { content: \"\\F136\"; }\r\n\r\n.ion-folder:before { content: \"\\F139\"; }\r\n\r\n.ion-fork:before { content: \"\\F27A\"; }\r\n\r\n.ion-fork-repo:before { content: \"\\F2C0\"; }\r\n\r\n.ion-forward:before { content: \"\\F13A\"; }\r\n\r\n.ion-funnel:before { content: \"\\F31B\"; }\r\n\r\n.ion-gear-a:before { content: \"\\F13D\"; }\r\n\r\n.ion-gear-b:before { content: \"\\F13E\"; }\r\n\r\n.ion-grid:before { content: \"\\F13F\"; }\r\n\r\n.ion-hammer:before { content: \"\\F27B\"; }\r\n\r\n.ion-happy:before { content: \"\\F31C\"; }\r\n\r\n.ion-happy-outline:before { content: \"\\F3C6\"; }\r\n\r\n.ion-headphone:before { content: \"\\F140\"; }\r\n\r\n.ion-heart:before { content: \"\\F141\"; }\r\n\r\n.ion-heart-broken:before { content: \"\\F31D\"; }\r\n\r\n.ion-help:before { content: \"\\F143\"; }\r\n\r\n.ion-help-buoy:before { content: \"\\F27C\"; }\r\n\r\n.ion-help-circled:before { content: \"\\F142\"; }\r\n\r\n.ion-home:before { content: \"\\F144\"; }\r\n\r\n.ion-icecream:before { content: \"\\F27D\"; }\r\n\r\n.ion-image:before { content: \"\\F147\"; }\r\n\r\n.ion-images:before { content: \"\\F148\"; }\r\n\r\n.ion-information:before { content: \"\\F14A\"; }\r\n\r\n.ion-information-circled:before { content: \"\\F149\"; }\r\n\r\n.ion-ionic:before { content: \"\\F14B\"; }\r\n\r\n.ion-ios-alarm:before { content: \"\\F3C8\"; }\r\n\r\n.ion-ios-alarm-outline:before { content: \"\\F3C7\"; }\r\n\r\n.ion-ios-albums:before { content: \"\\F3CA\"; }\r\n\r\n.ion-ios-albums-outline:before { content: \"\\F3C9\"; }\r\n\r\n.ion-ios-americanfootball:before { content: \"\\F3CC\"; }\r\n\r\n.ion-ios-americanfootball-outline:before { content: \"\\F3CB\"; }\r\n\r\n.ion-ios-analytics:before { content: \"\\F3CE\"; }\r\n\r\n.ion-ios-analytics-outline:before { content: \"\\F3CD\"; }\r\n\r\n.ion-ios-arrow-back:before { content: \"\\F3CF\"; }\r\n\r\n.ion-ios-arrow-down:before { content: \"\\F3D0\"; }\r\n\r\n.ion-ios-arrow-forward:before { content: \"\\F3D1\"; }\r\n\r\n.ion-ios-arrow-left:before { content: \"\\F3D2\"; }\r\n\r\n.ion-ios-arrow-right:before { content: \"\\F3D3\"; }\r\n\r\n.ion-ios-arrow-thin-down:before { content: \"\\F3D4\"; }\r\n\r\n.ion-ios-arrow-thin-left:before { content: \"\\F3D5\"; }\r\n\r\n.ion-ios-arrow-thin-right:before { content: \"\\F3D6\"; }\r\n\r\n.ion-ios-arrow-thin-up:before { content: \"\\F3D7\"; }\r\n\r\n.ion-ios-arrow-up:before { content: \"\\F3D8\"; }\r\n\r\n.ion-ios-at:before { content: \"\\F3DA\"; }\r\n\r\n.ion-ios-at-outline:before { content: \"\\F3D9\"; }\r\n\r\n.ion-ios-barcode:before { content: \"\\F3DC\"; }\r\n\r\n.ion-ios-barcode-outline:before { content: \"\\F3DB\"; }\r\n\r\n.ion-ios-baseball:before { content: \"\\F3DE\"; }\r\n\r\n.ion-ios-baseball-outline:before { content: \"\\F3DD\"; }\r\n\r\n.ion-ios-basketball:before { content: \"\\F3E0\"; }\r\n\r\n.ion-ios-basketball-outline:before { content: \"\\F3DF\"; }\r\n\r\n.ion-ios-bell:before { content: \"\\F3E2\"; }\r\n\r\n.ion-ios-bell-outline:before { content: \"\\F3E1\"; }\r\n\r\n.ion-ios-body:before { content: \"\\F3E4\"; }\r\n\r\n.ion-ios-body-outline:before { content: \"\\F3E3\"; }\r\n\r\n.ion-ios-bolt:before { content: \"\\F3E6\"; }\r\n\r\n.ion-ios-bolt-outline:before { content: \"\\F3E5\"; }\r\n\r\n.ion-ios-book:before { content: \"\\F3E8\"; }\r\n\r\n.ion-ios-book-outline:before { content: \"\\F3E7\"; }\r\n\r\n.ion-ios-bookmarks:before { content: \"\\F3EA\"; }\r\n\r\n.ion-ios-bookmarks-outline:before { content: \"\\F3E9\"; }\r\n\r\n.ion-ios-box:before { content: \"\\F3EC\"; }\r\n\r\n.ion-ios-box-outline:before { content: \"\\F3EB\"; }\r\n\r\n.ion-ios-briefcase:before { content: \"\\F3EE\"; }\r\n\r\n.ion-ios-briefcase-outline:before { content: \"\\F3ED\"; }\r\n\r\n.ion-ios-browsers:before { content: \"\\F3F0\"; }\r\n\r\n.ion-ios-browsers-outline:before { content: \"\\F3EF\"; }\r\n\r\n.ion-ios-calculator:before { content: \"\\F3F2\"; }\r\n\r\n.ion-ios-calculator-outline:before { content: \"\\F3F1\"; }\r\n\r\n.ion-ios-calendar:before { content: \"\\F3F4\"; }\r\n\r\n.ion-ios-calendar-outline:before { content: \"\\F3F3\"; }\r\n\r\n.ion-ios-camera:before { content: \"\\F3F6\"; }\r\n\r\n.ion-ios-camera-outline:before { content: \"\\F3F5\"; }\r\n\r\n.ion-ios-cart:before { content: \"\\F3F8\"; }\r\n\r\n.ion-ios-cart-outline:before { content: \"\\F3F7\"; }\r\n\r\n.ion-ios-chatboxes:before { content: \"\\F3FA\"; }\r\n\r\n.ion-ios-chatboxes-outline:before { content: \"\\F3F9\"; }\r\n\r\n.ion-ios-chatbubble:before { content: \"\\F3FC\"; }\r\n\r\n.ion-ios-chatbubble-outline:before { content: \"\\F3FB\"; }\r\n\r\n.ion-ios-checkmark:before { content: \"\\F3FF\"; }\r\n\r\n.ion-ios-checkmark-empty:before { content: \"\\F3FD\"; }\r\n\r\n.ion-ios-checkmark-outline:before { content: \"\\F3FE\"; }\r\n\r\n.ion-ios-circle-filled:before { content: \"\\F400\"; }\r\n\r\n.ion-ios-circle-outline:before { content: \"\\F401\"; }\r\n\r\n.ion-ios-clock:before { content: \"\\F403\"; }\r\n\r\n.ion-ios-clock-outline:before { content: \"\\F402\"; }\r\n\r\n.ion-ios-close:before { content: \"\\F406\"; }\r\n\r\n.ion-ios-close-empty:before { content: \"\\F404\"; }\r\n\r\n.ion-ios-close-outline:before { content: \"\\F405\"; }\r\n\r\n.ion-ios-cloud:before { content: \"\\F40C\"; }\r\n\r\n.ion-ios-cloud-download:before { content: \"\\F408\"; }\r\n\r\n.ion-ios-cloud-download-outline:before { content: \"\\F407\"; }\r\n\r\n.ion-ios-cloud-outline:before { content: \"\\F409\"; }\r\n\r\n.ion-ios-cloud-upload:before { content: \"\\F40B\"; }\r\n\r\n.ion-ios-cloud-upload-outline:before { content: \"\\F40A\"; }\r\n\r\n.ion-ios-cloudy:before { content: \"\\F410\"; }\r\n\r\n.ion-ios-cloudy-night:before { content: \"\\F40E\"; }\r\n\r\n.ion-ios-cloudy-night-outline:before { content: \"\\F40D\"; }\r\n\r\n.ion-ios-cloudy-outline:before { content: \"\\F40F\"; }\r\n\r\n.ion-ios-cog:before { content: \"\\F412\"; }\r\n\r\n.ion-ios-cog-outline:before { content: \"\\F411\"; }\r\n\r\n.ion-ios-color-filter:before { content: \"\\F414\"; }\r\n\r\n.ion-ios-color-filter-outline:before { content: \"\\F413\"; }\r\n\r\n.ion-ios-color-wand:before { content: \"\\F416\"; }\r\n\r\n.ion-ios-color-wand-outline:before { content: \"\\F415\"; }\r\n\r\n.ion-ios-compose:before { content: \"\\F418\"; }\r\n\r\n.ion-ios-compose-outline:before { content: \"\\F417\"; }\r\n\r\n.ion-ios-contact:before { content: \"\\F41A\"; }\r\n\r\n.ion-ios-contact-outline:before { content: \"\\F419\"; }\r\n\r\n.ion-ios-copy:before { content: \"\\F41C\"; }\r\n\r\n.ion-ios-copy-outline:before { content: \"\\F41B\"; }\r\n\r\n.ion-ios-crop:before { content: \"\\F41E\"; }\r\n\r\n.ion-ios-crop-strong:before { content: \"\\F41D\"; }\r\n\r\n.ion-ios-download:before { content: \"\\F420\"; }\r\n\r\n.ion-ios-download-outline:before { content: \"\\F41F\"; }\r\n\r\n.ion-ios-drag:before { content: \"\\F421\"; }\r\n\r\n.ion-ios-email:before { content: \"\\F423\"; }\r\n\r\n.ion-ios-email-outline:before { content: \"\\F422\"; }\r\n\r\n.ion-ios-eye:before { content: \"\\F425\"; }\r\n\r\n.ion-ios-eye-outline:before { content: \"\\F424\"; }\r\n\r\n.ion-ios-fastforward:before { content: \"\\F427\"; }\r\n\r\n.ion-ios-fastforward-outline:before { content: \"\\F426\"; }\r\n\r\n.ion-ios-filing:before { content: \"\\F429\"; }\r\n\r\n.ion-ios-filing-outline:before { content: \"\\F428\"; }\r\n\r\n.ion-ios-film:before { content: \"\\F42B\"; }\r\n\r\n.ion-ios-film-outline:before { content: \"\\F42A\"; }\r\n\r\n.ion-ios-flag:before { content: \"\\F42D\"; }\r\n\r\n.ion-ios-flag-outline:before { content: \"\\F42C\"; }\r\n\r\n.ion-ios-flame:before { content: \"\\F42F\"; }\r\n\r\n.ion-ios-flame-outline:before { content: \"\\F42E\"; }\r\n\r\n.ion-ios-flask:before { content: \"\\F431\"; }\r\n\r\n.ion-ios-flask-outline:before { content: \"\\F430\"; }\r\n\r\n.ion-ios-flower:before { content: \"\\F433\"; }\r\n\r\n.ion-ios-flower-outline:before { content: \"\\F432\"; }\r\n\r\n.ion-ios-folder:before { content: \"\\F435\"; }\r\n\r\n.ion-ios-folder-outline:before { content: \"\\F434\"; }\r\n\r\n.ion-ios-football:before { content: \"\\F437\"; }\r\n\r\n.ion-ios-football-outline:before { content: \"\\F436\"; }\r\n\r\n.ion-ios-game-controller-a:before { content: \"\\F439\"; }\r\n\r\n.ion-ios-game-controller-a-outline:before { content: \"\\F438\"; }\r\n\r\n.ion-ios-game-controller-b:before { content: \"\\F43B\"; }\r\n\r\n.ion-ios-game-controller-b-outline:before { content: \"\\F43A\"; }\r\n\r\n.ion-ios-gear:before { content: \"\\F43D\"; }\r\n\r\n.ion-ios-gear-outline:before { content: \"\\F43C\"; }\r\n\r\n.ion-ios-glasses:before { content: \"\\F43F\"; }\r\n\r\n.ion-ios-glasses-outline:before { content: \"\\F43E\"; }\r\n\r\n.ion-ios-grid-view:before { content: \"\\F441\"; }\r\n\r\n.ion-ios-grid-view-outline:before { content: \"\\F440\"; }\r\n\r\n.ion-ios-heart:before { content: \"\\F443\"; }\r\n\r\n.ion-ios-heart-outline:before { content: \"\\F442\"; }\r\n\r\n.ion-ios-help:before { content: \"\\F446\"; }\r\n\r\n.ion-ios-help-empty:before { content: \"\\F444\"; }\r\n\r\n.ion-ios-help-outline:before { content: \"\\F445\"; }\r\n\r\n.ion-ios-home:before { content: \"\\F448\"; }\r\n\r\n.ion-ios-home-outline:before { content: \"\\F447\"; }\r\n\r\n.ion-ios-infinite:before { content: \"\\F44A\"; }\r\n\r\n.ion-ios-infinite-outline:before { content: \"\\F449\"; }\r\n\r\n.ion-ios-information:before { content: \"\\F44D\"; }\r\n\r\n.ion-ios-information-empty:before { content: \"\\F44B\"; }\r\n\r\n.ion-ios-information-outline:before { content: \"\\F44C\"; }\r\n\r\n.ion-ios-ionic-outline:before { content: \"\\F44E\"; }\r\n\r\n.ion-ios-keypad:before { content: \"\\F450\"; }\r\n\r\n.ion-ios-keypad-outline:before { content: \"\\F44F\"; }\r\n\r\n.ion-ios-lightbulb:before { content: \"\\F452\"; }\r\n\r\n.ion-ios-lightbulb-outline:before { content: \"\\F451\"; }\r\n\r\n.ion-ios-list:before { content: \"\\F454\"; }\r\n\r\n.ion-ios-list-outline:before { content: \"\\F453\"; }\r\n\r\n.ion-ios-location:before { content: \"\\F456\"; }\r\n\r\n.ion-ios-location-outline:before { content: \"\\F455\"; }\r\n\r\n.ion-ios-locked:before { content: \"\\F458\"; }\r\n\r\n.ion-ios-locked-outline:before { content: \"\\F457\"; }\r\n\r\n.ion-ios-loop:before { content: \"\\F45A\"; }\r\n\r\n.ion-ios-loop-strong:before { content: \"\\F459\"; }\r\n\r\n.ion-ios-medical:before { content: \"\\F45C\"; }\r\n\r\n.ion-ios-medical-outline:before { content: \"\\F45B\"; }\r\n\r\n.ion-ios-medkit:before { content: \"\\F45E\"; }\r\n\r\n.ion-ios-medkit-outline:before { content: \"\\F45D\"; }\r\n\r\n.ion-ios-mic:before { content: \"\\F461\"; }\r\n\r\n.ion-ios-mic-off:before { content: \"\\F45F\"; }\r\n\r\n.ion-ios-mic-outline:before { content: \"\\F460\"; }\r\n\r\n.ion-ios-minus:before { content: \"\\F464\"; }\r\n\r\n.ion-ios-minus-empty:before { content: \"\\F462\"; }\r\n\r\n.ion-ios-minus-outline:before { content: \"\\F463\"; }\r\n\r\n.ion-ios-monitor:before { content: \"\\F466\"; }\r\n\r\n.ion-ios-monitor-outline:before { content: \"\\F465\"; }\r\n\r\n.ion-ios-moon:before { content: \"\\F468\"; }\r\n\r\n.ion-ios-moon-outline:before { content: \"\\F467\"; }\r\n\r\n.ion-ios-more:before { content: \"\\F46A\"; }\r\n\r\n.ion-ios-more-outline:before { content: \"\\F469\"; }\r\n\r\n.ion-ios-musical-note:before { content: \"\\F46B\"; }\r\n\r\n.ion-ios-musical-notes:before { content: \"\\F46C\"; }\r\n\r\n.ion-ios-navigate:before { content: \"\\F46E\"; }\r\n\r\n.ion-ios-navigate-outline:before { content: \"\\F46D\"; }\r\n\r\n.ion-ios-nutrition:before { content: \"\\F470\"; }\r\n\r\n.ion-ios-nutrition-outline:before { content: \"\\F46F\"; }\r\n\r\n.ion-ios-paper:before { content: \"\\F472\"; }\r\n\r\n.ion-ios-paper-outline:before { content: \"\\F471\"; }\r\n\r\n.ion-ios-paperplane:before { content: \"\\F474\"; }\r\n\r\n.ion-ios-paperplane-outline:before { content: \"\\F473\"; }\r\n\r\n.ion-ios-partlysunny:before { content: \"\\F476\"; }\r\n\r\n.ion-ios-partlysunny-outline:before { content: \"\\F475\"; }\r\n\r\n.ion-ios-pause:before { content: \"\\F478\"; }\r\n\r\n.ion-ios-pause-outline:before { content: \"\\F477\"; }\r\n\r\n.ion-ios-paw:before { content: \"\\F47A\"; }\r\n\r\n.ion-ios-paw-outline:before { content: \"\\F479\"; }\r\n\r\n.ion-ios-people:before { content: \"\\F47C\"; }\r\n\r\n.ion-ios-people-outline:before { content: \"\\F47B\"; }\r\n\r\n.ion-ios-person:before { content: \"\\F47E\"; }\r\n\r\n.ion-ios-person-outline:before { content: \"\\F47D\"; }\r\n\r\n.ion-ios-personadd:before { content: \"\\F480\"; }\r\n\r\n.ion-ios-personadd-outline:before { content: \"\\F47F\"; }\r\n\r\n.ion-ios-photos:before { content: \"\\F482\"; }\r\n\r\n.ion-ios-photos-outline:before { content: \"\\F481\"; }\r\n\r\n.ion-ios-pie:before { content: \"\\F484\"; }\r\n\r\n.ion-ios-pie-outline:before { content: \"\\F483\"; }\r\n\r\n.ion-ios-pint:before { content: \"\\F486\"; }\r\n\r\n.ion-ios-pint-outline:before { content: \"\\F485\"; }\r\n\r\n.ion-ios-play:before { content: \"\\F488\"; }\r\n\r\n.ion-ios-play-outline:before { content: \"\\F487\"; }\r\n\r\n.ion-ios-plus:before { content: \"\\F48B\"; }\r\n\r\n.ion-ios-plus-empty:before { content: \"\\F489\"; }\r\n\r\n.ion-ios-plus-outline:before { content: \"\\F48A\"; }\r\n\r\n.ion-ios-pricetag:before { content: \"\\F48D\"; }\r\n\r\n.ion-ios-pricetag-outline:before { content: \"\\F48C\"; }\r\n\r\n.ion-ios-pricetags:before { content: \"\\F48F\"; }\r\n\r\n.ion-ios-pricetags-outline:before { content: \"\\F48E\"; }\r\n\r\n.ion-ios-printer:before { content: \"\\F491\"; }\r\n\r\n.ion-ios-printer-outline:before { content: \"\\F490\"; }\r\n\r\n.ion-ios-pulse:before { content: \"\\F493\"; }\r\n\r\n.ion-ios-pulse-strong:before { content: \"\\F492\"; }\r\n\r\n.ion-ios-rainy:before { content: \"\\F495\"; }\r\n\r\n.ion-ios-rainy-outline:before { content: \"\\F494\"; }\r\n\r\n.ion-ios-recording:before { content: \"\\F497\"; }\r\n\r\n.ion-ios-recording-outline:before { content: \"\\F496\"; }\r\n\r\n.ion-ios-redo:before { content: \"\\F499\"; }\r\n\r\n.ion-ios-redo-outline:before { content: \"\\F498\"; }\r\n\r\n.ion-ios-refresh:before { content: \"\\F49C\"; }\r\n\r\n.ion-ios-refresh-empty:before { content: \"\\F49A\"; }\r\n\r\n.ion-ios-refresh-outline:before { content: \"\\F49B\"; }\r\n\r\n.ion-ios-reload:before { content: \"\\F49D\"; }\r\n\r\n.ion-ios-reverse-camera:before { content: \"\\F49F\"; }\r\n\r\n.ion-ios-reverse-camera-outline:before { content: \"\\F49E\"; }\r\n\r\n.ion-ios-rewind:before { content: \"\\F4A1\"; }\r\n\r\n.ion-ios-rewind-outline:before { content: \"\\F4A0\"; }\r\n\r\n.ion-ios-rose:before { content: \"\\F4A3\"; }\r\n\r\n.ion-ios-rose-outline:before { content: \"\\F4A2\"; }\r\n\r\n.ion-ios-search:before { content: \"\\F4A5\"; }\r\n\r\n.ion-ios-search-strong:before { content: \"\\F4A4\"; }\r\n\r\n.ion-ios-settings:before { content: \"\\F4A7\"; }\r\n\r\n.ion-ios-settings-strong:before { content: \"\\F4A6\"; }\r\n\r\n.ion-ios-shuffle:before { content: \"\\F4A9\"; }\r\n\r\n.ion-ios-shuffle-strong:before { content: \"\\F4A8\"; }\r\n\r\n.ion-ios-skipbackward:before { content: \"\\F4AB\"; }\r\n\r\n.ion-ios-skipbackward-outline:before { content: \"\\F4AA\"; }\r\n\r\n.ion-ios-skipforward:before { content: \"\\F4AD\"; }\r\n\r\n.ion-ios-skipforward-outline:before { content: \"\\F4AC\"; }\r\n\r\n.ion-ios-snowy:before { content: \"\\F4AE\"; }\r\n\r\n.ion-ios-speedometer:before { content: \"\\F4B0\"; }\r\n\r\n.ion-ios-speedometer-outline:before { content: \"\\F4AF\"; }\r\n\r\n.ion-ios-star:before { content: \"\\F4B3\"; }\r\n\r\n.ion-ios-star-half:before { content: \"\\F4B1\"; }\r\n\r\n.ion-ios-star-outline:before { content: \"\\F4B2\"; }\r\n\r\n.ion-ios-stopwatch:before { content: \"\\F4B5\"; }\r\n\r\n.ion-ios-stopwatch-outline:before { content: \"\\F4B4\"; }\r\n\r\n.ion-ios-sunny:before { content: \"\\F4B7\"; }\r\n\r\n.ion-ios-sunny-outline:before { content: \"\\F4B6\"; }\r\n\r\n.ion-ios-telephone:before { content: \"\\F4B9\"; }\r\n\r\n.ion-ios-telephone-outline:before { content: \"\\F4B8\"; }\r\n\r\n.ion-ios-tennisball:before { content: \"\\F4BB\"; }\r\n\r\n.ion-ios-tennisball-outline:before { content: \"\\F4BA\"; }\r\n\r\n.ion-ios-thunderstorm:before { content: \"\\F4BD\"; }\r\n\r\n.ion-ios-thunderstorm-outline:before { content: \"\\F4BC\"; }\r\n\r\n.ion-ios-time:before { content: \"\\F4BF\"; }\r\n\r\n.ion-ios-time-outline:before { content: \"\\F4BE\"; }\r\n\r\n.ion-ios-timer:before { content: \"\\F4C1\"; }\r\n\r\n.ion-ios-timer-outline:before { content: \"\\F4C0\"; }\r\n\r\n.ion-ios-toggle:before { content: \"\\F4C3\"; }\r\n\r\n.ion-ios-toggle-outline:before { content: \"\\F4C2\"; }\r\n\r\n.ion-ios-trash:before { content: \"\\F4C5\"; }\r\n\r\n.ion-ios-trash-outline:before { content: \"\\F4C4\"; }\r\n\r\n.ion-ios-undo:before { content: \"\\F4C7\"; }\r\n\r\n.ion-ios-undo-outline:before { content: \"\\F4C6\"; }\r\n\r\n.ion-ios-unlocked:before { content: \"\\F4C9\"; }\r\n\r\n.ion-ios-unlocked-outline:before { content: \"\\F4C8\"; }\r\n\r\n.ion-ios-upload:before { content: \"\\F4CB\"; }\r\n\r\n.ion-ios-upload-outline:before { content: \"\\F4CA\"; }\r\n\r\n.ion-ios-videocam:before { content: \"\\F4CD\"; }\r\n\r\n.ion-ios-videocam-outline:before { content: \"\\F4CC\"; }\r\n\r\n.ion-ios-volume-high:before { content: \"\\F4CE\"; }\r\n\r\n.ion-ios-volume-low:before { content: \"\\F4CF\"; }\r\n\r\n.ion-ios-wineglass:before { content: \"\\F4D1\"; }\r\n\r\n.ion-ios-wineglass-outline:before { content: \"\\F4D0\"; }\r\n\r\n.ion-ios-world:before { content: \"\\F4D3\"; }\r\n\r\n.ion-ios-world-outline:before { content: \"\\F4D2\"; }\r\n\r\n.ion-ipad:before { content: \"\\F1F9\"; }\r\n\r\n.ion-iphone:before { content: \"\\F1FA\"; }\r\n\r\n.ion-ipod:before { content: \"\\F1FB\"; }\r\n\r\n.ion-jet:before { content: \"\\F295\"; }\r\n\r\n.ion-key:before { content: \"\\F296\"; }\r\n\r\n.ion-knife:before { content: \"\\F297\"; }\r\n\r\n.ion-laptop:before { content: \"\\F1FC\"; }\r\n\r\n.ion-leaf:before { content: \"\\F1FD\"; }\r\n\r\n.ion-levels:before { content: \"\\F298\"; }\r\n\r\n.ion-lightbulb:before { content: \"\\F299\"; }\r\n\r\n.ion-link:before { content: \"\\F1FE\"; }\r\n\r\n.ion-load-a:before { content: \"\\F29A\"; }\r\n\r\n.ion-load-b:before { content: \"\\F29B\"; }\r\n\r\n.ion-load-c:before { content: \"\\F29C\"; }\r\n\r\n.ion-load-d:before { content: \"\\F29D\"; }\r\n\r\n.ion-location:before { content: \"\\F1FF\"; }\r\n\r\n.ion-lock-combination:before { content: \"\\F4D4\"; }\r\n\r\n.ion-locked:before { content: \"\\F200\"; }\r\n\r\n.ion-log-in:before { content: \"\\F29E\"; }\r\n\r\n.ion-log-out:before { content: \"\\F29F\"; }\r\n\r\n.ion-loop:before { content: \"\\F201\"; }\r\n\r\n.ion-magnet:before { content: \"\\F2A0\"; }\r\n\r\n.ion-male:before { content: \"\\F2A1\"; }\r\n\r\n.ion-man:before { content: \"\\F202\"; }\r\n\r\n.ion-map:before { content: \"\\F203\"; }\r\n\r\n.ion-medkit:before { content: \"\\F2A2\"; }\r\n\r\n.ion-merge:before { content: \"\\F33F\"; }\r\n\r\n.ion-mic-a:before { content: \"\\F204\"; }\r\n\r\n.ion-mic-b:before { content: \"\\F205\"; }\r\n\r\n.ion-mic-c:before { content: \"\\F206\"; }\r\n\r\n.ion-minus:before { content: \"\\F209\"; }\r\n\r\n.ion-minus-circled:before { content: \"\\F207\"; }\r\n\r\n.ion-minus-round:before { content: \"\\F208\"; }\r\n\r\n.ion-model-s:before { content: \"\\F2C1\"; }\r\n\r\n.ion-monitor:before { content: \"\\F20A\"; }\r\n\r\n.ion-more:before { content: \"\\F20B\"; }\r\n\r\n.ion-mouse:before { content: \"\\F340\"; }\r\n\r\n.ion-music-note:before { content: \"\\F20C\"; }\r\n\r\n.ion-navicon:before { content: \"\\F20E\"; }\r\n\r\n.ion-navicon-round:before { content: \"\\F20D\"; }\r\n\r\n.ion-navigate:before { content: \"\\F2A3\"; }\r\n\r\n.ion-network:before { content: \"\\F341\"; }\r\n\r\n.ion-no-smoking:before { content: \"\\F2C2\"; }\r\n\r\n.ion-nuclear:before { content: \"\\F2A4\"; }\r\n\r\n.ion-outlet:before { content: \"\\F342\"; }\r\n\r\n.ion-paintbrush:before { content: \"\\F4D5\"; }\r\n\r\n.ion-paintbucket:before { content: \"\\F4D6\"; }\r\n\r\n.ion-paper-airplane:before { content: \"\\F2C3\"; }\r\n\r\n.ion-paperclip:before { content: \"\\F20F\"; }\r\n\r\n.ion-pause:before { content: \"\\F210\"; }\r\n\r\n.ion-person:before { content: \"\\F213\"; }\r\n\r\n.ion-person-add:before { content: \"\\F211\"; }\r\n\r\n.ion-person-stalker:before { content: \"\\F212\"; }\r\n\r\n.ion-pie-graph:before { content: \"\\F2A5\"; }\r\n\r\n.ion-pin:before { content: \"\\F2A6\"; }\r\n\r\n.ion-pinpoint:before { content: \"\\F2A7\"; }\r\n\r\n.ion-pizza:before { content: \"\\F2A8\"; }\r\n\r\n.ion-plane:before { content: \"\\F214\"; }\r\n\r\n.ion-planet:before { content: \"\\F343\"; }\r\n\r\n.ion-play:before { content: \"\\F215\"; }\r\n\r\n.ion-playstation:before { content: \"\\F30A\"; }\r\n\r\n.ion-plus:before { content: \"\\F218\"; }\r\n\r\n.ion-plus-circled:before { content: \"\\F216\"; }\r\n\r\n.ion-plus-round:before { content: \"\\F217\"; }\r\n\r\n.ion-podium:before { content: \"\\F344\"; }\r\n\r\n.ion-pound:before { content: \"\\F219\"; }\r\n\r\n.ion-power:before { content: \"\\F2A9\"; }\r\n\r\n.ion-pricetag:before { content: \"\\F2AA\"; }\r\n\r\n.ion-pricetags:before { content: \"\\F2AB\"; }\r\n\r\n.ion-printer:before { content: \"\\F21A\"; }\r\n\r\n.ion-pull-request:before { content: \"\\F345\"; }\r\n\r\n.ion-qr-scanner:before { content: \"\\F346\"; }\r\n\r\n.ion-quote:before { content: \"\\F347\"; }\r\n\r\n.ion-radio-waves:before { content: \"\\F2AC\"; }\r\n\r\n.ion-record:before { content: \"\\F21B\"; }\r\n\r\n.ion-refresh:before { content: \"\\F21C\"; }\r\n\r\n.ion-reply:before { content: \"\\F21E\"; }\r\n\r\n.ion-reply-all:before { content: \"\\F21D\"; }\r\n\r\n.ion-ribbon-a:before { content: \"\\F348\"; }\r\n\r\n.ion-ribbon-b:before { content: \"\\F349\"; }\r\n\r\n.ion-sad:before { content: \"\\F34A\"; }\r\n\r\n.ion-sad-outline:before { content: \"\\F4D7\"; }\r\n\r\n.ion-scissors:before { content: \"\\F34B\"; }\r\n\r\n.ion-search:before { content: \"\\F21F\"; }\r\n\r\n.ion-settings:before { content: \"\\F2AD\"; }\r\n\r\n.ion-share:before { content: \"\\F220\"; }\r\n\r\n.ion-shuffle:before { content: \"\\F221\"; }\r\n\r\n.ion-skip-backward:before { content: \"\\F222\"; }\r\n\r\n.ion-skip-forward:before { content: \"\\F223\"; }\r\n\r\n.ion-social-android:before { content: \"\\F225\"; }\r\n\r\n.ion-social-android-outline:before { content: \"\\F224\"; }\r\n\r\n.ion-social-angular:before { content: \"\\F4D9\"; }\r\n\r\n.ion-social-angular-outline:before { content: \"\\F4D8\"; }\r\n\r\n.ion-social-apple:before { content: \"\\F227\"; }\r\n\r\n.ion-social-apple-outline:before { content: \"\\F226\"; }\r\n\r\n.ion-social-bitcoin:before { content: \"\\F2AF\"; }\r\n\r\n.ion-social-bitcoin-outline:before { content: \"\\F2AE\"; }\r\n\r\n.ion-social-buffer:before { content: \"\\F229\"; }\r\n\r\n.ion-social-buffer-outline:before { content: \"\\F228\"; }\r\n\r\n.ion-social-chrome:before { content: \"\\F4DB\"; }\r\n\r\n.ion-social-chrome-outline:before { content: \"\\F4DA\"; }\r\n\r\n.ion-social-codepen:before { content: \"\\F4DD\"; }\r\n\r\n.ion-social-codepen-outline:before { content: \"\\F4DC\"; }\r\n\r\n.ion-social-css3:before { content: \"\\F4DF\"; }\r\n\r\n.ion-social-css3-outline:before { content: \"\\F4DE\"; }\r\n\r\n.ion-social-designernews:before { content: \"\\F22B\"; }\r\n\r\n.ion-social-designernews-outline:before { content: \"\\F22A\"; }\r\n\r\n.ion-social-dribbble:before { content: \"\\F22D\"; }\r\n\r\n.ion-social-dribbble-outline:before { content: \"\\F22C\"; }\r\n\r\n.ion-social-dropbox:before { content: \"\\F22F\"; }\r\n\r\n.ion-social-dropbox-outline:before { content: \"\\F22E\"; }\r\n\r\n.ion-social-euro:before { content: \"\\F4E1\"; }\r\n\r\n.ion-social-euro-outline:before { content: \"\\F4E0\"; }\r\n\r\n.ion-social-facebook:before { content: \"\\F231\"; }\r\n\r\n.ion-social-facebook-outline:before { content: \"\\F230\"; }\r\n\r\n.ion-social-foursquare:before { content: \"\\F34D\"; }\r\n\r\n.ion-social-foursquare-outline:before { content: \"\\F34C\"; }\r\n\r\n.ion-social-freebsd-devil:before { content: \"\\F2C4\"; }\r\n\r\n.ion-social-github:before { content: \"\\F233\"; }\r\n\r\n.ion-social-github-outline:before { content: \"\\F232\"; }\r\n\r\n.ion-social-google:before { content: \"\\F34F\"; }\r\n\r\n.ion-social-google-outline:before { content: \"\\F34E\"; }\r\n\r\n.ion-social-googleplus:before { content: \"\\F235\"; }\r\n\r\n.ion-social-googleplus-outline:before { content: \"\\F234\"; }\r\n\r\n.ion-social-hackernews:before { content: \"\\F237\"; }\r\n\r\n.ion-social-hackernews-outline:before { content: \"\\F236\"; }\r\n\r\n.ion-social-html5:before { content: \"\\F4E3\"; }\r\n\r\n.ion-social-html5-outline:before { content: \"\\F4E2\"; }\r\n\r\n.ion-social-instagram:before { content: \"\\F351\"; }\r\n\r\n.ion-social-instagram-outline:before { content: \"\\F350\"; }\r\n\r\n.ion-social-javascript:before { content: \"\\F4E5\"; }\r\n\r\n.ion-social-javascript-outline:before { content: \"\\F4E4\"; }\r\n\r\n.ion-social-linkedin:before { content: \"\\F239\"; }\r\n\r\n.ion-social-linkedin-outline:before { content: \"\\F238\"; }\r\n\r\n.ion-social-markdown:before { content: \"\\F4E6\"; }\r\n\r\n.ion-social-nodejs:before { content: \"\\F4E7\"; }\r\n\r\n.ion-social-octocat:before { content: \"\\F4E8\"; }\r\n\r\n.ion-social-pinterest:before { content: \"\\F2B1\"; }\r\n\r\n.ion-social-pinterest-outline:before { content: \"\\F2B0\"; }\r\n\r\n.ion-social-python:before { content: \"\\F4E9\"; }\r\n\r\n.ion-social-reddit:before { content: \"\\F23B\"; }\r\n\r\n.ion-social-reddit-outline:before { content: \"\\F23A\"; }\r\n\r\n.ion-social-rss:before { content: \"\\F23D\"; }\r\n\r\n.ion-social-rss-outline:before { content: \"\\F23C\"; }\r\n\r\n.ion-social-sass:before { content: \"\\F4EA\"; }\r\n\r\n.ion-social-skype:before { content: \"\\F23F\"; }\r\n\r\n.ion-social-skype-outline:before { content: \"\\F23E\"; }\r\n\r\n.ion-social-snapchat:before { content: \"\\F4EC\"; }\r\n\r\n.ion-social-snapchat-outline:before { content: \"\\F4EB\"; }\r\n\r\n.ion-social-tumblr:before { content: \"\\F241\"; }\r\n\r\n.ion-social-tumblr-outline:before { content: \"\\F240\"; }\r\n\r\n.ion-social-tux:before { content: \"\\F2C5\"; }\r\n\r\n.ion-social-twitch:before { content: \"\\F4EE\"; }\r\n\r\n.ion-social-twitch-outline:before { content: \"\\F4ED\"; }\r\n\r\n.ion-social-twitter:before { content: \"\\F243\"; }\r\n\r\n.ion-social-twitter-outline:before { content: \"\\F242\"; }\r\n\r\n.ion-social-usd:before { content: \"\\F353\"; }\r\n\r\n.ion-social-usd-outline:before { content: \"\\F352\"; }\r\n\r\n.ion-social-vimeo:before { content: \"\\F245\"; }\r\n\r\n.ion-social-vimeo-outline:before { content: \"\\F244\"; }\r\n\r\n.ion-social-whatsapp:before { content: \"\\F4F0\"; }\r\n\r\n.ion-social-whatsapp-outline:before { content: \"\\F4EF\"; }\r\n\r\n.ion-social-windows:before { content: \"\\F247\"; }\r\n\r\n.ion-social-windows-outline:before { content: \"\\F246\"; }\r\n\r\n.ion-social-wordpress:before { content: \"\\F249\"; }\r\n\r\n.ion-social-wordpress-outline:before { content: \"\\F248\"; }\r\n\r\n.ion-social-yahoo:before { content: \"\\F24B\"; }\r\n\r\n.ion-social-yahoo-outline:before { content: \"\\F24A\"; }\r\n\r\n.ion-social-yen:before { content: \"\\F4F2\"; }\r\n\r\n.ion-social-yen-outline:before { content: \"\\F4F1\"; }\r\n\r\n.ion-social-youtube:before { content: \"\\F24D\"; }\r\n\r\n.ion-social-youtube-outline:before { content: \"\\F24C\"; }\r\n\r\n.ion-soup-can:before { content: \"\\F4F4\"; }\r\n\r\n.ion-soup-can-outline:before { content: \"\\F4F3\"; }\r\n\r\n.ion-speakerphone:before { content: \"\\F2B2\"; }\r\n\r\n.ion-speedometer:before { content: \"\\F2B3\"; }\r\n\r\n.ion-spoon:before { content: \"\\F2B4\"; }\r\n\r\n.ion-star:before { content: \"\\F24E\"; }\r\n\r\n.ion-stats-bars:before { content: \"\\F2B5\"; }\r\n\r\n.ion-steam:before { content: \"\\F30B\"; }\r\n\r\n.ion-stop:before { content: \"\\F24F\"; }\r\n\r\n.ion-thermometer:before { content: \"\\F2B6\"; }\r\n\r\n.ion-thumbsdown:before { content: \"\\F250\"; }\r\n\r\n.ion-thumbsup:before { content: \"\\F251\"; }\r\n\r\n.ion-toggle:before { content: \"\\F355\"; }\r\n\r\n.ion-toggle-filled:before { content: \"\\F354\"; }\r\n\r\n.ion-transgender:before { content: \"\\F4F5\"; }\r\n\r\n.ion-trash-a:before { content: \"\\F252\"; }\r\n\r\n.ion-trash-b:before { content: \"\\F253\"; }\r\n\r\n.ion-trophy:before { content: \"\\F356\"; }\r\n\r\n.ion-tshirt:before { content: \"\\F4F7\"; }\r\n\r\n.ion-tshirt-outline:before { content: \"\\F4F6\"; }\r\n\r\n.ion-umbrella:before { content: \"\\F2B7\"; }\r\n\r\n.ion-university:before { content: \"\\F357\"; }\r\n\r\n.ion-unlocked:before { content: \"\\F254\"; }\r\n\r\n.ion-upload:before { content: \"\\F255\"; }\r\n\r\n.ion-usb:before { content: \"\\F2B8\"; }\r\n\r\n.ion-videocamera:before { content: \"\\F256\"; }\r\n\r\n.ion-volume-high:before { content: \"\\F257\"; }\r\n\r\n.ion-volume-low:before { content: \"\\F258\"; }\r\n\r\n.ion-volume-medium:before { content: \"\\F259\"; }\r\n\r\n.ion-volume-mute:before { content: \"\\F25A\"; }\r\n\r\n.ion-wand:before { content: \"\\F358\"; }\r\n\r\n.ion-waterdrop:before { content: \"\\F25B\"; }\r\n\r\n.ion-wifi:before { content: \"\\F25C\"; }\r\n\r\n.ion-wineglass:before { content: \"\\F2B9\"; }\r\n\r\n.ion-woman:before { content: \"\\F25D\"; }\r\n\r\n.ion-wrench:before { content: \"\\F2BA\"; }\r\n\r\n.ion-xbox:before { content: \"\\F30C\"; }\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './fonts/ionicons.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./nativescript-fonticon/lib.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.mapCss = function (data, debug) {
  var map = {};
  var sets = data.split('}');

  for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
    var set = sets_1[_i];
    var pair = set.split(/:before\s*{/);
    var keyGroups = pair[0];
    var keys = keyGroups.split(',');

    if (pair[1]) {
      var value = exports.cleanValue(pair[1]);

      if (!value) {
        continue;
      }

      for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        key = key.trim().slice(1).split(':before')[0];
        map[key] = String.fromCharCode(parseInt(value.substring(2), 16));

        if (debug) {
          console.log(key + ": " + value);
        }
      }
    }
  }

  return map;
};

exports.cleanValue = function (val) {
  var matches = val.match(/content:\s*"\\f([^"]+)"/i);

  if (matches) {
    return "\\uf" + matches[1];
  }

  return void 0;
};

/***/ }),

/***/ "./nativescript-fonticon/nativescript-fonticon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var file_system_1 = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");

var lib = __webpack_require__("./nativescript-fonticon/lib.js");

var TNSFontIcon = function () {
  function TNSFontIcon() {}

  TNSFontIcon.loadCss = function () {
    var cnt = 0;
    var currentName;
    var fontIconCollections = Object.keys(TNSFontIcon.paths);

    if (TNSFontIcon.debug) {
      console.log("Collections to load: " + fontIconCollections);
    }

    var initCollection = function initCollection() {
      currentName = fontIconCollections[cnt];
      TNSFontIcon.css[currentName] = {};
    };

    var loadFile = function loadFile(path) {
      if (TNSFontIcon.debug) {
        console.log('----------');
        console.log("Loading collection '" + currentName + "' from file: " + path);
      }

      var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
      return new Promise(function (resolve, reject) {
        cssFile.readText().then(function (data) {
          var map = lib.mapCss(data, TNSFontIcon.debug);
          TNSFontIcon.css[currentName] = map;
          resolve();
        }, function (err) {
          reject(err);
        });
      });
    };

    var loadFiles = function loadFiles() {
      return new Promise(function (resolve) {
        initCollection();

        if (cnt < fontIconCollections.length) {
          loadFile(TNSFontIcon.paths[currentName]).then(function () {
            cnt++;
            return loadFiles().then(function () {
              resolve();
            });
          });
        } else {
          resolve();
        }
      });
    };

    return loadFiles();
  };

  TNSFontIcon.css = {};
  TNSFontIcon.paths = {};
  TNSFontIcon.debug = false;
  return TNSFontIcon;
}();

exports.TNSFontIcon = TNSFontIcon;

function fonticon(value) {
  if (value) {
    if (value.indexOf('-') > -1) {
      var prefix = value.split('-')[0];
      return TNSFontIcon.css[prefix][value];
    } else {
      console.log('Fonticon classname did not contain a prefix. i.e., \'fa-bluetooth\'');
    }
  }

  return value;
}

exports.fonticon = fonticon;

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NGY3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT85OTc0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT83MTQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlPzAzNjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlPzY5MDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlP2Y5N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT85MzA3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT84ZTA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT82YzQ1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlP2ZjMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlPzI1MjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzQ0NDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT9hNzZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWU/NDllYiIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXV0aC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/OWI4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWU/NjlhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT9iMDg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbURldGFpbHMudnVlPzI3NGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT9jMDQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT9lNTE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT8wYzg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlPzMzZmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWU/NzY2YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZT82ZTM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/N2Y2MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/MDgzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/MTI1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzg3OWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzQyYzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzJjNmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlP2Q5N2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT9mOTllIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWU/YjQwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWU/ZmFhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlP2EyNWUiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcyIsIndlYnBhY2s6Ly8vLi9mb250cy9pb25pY29ucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL2xpYi5qcyIsIndlYnBhY2s6Ly8vLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbmF0aXZlc2NyaXB0LWZvbnRpY29uLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJUTlNGb250SWNvbiIsIlZ1ZSIsImZpbHRlciIsImZvbnRpY29uIiwicmVuZGVyIiwiaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY2xpZW50IiwiY29uZmlndXJlT0F1dGhQcm92aWRlcnMiLCJtaWNyb3NvZnRQcm92aWRlciIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJNaWNyb3NvZnQiLCJnb29nbGVQcm92aWRlciIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJHb29nbGUiLCJmYWNlYm9va1Byb3ZpZGVyIiwiY29uZmlndXJlT0F1dGhQcm92aWRlckZhY2Vib29rIiwibmF0aXZlc2NyaXB0X29hdXRoMl8xIiwiY29uZmlndXJlVG5zT0F1dGgiLCJnb29nbGVQcm92aWRlck9wdGlvbnMiLCJvcGVuSWRTdXBwb3J0IiwiY2xpZW50SWQiLCJyZWRpcmVjdFVyaSIsInVybFNjaGVtZSIsInNjb3BlcyIsInByb3ZpZGVyc18xIiwiVG5zT2FQcm92aWRlckdvb2dsZSIsImZhY2Vib29rUHJvdmlkZXJPcHRpb25zIiwiY2xpZW50U2VjcmV0IiwiVG5zT2FQcm92aWRlckZhY2Vib29rIiwibWljcm9zb2Z0UHJvdmlkZXJPcHRpb25zIiwiVG5zT2FQcm92aWRlck1pY3Jvc29mdCIsInRuc09hdXRoTG9naW4iLCJwcm92aWRlclR5cGUiLCJUbnNPQXV0aENsaWVudCIsImxvZ2luV2l0aENvbXBsZXRpb24iLCJ0b2tlblJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRuc09hdXRoTG9nb3V0IiwibG9nb3V0IiwibWFwQ3NzIiwiZGF0YSIsImRlYnVnIiwibWFwIiwic2V0cyIsInNwbGl0IiwiX2kiLCJzZXRzXzEiLCJsZW5ndGgiLCJzZXQiLCJwYWlyIiwia2V5R3JvdXBzIiwia2V5cyIsImNsZWFuVmFsdWUiLCJfYSIsImtleXNfMSIsImtleSIsInRyaW0iLCJzbGljZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidmFsIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlsZV9zeXN0ZW1fMSIsInJlcXVpcmUiLCJsaWIiLCJsb2FkQ3NzIiwiY250IiwiY3VycmVudE5hbWUiLCJmb250SWNvbkNvbGxlY3Rpb25zIiwicGF0aHMiLCJpbml0Q29sbGVjdGlvbiIsImNzcyIsImxvYWRGaWxlIiwicGF0aCIsImNzc0ZpbGUiLCJrbm93bkZvbGRlcnMiLCJjdXJyZW50QXBwIiwiZ2V0RmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZFRleHQiLCJ0aGVuIiwiZXJyIiwibG9hZEZpbGVzIiwiaW5kZXhPZiIsInByZWZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUlBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLDhEQUZBO0FBR0E7QUFIQSxHQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FOQTs7QUFZQSxhQUNBO0FBQ0EsR0FkQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBLE9BREE7QUFJQSxpQkFKQTtBQUtBLDRCQUxB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QUFDOEUsR0FBWixHQUFrQixFQUFsQjtBQUNBOUUsYUFBVyxDQUFDNEUsS0FBWixHQUFvQixFQUFwQjtBQUNBNUUsYUFBVyxDQUFDNkMsS0FBWixHQUFvQixLQUFwQjtBQUNBLFNBQU83QyxXQUFQO0FBQ0gsQ0FwRGtCLEVBQW5COztBQXFEQVEsT0FBTyxDQUFDUixXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRyxRQUFULENBQWtCTSxLQUFsQixFQUF5QjtBQUNyQixNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJQSxLQUFLLENBQUNtRixPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLFVBQUlDLE1BQU0sR0FBR3BGLEtBQUssQ0FBQ3VDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWI7QUFDQSxhQUFPaEQsV0FBVyxDQUFDOEUsR0FBWixDQUFnQmUsTUFBaEIsRUFBd0JwRixLQUF4QixDQUFQO0FBQ0gsS0FIRCxNQUlLO0FBQ0Q4QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxxRUFBWjtBQUNIO0FBQ0o7O0FBQ0QsU0FBTy9CLEtBQVA7QUFDSDs7QUFDREQsT0FBTyxDQUFDTCxRQUFSLEdBQW1CQSxRQUFuQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuICAgIDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcblxyXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG4gICAgICA8R3JpZExheW91dFxyXG4gICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgIHJlZj1cIm5hdlN0YXR1c0JhclwiXHJcbiAgICAgICAgY2xhc3M9XCJuYXZTdGF0dXNCYXJcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNiZDIxMjJcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cIiosYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cInN0YXR1cy10aXRsZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjb2w9XCIwXCJcclxuICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgQHRhcD1cInNlYXJjaFwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuICAgICAgICAgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY29sPVwiMVwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIEB0YXA9XCJiZWxsXCJcclxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG4gICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY29sPVwiMlwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIEB0YXA9XCJvZmZlclwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuICAgICAgICAgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBAdGFwPVwiZ29Ub0xvZ2luXCJcclxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICBjb2w9XCIzXCJcclxuICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtcHJvZmlsZVwiXHJcbiAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8R3JpZExheW91dFxyXG4gICAgICAgIHJvdz1cIjFcIlxyXG4gICAgICAgIHJlZj1cIm5hdlRhYlwiXHJcbiAgICAgICAgY2xhc3M9XCJuYXZUYWJcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICBjbGFzcz1cInRhYnZpZXdcIlxyXG4gICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgIEB0YXA9XCJwb3B1bGFyXCJcclxuICAgICAgICAgIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgY29scz1cImF1dG9cIlxyXG4gICAgICAgICAgY29sPVwiMFwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzMlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCJcclxuICAgICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J34vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZyc6JydcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCIgdGV4dD1cIlBPUFVMQVJcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgIGNsYXNzPVwidGFidmlld1wiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG4gICAgICAgICAgQHRhcD1cInNob3dDYXRlZ29yeVwiXHJcbiAgICAgICAgICByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgIGNvbHM9XCJhdXRvXCJcclxuICAgICAgICAgIGNvbD1cIjFcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjM0JVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCJcclxuICAgICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWxcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgICAgcm93PVwiMVwiXHJcbiAgICAgICAgICAgIHRleHQ9XCJDQVRFR09SWVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFidmlld1RleHRcIlxyXG4gICAgICAgICAgPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICBjbGFzcz1cInRhYnZpZXdcIlxyXG4gICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgIEB0YXA9XCJzaG93UHJvbW9zXCJcclxuICAgICAgICAgIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgY29scz1cImF1dG9cIlxyXG4gICAgICAgICAgY29sPVwiMlwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzMlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxyXG4gICAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFidmlldz09Mj8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCIgdGV4dD1cIlBST01PU1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICA8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgIDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgPExpc3RWaWV3XHJcbiAgICAgICAgICByZWY9XCJsaXN0dmlld1wiXHJcbiAgICAgICAgICBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+PC9DYXRlZ29yeT5cclxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPjwvR3JpZExheW91dD5cclxuXHJcbiAgICAgIDxuYXZCb3R0b20gcm93PVwiM1wiIC8+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgPC9wYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xyXG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IG5hdkJvdHRvbSBmcm9tIFwiLi9jdXN0b20vbmF2Qm90dG9tXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2N1c3RvbS9pdGVtXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IFFyTW9kYWwgZnJvbSBcIi4vY3VzdG9tL29mZmVyUXJNb2RhbFwiO1xyXG5pbXBvcnQgSXRlbURldGFpbHMgZnJvbSBcIi4vSXRlbURldGFpbHNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2N1c3RvbS9sb2dpblwiO1xyXG5jb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTtcclxuY29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgbmF2Qm90dG9tLFxyXG4gICAgSXRlbSxcclxuICAgIENhdGVnb3J5XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaXRlbXNDYXRlZ29yeSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcihcIiNiNTEyMTNcIik7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcm91dGVzOiB7XHJcbiAgICAgICAgbG9naW46IExvZ2luXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3REZWxZOiAwLFxyXG4gICAgICBoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFRhYjogMCxcclxuICAgICAgc2VsZWN0ZWRUYWJ2aWV3OiAwLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMi5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQnVyZ2VyXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA5ODcsXHJcbiAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOiAxMyxcclxuICAgICAgICAgIHJhdGluZzogXCI0LjVcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTEuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMi5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTQuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJQYW5jYWtlXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIyMzAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA4OTEsXHJcbiAgICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudHM6IDcsXHJcbiAgICAgICAgICByYXRpbmc6IFwiNC4wXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQmlub25kbyBCbGFjayBGb3Jlc3QgQ2FrZVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTIuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJDYWtlXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA3MzAsXHJcbiAgICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudHM6IDExLFxyXG4gICAgICAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkJVUkdFUlwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIlBBTkNBS0VcIixcclxuICAgICAgICAgIGNvdW50OiBcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNBS0VcIixcclxuICAgICAgICAgIGNvdW50OiBcIjlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkJFRVJcIixcclxuICAgICAgICAgIGNvdW50OiBcIjdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNlYXJjaCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hcIik7XHJcbiAgICB9LFxyXG4gICAgYmVsbCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJiZWxsXCIpO1xyXG4gICAgfSxcclxuICAgIG9mZmVyKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlFSXCIpO1xyXG4gICAgICB0aGlzLiRzaG93TW9kYWwoUXJNb2RhbCk7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0xvZ2luKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7fSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0l0ZW0ocGF5bG9hZCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLCB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGl0ZW06IHBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBvcHVsYXIoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuICAgIH0sXHJcbiAgICBzaG93Q2F0ZWdvcnkoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuICAgIH0sXHJcbiAgICBzaG93UHJvbW9zKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XHJcbiAgICB9LFxyXG4gICAgaG9tZSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcbiAgICB9LFxyXG4gICAgY2FydCgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcbiAgICB9LFxyXG4gICAgYWJvdXQoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJ2aWV3LmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiA1MDtcclxufVxyXG4udGFidmlld1RleHQge1xyXG4gIG1hcmdpbi10b3A6IDE1O1xyXG4gIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgZm9udC1zaXplOiAxMztcclxuICBjb2xvcjogI2Q4ZDJkMjtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZUYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMjI7XHJcbn1cclxuLm5hdlRhYnZpZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnN0YXR1cy1pbWcge1xyXG4gIG1hcmdpbi10b3A6IDQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcclxuICB3aWR0aDogMzA7XHJcbiAgaGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXByb2ZpbGUge1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gIHdpZHRoOiAzMDtcclxuICBoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTtcclxuICBtYXJnaW4tdG9wOiA4O1xyXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJhbmltLXBhZ2VcIlxyXG4gICAgICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCIgQGxvYWRlZD1cIm9uTG9hZGVkXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWNvdmVyXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjBcIiBjb2w9XCIwXCIgbWFyZ2luVG9wPVwiLTQwXCIgaGVpZ2h0PVwiMTgwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWdcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIiBAdGFwPVwiY2xvc2VcIiA6dGV4dD1cIidmYS1hcnJvdy1sZWZ0JyB8IGZvbnRpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGNsb3NlXCIgZm9udFNpemU9XCIyNFwiIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYW5pbS1pbWFnZXNcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHYtZm9yPVwiaW1hZ2UgaW4gaXRlbS5pbWFnZXNcIiByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRodW1iXCIgcm93PVwiMFwiIGNvbD1cIjBcIiA6c3JjPVwiaW1hZ2Uuc3JjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWl0ZW1JbmZvXCIgbWFyZ2luVG9wPVwiMTVcIiByb3c9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY2F0ZWdvcnlJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1uYW1lXCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgOnRleHQ9XCInQXZlcmFnZSBSYXRlOicgKyBpdGVtLnJhdGluZyBcIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiBjb2w9XCIxXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmEgcmF0ZVwiIDp0ZXh0PVwiJ2ZhLXN0YXInIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYSByYXRlXCIgOnRleHQ9XCInZmEtc3RhcicgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmEgcmF0ZVwiIDp0ZXh0PVwiJ2ZhLXN0YXItaGFsZi1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGluZSBhbmltLWxpa2VzXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1saWtlc1wiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiYXV0bywqLGF1dG8sYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVMaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImxpa2VcIiBjbGFzcz1cImxpa2UtaWNvbiBmYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXNMaWtlID8gJ2xpa2VkLWFjdGl2ZScgOiAnZGVmYXVsdCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXNMaWtlID8gJ2ZhLXRodW1icy11cCc6J2ZhLXRodW1icy1vLXVwJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0ubGlrZXNcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIG1hcmdpbkxlZnQ9XCIxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtY29tbWVudC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmNvbW1lbnRzXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjJcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpc0hlYXJ0ID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXNIZWFydCA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwibGluZUJyZWFrIGFuaW0tbGlrZXNcIiAvPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRsYXlvdXQgcm93cz1cImF1dG8sKlwiIGNsYXNzPVwiY29udGVudCBhbmltLWNvbnRlbnRcIiBtYXJnaW5Ub3A9XCIxNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjBcIiByb3dzPVwiYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVcIiBjb2x1bW5zPVwiYXV0bywgYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgOnRleHQ9XCInZmEtdGFncycgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgZGVzY3JpcHRpb24taWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIiB0ZXh0PVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHR2aWV3IGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZGxheW91dD5cclxuXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge30sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQnVyZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmVlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpa2UgPSB0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgICAgICB0aGlzLmlzSGVhcnQgPSB0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRlRnJvbSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVGcm9tKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdmVyID0gdGhpcy4kcmVmcy5jb3Zlci5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuJHJlZnMuaW1hZ2VzLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJlZnMucGFnZS5uYXRpdmVWaWV3O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlcy50cmFuc2xhdGVZID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdmVyLnRyYW5zbGF0ZVkgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvdmVyLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIChwYWdlLmJhY2tncm91bmRDb2xvciA9IFwiI2Q0ZDZkOFwiKSwgdGhpcy5hbmltYXRlVG8oKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZVRvKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdmVyID0gdGhpcy4kcmVmcy5jb3Zlci5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuJHJlZnMuaW1hZ2VzLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJlZnMucGFnZS5uYXRpdmVWaWV3O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGltYWdlcy5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vIFx0c2NhbGU6IHsgeDogMSwgeTogMSB9ICxcclxuICAgICAgICAgICAgICAgIC8vIFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgICAgLy8gXHRvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgICAgIC8vIFx0ZGVsYXk6IDE1MFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY292ZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY292ZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5saWtlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUxpa2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWtlID0gIXRoaXMuaXNMaWtlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMaWtlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSGVhcnQgPSAhdGhpcy5pc0hlYXJ0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVx0YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XHJcbiAgICAgICAgbWFyZ2luOiAxNSAwIDAgMTU7XHJcbiAgICB9XHJcblxyXG4gICAgVGV4dFZpZXcge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjM2U5ZWRiO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogODtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogI0ZGRTkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlZC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjNDA4MEZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFydC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjYjUxMjEzO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0IHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBwYWRkaW5nOiA1IDAgNSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjtcclxuICAgICAgICBwYWRkaW5nOiA1IDUgNSA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICAgICAgICB3aWR0aDogNDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMztcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTtcclxuICAgICAgICB3aWR0aDogMTMwO1xyXG4gICAgICAgIGhlaWdodDogNzA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lQnJlYWsge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLXBhZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LXBhZ2Uge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWNvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41O1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWltYWdlcyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWltYWdlcztcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGtleS1pbWFnZXMge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWl0ZW1JbmZvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4yO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktaXRlbUluZm8ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1saWtlcyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNTtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LWxpa2VzIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW0tY29udGVudCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS44O1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktY29udGVudCB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD1cIjE1MFwiIHdpZHRoPVwiMTAwJVwiIG1hcmdpbkJvdHRvbT1cIjEwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+IC8+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiYmFubmVyMlwiIGJhY2tncm91bmRDb2xvcj1cIiM0ODllOWU5ZVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeSArICcgKCcgKyAgaXRlbS5jb3VudCAgKyAgJyknXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIiB0ZXh0d3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIDwvR3JpZExheW91dD5cclxuXHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIGRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGVmYXVsdC1pbWcge1xyXG4gICAgICAgIGNvbG9yOiAjZDFjZWNlNWI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1IDAgMTUgMFxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1haW5cIj5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgY2xhc3M9XCJjYXJkLWltZ1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0b1wiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJjYXRlZ29yeUljb24gfCBmb250aWNvblwiIHJvdz1cIjBcIiBjb2w9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuPVwiMlwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJpdGVtLmNhdGVnb3J5VGFnXCIgY2xhc3M9XCJmYSBjYXRlZ29yeS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1uYW1lXCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3c9XCIxXCIgY29sPVwiMVwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJmYSByYXRpbmctaWNvblwiIDp0ZXh0PVwiJ2ZhLXN0YXInIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIyXCIgcm93PVwiMFwiIGNsYXNzPVwicmF0aW5nLXZhbHVlIGl0ZW0tY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ucmF0aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgbWFyZ2luVG9wPVwiNVwiIGNsYXNzPVwibGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgICA8IS0tIEhlcmUgdGhlIHByb2JsZW0gaW4gc2Nyb2xsIHRyYW5zaXN0aW9uIC0tPlxyXG4gICAgICAgICAgICA8SXRlbUxpa2UgOml0ZW09XCJpdGVtXCI+PC9JdGVtTGlrZT5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWtcIiAvPlxyXG5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEl0ZW1MaWtlIGZyb20gXCIuL2l0ZW1MaWtlXCI7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGlzSU9TLFxyXG4gICAgICAgIGlzQW5kcm9pZFxyXG4gICAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgSXRlbUxpa2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWNvbigpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCZWVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJlZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtY29mZmVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0xpa2UgPSAgdGhpcy5pdGVtLmlzTGlrZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmlzSGVhcnQgPSAgdGhpcy5pdGVtLmlzRmF2b3JpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVMaWtlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmxpa2UubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVGYXZvcml0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5mYXZvcml0ZS5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgaW1nTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVMaWtlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlTGlrZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmlzTGlrZSA9ICF0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5pc0xpa2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzIC09IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUhlYXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgdGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzTGlrZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0hlYXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy1pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMztcclxuICAgICAgICBjb2xvcjogI0ZGRTkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAucmF0aW5nLXZhbHVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZWQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzQwODBGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhcnQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2I1MTIxMztcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxheW91dCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgcGFkZGluZzogNSAwIDUgMDtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZS1pY29uIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgICAgICAgcGFkZGluZzogNSA1IDUgNTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pY29uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gICAgICAgIHdpZHRoOiA0MDtcclxuICAgICAgICBoZWlnaHQ6IDQwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTtcclxuICAgIH1cclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmVCcmVhayB7XHJcbiAgICAgICAgaGVpZ2h0OiA3O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDwhLS0gPEdyaWRMYXlvdXQgbWFyZ2luVG9wPVwiNVwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIiBjb2x1bW5zPVwiYXV0bywqLGF1dG8sYXV0b1wiIHJvd3M9XCJhdXRvXCI+IC0tPlxyXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjBcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlTGlrZVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJsaWtlXCIgY2xhc3M9XCJsaWtlLWljb24gZmFcIiA6Y2xhc3M9XCJbaXRlbS5pc0xpa2UgPyAnbGlrZWQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIlxyXG4gICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmlzTGlrZSA/ICdmYS10aHVtYnMtdXAnOidmYS10aHVtYnMtby11cCcgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmxpa2VzXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBtYXJnaW5MZWZ0PVwiMTVcIj5cclxuICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLWNvbW1lbnQtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5jb21tZW50c1wiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8R3JpZExheW91dCBjb2w9XCIyXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUhlYXJ0XCJcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXRlbS5pc0Zhdm9yaXRlID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCIgOnRleHQ9XCJpdGVtLmlzRmF2b3JpdGUgPyAnZmEtaGVhcnQnOidmYS1oZWFydC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiRmF2b3JpdGVcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiM1wiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtc2hhcmUtc3F1YXJlLW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiU2hhcmVcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgaXNJT1MsXHJcbiAgICAgICAgaXNBbmRyb2lkXHJcbiAgICB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge30sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQnVyZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmVlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzTGlrZSA9ICB0aGlzLml0ZW0uaXNMaWtlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNIZWFydCA9ICB0aGlzLml0ZW0uaXNGYXZvcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHt9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYW5pbWF0ZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMubGlrZS5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgaW1nTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZUZhdm9yaXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVMaWtlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaXNMaWtlID0gIXRoaXMuaXRlbS5pc0xpa2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtLmlzTGlrZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xpY2tlZFwiLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzSGVhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaXRlbS1jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAucmF0aW5nLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzO1xyXG4gICAgICAgIGNvbG9yOiAjRkZFOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlZC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjNDA4MEZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFydC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjYjUxMjEzO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0IHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBwYWRkaW5nOiA1IDAgNSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjtcclxuICAgICAgICBwYWRkaW5nOiA1IDUgNSA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgICAgICAgd2lkdGg6IDQwO1xyXG4gICAgICAgIGhlaWdodDogNDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmVCcmVhayB7XHJcbiAgICAgICAgaGVpZ2h0OiA3O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZVxyXG4gICAgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiXHJcbiAgICBjbGFzcz1cImFuaW0tcGFnZVwiXHJcbiAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiXHJcbiAgICBAbG9hZGVkPVwib25Mb2FkZWRcIlxyXG4gID5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci51c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwiY29udGFjdE51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuY29udGFjdG51bWJlclwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuZW1haWxcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLnBhc3N3b3JkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIlxyXG4gICAgICAgICAgQHRhcD1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCBjbGFzcz1cImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIiBAdGFwPVwidG9nZ2xlRm9ybVwiPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxyXG4gICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXCIgY2xhc3M9XCJib2xkXCI+PC9TcGFuPlxyXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8IS0tIDxidXR0b24gdGV4dD1cIkxvZ2luIHdpdGggRmFjZWJvb2tcIiBjbGFzcz1cImZiYnV0dG9uXCIgQHRhcD1cImxvZ0luV2l0aEZhY2Vib29rXCIgPjwvYnV0dG9uPiAtLT5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIlxyXG4gICAgICAgIHRleHQ9XCJGYWNlYm9vayBMb2dpblwiXHJcbiAgICAgICAgQHRhcD1cImxvZ0luV2l0aEZhY2Vib29rKClcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1hY3RpdmVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiIEB0YXA9XCJvbkxvZ291dFRhcCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVwiIC8+IC0tPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIHZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hdXRoLXNlcnZpY2VcIik7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JzOiBbXSxcclxuICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW4oKSB7XHJcblxyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgdGhpcy5lcnJvckRpc3BsYXkoKTtcclxuICAgICAgaWYgKCF0aGlzLmVycm9yLmVtYWlsICYmICF0aGlzLmVycm9yLnBhc3N3b3JkICYmXHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID09IHVzZXIuZW1haWwgJiZcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPT0gdXNlci5wYXNzd29yZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgdGhpcy5lcnJvckRpc3BsYXkoKTtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwidXNlcm5hbWUgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmNvbnRhY3RudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiY29udGFjdCBudW1iZXIgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5lcnJvcikge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRFbWFpbChlbWFpbCkge1xyXG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9LFxyXG4gICAgb25Mb2dpblRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dpbihcImZhY2Vib29rXCIpO1xyXG4gICAgfSxcclxuICAgIG9uTG9nb3V0VGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ291dCgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvZ0luV2l0aEZhY2Vib29rKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRGYWNlYm9va1NESyhkb2N1bWVudCwgXCJzY3JpcHRcIiwgXCJmYWNlYm9vay1qc3Nka1wiKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0RmFjZWJvb2soKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBub3RcIik7XHJcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBsb2dnZWQgaW4gJmFtcDsgY29va2llIHNldCFcIik7XHJcbiAgICAgICAgICAvLyBOb3cgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBkbyBhbiBBSkFYIHJlcXVlc3QgdG9cclxuICAgICAgICAgIC8vIGEgUEhQIHNjcmlwdCB0aGF0IGdyYWJzIHRoZSBzaWduZWQgcmVxdWVzdCBmcm9tIHRoZSBjb29raWUuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgaW5pdEZhY2Vib29rKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuRkIuaW5pdCh7XHJcbiAgICAgICAgICBhcHBJZDogXCI4MjIwMTc5WFhYWFhYWFhYXCIsIC8vWW91IHdpbGwgbmVlZCB0byBjaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgY29va2llOiB0cnVlLCAvLyBUaGlzIGlzIGltcG9ydGFudCwgaXQncyBub3QgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgICB2ZXJzaW9uOiBcInYxMy4wXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBsb2FkRmFjZWJvb2tTREsoZCwgcywgaWQpIHtcclxuICAgICAgdmFyIGpzLFxyXG4gICAgICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcclxuICAgICAganMuaWQgPSBpZDtcclxuICAgICAganMuc3JjID0gXCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xyXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSAge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IG51bGwsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5lcnJvciA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBlcnJvckRpc3BsYXkoKSB7XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIkVtYWlsIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcclxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiVmFsaWQgZW1haWwgcmVxdWlyZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcInBhc3N3b3JkIHJlcXVpcmVkLlwiKTtcclxuICAgICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgcmVnaXN0ZXIodXNlcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICB9LFxyXG4gIGxvZ2luKHVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9naW5cIik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gIH1cclxufTtcclxuY29uc3QgdXNlciA9IHtcclxuICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICBwYXNzd29yZDogMTIzNFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNkNTFhMWE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJuYXZCb3R0b21cIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIiByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIj5cclxuXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTA/J2FjdGl2ZSc6JydcIiBAdGFwPVwiaG9tZVwiIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgICBjb2xzPVwiYXV0b1wiIGNsYXNzPVwibmF2XCIgY29sPVwiMFwiIHJvdz1cIjBcIiB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09MD8nfi9hc3NldHMvaW1hZ2VzL25hdmhvbWVtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZob21lLnBuZydcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIHYtc2hvdz1cInNlbGVjdGVkVGFiPT0wXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cIm5hdlRleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8R3JpZExheW91dCA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09MT8nYWN0aXZlJzonJ1wiIEB0YXA9XCJjYXJ0XCIgcm93cz1cIiosYXV0b1wiXHJcbiAgICAgICAgICAgIGNvbHM9XCJhdXRvXCIgY2xhc3M9XCJuYXZcIiBjb2w9XCIxXCIgcm93PVwiMFwiIHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09MT8nYWN0aXZlJzonJ1wiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFiPT0xPyd+L2Fzc2V0cy9pbWFnZXMvbmF2Y2FydG0ucG5nJzonfi9hc3NldHMvaW1hZ2VzL25hdmNhcnQucG5nJ1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgdi1zaG93PVwic2VsZWN0ZWRUYWIgPT0gMVwiIHRleHQ9XCJDYXJ0XCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTI/J2FjdGl2ZSc6JydcIiBAdGFwPVwiaGlzdG9yeVwiIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgICBjb2xzPVwiYXV0b1wiIGNsYXNzPVwibmF2XCIgY29sPVwiMlwiIHJvdz1cIjBcIiB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09Mj8nfi9hc3NldHMvaW1hZ2VzL25hdm9yZGVyc20ucG5nJzonfi9hc3NldHMvaW1hZ2VzL25hdm9yZGVycy5wbmcnXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiB2LXNob3c9XCJzZWxlY3RlZFRhYiA9PSAyXCIgdGV4dD1cIkhpc3RvcnlcIiBjbGFzcz1cIm5hdlRleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTM/J2FjdGl2ZSc6JydcIiBAdGFwPVwiYWJvdXRcIiByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgICAgY29scz1cImF1dG9cIiBjbGFzcz1cIm5hdlwiIGNvbD1cIjNcIiByb3c9XCIwXCIgd2lkdGg9XCIyNSVcIj5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09Mz8nYWN0aXZlJzonJ1wiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFiPT0zPyd+L2Fzc2V0cy9pbWFnZXMvbmF2dXNtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZ1cy5wbmcnXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiB2LXNob3c9XCJzZWxlY3RlZFRhYiA9PSAzXCIgdGV4dD1cIkFib3V0XCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgIDwvR3JpZExheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWI6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaG9tZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpc3RvcnkoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWJvdXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5hdkJvdHRvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRGM0Mzc3NjtcclxuICAgIH1cclxuXHJcbiAgICAubmF2SWNvbiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyNVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZJY29uLmFjdGl2ZSB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2VGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjtcclxuICAgICAgICBmb250LXNpemU6IDEyO1xyXG4gICAgICAgIC8qIGNvbG9yOiAjYzQzNzc2OyAqL1xyXG4gICAgICAgIGNvbG9yOiAjZDYyNTI2O1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PFN0YWNrTGF5b3V0IGNsYXNzPVwicC0xNVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblx0XHQ8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL3FyLnBuZ1wiIHN0cmV0Y2g9XCJub25lXCIgLz5cclxuXHRcdDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiQ2xvc2UgTW9kYWxcIiBAdGFwPVwiJG1vZGFsLmNsb3NlKClcIiAvPlxyXG5cdDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYnZpZXcuYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogNTA7XFxufVxcbi50YWJ2aWV3VGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXNpemU6IDEzO1xcclxcbiAgY29sb3I6ICNkOGQyZDI7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxufVxcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5uYXZUYWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEyMjtcXG59XFxuLm5hdlRhYnZpZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLnN0YXR1cy1pbWcge1xcclxcbiAgbWFyZ2luLXRvcDogNDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxyXFxuICB3aWR0aDogMzA7XFxyXFxuICBoZWlnaHQ6IDMwO1xcbn1cXG4uc3RhdHVzLXByb2ZpbGUge1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgd2lkdGg6IDMwO1xcclxcbiAgaGVpZ2h0OiAzMDtcXG59XFxuLnN0YXR1cy10aXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1O1xcclxcbiAgbWFyZ2luLXRvcDogODtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNsb3NlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcbiAgICBtYXJnaW46IDE1IDAgMCAxNTtcXG59XFxuVGV4dFZpZXdbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmRlc2NyaXB0aW9uLWljb25bZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzNlOWVkYjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzY3JpcHRpb24tdmFsdWVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLnJhdGVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHBhZGRpbmctdG9wOiAzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE4O1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuLmxpa2VkLWFjdGl2ZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgY29sb3I6ICM0MDgwRkY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5sYXlvdXRbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxuICAgIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgLyogbWFyZ2luLXRvcDogMTY7ICovXFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4uY2FyZC1pbWctdGh1bWJbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjgyODI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHdpZHRoOiAxMzA7XFxuICAgIGhlaWdodDogNzA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4uYW5pbS1wYWdlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNmQ4O1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LXBhZ2UtZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktcGFnZS1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxufVxcbjIwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG59XFxuLmFuaW0tY292ZXJbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXItZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvdmVyLWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMzAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1pbWFnZXNbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzLWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pbWFnZXMtZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4zMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWl0ZW1JbmZvW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWl0ZW1JbmZvLWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mby1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1saWtlc1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcy1kYXRhLXYtMzUwYzM2MjQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktbGlrZXMtZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50LWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlZmF1bHQtaW1nW2RhdGEtdi03ZDUwNzc3MV0ge1xcbiAgICBjb2xvcjogI2QxY2VjZTViO1xcbn1cXG4uY2F0ZWdvcnktbmFtZVtkYXRhLXYtN2Q1MDc3NzFdIHtcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNSAwIDE1IDBcXG59XFxuLmJhbm5lcltkYXRhLXYtN2Q1MDc3NzFdIHtcXG4gICAgY29sb3I6ICNiZGJkYmQ7XFxuICAgIG9wYWNpdHk6IC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5yYXRpbmctaWNvbltkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBjb2xvcjogIzQwODBGRjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgbWFyZ2luLXRvcDogMTY7XFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIGhlaWdodDogNztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5yYXRpbmctaWNvbltkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBjb2xvcjogIzQwODBGRjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgbWFyZ2luLXRvcDogMTY7XFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG59XFxuLmxpbmVbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBoZWlnaHQ6IDc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuICBoZWlnaHQ6IDkwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNkNTFhMWE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxufVxcbi5pbnB1dC1maWVsZCAuaW5wdXRbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBmb250LXNpemU6IDU0O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBoZWlnaHQ6IDUwO1xcclxcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2E4YThhODtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5uYXZCb3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuLm5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEYzQzNzc2O1xcbn1cXG4ubmF2SWNvbiB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNVxcbn1cXG4ubmF2SWNvbi5hY3RpdmUge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG4ubmF2VGV4dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIC8qIGNvbG9yOiAjYzQzNzc2OyAqL1xcbiAgICBjb2xvcjogI2Q2MjUyNjtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLCosYXV0b1wiLCBjb2x1bW5zOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibmF2U3RhdHVzQmFyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlN0YXR1c0JhclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiZDIxMjJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCIqLGF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zZWFyY2ggfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVsbC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYmVsbCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub2ZmZXIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Mb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucG9wdWxhciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUE9QVUxBUlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ0FURUdPUllcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzMlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93UHJvbW9zIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJQUk9NT1NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJHcmlkTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwibmF2Qm90dG9tXCIsIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9LFxuICAgICAgb246IHsgbG9hZGVkOiBfdm0ub25Mb2FkZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIsIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi00MFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2xvc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1hcnJvdy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taW1hZ2VzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0byxhdXRvLGF1dG9cIiwgY29sdW1uczogXCJhdXRvXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1pdGVtSW5mb1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2F0ZWdvcnktaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXZlcmFnZSBSYXRlOlwiICsgX3ZtLml0ZW0ucmF0aW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIsIGNvbDogXCIxXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zdGFyXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXItaGFsZi1vXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKixhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlTGlrZSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJsaWtlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmlzTGlrZSA/IFwibGlrZWQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNMaWtlID8gXCJmYS10aHVtYnMtdXBcIiA6IFwiZmEtdGh1bWJzLW8tdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IF92bS5pdGVtLmxpa2VzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWNvbW1lbnQtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmNvbW1lbnRzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXNIZWFydCA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNIZWFydCA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiM1wiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaGFyZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVCcmVhayBhbmltLWxpa2VzXCIsXG4gICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgYW5pbS1jb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0bywqXCIsIG1hcmdpblRvcDogXCIxNVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGRlc2NyaXB0aW9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdGFnc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uXCIsIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHR2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3dzOiBcIipcIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwXCIsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiAvPlxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhbm5lcjJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM0ODllOWU5ZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeSArIFwiIChcIiArIF92bS5pdGVtLmNvdW50ICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsIHNyYzogX3ZtLml0ZW0uY292ZXIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRpbmctaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmF0aW5nLXZhbHVlIGl0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjJcIiwgcm93OiBcIjBcIiwgdGV4dDogX3ZtLml0ZW0ucmF0aW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJJdGVtTGlrZVwiLCB7IGF0dHJzOiB7IGl0ZW06IF92bS5pdGVtIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWtcIiwgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sKixhdXRvLGF1dG9cIiwgcm93czogXCJhdXRvXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlTGlrZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJsaWtlXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgIGNsYXNzOiBbX3ZtLml0ZW0uaXNMaWtlID8gXCJsaWtlZC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzTGlrZSA/IFwiZmEtdGh1bWJzLXVwXCIgOiBcImZhLXRodW1icy1vLXVwXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBfdm0uaXRlbS5saWtlcyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjFcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLCBtYXJnaW5MZWZ0OiBcIjE1XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWNvbW1lbnQtb1wiKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmNvbW1lbnRzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJoZWFydC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjNcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxheW91dFwiLCBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLm9uTG9hZGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlVzZXIgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJkb25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJ1c2VybmFtZVwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci51c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29udGFjdE51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ29udGFjdCBOdW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuY29udGFjdG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFjdG51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmNvbnRhY3RudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IG1hcmdpbkJvdHRvbTogXCIyNVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLmVycm9yLmVtYWlsIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLmVycm9yLnBhc3N3b3JkIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIkxvZyBJblwiIDogXCJTaWduIFVwXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJTaWduIHVwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZhY2Vib29rIExvZ2luXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2dJbldpdGhGYWNlYm9vaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiR3JpZExheW91dFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkJvdHRvbVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZcIixcbiAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFiID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyNSVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0uaG9tZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAwXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdmhvbWVtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdmhvbWUucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAwLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWI9PTBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2VGV4dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZcIixcbiAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFiID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyNSVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0uY2FydCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAxXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdmNhcnRtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdmNhcnQucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAxLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWIgPT0gMVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkNhcnRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5oaXN0b3J5IH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFiID09IDJcbiAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2b3JkZXJzbS5wbmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIn4vYXNzZXRzL2ltYWdlcy9uYXZvcmRlcnMucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWIgPT0gMlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkhpc3RvcnlcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5hYm91dCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAzXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdnVzbS5wbmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIn4vYXNzZXRzL2ltYWdlcy9uYXZ1cy5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFiID09IDMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYiA9PSAzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQWJvdXRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwLTE1XCIsIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9xci5wbmdcIiwgc3RyZXRjaDogXCJub25lXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlIE1vZGFsXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vYXV0aC1zZXJ2aWNlLmpzXCI6IFwiLi9hdXRoLXNlcnZpY2UuanNcIixcblx0XCIuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3NcIjogXCIuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3NcIixcblx0XCIuL2ZvbnRzL2lvbmljb25zLmNzc1wiOiBcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCIsXG5cdFwiLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbGliLmpzXCI6IFwiLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbGliLmpzXCIsXG5cdFwiLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbmF0aXZlc2NyaXB0LWZvbnRpY29uLmpzXCI6IFwiLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbmF0aXZlc2NyaXB0LWZvbnRpY29uLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcclxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXHJcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxyXFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxyXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxyXFxuXFxyXFxuLypcXHJcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXHJcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcclxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxyXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcclxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnRBd2Vzb21lXFxcIiwgXFxcImZvbnRhd2Vzb21lLXdlYmZvbnRcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcImlvbmljb25zXFxcIlwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5cclxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXHJcbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJy4vbmF0aXZlc2NyaXB0LWZvbnRpY29uJztcclxuVE5TRm9udEljb24uZGVidWcgPSBmYWxzZTtcclxuVE5TRm9udEljb24ucGF0aHMgPSB7XHJcbiAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUuY3NzJyxcclxuICAgICdpb24nOiAnLi9mb250cy9pb25pY29ucy5jc3MnLFxyXG59O1xyXG5UTlNGb250SWNvbi5sb2FkQ3NzKCk7XHJcblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pO1xyXG5cclxubmV3IFZ1ZSh7XHJcblxyXG4gICAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goSG9tZSldKVxyXG5cclxufSkuJHN0YXJ0KCk7XHJcbiIsIlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdmFyIG5hdGl2ZXNjcmlwdF9vYXV0aDJfMSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vYXV0aDInKVxuLy8gdmFyIHByb3ZpZGVyc18xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vYXV0aDIvcHJvdmlkZXJzXCIpO1xudmFyIGNsaWVudCA9IG51bGw7XG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVycygpIHtcbiAgICB2YXIgbWljcm9zb2Z0UHJvdmlkZXIgPSBjb25maWd1cmVPQXV0aFByb3ZpZGVyTWljcm9zb2Z0KCk7XG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyID0gY29uZmlndXJlT0F1dGhQcm92aWRlckdvb2dsZSgpO1xuICAgIHZhciBmYWNlYm9va1Byb3ZpZGVyID0gY29uZmlndXJlT0F1dGhQcm92aWRlckZhY2Vib29rKCk7XG4gICAgbmF0aXZlc2NyaXB0X29hdXRoMl8xLmNvbmZpZ3VyZVRuc09BdXRoKFttaWNyb3NvZnRQcm92aWRlciwgZ29vZ2xlUHJvdmlkZXIsIGZhY2Vib29rUHJvdmlkZXJdKTtcbn1cbmV4cG9ydHMuY29uZmlndXJlT0F1dGhQcm92aWRlcnMgPSBjb25maWd1cmVPQXV0aFByb3ZpZGVycztcbmZ1bmN0aW9uIGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJHb29nbGUoKSB7XG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgb3BlbklkU3VwcG9ydDogXCJvaWQtZnVsbFwiLFxuICAgICAgICBjbGllbnRJZDogXCI5MzI5MzE1MjA0NTctYnV2MmRuaGdvN2pqamp2NWZja3FsdG4zNjdwc2JybGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgICAgICAgcmVkaXJlY3RVcmk6IFwiY29tLmdvb2dsZXVzZXJjb250ZW50LmFwcHMuOTMyOTMxNTIwNDU3LWJ1djJkbmhnbzdqampqdjVmY2txbHRuMzY3cHNicmxiOi9hdXRoXCIsXG4gICAgICAgIHVybFNjaGVtZTogXCJjb20uZ29vZ2xldXNlcmNvbnRlbnQuYXBwcy45MzI5MzE1MjA0NTctYnV2MmRuaGdvN2pqamp2NWZja3FsdG4zNjdwc2JybGJcIixcbiAgICAgICAgc2NvcGVzOiBbXCJlbWFpbFwiXVxuICAgIH07XG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyID0gbmV3IHByb3ZpZGVyc18xLlRuc09hUHJvdmlkZXJHb29nbGUoZ29vZ2xlUHJvdmlkZXJPcHRpb25zKTtcbiAgICByZXR1cm4gZ29vZ2xlUHJvdmlkZXI7XG59XG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVyRmFjZWJvb2soKSB7XG4gICAgdmFyIGZhY2Vib29rUHJvdmlkZXJPcHRpb25zID0ge1xuICAgICAgICBvcGVuSWRTdXBwb3J0OiBcIm9pZC1ub25lXCIsXG4gICAgICAgIGNsaWVudElkOiBcIjY5MTIwODU1NDQxNTY0NVwiLFxuICAgICAgICBjbGllbnRTZWNyZXQ6IFwiZDg3MjVhYzQxNmZhMWJiMTkxN2NjZmZkMTY3MGUzYzZcIixcbiAgICAgICAgcmVkaXJlY3RVcmk6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Nvbm5lY3QvbG9naW5fc3VjY2Vzcy5odG1sXCIsXG4gICAgICAgIHNjb3BlczogW1wiZW1haWxcIl1cbiAgICB9O1xuICAgIHZhciBmYWNlYm9va1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVyc18xLlRuc09hUHJvdmlkZXJGYWNlYm9vayhmYWNlYm9va1Byb3ZpZGVyT3B0aW9ucyk7XG4gICAgcmV0dXJuIGZhY2Vib29rUHJvdmlkZXI7XG59XG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVyTWljcm9zb2Z0KCkge1xuICAgIHZhciBtaWNyb3NvZnRQcm92aWRlck9wdGlvbnMgPSB7XG4gICAgICAgIG9wZW5JZFN1cHBvcnQ6IFwib2lkLWZ1bGxcIixcbiAgICAgICAgY2xpZW50SWQ6IFwiZjM3NmZhODctNjRhOS00OWExLThiNTYtZTBkNDhmYzA4MTBiXCIsXG4gICAgICAgIC8vIHJlZGlyZWN0VXJpOiBcInVybjppZXRmOndnOm9hdXRoOjIuMDpvb2JcIixcbiAgICAgICAgcmVkaXJlY3RVcmk6IFwibXNhbGYzNzZmYTg3LTY0YTktNDlhMS04YjU2LWUwZDQ4ZmMwODEwYjovL2F1dGhcIixcbiAgICAgICAgdXJsU2NoZW1lOiBcIm1zYWxmMzc2ZmE4Ny02NGE5LTQ5YTEtOGI1Ni1lMGQ0OGZjMDgxMGJcIixcbiAgICAgICAgc2NvcGVzOiBbXCJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbS9tYWlsLnJlYWRcIl1cbiAgICB9O1xuICAgIHZhciBtaWNyb3NvZnRQcm92aWRlciA9IG5ldyBwcm92aWRlcnNfMS5UbnNPYVByb3ZpZGVyTWljcm9zb2Z0KG1pY3Jvc29mdFByb3ZpZGVyT3B0aW9ucyk7XG4gICAgcmV0dXJuIG1pY3Jvc29mdFByb3ZpZGVyO1xufVxuZnVuY3Rpb24gdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpIHtcbiAgICBjbGllbnQgPSBuZXcgbmF0aXZlc2NyaXB0X29hdXRoMl8xLlRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XG4gICAgY2xpZW50LmxvZ2luV2l0aENvbXBsZXRpb24oZnVuY3Rpb24gKHRva2VuUmVzdWx0LCBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGVycm9yOiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayB0byBtYWluIHBhZ2Ugd2l0aCBhY2Nlc3MgdG9rZW46IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy50bnNPYXV0aExvZ2luID0gdG5zT2F1dGhMb2dpbjtcbmZ1bmN0aW9uIHRuc09hdXRoTG9nb3V0KCkge1xuICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgY2xpZW50LmxvZ291dCgpO1xuICAgIH1cbn1cbmV4cG9ydHMudG5zT2F1dGhMb2dvdXQgPSB0bnNPYXV0aExvZ291dDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MGMzNjI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1MGMzNjI0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNTBjMzYyNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUwYzM2MjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwYzM2MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwYzM2MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNTBjMzYyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwYzM2MjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2Q1MDc3NzFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdkNTA3NzcxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdkNTA3NzcxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdkNTA3NzcxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2Q1MDc3NzEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMxYjg2ZWY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMWI4NmVmNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMWI4NmVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMWI4NmVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzFiODZlZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMWI4NmVmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMWI4NmVmNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaXRlbUxpa2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaXRlbUxpa2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OWNlZGM4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjljZWRjODYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjljZWRjODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjljZWRjODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OWNlZGM4NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbUxpa2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjljZWRjODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbUxpa2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjljZWRjODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbUxpa2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYxMWFmNDg2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MTFhZjQ4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MTFhZjQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MTFhZjQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYxMWFmNDg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MTFhZjQ4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MTFhZjQ4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViYjE5NGImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzViYjE5NGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzViYjE5NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzViYjE5NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViYjE5NGImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzViYjE5NGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNWJiMTk0YiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjRhZjlmYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYyNGFmOWZhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyNGFmOWZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyNGFmOWZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNGFmOWZhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyNGFmOWZhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29mZmVyUXJNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29mZmVyUXJNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI0YWY5ZmEmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYS1nbGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW11c2ljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGgtbGFyZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOVxcXCI7XFxyXFxufVxcclxcbi5mYS10aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlbW92ZTpiZWZvcmUsXFxyXFxuLmZhLWNsb3NlOmJlZm9yZSxcXHJcXG4uZmEtdGltZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDExXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlYXI6YmVmb3JlLFxcclxcbi5mYS1jb2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxM1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFzaC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG9tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxN1xcXCI7XFxyXFxufVxcclxcbi5mYS1yb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmJveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXktY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRFxcXCI7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxcclxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWZyZXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sb2NrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNVxcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyN1xcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXJjb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFnczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXByaW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FtZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9udDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1pdGFsaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzM1xcXCI7XFxyXFxufVxcclxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlZGVudDpiZWZvcmUsXFxyXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmRlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRFxcXCI7XFxyXFxufVxcclxcbi5mYS1waG90bzpiZWZvcmUsXFxyXFxuLmZhLWltYWdlOmJlZm9yZSxcXHJcXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVuY2lsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkanVzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1lZGl0OmJlZm9yZSxcXHJcXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXFxyXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhwYW5kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tcHJlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NlxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OFxcXCI7XFxyXFxufVxcclxcbi5mYS1hc3RlcmlzazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QlxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWFmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZS1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdhcm5pbmc6YmVmb3JlLFxcclxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3M1xcXCI7XFxyXFxufVxcclxcbi5mYS1yYW5kb206YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFnbmV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLFxcclxcbi5mYS1iYXItY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MFxcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWtleTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlYXJzOmJlZm9yZSxcXHJcXG4uZmEtY29nczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODZcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmEtdGh1bWJzLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4N1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ24tb3V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWItdGFjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4dGVybmFsLWxpbms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduLWluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVwbG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlbW9uLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NFxcXCI7XFxyXFxufVxcclxcbi5mYS1waG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9va21hcmstbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob25lLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXR0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcXHJcXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QlxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxvY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZlZWQ6YmVmb3JlLFxcclxcbi5mYS1yc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RVxcXCI7XFxyXFxufVxcclxcbi5mYS1oZGQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNlcnRpZmljYXRlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNlxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQThcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQlxcXCI7XFxyXFxufVxcclxcbi5mYS1nbG9iZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdyb3VwOmJlZm9yZSxcXHJcXG4uZmEtdXNlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGFpbjpiZWZvcmUsXFxyXFxuLmZhLWxpbms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYXNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3V0OmJlZm9yZSxcXHJcXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb3B5OmJlZm9yZSxcXHJcXG4uZmEtZmlsZXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhcGVyY2xpcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNhdmU6YmVmb3JlLFxcclxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW5hdmljb246YmVmb3JlLFxcclxcbi5mYS1yZW9yZGVyOmJlZm9yZSxcXHJcXG4uZmEtYmFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVuZGVybGluZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhYmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFnaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMFxcXCI7XFxyXFxufVxcclxcbi5mYS10cnVjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEM1xcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENFxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vbmV5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29sdW1uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVuc29ydGVkOmJlZm9yZSxcXHJcXG4uZmEtc29ydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXFxyXFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEREXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtdXA6YmVmb3JlLFxcclxcbi5mYS1zb3J0LWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMVxcXCI7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsXFxyXFxuLmZhLXVuZG86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWdhbDpiZWZvcmUsXFxyXFxuLmZhLWdhdmVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcXHJcXG4uZmEtdGFjaG9tZXRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNlxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFzaDpiZWZvcmUsXFxyXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaXRlbWFwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRThcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW1icmVsbGE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXN0ZTpiZWZvcmUsXFxyXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjaGFuZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29mZmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3V0bGVyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtdGV4dC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbWJ1bGFuY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXB0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7XFxyXFxufVxcclxcbi5mYS10YWJsZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxcclxcbi5mYS1tb2JpbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1b3RlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwaW5uZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLXJlcGx5OmJlZm9yZSxcXHJcXG4uZmEtcmVwbHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc21pbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZyb3duLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWgtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7XFxyXFxufVxcclxcbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7XFxyXFxufVxcclxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXFxyXFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXFxyXFxuLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcXHJcXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyb3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxpbms6YmVmb3JlLFxcclxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyN1xcXCI7XFxyXFxufVxcclxcbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGllbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7XFxyXFxufVxcclxcbi5mYS1yb2NrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7XFxyXFxufVxcclxcbi5mYS1odG1sNTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNzczM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRFxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWxsaXBzaXMtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGV2ZWwtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tcGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS11cDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ldXJvOmJlZm9yZSxcXHJcXG4uZmEtZXVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2JwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG9sbGFyOmJlZm9yZSxcXHJcXG4uZmEtdXNkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnVwZWU6YmVmb3JlLFxcclxcbi5mYS1pbnI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NlxcXCI7XFxyXFxufVxcclxcbi5mYS1jbnk6YmVmb3JlLFxcclxcbi5mYS1ybWI6YmVmb3JlLFxcclxcbi5mYS15ZW46YmVmb3JlLFxcclxcbi5mYS1qcHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1ydWJsZTpiZWZvcmUsXFxyXFxuLmZhLXJvdWJsZTpiZWZvcmUsXFxyXFxuLmZhLXJ1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdvbjpiZWZvcmUsXFxyXFxuLmZhLWtydzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGNvaW46YmVmb3JlLFxcclxcbi5mYS1idGM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS10ZXh0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NVxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2N1xcXCI7XFxyXFxufVxcclxcbi5mYS14aW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OVxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlLXBsYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1kcm9wYm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGlja3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hZG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MFxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXBwbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OVxcXCI7XFxyXFxufVxcclxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5kcm9pZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1za3lwZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MFxcXCI7XFxyXFxufVxcclxcbi5mYS10cmVsbG86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1mZW1hbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0dGlwOmJlZm9yZSxcXHJcXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdW4tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vb24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4N1xcXCI7XFxyXFxufVxcclxcbi5mYS1idWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OFxcXCI7XFxyXFxufVxcclxcbi5mYS12azpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVucmVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1kb3QtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MlxcXCI7XFxyXFxufVxcclxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVya2lzaC1saXJhOmJlZm9yZSxcXHJcXG4uZmEtdHJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwYWNlLXNodXR0bGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5N1xcXCI7XFxyXFxufVxcclxcbi5mYS1zbGFjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZW5pZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluc3RpdHV0aW9uOmJlZm9yZSxcXHJcXG4uZmEtYmFuazpiZWZvcmUsXFxyXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxcclxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXlhaG9vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVsaWNpb3VzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGlnZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBN1xcXCI7XFxyXFxufVxcclxcbi5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRydXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWpvb21sYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhbmd1YWdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmF4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGlsZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwb29uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3ViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVoYW5jZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCN1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZWN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXV0b21vYmlsZTpiZWZvcmUsXFxyXFxuLmZhLWNhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhYjpiZWZvcmUsXFxyXFxuLmZhLXRheGk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQVxcXCI7XFxyXFxufVxcclxcbi5mYS10cmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3VuZGNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS13b3JkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDM1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS12aWRlby1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOVxcXCI7XFxyXFxufVxcclxcbi5mYS12aW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZXBlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1zYXZlcjpiZWZvcmUsXFxyXFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxcclxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJhOmJlZm9yZSxcXHJcXG4uZmEtcmViZWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZTpiZWZvcmUsXFxyXFxuLmZhLWVtcGlyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMlxcXCI7XFxyXFxufVxcclxcbi5mYS1naXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEM1xcXCI7XFxyXFxufVxcclxcbi5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcXHJcXG4uZmEteWMtc3F1YXJlOmJlZm9yZSxcXHJcXG4uZmEtaGFja2VyLW5ld3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENFxcXCI7XFxyXFxufVxcclxcbi5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENlxcXCI7XFxyXFxufVxcclxcbi5mYS13ZWNoYXQ6YmVmb3JlLFxcclxcbi5mYS13ZWl4aW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zZW5kOmJlZm9yZSxcXHJcXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOFxcXCI7XFxyXFxufVxcclxcbi5mYS1zZW5kLW86YmVmb3JlLFxcclxcbi5mYS1wYXBlci1wbGFuZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGlzdG9yeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS10aGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFyYWdyYXBoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xpZGVyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMVxcXCI7XFxyXFxufVxcclxcbi5mYS1ib21iOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29jY2VyLWJhbGwtbzpiZWZvcmUsXFxyXFxuLmZhLWZ1dGJvbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdGNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRThcXFwiO1xcclxcbn1cXHJcXG4uZmEteWVscDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW5ld3NwYXBlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2lmaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGN1bGF0b3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wYXlwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRFxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtdmlzYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWFtZXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNVxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZWRyb3BwZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYWludC1icnVzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcmVhLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGluZS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhc3RmbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhc3RmbS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmljeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdlbGxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoZWtlbDpiZWZvcmUsXFxyXFxuLmZhLXNoZXFlbDpiZWZvcmUsXFxyXFxuLmZhLWlsczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lYW5wYXRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnV5c2VsbGFkczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGFzaGN1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J1bWJlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjExXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlYW5wdWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWxsc3k6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxM1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaGlydHNpbmJ1bGs6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaW1wbHlidWlsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNreWF0bGFzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FydC1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGlhbW9uZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXNlY3JldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vdG9yY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdHJlZXQtdmlldzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0YmVhdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lcmN1cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1pbnRlcnNleDpiZWZvcmUsXFxyXFxuLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1kb3VibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW5ldXRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlbmRlcmxlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdC1wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2hhdHNhcHA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zZXJ2ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzM1xcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNFxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXRpbWVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG90ZWw6YmVmb3JlLFxcclxcbi5mYS1iZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7XFxyXFxufVxcclxcbi5mYS12aWFjb2luOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWJ3YXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWRpdW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7XFxyXFxufVxcclxcbi5mYS15YzpiZWZvcmUsXFxyXFxuLmZhLXktY29tYmluYXRvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wdGluLW1vbnN0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVuY2FydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4cGVkaXRlZHNzbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktNDpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMzpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTI6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTE6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTA6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWktY3Vyc29yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGlja3ktbm90ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0aWNreS1ub3RlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1qY2I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLTE6YmVmb3JlLFxcclxcbi5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsXFxyXFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcm9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1wYXBlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1saXphcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtc3BvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhZGVtYXJrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVnaXN0ZXJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1nZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyaXBhZHZpc29yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpa2lwZWRpYS13OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2FmYXJpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hyb21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZWZveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7XFxyXFxufVxcclxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29udGFvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtNTAwcHg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbWF6b246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50aW5nLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3V6ejpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmxhY2stdGllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWRnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9keDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3AtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYXNodGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NFxcXCI7XFxyXFxufVxcclxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmlvbi1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbGVydC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWRkLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFsYXJtLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWxlcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcHBzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWJhY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXAtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXR0YWNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYmFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYmljeWNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJvYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ib29rbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1idXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYW5jZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtYmxhbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZS1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrbWFyay1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb2xvci1wYWxldHRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29tcGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250YWN0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRyYWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY3JlYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZGVsZXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZGVza3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvbmUtYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkREXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kcmFmdHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1leGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZvbGRlci1vcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZ2xvYmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFuZ291dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxvY2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWVudTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1vcmUtaG9yaXpvbnRhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1vcmUtdmVydGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW5vbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1vcHRpb25zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBob25lLWxhbmRzY2FwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBob25lLXBvcnRyYWl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wbGF5c3RvcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wcmludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVtb3ZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVtb3ZlLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlc3RhdXJhbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zaGFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNoYXJlLWFsdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdWJ3YXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN5bmM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10ZXh0c21zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRyYWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdW5sb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtbXV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YWxrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2FybmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcGVydHVyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmVzaXplOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJldHVybi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJldHVybi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1zaHJpbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctc3dhcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hc3RlcmlzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWNrc3BhY2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFja3NwYWNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktY2hhcmdpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJlYWtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iZWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJsdWV0b290aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib25maXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvd3RpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYnVnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3gtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyay1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyay1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2UtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZS1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGUtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZS13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZmZlZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29ubmVjdGlvbi1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbnRyYXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY3ViZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kaXNjOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRvY3VtZW50LXRleHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lYXJ0aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lYXNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVnZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lamVjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lbWFpbC11bnJlYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MzXFxcIjsgfVxcclxcblxcclxcbi5pb24tZXJsZW5tZXllci1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrLWJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M0XFxcIjsgfVxcclxcblxcclxcbi5pb24tZXllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWV5ZS1kaXNhYmxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mZW1hbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpbG0tbWFya2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpcmViYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhc2gtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3JrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcmstcmVwbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZ1bm5lbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1nZWFyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ2Vhci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdyaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNGXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFtbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhcHB5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M2XFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhZHBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYXJ0LWJyb2tlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHAtYnVveTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pY2VjcmVhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbWFnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbWFnZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW5mb3JtYXRpb24tY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb25pYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxhcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYXJtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYnVtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxidW1zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW5hbHl0aWNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhcmNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhcmNvZGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFzZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2ViYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0REXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2tldGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2tldGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmVsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2R5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2R5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvbHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvbHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rbWFya3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2ttYXJrcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyaWVmY2FzZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icm93c2VyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJvd3NlcnMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsY3VsYXRvci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsZW5kYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRib3hlcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0YnViYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcmstb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2lyY2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2lyY2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9jay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2UtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1uaWdodC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2ctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci1maWx0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3Itd2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3Itd2FuZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb21wb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb21wb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbnRhY3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29weTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29weS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jcm9wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRyYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1lbWFpbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWV5ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxpbmctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFtZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhc2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbG93ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb2xkZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2VhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2Vhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nbGFzc2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nbGFzc2VzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdyaWQtdmlldzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ3JpZC12aWV3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWFydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhvbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5maW5pdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZmluaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW9uaWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mta2V5cGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1rZXlwYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlnaHRidWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saWdodGJ1bGItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlzdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9jYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9vcC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGljYWwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRraXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb25pdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9yZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW11c2ljYWwtbm90ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1uYXZpZ2F0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1udXRyaXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW51dHJpdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXJwbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXJwbGFuZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFydGx5c3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF1c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlb3BsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVvcGxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbmFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uYWRkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBob3RvczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGhvdG9zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpbnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGxheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGxheS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFncy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmludGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXB1bHNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wdWxzZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJhaW55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yYWlueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWNvcmRpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlY29yZGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWRvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWRvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2gtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV3aW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXdpbmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtcm9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtcm9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNlYXJjaC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZXR0aW5ncy1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNodWZmbGUtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBiYWNrd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc25vd3k6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNwZWVkb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zcGVlZG9tZXRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RvcHdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdG9wd2F0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN1bm55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbGVwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVsZXBob25lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbm5pc2JhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbm5pc2JhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdG9nZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10b2dnbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdHJhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRyYXNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVuZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVuZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVubG9ja2VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZpZGVvY2FtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12aWRlb2NhbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13aW5lZ2xhc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd29ybGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdvcmxkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taXBhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taXBvZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1qZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk1XFxcIjsgfVxcclxcblxcclxcbi5pb24ta2V5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWtuaWZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sZWFmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxldmVsczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk5XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlBXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9jYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9jay1jb21iaW5hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9nLWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvZy1vdXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYWduZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tZXJnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vZGVsLXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9uaXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW11c2ljLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpY29uLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5ldHdvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbm8tc21va2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1udWNsZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW91dGxldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYWludGJydXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhaW50YnVja2V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhcGVyLWFpcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhcGVyY2xpcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb24tc3RhbGtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waWUtZ3JhcGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpbnBvaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpenphOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYW5ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYXlzdGF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG9kaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXB1bGwtcmVxdWVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1xci1zY2FubmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXF1b3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJhZGlvLXdhdmVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlY29yZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlcGx5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlcGx5LWFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yaWJib24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yaWJib24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc2Npc3NvcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2tpcC1iYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1za2lwLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZHJvaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZHJvaWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5ndWxhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5ndWxhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hcHBsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYXBwbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYml0Y29pbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYml0Y29pbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1idWZmZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJ1ZmZlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jaHJvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNocm9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jb2RlcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jb2RlcGVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNzczM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNzczMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJpYmJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyaWJiYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyb3Bib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyb3Bib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZXVybzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZXVyby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mYWNlYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mcmVlYnNkLWRldmlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1naXRodWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdpdGh1Yi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaHRtbDU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWh0bWw1LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWluc3RhZ3JhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbGlua2VkaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWxpbmtlZGluLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW1hcmtkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ub2RlanM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW9jdG9jYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXBpbnRlcmVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXB5dGhvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcmVkZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yZWRkaXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcnNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2FzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2t5cGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNreXBlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNuYXBjaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zbmFwY2hhdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dW1ibHI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1bWJsci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dXg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdGNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXR0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdXNkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC11c2Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdmltZW86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXZpbWVvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdoYXRzYXBwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aGF0c2FwcC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aW5kb3dzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aW5kb3dzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdvcmRwcmVzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlhaG9vOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15YWhvby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15ZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXllbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15b3V0dWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15b3V0dWJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc291cC1jYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc291cC1jYW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcGVha2VycGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3Bvb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGF0cy1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0ZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRGXFxcIjsgfVxcclxcblxcclxcbi5pb24tdGhlcm1vbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdGh1bWJzZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aHVtYnN1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdG9nZ2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFuc2dlbmRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFzaC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYXNoLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJvcGh5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRzaGlydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10c2hpcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bWJyZWxsYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bml2ZXJzaXR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVubG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11c2I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tdmlkZW9jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLWhpZ2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbWVkaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU4XFxcIjsgfVxcclxcblxcclxcbi5pb24td2F0ZXJkcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdpZmk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjsgfVxcclxcblxcclxcbi5pb24td2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdvbWFuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdyZW5jaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi14Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQ1xcXCI7IH1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5tYXBDc3MgPSBmdW5jdGlvbiAoZGF0YSwgZGVidWcpIHtcclxuICAgIHZhciBtYXAgPSB7fTtcclxuICAgIHZhciBzZXRzID0gZGF0YS5zcGxpdCgnfScpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBzZXRzXzEgPSBzZXRzOyBfaSA8IHNldHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2V0ID0gc2V0c18xW19pXTtcclxuICAgICAgICB2YXIgcGFpciA9IHNldC5zcGxpdCgvOmJlZm9yZVxccyp7Lyk7XHJcbiAgICAgICAgdmFyIGtleUdyb3VwcyA9IHBhaXJbMF07XHJcbiAgICAgICAgdmFyIGtleXMgPSBrZXlHcm91cHMuc3BsaXQoJywnKTtcclxuICAgICAgICBpZiAocGFpclsxXSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBleHBvcnRzLmNsZWFuVmFsdWUocGFpclsxXSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwga2V5c18xID0ga2V5czsgX2EgPCBrZXlzXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xW19hXTtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS50cmltKCkuc2xpY2UoMSkuc3BsaXQoJzpiZWZvcmUnKVswXTtcclxuICAgICAgICAgICAgICAgIG1hcFtrZXldID0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoMiksIDE2KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkgKyBcIjogXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5leHBvcnRzLmNsZWFuVmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICB2YXIgbWF0Y2hlcyA9IHZhbC5tYXRjaCgvY29udGVudDpcXHMqXCJcXFxcZihbXlwiXSspXCIvaSk7XHJcbiAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgIHJldHVybiBcIlxcXFx1ZlwiICsgbWF0Y2hlc1sxXTtcclxuICAgIH1cclxuICAgIHJldHVybiB2b2lkIDA7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpYi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZmlsZV9zeXN0ZW1fMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpO1xyXG52YXIgbGliID0gcmVxdWlyZShcIi4vbGliXCIpO1xyXG52YXIgVE5TRm9udEljb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVE5TRm9udEljb24oKSB7XHJcbiAgICB9XHJcbiAgICBUTlNGb250SWNvbi5sb2FkQ3NzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIHZhciBjdXJyZW50TmFtZTtcclxuICAgICAgICB2YXIgZm9udEljb25Db2xsZWN0aW9ucyA9IE9iamVjdC5rZXlzKFROU0ZvbnRJY29uLnBhdGhzKTtcclxuICAgICAgICBpZiAoVE5TRm9udEljb24uZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2xsZWN0aW9ucyB0byBsb2FkOiBcIiArIGZvbnRJY29uQ29sbGVjdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5pdENvbGxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnROYW1lID0gZm9udEljb25Db2xsZWN0aW9uc1tjbnRdO1xyXG4gICAgICAgICAgICBUTlNGb250SWNvbi5jc3NbY3VycmVudE5hbWVdID0ge307XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbG9hZEZpbGUgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBpZiAoVE5TRm9udEljb24uZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY29sbGVjdGlvbiAnXCIgKyBjdXJyZW50TmFtZSArIFwiJyBmcm9tIGZpbGU6IFwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNzc0ZpbGUgPSBmaWxlX3N5c3RlbV8xLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNzc0ZpbGUucmVhZFRleHQoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcCA9IGxpYi5tYXBDc3MoZGF0YSwgVE5TRm9udEljb24uZGVidWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFROU0ZvbnRJY29uLmNzc1tjdXJyZW50TmFtZV0gPSBtYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGxvYWRGaWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Q29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNudCA8IGZvbnRJY29uQ29sbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZEZpbGUoVE5TRm9udEljb24ucGF0aHNbY3VycmVudE5hbWVdKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkRmlsZXMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGxvYWRGaWxlcygpO1xyXG4gICAgfTtcclxuICAgIFROU0ZvbnRJY29uLmNzcyA9IHt9O1xyXG4gICAgVE5TRm9udEljb24ucGF0aHMgPSB7fTtcclxuICAgIFROU0ZvbnRJY29uLmRlYnVnID0gZmFsc2U7XHJcbiAgICByZXR1cm4gVE5TRm9udEljb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuVE5TRm9udEljb24gPSBUTlNGb250SWNvbjtcclxuZnVuY3Rpb24gZm9udGljb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCctJykgPiAtMSkge1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gdmFsdWUuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICAgICAgcmV0dXJuIFROU0ZvbnRJY29uLmNzc1twcmVmaXhdW3ZhbHVlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGb250aWNvbiBjbGFzc25hbWUgZGlkIG5vdCBjb250YWluIGEgcHJlZml4LiBpLmUuLCBcXCdmYS1ibHVldG9vdGhcXCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZXhwb3J0cy5mb250aWNvbiA9IGZvbnRpY29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXRpdmVzY3JpcHQtZm9udGljb24uanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==