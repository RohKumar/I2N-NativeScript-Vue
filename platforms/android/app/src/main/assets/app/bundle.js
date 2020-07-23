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
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./auth-service.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var auth_service_1 = __webpack_require__("./auth-service.js");





Object(_auth_service__WEBPACK_IMPORTED_MODULE_1__["configureOAuthProviders"])();
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

  mounted() {},

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

      tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"]({
        url: "http://172.16.9.77:5000/api/user/login",
        method: "POST",
        content: JSON.stringify({
          email: this.user.email,
          password: this.user.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        console.log("response==", response);

        if (response.content.toJSON().status == 200) {
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"]);
        }
      }, e => {
        console.log("error", e);
      });
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
        tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"]({
          url: "http://172.16.9.77:5000/api/user",
          method: "POST",
          content: JSON.stringify(this.user),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          console.log("response==", response.content.toJSON().status);

          if (response.content.toJSON().status == 201) {
            this.isLoggingIn = !this.isLoggingIn;
          }
        }, e => {
          console.log("error", e);
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
      auth_service_1.tnsOauthLogin("google");
    },

    onLogoutTap() {
      auth_service_1.tnsOauthLogout();
    }

  }
});

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
                      returnKeyType: "done",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.user.name,
                      callback: function($event) {
                        _vm.$set(_vm.user, "name", $event.object["text"])
                      },
                      expression: "user.name"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" }),
                  _c("label", { attrs: { text: _vm.error.username } })
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
                      keyboardType: "number",
                      minlength: "10",
                      returnKeyType: "done",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.user.contactNumber,
                      callback: function($event) {
                        _vm.$set(
                          _vm.user,
                          "contactNumber",
                          $event.object["text"]
                        )
                      },
                      expression: "user.contactNumber"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" }),
                  _c("label", { attrs: { text: _vm.error.contactnumber } })
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
            attrs: { text: "google Login" },
            on: {
              tap: function($event) {
                return _vm.onLoginTap()
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

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false;

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
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var nativescript_oauth2_1 = __webpack_require__("../node_modules/nativescript-oauth2/oauth.js");

var providers_1 = __webpack_require__("../node_modules/nativescript-oauth2/providers/providers.js");

var http = __webpack_require__("../node_modules/@nativescript/core/http/http.js");

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
    clientId: "990767074610-num24b8pb9fqnse32ku32ep4d153q4gu.apps.googleusercontent.com",
    redirectUri: "com.googleusercontent.apps.990767074610-num24b8pb9fqnse32ku32ep4d153q4gu:/auth",
    urlScheme: "com.googleusercontent.apps.990767074610-num24b8pb9fqnse32ku32ep4d153q4gu",
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

function tnsOauthLogout() {
  if (client) {
    client.logout();
  }
}

exports.tnsOauthLogin = tnsOauthLogin;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NGY3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT85OTc0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT83MTQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlPzAzNjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlPzY5MDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlP2Y5N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT85MzA3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT84ZTA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT82YzQ1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlP2ZjMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlPzI1MjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzQ0NDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT9hNzZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWU/NDllYiIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXV0aC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/OWI4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWU/NjlhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT9iMDg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbURldGFpbHMudnVlPzI3NGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT9jMDQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT9lNTE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZT8wYzg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlPzMzZmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWU/NzY2YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZT82ZTM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/N2Y2MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/MDgzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/MTI1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzg3OWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzQyYzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzJjNmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlP2Q5N2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT9mOTllIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWU/YjQwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWU/ZmFhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9vZmZlclFyTW9kYWwudnVlP2EyNWUiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcyIsIndlYnBhY2s6Ly8vLi9mb250cy9pb25pY29ucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL2xpYi5qcyIsIndlYnBhY2s6Ly8vLi9uYXRpdmVzY3JpcHQtZm9udGljb24vbmF0aXZlc2NyaXB0LWZvbnRpY29uLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJWdWUiLCJjb25maWciLCJzaWxlbnQiLCJUTlNGb250SWNvbiIsImZpbHRlciIsImZvbnRpY29uIiwicmVuZGVyIiwiaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibmF0aXZlc2NyaXB0X29hdXRoMl8xIiwicmVxdWlyZSIsInByb3ZpZGVyc18xIiwiaHR0cCIsImNsaWVudCIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzIiwibWljcm9zb2Z0UHJvdmlkZXIiLCJjb25maWd1cmVPQXV0aFByb3ZpZGVyTWljcm9zb2Z0IiwiZ29vZ2xlUHJvdmlkZXIiLCJjb25maWd1cmVPQXV0aFByb3ZpZGVyR29vZ2xlIiwiZmFjZWJvb2tQcm92aWRlciIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJGYWNlYm9vayIsImNvbmZpZ3VyZVRuc09BdXRoIiwiZ29vZ2xlUHJvdmlkZXJPcHRpb25zIiwib3BlbklkU3VwcG9ydCIsImNsaWVudElkIiwicmVkaXJlY3RVcmkiLCJ1cmxTY2hlbWUiLCJzY29wZXMiLCJUbnNPYVByb3ZpZGVyR29vZ2xlIiwiZmFjZWJvb2tQcm92aWRlck9wdGlvbnMiLCJjbGllbnRTZWNyZXQiLCJUbnNPYVByb3ZpZGVyRmFjZWJvb2siLCJtaWNyb3NvZnRQcm92aWRlck9wdGlvbnMiLCJUbnNPYVByb3ZpZGVyTWljcm9zb2Z0IiwidG5zT2F1dGhMb2dpbiIsInByb3ZpZGVyVHlwZSIsIlRuc09BdXRoQ2xpZW50IiwibG9naW5XaXRoQ29tcGxldGlvbiIsInRva2VuUmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidG5zT2F1dGhMb2dvdXQiLCJsb2dvdXQiLCJtYXBDc3MiLCJkYXRhIiwiZGVidWciLCJtYXAiLCJzZXRzIiwic3BsaXQiLCJfaSIsInNldHNfMSIsImxlbmd0aCIsInNldCIsInBhaXIiLCJrZXlHcm91cHMiLCJrZXlzIiwiY2xlYW5WYWx1ZSIsIl9hIiwia2V5c18xIiwia2V5IiwidHJpbSIsInNsaWNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWwiLCJtYXRjaGVzIiwibWF0Y2giLCJmaWxlX3N5c3RlbV8xIiwibGliIiwibG9hZENzcyIsImNudCIsImN1cnJlbnROYW1lIiwiZm9udEljb25Db2xsZWN0aW9ucyIsInBhdGhzIiwiaW5pdENvbGxlY3Rpb24iLCJjc3MiLCJsb2FkRmlsZSIsInBhdGgiLCJjc3NGaWxlIiwia25vd25Gb2xkZXJzIiwiY3VycmVudEFwcCIsImdldEZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRUZXh0IiwidGhlbiIsImVyciIsImxvYWRGaWxlcyIsImluZGV4T2YiLCJwcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTtBQUNBO0FBQ0Esd0VBREE7QUFFQSw4REFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBTkE7O0FBWUEsYUFDQTtBQUNBLEdBZEE7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxP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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGVBQWU7QUFDZixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFZO0FBQ3REaEIsZUFBRztBQUNILG1CQUFPa0IsU0FBUyxHQUFHRixJQUFaLENBQWlCLFlBQVk7QUFDaENILHFCQUFPO0FBQ1YsYUFGTSxDQUFQO0FBR0gsV0FMRDtBQU1ILFNBUEQsTUFRSztBQUNEQSxpQkFBTztBQUNWO0FBQ0osT0FiTSxDQUFQO0FBY0gsS0FmRDs7QUFnQkEsV0FBT0ssU0FBUyxFQUFoQjtBQUNILEdBNUNEOztBQTZDQTNGLGFBQVcsQ0FBQzhFLEdBQVosR0FBa0IsRUFBbEI7QUFDQTlFLGFBQVcsQ0FBQzRFLEtBQVosR0FBb0IsRUFBcEI7QUFDQTVFLGFBQVcsQ0FBQzhDLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxTQUFPOUMsV0FBUDtBQUNILENBcERrQixFQUFuQjs7QUFxREFPLE9BQU8sQ0FBQ1AsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU0UsUUFBVCxDQUFrQk0sS0FBbEIsRUFBeUI7QUFDckIsTUFBSUEsS0FBSixFQUFXO0FBQ1AsUUFBSUEsS0FBSyxDQUFDb0YsT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBQyxDQUExQixFQUE2QjtBQUN6QixVQUFJQyxNQUFNLEdBQUdyRixLQUFLLENBQUN5QyxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFiO0FBQ0EsYUFBT2pELFdBQVcsQ0FBQzhFLEdBQVosQ0FBZ0JlLE1BQWhCLEVBQXdCckYsS0FBeEIsQ0FBUDtBQUNILEtBSEQsTUFJSztBQUNEZ0MsYUFBTyxDQUFDQyxHQUFSLENBQVkscUVBQVo7QUFDSDtBQUNKOztBQUNELFNBQU9qQyxLQUFQO0FBQ0g7O0FBQ0RELE9BQU8sQ0FBQ0wsUUFBUixHQUFtQkEsUUFBbkIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XHJcbiAgICA8IS0tIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIC0tPlxyXG5cclxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLGF1dG8sKixhdXRvXCIgY29sdW1ucz1cImF1dG9cIj5cclxuICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICByZWY9XCJuYXZTdGF0dXNCYXJcIlxyXG4gICAgICAgIGNsYXNzPVwibmF2U3RhdHVzQmFyXCJcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjYmQyMTIyXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgcm93cz1cImF1dG9cIlxyXG4gICAgICAgIGNvbHVtbnM9XCIqLGF1dG8sYXV0byxhdXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHRleHQ9XCJIb21lXCIgY2xhc3M9XCJzdGF0dXMtdGl0bGVcIj48L0xhYmVsPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY29sPVwiMFwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIEB0YXA9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcbiAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGNvbD1cIjFcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICBAdGFwPVwiYmVsbFwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuICAgICAgICAgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9iZWxsLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGNvbD1cIjJcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICBAdGFwPVwib2ZmZXJcIlxyXG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcbiAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvb2ZmZXIucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgQHRhcD1cImdvVG9Mb2dpblwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgY29sPVwiM1wiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIGNsYXNzPVwic3RhdHVzLXByb2ZpbGVcIlxyXG4gICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL21lLmpwZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICByb3c9XCIxXCJcclxuICAgICAgICByZWY9XCJuYXZUYWJcIlxyXG4gICAgICAgIGNsYXNzPVwibmF2VGFiXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNTBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgcm93cz1cImF1dG9cIlxyXG4gICAgICAgIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiXHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZExheW91dFxyXG4gICAgICAgICAgY2xhc3M9XCJ0YWJ2aWV3XCJcclxuICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiXHJcbiAgICAgICAgICBAdGFwPVwicG9wdWxhclwiXHJcbiAgICAgICAgICByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgIGNvbHM9XCJhdXRvXCJcclxuICAgICAgICAgIGNvbD1cIjBcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjMzJVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiXHJcbiAgICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICA6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPyd+L2Fzc2V0cy9pbWFnZXMvcG9wdWxhci5wbmcnOicnXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCIgcm93PVwiMVwiIHRleHQ9XCJQT1BVTEFSXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICBjbGFzcz1cInRhYnZpZXdcIlxyXG4gICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgIEB0YXA9XCJzaG93Q2F0ZWdvcnlcIlxyXG4gICAgICAgICAgcm93cz1cIiosYXV0b1wiXHJcbiAgICAgICAgICBjb2xzPVwiYXV0b1wiXHJcbiAgICAgICAgICBjb2w9XCIxXCJcclxuICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzNCVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiXHJcbiAgICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICA6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPyd+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nJzonJ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiXHJcbiAgICAgICAgICAgIHJvdz1cIjFcIlxyXG4gICAgICAgICAgICB0ZXh0PVwiQ0FURUdPUllcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYnZpZXdUZXh0XCJcclxuICAgICAgICAgID48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8R3JpZExheW91dFxyXG4gICAgICAgICAgY2xhc3M9XCJ0YWJ2aWV3XCJcclxuICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09Mj8nYWN0aXZlJzonJ1wiXHJcbiAgICAgICAgICBAdGFwPVwic2hvd1Byb21vc1wiXHJcbiAgICAgICAgICByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgIGNvbHM9XCJhdXRvXCJcclxuICAgICAgICAgIGNvbD1cIjJcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjMzJVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAyXCJcclxuICAgICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCIgcm93PVwiMVwiIHRleHQ9XCJQUk9NT1NcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgIDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAwXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgPExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8aXRlbSA6aXRlbT1cIml0ZW1cIiBAY2xpY2tlZD1cInNob3dJdGVtKGl0ZW0pXCIgLz5cclxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgIDxMaXN0Vmlld1xyXG4gICAgICAgICAgcmVmPVwibGlzdHZpZXdcIlxyXG4gICAgICAgICAgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICBmb3I9XCJpdGVtIGluIGl0ZW1zQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPENhdGVnb3J5IDppdGVtPVwiaXRlbVwiPjwvQ2F0ZWdvcnk+XHJcbiAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj48L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8bmF2Qm90dG9tIHJvdz1cIjNcIiAvPlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG4gIDwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHsgU3dpc3NBcm15S25pZmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmVcIjtcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCBuYXZCb3R0b20gZnJvbSBcIi4vY3VzdG9tL25hdkJvdHRvbVwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9jdXN0b20vaXRlbVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY3VzdG9tL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBRck1vZGFsIGZyb20gXCIuL2N1c3RvbS9vZmZlclFyTW9kYWxcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzIGZyb20gXCIuL0l0ZW1EZXRhaWxzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jdXN0b20vbG9naW5cIjtcclxuY29uc3QgZ2VzdHVyZXMgPSByZXF1aXJlKFwidWkvZ2VzdHVyZXNcIik7XHJcbmNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIG5hdkJvdHRvbSxcclxuICAgIEl0ZW0sXHJcbiAgICBDYXRlZ29yeVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGl0ZW1zQ2F0ZWdvcnkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvdXRlczoge1xyXG4gICAgICAgIGxvZ2luOiBMb2dpblxyXG4gICAgICB9LFxyXG4gICAgICBsYXN0RGVsWTogMCxcclxuICAgICAgaGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXHJcbiAgICAgIHNlbGVjdGVkVGFidmlldzogMCxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk1hbmlsYSBVbHRpbWF0ZSBUb21ic3RvbmUgQnVyZ2VyXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjIuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjMuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjUuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjYuanBnXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkJ1cmdlclwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzJEOUNEQlwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiMzAwLjAwXCIsXHJcbiAgICAgICAgICBsaWtlczogOTg3LFxyXG4gICAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgICBjb21tZW50czogMTMsXHJcbiAgICAgICAgICByYXRpbmc6IFwiNC41XCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUXVlem9uIENob2NvbGF0ZSBNYXJibGUgUGFuY2FrZVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTIuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMy5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTUuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNi5qcGdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiUGFuY2FrZVwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiMjMwLjAwXCIsXHJcbiAgICAgICAgICBsaWtlczogODkxLFxyXG4gICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOiA3LFxyXG4gICAgICAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJpbm9uZG8gQmxhY2sgRm9yZXN0IENha2VcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTMuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlNC5qcGdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQ2FrZVwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiMzAwLjAwXCIsXHJcbiAgICAgICAgICBsaWtlczogNzMwLFxyXG4gICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOiAxMSxcclxuICAgICAgICAgIHJhdGluZzogXCI0LjBcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImFcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgY2F0ZWdvcnk6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuICAgICAgICAgIGNvdW50OiBcIjEzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJDQUtFXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJCRUVSXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI3XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIpO1xyXG4gICAgfSxcclxuICAgIGJlbGwoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVsbFwiKTtcclxuICAgIH0sXHJcbiAgICBvZmZlcigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJRUlwiKTtcclxuICAgICAgdGhpcy4kc2hvd01vZGFsKFFyTW9kYWwpO1xyXG4gICAgfSxcclxuICAgIGdvVG9Mb2dpbigpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge30pO1xyXG4gICAgfSxcclxuICAgIHNob3dJdGVtKHBheWxvYWQpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhJdGVtRGV0YWlscywge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBpdGVtOiBwYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3B1bGFyKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XHJcbiAgICB9LFxyXG4gICAgc2hvd0NhdGVnb3J5KCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Byb21vcygpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAyO1xyXG4gICAgfSxcclxuICAgIGhvbWUoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgfSxcclxuICAgIGNhcnQoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG4gICAgfSxcclxuICAgIGhpc3RvcnkoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xyXG4gICAgfSxcclxuICAgIGFib3V0KCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMztcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udGFidmlldy5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogNTA7XHJcbn1cclxuLnRhYnZpZXdUZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxNTtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gIGZvbnQtc2l6ZTogMTM7XHJcbiAgY29sb3I6ICNkOGQyZDI7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2VGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTIyO1xyXG59XHJcbi5uYXZUYWJ2aWV3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi5zdGF0dXMtaW1nIHtcclxuICBtYXJnaW4tdG9wOiA0O1xyXG4gIG1hcmdpbi1yaWdodDogMjA7XHJcbiAgd2lkdGg6IDMwO1xyXG4gIGhlaWdodDogMzA7XHJcbn1cclxuLnN0YXR1cy1wcm9maWxlIHtcclxuICBib3JkZXItd2lkdGg6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWViZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICB3aWR0aDogMzA7XHJcbiAgaGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBtYXJnaW4tbGVmdDogMTU7XHJcbiAgbWFyZ2luLXRvcDogODtcclxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgICAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiIEBsb2FkZWQ9XCJvbkxvYWRlZFwiPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1haW5cIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1jb3ZlclwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIipcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIG1hcmdpblRvcD1cIi00MFwiIGhlaWdodD1cIjE4MFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1nXCIgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgQHRhcD1cImNsb3NlXCIgOnRleHQ9XCInZmEtYXJyb3ctbGVmdCcgfCBmb250aWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBjbG9zZVwiIGZvbnRTaXplPVwiMjRcIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzcz1cImFuaW0taW1hZ2VzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2LWZvcj1cImltYWdlIGluIGl0ZW0uaW1hZ2VzXCIgcm93cz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10aHVtYlwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgOnNyYz1cImltYWdlLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiIGNsYXNzPVwiY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1pdGVtSW5mb1wiIG1hcmdpblRvcD1cIjE1XCIgcm93PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgY29sdW1ucz1cImF1dG8sKlwiIHJvd3M9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImNhdGVnb3J5SWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuPVwiMlwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJpdGVtLmNhdGVnb3J5VGFnXCIgY2xhc3M9XCJmYSBjYXRlZ29yeS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIDp0ZXh0PVwiJ0F2ZXJhZ2UgUmF0ZTonICsgaXRlbS5yYXRpbmcgXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgY29sPVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYSByYXRlXCIgOnRleHQ9XCInZmEtc3RhcicgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmEgcmF0ZVwiIDp0ZXh0PVwiJ2ZhLXN0YXInIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYSByYXRlXCIgOnRleHQ9XCInZmEtc3RhcicgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyLWhhbGYtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpbmUgYW5pbS1saWtlc1wiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImFuaW0tbGlrZXNcIiBtYXJnaW5Ub3A9XCI1XCIgd2lkdGg9XCIxMDAlXCIgcm93PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cImF1dG8sKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjBcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlTGlrZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJsaWtlXCIgY2xhc3M9XCJsaWtlLWljb24gZmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiW2lzTGlrZSA/ICdsaWtlZC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cImlzTGlrZSA/ICdmYS10aHVtYnMtdXAnOidmYS10aHVtYnMtby11cCcgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmxpa2VzXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBtYXJnaW5MZWZ0PVwiMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLWNvbW1lbnQtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5jb21tZW50c1wiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIyXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXNIZWFydCA/ICdoZWFydC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cImlzSGVhcnQgPyAnZmEtaGVhcnQnOidmYS1oZWFydC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiRmF2b3JpdGVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiM1wiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtc2hhcmUtc3F1YXJlLW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiU2hhcmVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVhayBhbmltLWxpa2VzXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkbGF5b3V0IHJvd3M9XCJhdXRvLCpcIiBjbGFzcz1cImNvbnRlbnQgYW5pbS1jb250ZW50XCIgbWFyZ2luVG9wPVwiMTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3c9XCIwXCIgcm93cz1cImF1dG9cIiBtYXJnaW5Cb3R0b209XCI1XCIgY29sdW1ucz1cImF1dG8sIGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIDp0ZXh0PVwiJ2ZhLXRhZ3MnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIGRlc2NyaXB0aW9uLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCIgdGV4dD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0dmlldyBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICA8L0dyaWRsYXlvdXQ+XHJcblxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWNvbigpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCZWVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJlZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtY29mZmVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNMaWtlID0gdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICAgICAgdGhpcy5pc0hlYXJ0ID0gdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge30sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYW5pbWF0ZUZyb20oKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlRnJvbSgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3ZlciA9IHRoaXMuJHJlZnMuY292ZXIubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSB0aGlzLiRyZWZzLmltYWdlcy5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLiRyZWZzLnBhZ2UubmF0aXZlVmlldztcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZXMudHJhbnNsYXRlWSA9IDIwMDtcclxuICAgICAgICAgICAgICAgIGltYWdlcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGltYWdlcy5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICAgICAgY292ZXIuc2NhbGVZID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3Zlci50cmFuc2xhdGVZID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgY292ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICAgICAgY292ZXIuc2NhbGVZID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAocGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkNGQ2ZDhcIiksIHRoaXMuYW5pbWF0ZVRvKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVUbygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3ZlciA9IHRoaXMuJHJlZnMuY292ZXIubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSB0aGlzLiRyZWZzLmltYWdlcy5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLiRyZWZzLnBhZ2UubmF0aXZlVmlldztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZXMuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyBcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSAsXHJcbiAgICAgICAgICAgICAgICAvLyBcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwfSxcclxuICAgICAgICAgICAgICAgIC8vIFx0b3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIC8vIFx0ZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAvLyBcdGRlbGF5OiAxNTBcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMC41XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvdmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMTAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMubGlrZS5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgaW1nTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZUZhdm9yaXRlKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVMaWtlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGlrZSA9ICF0aGlzLmlzTGlrZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGlrZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hlYXJ0ID0gIXRoaXMuaXNIZWFydDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbGlja0J1dHRvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzSGVhcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG5cdFx0XHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0XHRcdFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFcdGBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xyXG4gICAgICAgIG1hcmdpbjogMTUgMCAwIDE1O1xyXG4gICAgfVxyXG5cclxuICAgIFRleHRWaWV3IHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzNlOWVkYjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tdmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICNGRkU5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxODtcclxuICAgIH1cclxuXHJcbiAgICAucmF0aW5nLXZhbHVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZWQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzQwODBGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhcnQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2I1MTIxMztcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxheW91dCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgcGFkZGluZzogNSAwIDUgMDtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZS1pY29uIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgICAgICAgcGFkZGluZzogNSA1IDUgNTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pY29uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgICAgICAgd2lkdGg6IDQwO1xyXG4gICAgICAgIGhlaWdodDogNDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMTY7ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1MDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWltZy10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgyODI4MjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgICAgICAgd2lkdGg6IDEzMDtcclxuICAgICAgICBoZWlnaHQ6IDcwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuXHJcbiAgICAubGluZUJyZWFrIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1wYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNmQ4O1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZTtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGtleS1wYWdlIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1jb3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNTtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LWNvdmVyIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMzAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1pbWFnZXMge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC43O1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMzAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1pdGVtSW5mbyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWl0ZW1JbmZvO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LWl0ZW1JbmZvIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW0tbGlrZXMge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcztcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGtleS1saWtlcyB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWNvbnRlbnQge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LWNvbnRlbnQge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblxyXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9XCIxNTBcIiB3aWR0aD1cIjEwMCVcIiBtYXJnaW5Cb3R0b209XCIxMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcclxuICAgICAgICAgICAgOnNyYz1cIml0ZW0uY292ZXJcIiAvPiAvPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImJhbm5lcjJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNDg5ZTllOWVcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0uY2F0ZWdvcnkgKyAnICgnICsgIGl0ZW0uY291bnQgICsgICcpJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXRlZ29yeS1uYW1lICBtLWItMTAgbS10LTEwXCIgdGV4dHdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25DbGlja0J1dHRvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xpY2tlZFwiLCBkYXRhLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmRlZmF1bHQtaW1nIHtcclxuICAgICAgICBjb2xvcjogI2QxY2VjZTViO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1uYW1lIHtcclxuICAgICAgICBjb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNSAwIDE1IDBcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgICAgICBvcGFjaXR5OiAuMztcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtYWluXCI+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIGNsYXNzPVwiY2FyZC1pbWdcIiBAdGFwPVwib25DbGlja0J1dHRvbigpXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY29sdW1ucz1cImF1dG8sKlwiIHJvd3M9XCJhdXRvLGF1dG9cIiBjbGFzcz1cIlwiXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY2F0ZWdvcnlJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3Bhbj1cIjJcIiA6YmFja2dyb3VuZENvbG9yPVwiaXRlbS5jYXRlZ29yeVRhZ1wiIGNsYXNzPVwiZmEgY2F0ZWdvcnktaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMVwiIGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwiZmEgcmF0aW5nLWljb25cIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMlwiIHJvdz1cIjBcIiBjbGFzcz1cInJhdGluZy12YWx1ZSBpdGVtLWNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLnJhdGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIG1hcmdpblRvcD1cIjVcIiBjbGFzcz1cImxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBIZXJlIHRoZSBwcm9ibGVtIGluIHNjcm9sbCB0cmFuc2lzdGlvbiAtLT5cclxuICAgICAgICAgICAgPEl0ZW1MaWtlIDppdGVtPVwiaXRlbVwiPjwvSXRlbUxpa2U+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwibGluZUJyZWFrXCIgLz5cclxuXHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBJdGVtTGlrZSBmcm9tIFwiLi9pdGVtTGlrZVwiO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBpc0lPUyxcclxuICAgICAgICBpc0FuZHJvaWRcclxuICAgIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIEl0ZW1MaWtlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUljb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5jYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtY3V0bGVyeVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQmVlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1iZWVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQYW5jYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWNvZmZlZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1iaXJ0aGRheS1jYWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWZpcmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMaWtlID0gIHRoaXMuaXRlbS5pc0xpa2VcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0hlYXJ0ID0gIHRoaXMuaXRlbS5pc0Zhdm9yaXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge30sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhbmltYXRlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5saWtlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUxpa2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5pc0xpa2UgPSAhdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0uaXNMaWtlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbGlja0J1dHRvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFydDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5pdGVtLWNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctaWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM7XHJcbiAgICAgICAgY29sb3I6ICNGRkU5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy12YWx1ZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2VkLWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICM0MDgwRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYXJ0LWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNiNTEyMTM7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlZmF1bHQge1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBoZWlnaHQ6IDMwO1xyXG4gICAgICAgIHBhZGRpbmc6IDUgMCA1IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2UtaWNvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBoZWlnaHQ6IDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyO1xyXG4gICAgICAgIHBhZGRpbmc6IDUgNSA1IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktaWNvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICAgICAgICB3aWR0aDogNDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lQnJlYWsge1xyXG4gICAgICAgIGhlaWdodDogNztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8IS0tIDxHcmlkTGF5b3V0IG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCIgY29sdW1ucz1cImF1dG8sKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPiAtLT5cclxuICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCosYXV0byxhdXRvXCIgcm93cz1cImF1dG9cIj5cclxuICAgICAgICA8R3JpZExheW91dCBjb2w9XCIwXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUxpa2VcIj5cclxuICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwibGlrZVwiIGNsYXNzPVwibGlrZS1pY29uIGZhXCIgOmNsYXNzPVwiW2l0ZW0uaXNMaWtlID8gJ2xpa2VkLWFjdGl2ZScgOiAnZGVmYXVsdCddXCJcclxuICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5pc0xpa2UgPyAnZmEtdGh1bWJzLXVwJzonZmEtdGh1bWJzLW8tdXAnIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5saWtlc1wiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgbWFyZ2luTGVmdD1cIjE1XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1jb21tZW50LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uY29tbWVudHNcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMlwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVIZWFydFwiXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMTVcIj5cclxuICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiZmF2b3JpdGVcIiBjbGFzcz1cImxpa2UtaWNvbiAgZmFcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2l0ZW0uaXNGYXZvcml0ZSA/ICdoZWFydC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiIDp0ZXh0PVwiaXRlbS5pc0Zhdm9yaXRlID8gJ2ZhLWhlYXJ0JzonZmEtaGVhcnQtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIkZhdm9yaXRlXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjNcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIlNoYXJlXCI+PC9MYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgIDwvR3JpZExheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGlzSU9TLFxyXG4gICAgICAgIGlzQW5kcm9pZFxyXG4gICAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWNvbigpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCZWVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJlZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtY29mZmVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0xpa2UgPSAgdGhpcy5pdGVtLmlzTGlrZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmlzSGVhcnQgPSAgdGhpcy5pdGVtLmlzRmF2b3JpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVMaWtlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmxpa2UubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVGYXZvcml0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5mYXZvcml0ZS5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgaW1nTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVMaWtlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlTGlrZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmlzTGlrZSA9ICF0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5pc0xpa2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzIC09IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUhlYXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgdGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzTGlrZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0hlYXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy1pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMztcclxuICAgICAgICBjb2xvcjogI0ZGRTkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAucmF0aW5nLXZhbHVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZWQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzQwODBGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhcnQtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2I1MTIxMztcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxheW91dCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgcGFkZGluZzogNSAwIDUgMDtcclxuICAgIH1cclxuXHJcbiAgICAubGlrZS1pY29uIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgICAgICAgcGFkZGluZzogNSA1IDUgNTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pY29uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gICAgICAgIHdpZHRoOiA0MDtcclxuICAgICAgICBoZWlnaHQ6IDQwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lQnJlYWsge1xyXG4gICAgICAgIGhlaWdodDogNztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2VcclxuICAgIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIlxyXG4gICAgY2xhc3M9XCJhbmltLXBhZ2VcIlxyXG4gICAgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIlxyXG4gICAgQGxvYWRlZD1cIm9uTG9hZGVkXCJcclxuICA+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IudXNlcm5hbWVcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cImNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgbWlubGVuZ3RoPVwiMTBcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5jb250YWN0TnVtYmVyXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJlcnJvci5jb250YWN0bnVtYmVyXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuZW1haWxcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IucGFzc3dvcmRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiXHJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/ICcgOiAnQmFjayB0byBMb2dpbidcIj48L1NwYW4+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XHJcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgIDwvTGFiZWw+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCJcclxuICAgICAgICB0ZXh0PVwiZ29vZ2xlIExvZ2luXCJcclxuICAgICAgICBAdGFwPVwib25Mb2dpblRhcCgpXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXV0aC1zZXJ2aWNlXCIpO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVPQXV0aFByb3ZpZGVycywgdG5zT2F1dGhMb2dpbiB9IGZyb20gXCIuLi8uLi9hdXRoLXNlcnZpY2VcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWVcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbmNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yczogW10sXHJcbiAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogXCJwYXJ0aFwiLFxyXG4gICAgICAgIGNvbnRhY3ROdW1iZXI6IDIxMzMzMyxcclxuICAgICAgICBlbWFpbDogXCJwYXJ0aEBnbWFpbC5jb21cIixcclxuICAgICAgICBwYXNzd29yZDogMTIzMzM0LFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7fSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICAgfSBcclxuICAgICAgaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogXCJodHRwOi8vMTcyLjE2LjkuNzc6NTAwMC9hcGkvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtlbWFpbDp0aGlzLnVzZXIuZW1haWwscGFzc3dvcmQ6dGhpcy51c2VyLnBhc3N3b3JkfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlPT1cIiwgcmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICB0aGlzLmVycm9yID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy51c2VyLm5hbWUpIHtcclxuICAgICAgICB0aGlzLmVycm9yLnVzZXJuYW1lID0gXCJVc2VybmFtZSByZXF1aXJlZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5jb250YWN0TnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5jb250YWN0bnVtYmVyID0gXCJDb250YWN0IE51bWJlciByZXF1aXJlZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpc0VtcHR5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9yKS5ldmVyeShcclxuICAgICAgICAoeCkgPT4geCA9PT0gbnVsbCB8fCB4ID09PSBcIlwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpc0VtcHR5KSB7XHJcbiAgICAgICAgaHR0cFxyXG4gICAgICAgICAgLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovLzE3Mi4xNi45Ljc3OjUwMDAvYXBpL3VzZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSxcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlPT1cIiwgcmVzcG9uc2UuY29udGVudC50b0pTT04oKS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLnN0YXR1cyA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZEVtYWlsKGVtYWlsKSB7XHJcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICB0aGlzLmVycm9yID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbnRhY3RudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2dpblRhcCgpIHtcclxuICAgICAgYXV0aF9zZXJ2aWNlXzEudG5zT2F1dGhMb2dpbihcImdvb2dsZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2dvdXRUYXAoKSB7XHJcbiAgICAgIGF1dGhfc2VydmljZV8xLnRuc09hdXRoTG9nb3V0KCk7XHJcbiAgICB9LFxyXG5cclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNkNTFhMWE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTFhMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJuYXZCb3R0b21cIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIiByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIj5cclxuXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTA/J2FjdGl2ZSc6JydcIiBAdGFwPVwiaG9tZVwiIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgICBjb2xzPVwiYXV0b1wiIGNsYXNzPVwibmF2XCIgY29sPVwiMFwiIHJvdz1cIjBcIiB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09MD8nfi9hc3NldHMvaW1hZ2VzL25hdmhvbWVtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZob21lLnBuZydcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIHYtc2hvdz1cInNlbGVjdGVkVGFiPT0wXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cIm5hdlRleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8R3JpZExheW91dCA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09MT8nYWN0aXZlJzonJ1wiIEB0YXA9XCJjYXJ0XCIgcm93cz1cIiosYXV0b1wiXHJcbiAgICAgICAgICAgIGNvbHM9XCJhdXRvXCIgY2xhc3M9XCJuYXZcIiBjb2w9XCIxXCIgcm93PVwiMFwiIHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09MT8nYWN0aXZlJzonJ1wiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFiPT0xPyd+L2Fzc2V0cy9pbWFnZXMvbmF2Y2FydG0ucG5nJzonfi9hc3NldHMvaW1hZ2VzL25hdmNhcnQucG5nJ1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgdi1zaG93PVwic2VsZWN0ZWRUYWIgPT0gMVwiIHRleHQ9XCJDYXJ0XCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTI/J2FjdGl2ZSc6JydcIiBAdGFwPVwiaGlzdG9yeVwiIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgICBjb2xzPVwiYXV0b1wiIGNsYXNzPVwibmF2XCIgY29sPVwiMlwiIHJvdz1cIjBcIiB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09Mj8nfi9hc3NldHMvaW1hZ2VzL25hdm9yZGVyc20ucG5nJzonfi9hc3NldHMvaW1hZ2VzL25hdm9yZGVycy5wbmcnXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiB2LXNob3c9XCJzZWxlY3RlZFRhYiA9PSAyXCIgdGV4dD1cIkhpc3RvcnlcIiBjbGFzcz1cIm5hdlRleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTM/J2FjdGl2ZSc6JydcIiBAdGFwPVwiYWJvdXRcIiByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgICAgY29scz1cImF1dG9cIiBjbGFzcz1cIm5hdlwiIGNvbD1cIjNcIiByb3c9XCIwXCIgd2lkdGg9XCIyNSVcIj5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSA6Y2xhc3M9XCJzZWxlY3RlZFRhYj09Mz8nYWN0aXZlJzonJ1wiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFiPT0zPyd+L2Fzc2V0cy9pbWFnZXMvbmF2dXNtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZ1cy5wbmcnXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiB2LXNob3c9XCJzZWxlY3RlZFRhYiA9PSAzXCIgdGV4dD1cIkFib3V0XCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgIDwvR3JpZExheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWI6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaG9tZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpc3RvcnkoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWJvdXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5hdkJvdHRvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRGM0Mzc3NjtcclxuICAgIH1cclxuXHJcbiAgICAubmF2SWNvbiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyNVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZJY29uLmFjdGl2ZSB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2VGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjtcclxuICAgICAgICBmb250LXNpemU6IDEyO1xyXG4gICAgICAgIC8qIGNvbG9yOiAjYzQzNzc2OyAqL1xyXG4gICAgICAgIGNvbG9yOiAjZDYyNTI2O1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PFN0YWNrTGF5b3V0IGNsYXNzPVwicC0xNVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblx0XHQ8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL3FyLnBuZ1wiIHN0cmV0Y2g9XCJub25lXCIgLz5cclxuXHRcdDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiQ2xvc2UgTW9kYWxcIiBAdGFwPVwiJG1vZGFsLmNsb3NlKClcIiAvPlxyXG5cdDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYnZpZXcuYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogNTA7XFxufVxcbi50YWJ2aWV3VGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXNpemU6IDEzO1xcclxcbiAgY29sb3I6ICNkOGQyZDI7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxufVxcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5uYXZUYWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEyMjtcXG59XFxuLm5hdlRhYnZpZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLnN0YXR1cy1pbWcge1xcclxcbiAgbWFyZ2luLXRvcDogNDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxyXFxuICB3aWR0aDogMzA7XFxyXFxuICBoZWlnaHQ6IDMwO1xcbn1cXG4uc3RhdHVzLXByb2ZpbGUge1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgd2lkdGg6IDMwO1xcclxcbiAgaGVpZ2h0OiAzMDtcXG59XFxuLnN0YXR1cy10aXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1O1xcclxcbiAgbWFyZ2luLXRvcDogODtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNsb3NlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcbiAgICBtYXJnaW46IDE1IDAgMCAxNTtcXG59XFxuVGV4dFZpZXdbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmRlc2NyaXB0aW9uLWljb25bZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzNlOWVkYjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzY3JpcHRpb24tdmFsdWVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLnJhdGVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHBhZGRpbmctdG9wOiAzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE4O1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuLmxpa2VkLWFjdGl2ZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgY29sb3I6ICM0MDgwRkY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5sYXlvdXRbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxuICAgIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgLyogbWFyZ2luLXRvcDogMTY7ICovXFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4uY2FyZC1pbWctdGh1bWJbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjgyODI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHdpZHRoOiAxMzA7XFxuICAgIGhlaWdodDogNzA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4uYW5pbS1wYWdlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNmQ4O1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LXBhZ2UtZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktcGFnZS1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxufVxcbjIwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG59XFxuLmFuaW0tY292ZXJbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXItZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvdmVyLWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMzAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1pbWFnZXNbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzLWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pbWFnZXMtZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4zMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWl0ZW1JbmZvW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWl0ZW1JbmZvLWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mby1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1saWtlc1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcy1kYXRhLXYtMzUwYzM2MjQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktbGlrZXMtZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50LWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlZmF1bHQtaW1nW2RhdGEtdi03ZDUwNzc3MV0ge1xcbiAgICBjb2xvcjogI2QxY2VjZTViO1xcbn1cXG4uY2F0ZWdvcnktbmFtZVtkYXRhLXYtN2Q1MDc3NzFdIHtcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNSAwIDE1IDBcXG59XFxuLmJhbm5lcltkYXRhLXYtN2Q1MDc3NzFdIHtcXG4gICAgY29sb3I6ICNiZGJkYmQ7XFxuICAgIG9wYWNpdHk6IC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5yYXRpbmctaWNvbltkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBjb2xvcjogIzQwODBGRjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgbWFyZ2luLXRvcDogMTY7XFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIGhlaWdodDogNztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5yYXRpbmctaWNvbltkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIGNvbG9yOiAjRkZFOTAwO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBjb2xvcjogIzQwODBGRjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgbWFyZ2luLXRvcDogMTY7XFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG59XFxuLmxpbmVbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBoZWlnaHQ6IDc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuICBoZWlnaHQ6IDkwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNkNTFhMWE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxufVxcbi5pbnB1dC1maWVsZCAuaW5wdXRbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBmb250LXNpemU6IDU0O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBoZWlnaHQ6IDUwO1xcclxcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2E4YThhODtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5uYXZCb3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuLm5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEYzQzNzc2O1xcbn1cXG4ubmF2SWNvbiB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNVxcbn1cXG4ubmF2SWNvbi5hY3RpdmUge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG4ubmF2VGV4dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIC8qIGNvbG9yOiAjYzQzNzc2OyAqL1xcbiAgICBjb2xvcjogI2Q2MjUyNjtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLCosYXV0b1wiLCBjb2x1bW5zOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibmF2U3RhdHVzQmFyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlN0YXR1c0JhclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiZDIxMjJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCIqLGF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zZWFyY2ggfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVsbC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYmVsbCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub2ZmZXIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Mb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucG9wdWxhciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUE9QVUxBUlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ0FURUdPUllcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzMlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93UHJvbW9zIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJQUk9NT1NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJHcmlkTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwibmF2Qm90dG9tXCIsIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9LFxuICAgICAgb246IHsgbG9hZGVkOiBfdm0ub25Mb2FkZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIsIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi00MFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2xvc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1hcnJvdy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taW1hZ2VzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0byxhdXRvLGF1dG9cIiwgY29sdW1uczogXCJhdXRvXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1pdGVtSW5mb1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2F0ZWdvcnktaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXZlcmFnZSBSYXRlOlwiICsgX3ZtLml0ZW0ucmF0aW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIsIGNvbDogXCIxXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zdGFyXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXItaGFsZi1vXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKixhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlTGlrZSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJsaWtlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmlzTGlrZSA/IFwibGlrZWQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNMaWtlID8gXCJmYS10aHVtYnMtdXBcIiA6IFwiZmEtdGh1bWJzLW8tdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IF92bS5pdGVtLmxpa2VzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWNvbW1lbnQtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmNvbW1lbnRzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXNIZWFydCA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNIZWFydCA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiM1wiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaGFyZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVCcmVhayBhbmltLWxpa2VzXCIsXG4gICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgYW5pbS1jb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0bywqXCIsIG1hcmdpblRvcDogXCIxNVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGRlc2NyaXB0aW9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdGFnc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uXCIsIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHR2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3dzOiBcIipcIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwXCIsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiAvPlxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhbm5lcjJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM0ODllOWU5ZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeSArIFwiIChcIiArIF92bS5pdGVtLmNvdW50ICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsIHNyYzogX3ZtLml0ZW0uY292ZXIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRpbmctaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmF0aW5nLXZhbHVlIGl0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjJcIiwgcm93OiBcIjBcIiwgdGV4dDogX3ZtLml0ZW0ucmF0aW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJJdGVtTGlrZVwiLCB7IGF0dHJzOiB7IGl0ZW06IF92bS5pdGVtIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWtcIiwgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sKixhdXRvLGF1dG9cIiwgcm93czogXCJhdXRvXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlTGlrZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJsaWtlXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgIGNsYXNzOiBbX3ZtLml0ZW0uaXNMaWtlID8gXCJsaWtlZC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzTGlrZSA/IFwiZmEtdGh1bWJzLXVwXCIgOiBcImZhLXRodW1icy1vLXVwXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBfdm0uaXRlbS5saWtlcyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjFcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLCBtYXJnaW5MZWZ0OiBcIjE1XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWNvbW1lbnQtb1wiKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmNvbW1lbnRzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJoZWFydC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjNcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxheW91dFwiLCBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLm9uTG9hZGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlVzZXIgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci51c2VybmFtZSB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbnRhY3ROdW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbnRhY3QgTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuY29udGFjdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFjdE51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmNvbnRhY3ROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci5jb250YWN0bnVtYmVyIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IuZW1haWwgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInBhc3N3b3JkXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IucGFzc3dvcmQgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIlNpZ24gVXBcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIixcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlRm9ybSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIlNpZ24gdXBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvIGJ0bi1hY3RpdmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiZ29vZ2xlIExvZ2luXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkxvZ2luVGFwKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibmF2Qm90dG9tXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBoZWlnaHQ6IFwiNTBcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5ob21lIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFiID09IDBcbiAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2aG9tZW0ucG5nXCJcbiAgICAgICAgICAgICAgICAgIDogXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2aG9tZS5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFiID09IDAsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYj09MFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkhvbWVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5jYXJ0IH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFiID09IDFcbiAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2Y2FydG0ucG5nXCJcbiAgICAgICAgICAgICAgICAgIDogXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2Y2FydC5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFiID09IDEsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYiA9PSAxXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ2FydFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2XCIsXG4gICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmhpc3RvcnkgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFiID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWIgPT0gMlxuICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9uYXZvcmRlcnNtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdm9yZGVycy5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFiID09IDIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYiA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiSGlzdG9yeVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2XCIsXG4gICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAzID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmFib3V0IH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAzID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFiID09IDNcbiAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2dXNtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdnVzLnBuZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFiID09IDNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2VGV4dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJBYm91dFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInAtMTVcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3FyLnBuZ1wiLCBzdHJldGNoOiBcIm5vbmVcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2UgTW9kYWxcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hdXRoLXNlcnZpY2UuanNcIjogXCIuL2F1dGgtc2VydmljZS5qc1wiLFxuXHRcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiOiBcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiLFxuXHRcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCI6IFwiLi9mb250cy9pb25pY29ucy5jc3NcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanNcIjogXCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanNcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9uYXRpdmVzY3JpcHQtZm9udGljb24uanNcIjogXCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9uYXRpdmVzY3JpcHQtZm9udGljb24uanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxyXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udEF3ZXNvbWVcXFwiLCBcXFwiZm9udGF3ZXNvbWUtd2ViZm9udFxcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiaW9uaWNvbnNcXFwiXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcblxyXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3NcclxuVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnLi9uYXRpdmVzY3JpcHQtZm9udGljb24nO1xyXG5UTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xyXG5UTlNGb250SWNvbi5wYXRocyA9IHtcclxuICAgICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnLFxyXG4gICAgJ2lvbic6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycsXHJcbn07XHJcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcclxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XHJcblxyXG5uZXcgVnVlKHtcclxuXHJcbiAgICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChIb21lKV0pXHJcblxyXG59KS4kc3RhcnQoKTtcclxuIiwiXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5hdGl2ZXNjcmlwdF9vYXV0aDJfMSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vYXV0aDInKVxyXG52YXIgcHJvdmlkZXJzXzEgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW9hdXRoMi9wcm92aWRlcnNcIik7XHJcbnZhciBodHRwID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJyk7XHJcbnZhciBjbGllbnQgPSBudWxsO1xyXG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVycygpIHtcclxuICAgIHZhciBtaWNyb3NvZnRQcm92aWRlciA9IGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJNaWNyb3NvZnQoKTtcclxuICAgIHZhciBnb29nbGVQcm92aWRlciA9IGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJHb29nbGUoKTtcclxuICAgIHZhciBmYWNlYm9va1Byb3ZpZGVyID0gY29uZmlndXJlT0F1dGhQcm92aWRlckZhY2Vib29rKCk7XHJcbiAgICBuYXRpdmVzY3JpcHRfb2F1dGgyXzEuY29uZmlndXJlVG5zT0F1dGgoW21pY3Jvc29mdFByb3ZpZGVyLCBnb29nbGVQcm92aWRlciwgZmFjZWJvb2tQcm92aWRlcl0pO1xyXG59XHJcbmV4cG9ydHMuY29uZmlndXJlT0F1dGhQcm92aWRlcnMgPSBjb25maWd1cmVPQXV0aFByb3ZpZGVycztcclxuZnVuY3Rpb24gY29uZmlndXJlT0F1dGhQcm92aWRlckdvb2dsZSgpIHtcclxuICAgIHZhciBnb29nbGVQcm92aWRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgb3BlbklkU3VwcG9ydDogXCJvaWQtZnVsbFwiLFxyXG4gICAgICAgIGNsaWVudElkOiBcIjk5MDc2NzA3NDYxMC1udW0yNGI4cGI5ZnFuc2UzMmt1MzJlcDRkMTUzcTRndS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxyXG4gICAgICAgIHJlZGlyZWN0VXJpOiBcImNvbS5nb29nbGV1c2VyY29udGVudC5hcHBzLjk5MDc2NzA3NDYxMC1udW0yNGI4cGI5ZnFuc2UzMmt1MzJlcDRkMTUzcTRndTovYXV0aFwiLFxyXG4gICAgICAgIHVybFNjaGVtZTogXCJjb20uZ29vZ2xldXNlcmNvbnRlbnQuYXBwcy45OTA3NjcwNzQ2MTAtbnVtMjRiOHBiOWZxbnNlMzJrdTMyZXA0ZDE1M3E0Z3VcIixcclxuICAgICAgICBzY29wZXM6IFtcImVtYWlsXCJdXHJcbiAgICB9O1xyXG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyID0gbmV3IHByb3ZpZGVyc18xLlRuc09hUHJvdmlkZXJHb29nbGUoZ29vZ2xlUHJvdmlkZXJPcHRpb25zKTtcclxuICAgIHJldHVybiBnb29nbGVQcm92aWRlcjtcclxufVxyXG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVyRmFjZWJvb2soKSB7XHJcbiAgICB2YXIgZmFjZWJvb2tQcm92aWRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgb3BlbklkU3VwcG9ydDogXCJvaWQtbm9uZVwiLFxyXG4gICAgICAgIGNsaWVudElkOiBcIjY5MTIwODU1NDQxNTY0NVwiLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogXCJkODcyNWFjNDE2ZmExYmIxOTE3Y2NmZmQxNjcwZTNjNlwiLFxyXG4gICAgICAgIHJlZGlyZWN0VXJpOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jb25uZWN0L2xvZ2luX3N1Y2Nlc3MuaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlczogW1wiZW1haWxcIl1cclxuICAgIH07XHJcbiAgICB2YXIgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBwcm92aWRlcnNfMS5UbnNPYVByb3ZpZGVyRmFjZWJvb2soZmFjZWJvb2tQcm92aWRlck9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIGZhY2Vib29rUHJvdmlkZXI7XHJcbn1cclxuZnVuY3Rpb24gY29uZmlndXJlT0F1dGhQcm92aWRlck1pY3Jvc29mdCgpIHtcclxuICAgIHZhciBtaWNyb3NvZnRQcm92aWRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgb3BlbklkU3VwcG9ydDogXCJvaWQtZnVsbFwiLFxyXG4gICAgICAgIGNsaWVudElkOiBcImYzNzZmYTg3LTY0YTktNDlhMS04YjU2LWUwZDQ4ZmMwODEwYlwiLFxyXG4gICAgICAgIC8vIHJlZGlyZWN0VXJpOiBcInVybjppZXRmOndnOm9hdXRoOjIuMDpvb2JcIixcclxuICAgICAgICByZWRpcmVjdFVyaTogXCJtc2FsZjM3NmZhODctNjRhOS00OWExLThiNTYtZTBkNDhmYzA4MTBiOi8vYXV0aFwiLFxyXG4gICAgICAgIHVybFNjaGVtZTogXCJtc2FsZjM3NmZhODctNjRhOS00OWExLThiNTYtZTBkNDhmYzA4MTBiXCIsXHJcbiAgICAgICAgc2NvcGVzOiBbXCJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbS9tYWlsLnJlYWRcIl1cclxuICAgIH07XHJcbiAgICB2YXIgbWljcm9zb2Z0UHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzXzEuVG5zT2FQcm92aWRlck1pY3Jvc29mdChtaWNyb3NvZnRQcm92aWRlck9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIG1pY3Jvc29mdFByb3ZpZGVyO1xyXG59XHJcbmZ1bmN0aW9uIHRuc09hdXRoTG9naW4ocHJvdmlkZXJUeXBlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgbmF0aXZlc2NyaXB0X29hdXRoMl8xLlRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XHJcbiAgICBjbGllbnQubG9naW5XaXRoQ29tcGxldGlvbihmdW5jdGlvbiAodG9rZW5SZXN1bHQsIGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGVycm9yOiBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGFjY2VzcyB0b2tlbjogXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlblJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRuc09hdXRoTG9nb3V0KCkge1xyXG4gICAgaWYgKGNsaWVudCkge1xyXG4gICAgICAgIGNsaWVudC5sb2dvdXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0cy50bnNPYXV0aExvZ2luID0gdG5zT2F1dGhMb2dpbjtcclxuZXhwb3J0cy50bnNPYXV0aExvZ291dCA9IHRuc09hdXRoTG9nb3V0O1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzUwYzM2MjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1MGMzNjI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1MGMzNjI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1MGMzNjI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwYzM2MjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwYzM2MjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSXRlbURldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzUwYzM2MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzUwYzM2MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MGMzNjI0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdkNTA3NzcxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZDUwNzc3MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZDUwNzc3MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZDUwNzc3MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdkNTA3NzcxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMWI4NmVmNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzFiODZlZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzFiODZlZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzFiODZlZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MxYjg2ZWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjljZWRjODZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5Y2VkYzg2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5Y2VkYzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5Y2VkYzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjljZWRjODYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjljZWRjODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MTFhZjQ4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjExYWY0ODYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTFhZjQ4NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MTFhZjQ4NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1YmIxOTRiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1YmIxOTRiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1YmIxOTRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1YmIxOTRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1YmIxOTRiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1YmIxOTRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViYjE5NGImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29mZmVyUXJNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI0YWY5ZmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjRhZjlmYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjRhZjlmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjRhZjlmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjRhZjlmYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjRhZjlmYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vb2ZmZXJRck1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNGFmOWZhJlwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmEtZ2xhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1tdXNpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwM1xcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNlxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQVxcXCI7XFxyXFxufVxcclxcbi5mYS10aC1saXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZW1vdmU6YmVmb3JlLFxcclxcbi5mYS1jbG9zZTpiZWZvcmUsXFxyXFxuLmZhLXRpbWVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMFxcXCI7XFxyXFxufVxcclxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMlxcXCI7XFxyXFxufVxcclxcbi5mYS1nZWFyOmJlZm9yZSxcXHJcXG4uZmEtY29nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhc2gtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5ib3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSxcXHJcXG4uZmEtcmVwZWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVmcmVzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9jazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNFxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXJjb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFyY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wcmludDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJGXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMVxcXCI7XFxyXFxufVxcclxcbi5mYS1ib2xkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNFxcXCI7XFxyXFxufVxcclxcbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQVxcXCI7XFxyXFxufVxcclxcbi5mYS1kZWRlbnQ6YmVmb3JlLFxcclxcbi5mYS1vdXRkZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5kZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvdG86YmVmb3JlLFxcclxcbi5mYS1pbWFnZTpiZWZvcmUsXFxyXFxuLmZhLXBpY3R1cmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlbmNpbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1hZGp1c3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWRpdDpiZWZvcmUsXFxyXFxuLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lamVjdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3Jvc3NoYWlyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2M1xcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxcclxcbi5mYS1zaGFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4cGFuZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OVxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1naWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVhZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RFxcXCI7XFxyXFxufVxcclxcbi5mYS1leWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MFxcXCI7XFxyXFxufVxcclxcbi5mYS13YXJuaW5nOmJlZm9yZSxcXHJcXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbGFuZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmFuZG9tOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcXHJcXG4uZmEtYmFyLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1rZXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZWFyczpiZWZvcmUsXFxyXFxuLmZhLWNvZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg2XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduLW91dDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHRlcm5hbC1saW5rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbi1pbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyb3BoeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MlxcXCI7XFxyXFxufVxcclxcbi5mYS11cGxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5M1xcXCI7XFxyXFxufVxcclxcbi5mYS1sZW1vbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NVxcXCI7XFxyXFxufVxcclxcbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5N1xcXCI7XFxyXFxufVxcclxcbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OFxcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0dGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXFxyXFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5sb2NrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mZWVkOmJlZm9yZSxcXHJcXG4uZmEtcnNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGRkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMFxcXCI7XFxyXFxufVxcclxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEExXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBN1xcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQ1xcXCI7XFxyXFxufVxcclxcbi5mYS13cmVuY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRFxcXCI7XFxyXFxufVxcclxcbi5mYS10YXNrczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMlxcXCI7XFxyXFxufVxcclxcbi5mYS1ncm91cDpiZWZvcmUsXFxyXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hhaW46YmVmb3JlLFxcclxcbi5mYS1saW5rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMlxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFzazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1dDpiZWZvcmUsXFxyXFxuLmZhLXNjaXNzb3JzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29weTpiZWZvcmUsXFxyXFxuLmZhLWZpbGVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zYXZlOmJlZm9yZSxcXHJcXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOFxcXCI7XFxyXFxufVxcclxcbi5mYS1uYXZpY29uOmJlZm9yZSxcXHJcXG4uZmEtcmVvcmRlcjpiZWZvcmUsXFxyXFxuLmZhLWJhcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LXVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC1vbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQ1xcXCI7XFxyXFxufVxcclxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRFxcXCI7XFxyXFxufVxcclxcbi5mYS10YWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENFXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMVxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMlxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb25leTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbHVtbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQlxcXCI7XFxyXFxufVxcclxcbi5mYS11bnNvcnRlZDpiZWZvcmUsXFxyXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWRvd246YmVmb3JlLFxcclxcbi5mYS1zb3J0LWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LXVwOmJlZm9yZSxcXHJcXG4uZmEtc29ydC1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERVxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLFxcclxcbi5mYS11bmRvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVnYWw6YmVmb3JlLFxcclxcbi5mYS1nYXZlbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhc2hib2FyZDpiZWZvcmUsXFxyXFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhc2g6YmVmb3JlLFxcclxcbi5mYS1ib2x0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFzdGU6YmVmb3JlLFxcclxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQVxcXCI7XFxyXFxufVxcclxcbi5mYS1saWdodGJ1bGItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2hhbmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZC11cGxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRVxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLW1kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWl0Y2FzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1dGxlcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXRleHQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1aWxkaW5nLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGN1xcXCI7XFxyXFxufVxcclxcbi5mYS1ob3NwaXRhbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVka2l0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlnaHRlci1qZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRFxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1kZXNrdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9iaWxlLXBob25lOmJlZm9yZSxcXHJcXG4uZmEtbW9iaWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVvdGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1yZXBseTpiZWZvcmUsXFxyXFxuLmZhLXJlcGx5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNtaWxlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7XFxyXFxufVxcclxcbi5mYS1mcm93bi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7XFxyXFxufVxcclxcbi5mYS1nYW1lcGFkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxcclxcbi5mYS1yZXBseS1hbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxcclxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXFxyXFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jcm9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5saW5rOmJlZm9yZSxcXHJcXG4uZmEtY2hhaW4tYnJva2VuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmZvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjbGFtYXRpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1YnNjcmlwdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVyYXNlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXB1enpsZS1waWVjZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpZWxkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtaHRtbDU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jc3MzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5jaG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1bGxzZXllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWxsaXBzaXMtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7XFxyXFxufVxcclxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7XFxyXFxufVxcclxcbi5mYS10aWNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxldmVsLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGV2ZWwtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlbmNpbC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RVxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtZG93bjpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtdXA6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXVybzpiZWZvcmUsXFxyXFxuLmZhLWV1cjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdicDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvbGxhcjpiZWZvcmUsXFxyXFxuLmZhLXVzZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJ1cGVlOmJlZm9yZSxcXHJcXG4uZmEtaW5yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY255OmJlZm9yZSxcXHJcXG4uZmEtcm1iOmJlZm9yZSxcXHJcXG4uZmEteWVuOmJlZm9yZSxcXHJcXG4uZmEtanB5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnVibGU6YmVmb3JlLFxcclxcbi5mYS1yb3VibGU6YmVmb3JlLFxcclxcbi5mYS1ydWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OFxcXCI7XFxyXFxufVxcclxcbi5mYS13b246YmVmb3JlLFxcclxcbi5mYS1rcnc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRjb2luOmJlZm9yZSxcXHJcXG4uZmEtYnRjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NlxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEteGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZS1wbGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJvcGJveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5zdGFncmFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1bWJscjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTczXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2luZG93czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1saW51eDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2t5cGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJlbGxvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdHRpcDpiZWZvcmUsXFxyXFxuLmZhLWdyYXRpcGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VuLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb29uLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcmNoaXZlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtdms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OVxcXCI7XFxyXFxufVxcclxcbi5mYS13ZWlibzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlbnJlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG90LWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2hlZWxjaGFpcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbWVvLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsXFxyXFxuLmZhLXRyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NlxcXCI7XFxyXFxufVxcclxcbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xhY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OFxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OVxcXCI7XFxyXFxufVxcclxcbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QVxcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXFxyXFxuLmZhLWJhbms6YmVmb3JlLFxcclxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9ydGFyLWJvYXJkOmJlZm9yZSxcXHJcXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RFxcXCI7XFxyXFxufVxcclxcbi5mYS15YWhvbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUExXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBM1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRpZ2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNlxcXCI7XFxyXFxufVxcclxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOVxcXCI7XFxyXFxufVxcclxcbi5mYS1qb29tbGE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQVxcXCI7XFxyXFxufVxcclxcbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZheDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1aWxkaW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zcG9vbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jdWJlczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNFxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxcclxcbi5mYS1jYXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWI6YmVmb3JlLFxcclxcbi5mYS10YXhpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1kZXZpYW50YXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1wZGYtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtd29yZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1leGNlbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBob3RvLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtc291bmQtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmluZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGVwZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQlxcXCI7XFxyXFxufVxcclxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpZmUtYm91eTpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtYnVveTpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLFxcclxcbi5mYS1zdXBwb3J0OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1yaW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRVxcXCI7XFxyXFxufVxcclxcbi5mYS1yYTpiZWZvcmUsXFxyXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2U6YmVmb3JlLFxcclxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDNcXFwiO1xcclxcbn1cXHJcXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxyXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxyXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXFxOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2VjaGF0OmJlZm9yZSxcXHJcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VuZDpiZWZvcmUsXFxyXFxuLmZhLXBhcGVyLXBsYW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VuZC1vOmJlZm9yZSxcXHJcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUREXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9tYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcclxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXRjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXllbHA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOVxcXCI7XFxyXFxufVxcclxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpZmk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7XFxyXFxufVxcclxcbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7XFxyXFxufVxcclxcbi5mYS1idXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGVrZWw6YmVmb3JlLFxcclxcbi5mYS1zaGVxZWw6YmVmb3JlLFxcclxcbi5mYS1pbHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7XFxyXFxufVxcclxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGlwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7XFxyXFxufVxcclxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcclxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7XFxyXFxufVxcclxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdGVsOmJlZm9yZSxcXHJcXG4uZmEtYmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYWluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEteWM6YmVmb3JlLFxcclxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0yOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtamNiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jbG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXHJcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxcclxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXJvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7XFxyXFxufVxcclxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7XFxyXFxufVxcclxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7XFxyXFxufVxcclxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNocm9tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVsZXZpc2lvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbnRhbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLTUwMHB4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW1hem9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtcGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLXNpZ25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3OVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50aW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudGluZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91eno6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS12aW1lbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdC1hbGllbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVkZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RpZXBpZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vZHg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NlxcXCI7XFxyXFxufVxcclxcbi5mYS11c2I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4N1xcXCI7XFxyXFxufVxcclxcbi5mYS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4OFxcXCI7XFxyXFxufVxcclxcbi5mYS1taXhjbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNjcmliZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcC1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFzaHRhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsdWV0b290aC1iOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVyY2VudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk1XFxcIjtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9mb250LWF3ZXNvbWUuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5pb24tYWxlcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYWxlcnQtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFkZC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hbGFybS1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFsZXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXBwczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFyY2hpdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1iYWNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd24tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWF0dGFjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJpY3ljbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ib2F0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYm9va21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1idWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FuY2VsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LWJsYW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmUtYmxhbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja21hcmstY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWRvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29sb3ItcGFsZXR0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250YWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udGFjdHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250cmFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNyZWF0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRlbGV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRlc2t0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb2N1bWVudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb25lLWFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZHJhZnRzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZXhpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZpbG06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mb2xkZXItb3BlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZ1bm5lbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWdsb2JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhbmdvdXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYXBweTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1pbWFnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxpc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sb2NhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1hcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1lbnU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZS1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tb3JlLWhvcml6b250YWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tb3JlLXZlcnRpY2FsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1ub25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1vcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtb3B0aW9uczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlb3BsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlcnNvbi1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waG9uZS1sYW5kc2NhcGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ExXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waG9uZS1wb3J0cmFpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGxheXN0b3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcHJpbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlbW92ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlbW92ZS1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZXN0YXVyYW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2hhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zaGFyZS1hbHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3RvcHdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Vid2F5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zeW5jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdGV4dHNtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRpbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10cmFpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXVubG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW11dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2FsazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhcm5pbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdpZmk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXBlcnR1cmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLWRvd24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1tb3ZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJlc2l6ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXR1cm4tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXR1cm4tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctc2hyaW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXN3YXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXN0ZXJpc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFja3NwYWNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhY2tzcGFjZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWNoYXJnaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1mdWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iZWFrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmVlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ibHVldG9vdGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYm9uZmlyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib29rbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib3d0aWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYnJpZWZjYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJ1ZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94LXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZS13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcmstY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcmstcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2Utcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI5XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2VkLWNhcHRpb25pbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGUtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2ZmZWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcyXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29tcGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb21wb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbm5lY3Rpb24tYmFyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb250cmFzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWN1YmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tZGlzYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kb2N1bWVudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kb2N1bWVudC10ZXh0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRyYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWFydGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZWFzZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MyXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWRpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lZ2c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc3XFxcIjsgfVxcclxcblxcclxcbi5pb24tZWplY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tZW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tZW1haWwtdW5yZWFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVybGVubWV5ZXItZmxhc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M1XFxcIjsgfVxcclxcblxcclxcbi5pb24tZXJsZW5tZXllci1mbGFzay1idWJibGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWV5ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1leWUtZGlzYWJsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmVtYWxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpbGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maWxtLW1hcmtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maXJlYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYXNoLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3JrLXJlcG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mdW5uZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ2Vhci1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdlYXItYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ncmlkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhbW1lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYXBweTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYXBweS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYWRwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFydC1icm9rZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwLWJ1b3k6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24taWNlY3JlYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW1hZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW1hZ2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWluZm9ybWF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWluZm9ybWF0aW9uLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9uaWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTRCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYXJtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGFybS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGJ1bXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYnVtcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFuYWx5dGljczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWJhY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXJjb2RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXJjb2RlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2ViYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNlYmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNrZXRiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNrZXRiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJlbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJlbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9keTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9keS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2x0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2x0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9va21hcmtzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rbWFya3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJpZWZjYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icmllZmNhc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJvd3NlcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyb3dzZXJzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGN1bGF0b3Itb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGVuZGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJveGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0Ym94ZXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyay1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNpcmNsZS1maWxsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNpcmNsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvY2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDExXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLWZpbHRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLXdhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLXdhbmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29tcG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29tcG9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb250YWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb250YWN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvcHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY3JvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY3JvcC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kcmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1lbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZW1haWwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZXllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1leWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZhc3Rmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsaW5nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbG06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbG0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFtZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYXNrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsb3dlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxvd2VyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9sZGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvb3RiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdlYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdlYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2xhc3NlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2xhc3Nlcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ncmlkLXZpZXc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdyaWQtdmlldy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWFydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVhcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscC1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ob21lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZmluaXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZpbml0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWlvbmljLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWtleXBhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mta2V5cGFkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpZ2h0YnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlnaHRidWxiLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpc3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9jYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2F0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9ja2VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvb3Atc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRpY2FsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRpY2FsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVka2l0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51cy1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9uaXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9uaXRvci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb29uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vcmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbmF2aWdhdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbnV0cml0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1udXRyaXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVycGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVycGxhbmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFydGx5c3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcnRseXN1bm55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXVzZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZW9wbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlb3BsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb25hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbmFkZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waG90b3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBob3Rvcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waW50LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsYXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsYXktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1cy1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZ3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpbnRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpbnRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wdWxzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHVsc2Utc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yYWlueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmFpbnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVjb3JkaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWNvcmRpbmctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVkbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVkby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJld2luZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV3aW5kLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZWFyY2gtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2V0dGluZ3Mtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zaHVmZmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zaHVmZmxlLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwYmFja3dhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNub3d5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zcGVlZG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0b3B3YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RvcHdhdGNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdW5ueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZWxlcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbGVwaG9uZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZW5uaXNiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZW5uaXNiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRodW5kZXJzdG9ybTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRvZ2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdG9nZ2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRyYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10cmFzaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmRvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmRvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVubG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12aWRlb2NhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdmlkZW9jYW0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtdm9sdW1lLWhpZ2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZvbHVtZS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdpbmVnbGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd2luZWdsYXNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdvcmxkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13b3JsZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUY5XFxcIjsgfVxcclxcblxcclxcbi5pb24taXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwb2Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tamV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWtleTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1rbmlmZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbGVhZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sZXZlbHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk4XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGlnaHRidWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxpbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2F0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2stY29tYmluYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvZy1pbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2ctb3V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFnbmV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkExXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWVyZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzNGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA5XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXMtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51cy1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb2RlbC1zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vbml0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb3VzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tdXNpYy1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWNvbi1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uZXR3b3JrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5vLXNtb2tpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbnVjbGVhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1vdXRsZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFpbnRicnVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYWludGJ1Y2tldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXBlci1haXJwbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXBlcmNsaXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGF1c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbi1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjExXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uLXN0YWxrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGllLWdyYXBoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waW5wb2ludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waXp6YTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGFuZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGF5c3RhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXMtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvZGl1bTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb3dlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmljZXRhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmljZXRhZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpbnRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wdWxsLXJlcXVlc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcXItc2Nhbm5lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1xdW90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yYWRpby13YXZlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZWNvcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZXBseTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZXBseS1hbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmliYm9uLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcmliYm9uLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNhZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNjaXNzb3JzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zaGFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zaHVmZmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNraXAtYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2tpcC1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmRyb2lkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmRyb2lkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZ3VsYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZ3VsYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYXBwbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFwcGxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJpdGNvaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJpdGNvaW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYnVmZmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1idWZmZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY2hyb21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jaHJvbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY29kZXBlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY29kZXBlbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jc3MzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jc3MzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyaWJiYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcmliYmJsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcm9wYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcm9wYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWV1cm86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWV1cm8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZhY2Vib29rLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZnJlZWJzZC1kZXZpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ2l0aHViOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1naXRodWItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWh0bWw1OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1odG1sNS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWluc3RhZ3JhbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWxpbmtlZGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1saW5rZWRpbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1tYXJrZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbm9kZWpzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1vY3RvY2F0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXBpbnRlcmVzdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1weXRob246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJlZGRpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcmVkZGl0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcnNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNreXBlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1za3lwZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zbmFwY2hhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHVtYmxyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dW1ibHItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHV4OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXRjaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0dGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0dGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXVzZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdXNkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXZpbWVvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC12aW1lby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aGF0c2FwcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHAtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2luZG93czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2luZG93cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13b3JkcHJlc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdvcmRwcmVzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15YWhvbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWFob28tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15ZW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteW91dHViZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteW91dHViZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvdXAtY2FuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvdXAtY2FuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3BlYWtlcnBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwZWVkb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwb29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RhdHMtYmFyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGVhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRoZXJtb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRodW1ic2Rvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tdGh1bWJzdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tdG9nZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRvZ2dsZS1maWxsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhbnNnZW5kZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhc2gtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFzaC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyb3BoeTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10c2hpcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHNoaXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW1icmVsbGE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW5pdmVyc2l0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bmxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdXNiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZpZGVvY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1oaWdoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU4XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLW1lZGl1bTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbXV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13YW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdhdGVyZHJvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13aWZpOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdpbmVnbGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13b21hbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13cmVuY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJBXFxcIjsgfVxcclxcblxcclxcbi5pb24teGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMENcXFwiOyB9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9pb25pY29ucy5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubWFwQ3NzID0gZnVuY3Rpb24gKGRhdGEsIGRlYnVnKSB7XHJcbiAgICB2YXIgbWFwID0ge307XHJcbiAgICB2YXIgc2V0cyA9IGRhdGEuc3BsaXQoJ30nKTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgc2V0c18xID0gc2V0czsgX2kgPCBzZXRzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNldCA9IHNldHNfMVtfaV07XHJcbiAgICAgICAgdmFyIHBhaXIgPSBzZXQuc3BsaXQoLzpiZWZvcmVcXHMqey8pO1xyXG4gICAgICAgIHZhciBrZXlHcm91cHMgPSBwYWlyWzBdO1xyXG4gICAgICAgIHZhciBrZXlzID0ga2V5R3JvdXBzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgaWYgKHBhaXJbMV0pIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZXhwb3J0cy5jbGVhblZhbHVlKHBhaXJbMV0pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGtleXNfMSA9IGtleXM7IF9hIDwga2V5c18xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMVtfYV07XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkudHJpbSgpLnNsaWNlKDEpLnNwbGl0KCc6YmVmb3JlJylbMF07XHJcbiAgICAgICAgICAgICAgICBtYXBba2V5XSA9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKDIpLCAxNikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5ICsgXCI6IFwiICsgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuZXhwb3J0cy5jbGVhblZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgdmFyIG1hdGNoZXMgPSB2YWwubWF0Y2goL2NvbnRlbnQ6XFxzKlwiXFxcXGYoW15cIl0rKVwiL2kpO1xyXG4gICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgICByZXR1cm4gXCJcXFxcdWZcIiArIG1hdGNoZXNbMV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdm9pZCAwO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saWIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTtcclxudmFyIGxpYiA9IHJlcXVpcmUoXCIuL2xpYlwiKTtcclxudmFyIFROU0ZvbnRJY29uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFROU0ZvbnRJY29uKCkge1xyXG4gICAgfVxyXG4gICAgVE5TRm9udEljb24ubG9hZENzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICB2YXIgY3VycmVudE5hbWU7XHJcbiAgICAgICAgdmFyIGZvbnRJY29uQ29sbGVjdGlvbnMgPSBPYmplY3Qua2V5cyhUTlNGb250SWNvbi5wYXRocyk7XHJcbiAgICAgICAgaWYgKFROU0ZvbnRJY29uLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29sbGVjdGlvbnMgdG8gbG9hZDogXCIgKyBmb250SWNvbkNvbGxlY3Rpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluaXRDb2xsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjdXJyZW50TmFtZSA9IGZvbnRJY29uQ29sbGVjdGlvbnNbY250XTtcclxuICAgICAgICAgICAgVE5TRm9udEljb24uY3NzW2N1cnJlbnROYW1lXSA9IHt9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGxvYWRGaWxlID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKFROU0ZvbnRJY29uLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGNvbGxlY3Rpb24gJ1wiICsgY3VycmVudE5hbWUgKyBcIicgZnJvbSBmaWxlOiBcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjc3NGaWxlID0gZmlsZV9zeXN0ZW1fMS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjc3NGaWxlLnJlYWRUZXh0KCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXAgPSBsaWIubWFwQ3NzKGRhdGEsIFROU0ZvbnRJY29uLmRlYnVnKTtcclxuICAgICAgICAgICAgICAgICAgICBUTlNGb250SWNvbi5jc3NbY3VycmVudE5hbWVdID0gbWFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBsb2FkRmlsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5pdENvbGxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbnQgPCBmb250SWNvbkNvbGxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlKFROU0ZvbnRJY29uLnBhdGhzW2N1cnJlbnROYW1lXSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEZpbGVzKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBsb2FkRmlsZXMoKTtcclxuICAgIH07XHJcbiAgICBUTlNGb250SWNvbi5jc3MgPSB7fTtcclxuICAgIFROU0ZvbnRJY29uLnBhdGhzID0ge307XHJcbiAgICBUTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIFROU0ZvbnRJY29uO1xyXG59KCkpO1xyXG5leHBvcnRzLlROU0ZvbnRJY29uID0gVE5TRm9udEljb247XHJcbmZ1bmN0aW9uIGZvbnRpY29uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignLScpID4gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHZhbHVlLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBUTlNGb250SWNvbi5jc3NbcHJlZml4XVt2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRm9udGljb24gY2xhc3NuYW1lIGRpZCBub3QgY29udGFpbiBhIHByZWZpeC4gaS5lLiwgXFwnZmEtYmx1ZXRvb3RoXFwnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbmV4cG9ydHMuZm9udGljb24gPSBmb250aWNvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF0aXZlc2NyaXB0LWZvbnRpY29uLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=