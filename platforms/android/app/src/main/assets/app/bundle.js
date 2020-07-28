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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/admin.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  computed: {},

  mounted() {// SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },

  data() {
    return {};
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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/geo-tracker.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  computed: {},

  mounted() {// SwissArmyKnife.setAndroidStatusBarColor("#b51213");
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
/* harmony import */ var _custom_geo_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/geo-tracker.vue");
/* harmony import */ var _custom_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/admin.vue");
/* harmony import */ var _custom_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/custom/signup.vue");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/vue-tel-input/dist/vue-tel-input.esm.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Toast = __webpack_require__("../node_modules/nativescript-toast/toast.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  data() {
    return {
      signUp: "Sign up",
      signAsk: "Don’t have an account?",
      user: {
        email: "",
        password: null
      },
      error: {
        email: "",
        password: ""
      }
    };
  },

  mounted() {
    tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__["request"]({
      url: "http://172.16.9.77:5000/api/role",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.roleListByName = response.content.toJSON().payload.map(e => e.name);
      this.roleList = response.content.toJSON().payload;
    }, e => {
      console.log("error", e);
    });
  },

  methods: {
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
      } else if (this.user.password.length < 8) {
        this.error.password = "Password Length Must Be Greater then 8.";
      }

      if (this.user.email && this.user.password) {
        tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__["request"]({
          url: "http://172.16.9.77:5000/api/user/login",
          method: "POST",
          content: JSON.stringify(this.user),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          this.toastMessage(response.content.toJSON().message);

          if (response.content.toJSON().payload !== null) {
            this.user = {
              email: "",
              password: null
            };

            if (response.content.toJSON().payload.role == 1) {
              this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);
            } else if (response.content.toJSON().payload.role == 2) {
              this.$navigateTo(_custom_admin__WEBPACK_IMPORTED_MODULE_2__["default"]);
            } else if (response.content.toJSON().payload.role == 3) this.$navigateTo(_custom_geo_tracker__WEBPACK_IMPORTED_MODULE_1__["default"]);
          }
        }, e => {});
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
      this.$navigateTo(_custom_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {});
    },

    toastMessage(message) {
      var toast = Toast.makeText(message);
      toast.show();
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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./auth-service.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _custom_geo_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/custom/geo-tracker.vue");
/* harmony import */ var _custom_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/custom/admin.vue");
/* harmony import */ var _custom_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/custom/login.vue");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/vue-tel-input/dist/vue-tel-input.esm.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var Toast = __webpack_require__("../node_modules/nativescript-toast/toast.js");

var countryCode = __webpack_require__("./assets/countryCode.json");









Object(_auth_service__WEBPACK_IMPORTED_MODULE_1__["configureOAuthProviders"])();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_6__["default"]
  },

  data() {
    return {
      countryCodeList: [],
      roleListByName: [],
      errors: [],
      roleList: [],
      signIn: "Sign Up",
      backToLogin: "Back to Login",
      countryCode: null,
      tempContactNumber: null,
      user: {
        role: "",
        name: "",
        contactNumber: null,
        email: "",
        password: null
      },
      error: {
        username: "",
        contactnumber: "",
        email: "",
        password: "",
        role: "",
        countryCode: ""
      }
    };
  },

  mounted() {
    tns_core_modules_http__WEBPACK_IMPORTED_MODULE_7__["request"]({
      url: "http://172.16.9.77:5000/api/role",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.roleListByName = response.content.toJSON().payload.map(e => e.name);
      this.roleList = response.content.toJSON().payload;
    }, e => {});
    this.countryCode = countryCode.map(e => e.name);
  },

  methods: {
    dropDownSelectedIndexChanged() {
      if (!this.$refs.dropDownList2 && this.$refs.dropDownList2.nativeView && this.$refs.dropDownList2.nativeView.selectedIndex) {
        var index = this.$refs.dropDownList2.nativeView.selectedIndex;
        this.user.role = this.roleList[index].value;
        this.error.role = "";
      }
    },

    dropDownSelectedCountryChanged() {
      var index = this.$refs.dropDownList1.nativeView.selectedIndex;
      this.tempCountryCode = countryCode[index].dial_code;
    },

    validateLogin() {
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
      } else if (this.user.password.length < 8) {
        this.error.password = "Password Length Must Be Greater then 8.";
      }

      if (!this.user.name) {
        this.error.username = "Username required.";
      }

      if (!this.tempCountryCode) {
        this.error.countryCode = "Contry Code Require";
      }

      if (!this.user.contactNumber) {
        this.error.contactnumber = "Contact Number required.";
      }

      if (!this.user.role) {
        this.error.role = "Role required.";
      }
    },

    register() {
      validateLogin();
      this.user.contactNumber = this.tempCountryCode + this.tempContactNumber;
      var isEmpty = Object.values(this.error).every(x => x === null || x === "");

      if (isEmpty) {
        tns_core_modules_http__WEBPACK_IMPORTED_MODULE_7__["request"]({
          url: "http://172.16.9.77:5000/api/user",
          method: "POST",
          content: JSON.stringify(this.user),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          console.log("response====", response.content.toJSON().status);
          this.toastMessage(response.content.toJSON().message);

          if (response.content.toJSON().payload !== null) {
            this.user = {
              role: "",
              name: "",
              contactNumber: null,
              email: "",
              password: null
            }, this.isLoggingIn = !this.isLoggingIn;
          }
        }, e => {});
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    onLoginTap() {
      auth_service_1.tnsOauthLogin("google");
    },

    onLogoutTap() {
      auth_service_1.tnsOauthLogout();
    },

    toggleForm() {
      this.error = {
        username: "",
        contactnumber: "",
        email: "",
        password: ""
      };
      this.$navigateTo(_custom_login__WEBPACK_IMPORTED_MODULE_5__["default"], {});
    },

    toastMessage(message) {
      var toast = Toast.makeText(message);
      toast.show();
    }

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
exports.push([module.i, "\n.page[data-v-611af486] {\r\n  align-items: center;\r\n  flex-direction: column;\n}\n.form[data-v-611af486] {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\n}\n.logo[data-v-611af486] {\r\n  margin-bottom: 12;\r\n  height: 90;\r\n  font-weight: bold;\n}\n.header[data-v-611af486] {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #d51a1a;\n}\n.input-field[data-v-611af486] {\r\n  margin-bottom: 5;\n}\n.input[data-v-611af486] {\r\n  font-size: 12;\r\n  placeholder-color: #a8a8a8;\n}\n.input-field .input[data-v-611af486] {\r\n  font-size: 10;\n}\n.btn-primary[data-v-611af486] {\r\n  height: 50;\r\n  margin: 30 5 15 5;\r\n  background-color: #d51a1a;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\n}\n.login-label[data-v-611af486] {\r\n  horizontal-align: center;\r\n  color: #a8a8a8;\r\n  font-size: 16;\n}\n.sign-up-label[data-v-611af486] {\r\n  margin-bottom: 20;\n}\n.bold[data-v-611af486] {\r\n  color: #000000;\n}\nlabel[data-v-611af486] {background-color: #ffffff; color: #d44848; font-size: 14;}\r\n", ""]);

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

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=style&index=0&id=0e9d894b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-0e9d894b] {\r\n  align-items: center;\r\n  flex-direction: column;\n}\n.form[data-v-0e9d894b] {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\n}\n.logo[data-v-0e9d894b] {\r\n  margin-bottom: 12;\r\n  height: 90;\r\n  font-weight: bold;\n}\n.header[data-v-0e9d894b] {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #d51a1a;\n}\n.input-field[data-v-0e9d894b] {\r\n  margin-bottom: 0;\n}\n.input[data-v-0e9d894b] {\r\n  font-size: 10;\r\n  placeholder-color: #a8a8a8;\n}\n.input-field .input[data-v-0e9d894b] {\r\n  font-size: 10;\n}\n.btn-primary[data-v-0e9d894b] {\r\n  height: 50;\r\n  margin: 5 5 5 5;\r\n  background-color: #d51a1a;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\n}\n.login-label[data-v-0e9d894b] {\r\n  horizontal-align: center;\r\n  color: #a8a8a8;\r\n  font-size: 16;\n}\n.sign-up-label[data-v-0e9d894b] {\r\n  margin-bottom: 20;\n}\n.bold[data-v-0e9d894b] {\r\n  color: #000000;\n}\n.item-drop-down[data-v-0e9d894b] {\r\n  font-size: 15;\r\n  height: 40;\r\n  padding: 4;\r\n  width: 100%;\r\n  border: 10;\r\n  border-color: #000000;\n}\nlabel[data-v-0e9d894b] {\r\n  background-color: #ffffff;\r\n  color: #d44848;\r\n  font-size: 14;\n}\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/custom/signup.vue' });
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/admin.vue?vue&type=template&id=6e3ab528&":
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
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c("Button", {
            attrs: { text: "Admin" },
            on: { tap: _vm.onButtonTap }
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&":
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
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c("Button", { attrs: { text: "Geo" }, on: { tap: _vm.onButtonTap } })
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
                attrs: { text: "Login" },
                on: { tap: _vm.login }
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
                  _c("Span", { attrs: { text: _vm.signAsk } }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.signUp }
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&":
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
                { staticClass: "input-field" },
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
                "GridLayout",
                {
                  attrs: {
                    columns: "2*,1*,*3*",
                    horizontalAlignment: "left",
                    verticalAlignment: "top"
                  }
                },
                [
                  _c("DropDown", {
                    ref: "dropDownList1",
                    staticClass: "item-drop-down",
                    attrs: {
                      col: "0",
                      selectedIndex: "0",
                      items: _vm.countryCode
                    },
                    on: {
                      selectedIndexChanged: _vm.dropDownSelectedCountryChanged
                    }
                  }),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { col: "1" } },
                    [
                      _c("TextField", {
                        ref: "tempCountryCode",
                        staticClass: "input",
                        attrs: {
                          keyboardType: "number",
                          minlength: "10",
                          isEnable: "false",
                          returnKeyType: "done",
                          fontSize: "12"
                        },
                        model: {
                          value: _vm.tempCountryCode,
                          callback: function($event) {
                            _vm.tempCountryCode = $event.object["text"]
                          },
                          expression: "tempCountryCode"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { col: "2" } },
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
                          value: _vm.tempContactNumber,
                          callback: function($event) {
                            _vm.tempContactNumber = $event.object["text"]
                          },
                          expression: "tempContactNumber"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" }),
                      _c("label", { attrs: { text: _vm.error.contactnumber } })
                    ],
                    1
                  )
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
              _c(
                "StackLayout",
                [
                  _c("DropDown", {
                    ref: "dropDownList2",
                    staticClass: "item-drop-down",
                    attrs: { selectedIndex: "0", items: _vm.roleListByName },
                    on: {
                      selectedIndexChanged: _vm.dropDownSelectedIndexChanged
                    }
                  }),
                  _c("label", { attrs: { text: _vm.error.role } })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: { text: _vm.signIn },
                on: { tap: _vm.register }
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
                [_c("Span", { attrs: { text: _vm.backToLogin } })],
                1
              )
            ],
            1
          ),
          _c("Button", {
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
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement("DropDown", () => __webpack_require__("../node_modules/nativescript-drop-down/drop-down.js").DropDown);
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/countryCode.json":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1 684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1 264\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"dial_code\":\"+672\",\"code\":\"AQ\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1 242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1 246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1 441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Congo, The Democratic Republic of the\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+537\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1 767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1 849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1 473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1 671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iran, Islamic Republic of\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1 876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+7 7\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Korea, Democratic People's Republic of\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Lao People's Democratic Republic\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia, The Former Yugoslav Republic of\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Micronesia, Federated States of\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova, Republic of\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1 670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1 939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Réunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Saint Barthélemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1 869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1 758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1 784\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan, Province of China\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Tanzania, United Republic of\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1 868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1 649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Venezuela, Bolivarian Republic of\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1 284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1 340\",\"code\":\"VI\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"},{\"name\":\"Åland Islands\",\"dial_code\":\"+358\",\"code\":\"AX\"}]");

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
      http.request({
        url: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + tokenResult.accessToken,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        console.log('response==========', response.content.toJSON());
        http.request({
          url: "http://172.16.9.77:5000/api/user/googleAuthentication",
          method: "POST",
          content: JSON.stringify({
            email: response.content.toJSON().email
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          console.log('res==========', res.content.toJSON());
        }, e => {
          console.log("error", e);
        });
      }, e => {
        console.log("error", e);
      });
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

/***/ "./components/custom/admin.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/admin.vue?vue&type=template&id=6e3ab528&");
/* harmony import */ var _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('6e3ab528')) {
      api.createRecord('6e3ab528', component.options)
    } else {
      api.reload('6e3ab528', component.options)
    }
    module.hot.accept("./components/custom/admin.vue?vue&type=template&id=6e3ab528&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/admin.vue?vue&type=template&id=6e3ab528&");
(function () {
      api.rerender('6e3ab528', {
        render: _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/admin.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/admin.vue?vue&type=template&id=6e3ab528&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/admin.vue?vue&type=template&id=6e3ab528&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6e3ab528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./components/custom/geo-tracker.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&");
/* harmony import */ var _geo_tracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/geo-tracker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _geo_tracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('9abd16ce')) {
      api.createRecord('9abd16ce', component.options)
    } else {
      api.reload('9abd16ce', component.options)
    }
    module.hot.accept("./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&");
(function () {
      api.rerender('9abd16ce', {
        render: _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/geo-tracker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/geo-tracker.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_geo_tracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/geo-tracker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_geo_tracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/geo-tracker.vue?vue&type=template&id=9abd16ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_geo_tracker_vue_vue_type_template_id_9abd16ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./components/custom/signup.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&");
/* harmony import */ var _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/custom/signup.vue?vue&type=style&index=0&id=0e9d894b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e9d894b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0e9d894b')) {
      api.createRecord('0e9d894b', component.options)
    } else {
      api.reload('0e9d894b', component.options)
    }
    module.hot.accept("./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&");
(function () {
      api.rerender('0e9d894b', {
        render: _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/custom/signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/custom/signup.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/custom/signup.vue?vue&type=style&index=0&id=0e9d894b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=style&index=0&id=0e9d894b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0e9d894b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/signup.vue?vue&type=template&id=0e9d894b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_0e9d894b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2FkbWluLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9nZW8tdHJhY2tlci52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vb2ZmZXJRck1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vc2lnbnVwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzRmN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWU/OTk3NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9jYXRlZ29yeS52dWU/NzE0NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZT8wMzYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZT82OTAxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZT9mOTdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWU/OTMwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9zaWdudXAudnVlP2Q1MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT9iNjZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbURldGFpbHMudnVlPzhlMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vYWRtaW4udnVlP2YyZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlPzZjNDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vZ2VvLXRyYWNrZXIudnVlP2VjZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWU/ZmMxZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWU/MjUyOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/NDQ0NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlP2E3NmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vb2ZmZXJRck1vZGFsLnZ1ZT80OWViIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL3NpZ251cC52dWU/MDk3ZCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXV0aC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/OWI4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWU/NjlhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZT9iMDg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbURldGFpbHMudnVlPzI3NGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vYWRtaW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2FkbWluLnZ1ZT81YzM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2FkbWluLnZ1ZT80MWZhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9jYXRlZ29yeS52dWU/YzA0MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9jYXRlZ29yeS52dWU/ZTUxNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9jYXRlZ29yeS52dWU/MGM4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9nZW8tdHJhY2tlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vZ2VvLXRyYWNrZXIudnVlP2MzYWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vZ2VvLXRyYWNrZXIudnVlP2RkY2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbS52dWU/MzNmYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZT83NjZjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlPzZlMzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vaXRlbUxpa2UudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZT83ZjYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZT8wODNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZT8xMjUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/ODc5ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/NDJjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/MmM2YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL25hdkJvdHRvbS52dWU/ZDk3YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlP2Y5OWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZT9iNDBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vb2ZmZXJRck1vZGFsLnZ1ZT9mYWFhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL29mZmVyUXJNb2RhbC52dWU/YTI1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9zaWdudXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL3NpZ251cC52dWU/MmRlOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9zaWdudXAudnVlPzcxNDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vc2lnbnVwLnZ1ZT85MmMyIiwid2VicGFjazovLy8uL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvaW9uaWNvbnMuY3NzIiwid2VicGFjazovLy8uL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL25hdGl2ZXNjcmlwdC1mb250aWNvbi5qcyJdLCJuYW1lcyI6WyJIb21lIiwiVnVlIiwiY29uZmlnIiwic2lsZW50IiwiVE5TRm9udEljb24iLCJmaWx0ZXIiLCJmb250aWNvbiIsInJlZ2lzdGVyRWxlbWVudCIsInJlcXVpcmUiLCIkc3RhcnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5hdGl2ZXNjcmlwdF9vYXV0aDJfMSIsInByb3ZpZGVyc18xIiwiaHR0cCIsImNsaWVudCIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzIiwibWljcm9zb2Z0UHJvdmlkZXIiLCJjb25maWd1cmVPQXV0aFByb3ZpZGVyTWljcm9zb2Z0IiwiZ29vZ2xlUHJvdmlkZXIiLCJjb25maWd1cmVPQXV0aFByb3ZpZGVyR29vZ2xlIiwiZmFjZWJvb2tQcm92aWRlciIsImNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJGYWNlYm9vayIsImNvbmZpZ3VyZVRuc09BdXRoIiwiZ29vZ2xlUHJvdmlkZXJPcHRpb25zIiwib3BlbklkU3VwcG9ydCIsImNsaWVudElkIiwicmVkaXJlY3RVcmkiLCJ1cmxTY2hlbWUiLCJzY29wZXMiLCJUbnNPYVByb3ZpZGVyR29vZ2xlIiwiZmFjZWJvb2tQcm92aWRlck9wdGlvbnMiLCJjbGllbnRTZWNyZXQiLCJUbnNPYVByb3ZpZGVyRmFjZWJvb2siLCJtaWNyb3NvZnRQcm92aWRlck9wdGlvbnMiLCJUbnNPYVByb3ZpZGVyTWljcm9zb2Z0IiwidG5zT2F1dGhMb2dpbiIsInByb3ZpZGVyVHlwZSIsIlRuc09BdXRoQ2xpZW50IiwibG9naW5XaXRoQ29tcGxldGlvbiIsInRva2VuUmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsImFjY2Vzc1Rva2VuIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnRlbnQiLCJ0b0pTT04iLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJyZXMiLCJlIiwidG5zT2F1dGhMb2dvdXQiLCJsb2dvdXQiLCJtYXBDc3MiLCJkYXRhIiwiZGVidWciLCJtYXAiLCJzZXRzIiwic3BsaXQiLCJfaSIsInNldHNfMSIsImxlbmd0aCIsInNldCIsInBhaXIiLCJrZXlHcm91cHMiLCJrZXlzIiwiY2xlYW5WYWx1ZSIsIl9hIiwia2V5c18xIiwia2V5IiwidHJpbSIsInNsaWNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWwiLCJtYXRjaGVzIiwibWF0Y2giLCJmaWxlX3N5c3RlbV8xIiwibGliIiwibG9hZENzcyIsImNudCIsImN1cnJlbnROYW1lIiwiZm9udEljb25Db2xsZWN0aW9ucyIsInBhdGhzIiwiaW5pdENvbGxlY3Rpb24iLCJjc3MiLCJsb2FkRmlsZSIsInBhdGgiLCJjc3NGaWxlIiwia25vd25Gb2xkZXJzIiwiY3VycmVudEFwcCIsImdldEZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRUZXh0IiwiZXJyIiwibG9hZEZpbGVzIiwiaW5kZXhPZiIsInByZWZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUlBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLDhEQUZBO0FBR0E7QUFIQSxHQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FOQTs7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TyxDQUFDUixXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRSxRQUFULENBQWtCTyxLQUFsQixFQUF5QjtBQUNyQixNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJQSxLQUFLLENBQUNnRyxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLFVBQUlDLE1BQU0sR0FBR2pHLEtBQUssQ0FBQ3NELEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWI7QUFDQSxhQUFPL0QsV0FBVyxDQUFDNEYsR0FBWixDQUFnQmMsTUFBaEIsRUFBd0JqRyxLQUF4QixDQUFQO0FBQ0gsS0FIRCxNQUlLO0FBQ0QrQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxxRUFBWjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT2hDLEtBQVA7QUFDSDs7QUFDREQsT0FBTyxDQUFDTixRQUFSLEdBQW1CQSxRQUFuQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuICAgIDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcblxyXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG4gICAgICA8R3JpZExheW91dFxyXG4gICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgIHJlZj1cIm5hdlN0YXR1c0JhclwiXHJcbiAgICAgICAgY2xhc3M9XCJuYXZTdGF0dXNCYXJcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNiZDIxMjJcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cIiosYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cInN0YXR1cy10aXRsZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjb2w9XCIwXCJcclxuICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgQHRhcD1cInNlYXJjaFwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuICAgICAgICAgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY29sPVwiMVwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIEB0YXA9XCJiZWxsXCJcclxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG4gICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY29sPVwiMlwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIEB0YXA9XCJvZmZlclwiXHJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuICAgICAgICAgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBAdGFwPVwiZ29Ub0xvZ2luXCJcclxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICBjb2w9XCIzXCJcclxuICAgICAgICAgIHJvdz1cIjBcIlxyXG4gICAgICAgICAgY2xhc3M9XCJzdGF0dXMtcHJvZmlsZVwiXHJcbiAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8R3JpZExheW91dFxyXG4gICAgICAgIHJvdz1cIjFcIlxyXG4gICAgICAgIHJlZj1cIm5hdlRhYlwiXHJcbiAgICAgICAgY2xhc3M9XCJuYXZUYWJcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICBjbGFzcz1cInRhYnZpZXdcIlxyXG4gICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgIEB0YXA9XCJwb3B1bGFyXCJcclxuICAgICAgICAgIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgY29scz1cImF1dG9cIlxyXG4gICAgICAgICAgY29sPVwiMFwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzMlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCJcclxuICAgICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J34vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZyc6JydcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCIgdGV4dD1cIlBPUFVMQVJcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgIGNsYXNzPVwidGFidmlld1wiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG4gICAgICAgICAgQHRhcD1cInNob3dDYXRlZ29yeVwiXHJcbiAgICAgICAgICByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgIGNvbHM9XCJhdXRvXCJcclxuICAgICAgICAgIGNvbD1cIjFcIlxyXG4gICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjM0JVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCJcclxuICAgICAgICAgICAgcm93PVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWxcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgICAgcm93PVwiMVwiXHJcbiAgICAgICAgICAgIHRleHQ9XCJDQVRFR09SWVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFidmlld1RleHRcIlxyXG4gICAgICAgICAgPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICBjbGFzcz1cInRhYnZpZXdcIlxyXG4gICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCJcclxuICAgICAgICAgIEB0YXA9XCJzaG93UHJvbW9zXCJcclxuICAgICAgICAgIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgY29scz1cImF1dG9cIlxyXG4gICAgICAgICAgY29sPVwiMlwiXHJcbiAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzMlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxyXG4gICAgICAgICAgICByb3c9XCIwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgOnNyYz1cInNlbGVjdGVkVGFidmlldz09Mj8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCIgdGV4dD1cIlBST01PU1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICA8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgIDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgPExpc3RWaWV3XHJcbiAgICAgICAgICByZWY9XCJsaXN0dmlld1wiXHJcbiAgICAgICAgICBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+PC9DYXRlZ29yeT5cclxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICA8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPjwvR3JpZExheW91dD5cclxuXHJcbiAgICAgIDxuYXZCb3R0b20gcm93PVwiM1wiIC8+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgPC9wYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xyXG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IG5hdkJvdHRvbSBmcm9tIFwiLi9jdXN0b20vbmF2Qm90dG9tXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2N1c3RvbS9pdGVtXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IFFyTW9kYWwgZnJvbSBcIi4vY3VzdG9tL29mZmVyUXJNb2RhbFwiO1xyXG5pbXBvcnQgSXRlbURldGFpbHMgZnJvbSBcIi4vSXRlbURldGFpbHNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2N1c3RvbS9sb2dpblwiO1xyXG5jb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTtcclxuY29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgbmF2Qm90dG9tLFxyXG4gICAgSXRlbSxcclxuICAgIENhdGVnb3J5XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaXRlbXNDYXRlZ29yeSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcihcIiNiNTEyMTNcIik7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcm91dGVzOiB7XHJcbiAgICAgICAgbG9naW46IExvZ2luXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3REZWxZOiAwLFxyXG4gICAgICBoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFRhYjogMCxcclxuICAgICAgc2VsZWN0ZWRUYWJ2aWV3OiAwLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMi5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQnVyZ2VyXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA5ODcsXHJcbiAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOiAxMyxcclxuICAgICAgICAgIHJhdGluZzogXCI0LjVcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTEuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMi5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTQuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNS5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJQYW5jYWtlXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIyMzAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA4OTEsXHJcbiAgICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudHM6IDcsXHJcbiAgICAgICAgICByYXRpbmc6IFwiNC4wXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQmlub25kbyBCbGFjayBGb3Jlc3QgQ2FrZVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTIuanBnXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJDYWtlXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgIGxpa2VzOiA3MzAsXHJcbiAgICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudHM6IDExLFxyXG4gICAgICAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkJVUkdFUlwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIlBBTkNBS0VcIixcclxuICAgICAgICAgIGNvdW50OiBcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNBS0VcIixcclxuICAgICAgICAgIGNvdW50OiBcIjlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkJFRVJcIixcclxuICAgICAgICAgIGNvdW50OiBcIjdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNlYXJjaCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hcIik7XHJcbiAgICB9LFxyXG4gICAgYmVsbCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJiZWxsXCIpO1xyXG4gICAgfSxcclxuICAgIG9mZmVyKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlFSXCIpO1xyXG4gICAgICB0aGlzLiRzaG93TW9kYWwoUXJNb2RhbCk7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0xvZ2luKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7fSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0l0ZW0ocGF5bG9hZCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLCB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGl0ZW06IHBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBvcHVsYXIoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuICAgIH0sXHJcbiAgICBzaG93Q2F0ZWdvcnkoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuICAgIH0sXHJcbiAgICBzaG93UHJvbW9zKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XHJcbiAgICB9LFxyXG4gICAgaG9tZSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcbiAgICB9LFxyXG4gICAgY2FydCgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcbiAgICB9LFxyXG4gICAgYWJvdXQoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJ2aWV3LmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiA1MDtcclxufVxyXG4udGFidmlld1RleHQge1xyXG4gIG1hcmdpbi10b3A6IDE1O1xyXG4gIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgZm9udC1zaXplOiAxMztcclxuICBjb2xvcjogI2Q4ZDJkMjtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZUYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMjI7XHJcbn1cclxuLm5hdlRhYnZpZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnN0YXR1cy1pbWcge1xyXG4gIG1hcmdpbi10b3A6IDQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcclxuICB3aWR0aDogMzA7XHJcbiAgaGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXByb2ZpbGUge1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gIHdpZHRoOiAzMDtcclxuICBoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTtcclxuICBtYXJnaW4tdG9wOiA4O1xyXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJhbmltLXBhZ2VcIlxyXG4gICAgICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCIgQGxvYWRlZD1cIm9uTG9hZGVkXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWNvdmVyXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjBcIiBjb2w9XCIwXCIgbWFyZ2luVG9wPVwiLTQwXCIgaGVpZ2h0PVwiMTgwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWdcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIiBAdGFwPVwiY2xvc2VcIiA6dGV4dD1cIidmYS1hcnJvdy1sZWZ0JyB8IGZvbnRpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGNsb3NlXCIgZm9udFNpemU9XCIyNFwiIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYW5pbS1pbWFnZXNcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHYtZm9yPVwiaW1hZ2UgaW4gaXRlbS5pbWFnZXNcIiByb3dzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRodW1iXCIgcm93PVwiMFwiIGNvbD1cIjBcIiA6c3JjPVwiaW1hZ2Uuc3JjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWl0ZW1JbmZvXCIgbWFyZ2luVG9wPVwiMTVcIiByb3c9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY2F0ZWdvcnlJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1uYW1lXCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgOnRleHQ9XCInQXZlcmFnZSBSYXRlOicgKyBpdGVtLnJhdGluZyBcIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiBjb2w9XCIxXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmEgcmF0ZVwiIDp0ZXh0PVwiJ2ZhLXN0YXInIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYSByYXRlXCIgOnRleHQ9XCInZmEtc3RhcicgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhIHJhdGVcIiA6dGV4dD1cIidmYS1zdGFyJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmEgcmF0ZVwiIDp0ZXh0PVwiJ2ZhLXN0YXItaGFsZi1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGluZSBhbmltLWxpa2VzXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1saWtlc1wiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiYXV0bywqLGF1dG8sYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVMaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImxpa2VcIiBjbGFzcz1cImxpa2UtaWNvbiBmYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXNMaWtlID8gJ2xpa2VkLWFjdGl2ZScgOiAnZGVmYXVsdCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXNMaWtlID8gJ2ZhLXRodW1icy11cCc6J2ZhLXRodW1icy1vLXVwJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0ubGlrZXNcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIG1hcmdpbkxlZnQ9XCIxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtY29tbWVudC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmNvbW1lbnRzXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjJcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpc0hlYXJ0ID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXNIZWFydCA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwibGluZUJyZWFrIGFuaW0tbGlrZXNcIiAvPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRsYXlvdXQgcm93cz1cImF1dG8sKlwiIGNsYXNzPVwiY29udGVudCBhbmltLWNvbnRlbnRcIiBtYXJnaW5Ub3A9XCIxNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjBcIiByb3dzPVwiYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVcIiBjb2x1bW5zPVwiYXV0bywgYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgOnRleHQ9XCInZmEtdGFncycgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgZGVzY3JpcHRpb24taWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIiB0ZXh0PVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHR2aWV3IGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZGxheW91dD5cclxuXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge30sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQnVyZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmVlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpa2UgPSB0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgICAgICB0aGlzLmlzSGVhcnQgPSB0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRlRnJvbSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVGcm9tKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdmVyID0gdGhpcy4kcmVmcy5jb3Zlci5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuJHJlZnMuaW1hZ2VzLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJlZnMucGFnZS5uYXRpdmVWaWV3O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlcy50cmFuc2xhdGVZID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdmVyLnRyYW5zbGF0ZVkgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvdmVyLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb3Zlci5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIChwYWdlLmJhY2tncm91bmRDb2xvciA9IFwiI2Q0ZDZkOFwiKSwgdGhpcy5hbmltYXRlVG8oKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZVRvKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdmVyID0gdGhpcy4kcmVmcy5jb3Zlci5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuJHJlZnMuaW1hZ2VzLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJlZnMucGFnZS5uYXRpdmVWaWV3O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGltYWdlcy5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vIFx0c2NhbGU6IHsgeDogMSwgeTogMSB9ICxcclxuICAgICAgICAgICAgICAgIC8vIFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgICAgLy8gXHRvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgICAgIC8vIFx0ZGVsYXk6IDE1MFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY292ZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY292ZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5saWtlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUxpa2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWtlID0gIXRoaXMuaXNMaWtlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMaWtlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSGVhcnQgPSAhdGhpcy5pc0hlYXJ0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVx0YFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XHJcbiAgICAgICAgbWFyZ2luOiAxNSAwIDAgMTU7XHJcbiAgICB9XHJcblxyXG4gICAgVGV4dFZpZXcge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjM2U5ZWRiO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogODtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogI0ZGRTkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlZC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjNDA4MEZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFydC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjYjUxMjEzO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0IHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBwYWRkaW5nOiA1IDAgNSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjtcclxuICAgICAgICBwYWRkaW5nOiA1IDUgNSA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICAgICAgICB3aWR0aDogNDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMztcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTtcclxuICAgICAgICB3aWR0aDogMTMwO1xyXG4gICAgICAgIGhlaWdodDogNzA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lQnJlYWsge1xyXG4gICAgICAgIGhlaWdodDogMC41O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLXBhZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LXBhZ2Uge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWNvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41O1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWltYWdlcyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWltYWdlcztcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGtleS1pbWFnZXMge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWl0ZW1JbmZvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4yO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktaXRlbUluZm8ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbS1saWtlcyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNTtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMga2V5LWxpa2VzIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW0tY29udGVudCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS44O1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBrZXktY29udGVudCB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuICAgIDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcbiA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICA8QnV0dG9uIHRleHQ9XCJBZG1pblwiIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XHJcbiA8L0ZsZXhib3hMYXlvdXQ+XHJcblxyXG4gIDwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG5cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cclxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgY29sdW1ucz1cIipcIj5cclxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PVwiMTUwXCIgd2lkdGg9XCIxMDAlXCIgbWFyZ2luQm90dG9tPVwiMTBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz4gLz5cclxuICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJiYW5uZXIyXCIgYmFja2dyb3VuZENvbG9yPVwiIzQ4OWU5ZTllXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmNhdGVnb3J5ICsgJyAoJyArICBpdGVtLmNvdW50ICArICAnKSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiIHRleHR3cmFwPVwidHJ1ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5kZWZhdWx0LWltZyB7XHJcbiAgICAgICAgY29sb3I6ICNkMWNlY2U1YjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDUgMCAxNSAwXHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgb3BhY2l0eTogLjM7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxyXG4gICAgPCEtLSBAbG9hZGVkPVwib25Mb2FkZWRcIiAtLT5cclxuIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgIDxCdXR0b24gdGV4dD1cIkdlb1wiIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XHJcbiA8L0ZsZXhib3hMYXlvdXQ+XHJcblxyXG4gIDwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG5cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImNhcmQtaW1nXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiXHJcbiAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiYXV0byxhdXRvXCIgY2xhc3M9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImNhdGVnb3J5SWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLW5hbWVcIiB0ZXh0d3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjFcIiBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIiB0ZXh0d3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmNhdGVnb3J5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIHJhdGluZy1pY29uXCIgOnRleHQ9XCInZmEtc3RhcicgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjJcIiByb3c9XCIwXCIgY2xhc3M9XCJyYXRpbmctdmFsdWUgaXRlbS1jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5yYXRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBtYXJnaW5Ub3A9XCI1XCIgY2xhc3M9XCJsaW5lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gSGVyZSB0aGUgcHJvYmxlbSBpbiBzY3JvbGwgdHJhbnNpc3Rpb24gLS0+XHJcbiAgICAgICAgICAgIDxJdGVtTGlrZSA6aXRlbT1cIml0ZW1cIj48L0l0ZW1MaWtlPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVha1wiIC8+XHJcblxyXG4gICAgPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgSXRlbUxpa2UgZnJvbSBcIi4vaXRlbUxpa2VcIjtcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgaXNJT1MsXHJcbiAgICAgICAgaXNBbmRyb2lkXHJcbiAgICB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBJdGVtTGlrZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQnVyZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmVlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNha2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzTGlrZSA9ICB0aGlzLml0ZW0uaXNMaWtlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNIZWFydCA9ICB0aGlzLml0ZW0uaXNGYXZvcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHt9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYW5pbWF0ZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMubGlrZS5uYXRpdmVWaWV3O1xyXG4gICAgICAgICAgICAgICAgaW1nTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZUZhdm9yaXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVMaWtlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaXNMaWtlID0gIXRoaXMuaXRlbS5pc0xpa2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtLmlzTGlrZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xpY2tlZFwiLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzSGVhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaXRlbS1jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAucmF0aW5nLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzO1xyXG4gICAgICAgIGNvbG9yOiAjRkZFOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlZC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjNDA4MEZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFydC1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjYjUxMjEzO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0IHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBwYWRkaW5nOiA1IDAgNSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjtcclxuICAgICAgICBwYWRkaW5nOiA1IDUgNSA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWljb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgICAgICAgd2lkdGg6IDQwO1xyXG4gICAgICAgIGhlaWdodDogNDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuXHJcbiAgICAubGluZUJyZWFrIHtcclxuICAgICAgICBoZWlnaHQ6IDc7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPCEtLSA8R3JpZExheW91dCBtYXJnaW5Ub3A9XCI1XCIgd2lkdGg9XCIxMDAlXCIgcm93PVwiM1wiIGNvbHVtbnM9XCJhdXRvLCosYXV0byxhdXRvXCIgcm93cz1cImF1dG9cIj4gLS0+XHJcbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywqLGF1dG8sYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVMaWtlXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImxpa2VcIiBjbGFzcz1cImxpa2UtaWNvbiBmYVwiIDpjbGFzcz1cIltpdGVtLmlzTGlrZSA/ICdsaWtlZC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiXHJcbiAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uaXNMaWtlID8gJ2ZhLXRodW1icy11cCc6J2ZhLXRodW1icy1vLXVwJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0ubGlrZXNcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIG1hcmdpbkxlZnQ9XCIxNVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtY29tbWVudC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmNvbW1lbnRzXCI+PC9MYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjJcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpdGVtLmlzRmF2b3JpdGUgPyAnaGVhcnQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIiA6dGV4dD1cIml0ZW0uaXNGYXZvcml0ZSA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBpc0lPUyxcclxuICAgICAgICBpc0FuZHJvaWRcclxuICAgIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7fSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUljb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5jYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmEtY3V0bGVyeVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQmVlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1iZWVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQYW5jYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWNvZmZlZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmYS1iaXJ0aGRheS1jYWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZhLWZpcmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNMaWtlID0gIHRoaXMuaXRlbS5pc0xpa2VcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0hlYXJ0ID0gIHRoaXMuaXRlbS5pc0Zhdm9yaXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge30sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhbmltYXRlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5saWtlLm5hdGl2ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICBpbWdMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgICAgICAgICAgIGltZ0xvZ29cclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlTGlrZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUxpa2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5pc0xpa2UgPSAhdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0uaXNMaWtlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmxpa2VzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbGlja0J1dHRvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFydDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5pdGVtLWNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctaWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM7XHJcbiAgICAgICAgY29sb3I6ICNGRkU5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy12YWx1ZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2VkLWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICM0MDgwRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYXJ0LWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNiNTEyMTM7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlZmF1bHQge1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBoZWlnaHQ6IDMwO1xyXG4gICAgICAgIHBhZGRpbmc6IDUgMCA1IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2UtaWNvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBoZWlnaHQ6IDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyO1xyXG4gICAgICAgIHBhZGRpbmc6IDUgNSA1IDU7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktaWNvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICAgICAgICB3aWR0aDogNDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuXHJcbiAgICAubGluZUJyZWFrIHtcclxuICAgICAgICBoZWlnaHQ6IDc7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlXHJcbiAgICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCJcclxuICAgIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCJcclxuICAgIEBsb2FkZWQ9XCJvbkxvYWRlZFwiXHJcbiAgPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuZW1haWxcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IucGFzc3dvcmRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b24gOnRleHQ9XCInTG9naW4nXCIgQHRhcD1cImxvZ2luXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2lnbkFza1wiPjwvU3Bhbj5cclxuICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2lnblVwXCIgY2xhc3M9XCJib2xkXCI+PC9TcGFuPlxyXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbnZhciBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RcIik7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lXCI7XHJcbmltcG9ydCBHZW9UcmFja2VyIGZyb20gXCIuLi9jdXN0b20vZ2VvLXRyYWNrZXJcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuLi9jdXN0b20vYWRtaW5cIjtcclxuaW1wb3J0IFNpZ251cCBmcm9tIFwiLi4vY3VzdG9tL3NpZ251cFwiO1xyXG5pbXBvcnQgVnVlVGVsSW5wdXQgZnJvbSBcInZ1ZS10ZWwtaW5wdXRcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFZ1ZVRlbElucHV0LFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpZ25VcDogXCJTaWduIHVwXCIsXHJcbiAgICAgIHNpZ25Bc2s6IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/XCIsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGh0dHBcclxuICAgICAgLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogXCJodHRwOi8vMTcyLjE2LjkuNzc6NTAwMC9hcGkvcm9sZVwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb2xlTGlzdEJ5TmFtZSA9IHJlc3BvbnNlLmNvbnRlbnRcclxuICAgICAgICAgICAgLnRvSlNPTigpXHJcbiAgICAgICAgICAgIC5wYXlsb2FkLm1hcCgoZSkgPT4gZS5uYW1lKTtcclxuICAgICAgICAgIHRoaXMucm9sZUxpc3QgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgTGVuZ3RoIE11c3QgQmUgR3JlYXRlciB0aGVuIDguXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnVzZXIuZW1haWwgJiYgdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgaHR0cFxyXG4gICAgICAgICAgLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovLzE3Mi4xNi45Ljc3OjUwMDAvYXBpL3VzZXIvbG9naW5cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSxcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnRvYXN0TWVzc2FnZShyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLnBheWxvYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLnBheWxvYWQucm9sZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkucGF5bG9hZC5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhBZG1pbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkucGF5bG9hZC5yb2xlID09IDMpXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oR2VvVHJhY2tlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsaWRFbWFpbChlbWFpbCkge1xyXG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgdGhpcy5lcnJvciA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNpZ251cCwge30pO1xyXG4gICAgfSxcclxuICAgIHRvYXN0TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIHZhciB0b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KG1lc3NhZ2UpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMjtcclxuICBoZWlnaHQ6IDkwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2Q1MWExYTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTI7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxYTFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uc2lnbi11cC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5sYWJlbCB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgY29sb3I6ICNkNDQ4NDg7IGZvbnQtc2l6ZTogMTQ7fVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwibmF2Qm90dG9tXCIgaGVpZ2h0PVwiNTBcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCIgcm93cz1cImF1dG9cIlxyXG4gICAgICAgIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCI+XHJcblxyXG4gICAgICAgIDxHcmlkTGF5b3V0IDpjbGFzcz1cInNlbGVjdGVkVGFiPT0wPydhY3RpdmUnOicnXCIgQHRhcD1cImhvbWVcIiByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgICAgY29scz1cImF1dG9cIiBjbGFzcz1cIm5hdlwiIGNvbD1cIjBcIiByb3c9XCIwXCIgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgPEltYWdlIDpjbGFzcz1cInNlbGVjdGVkVGFiPT0wPydhY3RpdmUnOicnXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgICAgICA6c3JjPVwic2VsZWN0ZWRUYWI9PTA/J34vYXNzZXRzL2ltYWdlcy9uYXZob21lbS5wbmcnOid+L2Fzc2V0cy9pbWFnZXMvbmF2aG9tZS5wbmcnXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiB2LXNob3c9XCJzZWxlY3RlZFRhYj09MFwiIHRleHQ9XCJIb21lXCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTE/J2FjdGl2ZSc6JydcIiBAdGFwPVwiY2FydFwiIHJvd3M9XCIqLGF1dG9cIlxyXG4gICAgICAgICAgICBjb2xzPVwiYXV0b1wiIGNsYXNzPVwibmF2XCIgY29sPVwiMVwiIHJvdz1cIjBcIiB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTE/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09MT8nfi9hc3NldHMvaW1hZ2VzL25hdmNhcnRtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZjYXJ0LnBuZydcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIHYtc2hvdz1cInNlbGVjdGVkVGFiID09IDFcIiB0ZXh0PVwiQ2FydFwiIGNsYXNzPVwibmF2VGV4dFwiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IDpjbGFzcz1cInNlbGVjdGVkVGFiPT0yPydhY3RpdmUnOicnXCIgQHRhcD1cImhpc3RvcnlcIiByb3dzPVwiKixhdXRvXCJcclxuICAgICAgICAgICAgY29scz1cImF1dG9cIiBjbGFzcz1cIm5hdlwiIGNvbD1cIjJcIiByb3c9XCIwXCIgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgPEltYWdlIDpjbGFzcz1cInNlbGVjdGVkVGFiPT0yPydhY3RpdmUnOicnXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcbiAgICAgICAgICAgICAgICA6c3JjPVwic2VsZWN0ZWRUYWI9PTI/J34vYXNzZXRzL2ltYWdlcy9uYXZvcmRlcnNtLnBuZyc6J34vYXNzZXRzL2ltYWdlcy9uYXZvcmRlcnMucG5nJ1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgdi1zaG93PVwic2VsZWN0ZWRUYWIgPT0gMlwiIHRleHQ9XCJIaXN0b3J5XCIgY2xhc3M9XCJuYXZUZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxHcmlkTGF5b3V0IDpjbGFzcz1cInNlbGVjdGVkVGFiPT0zPydhY3RpdmUnOicnXCIgQHRhcD1cImFib3V0XCIgcm93cz1cIiosYXV0b1wiXHJcbiAgICAgICAgICAgIGNvbHM9XCJhdXRvXCIgY2xhc3M9XCJuYXZcIiBjb2w9XCIzXCIgcm93PVwiMFwiIHdpZHRoPVwiMjUlXCI+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2UgOmNsYXNzPVwic2VsZWN0ZWRUYWI9PTM/J2FjdGl2ZSc6JydcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJzZWxlY3RlZFRhYj09Mz8nfi9hc3NldHMvaW1hZ2VzL25hdnVzbS5wbmcnOid+L2Fzc2V0cy9pbWFnZXMvbmF2dXMucG5nJ1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgdi1zaG93PVwic2VsZWN0ZWRUYWIgPT0gM1wiIHRleHQ9XCJBYm91dFwiIGNsYXNzPVwibmF2VGV4dFwiPjwvTGFiZWw+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuXHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFiOiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGhvbWUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FydCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaXN0b3J5KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFib3V0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5uYXZCb3R0b20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMERjNDM3NzY7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdkljb24ge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMjVcclxuICAgIH1cclxuXHJcbiAgICAubmF2SWNvbi5hY3RpdmUge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdlRleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjtcclxuICAgICAgICAvKiBjb2xvcjogI2M0Mzc3NjsgKi9cclxuICAgICAgICBjb2xvcjogI2Q2MjUyNjtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxTdGFja0xheW91dCBjbGFzcz1cInAtMTVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0PEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9xci5wbmdcIiBzdHJldGNoPVwibm9uZVwiIC8+XHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2VcclxuICAgIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIlxyXG4gICAgY2xhc3M9XCJhbmltLXBhZ2VcIlxyXG4gICAgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIlxyXG4gICAgQGxvYWRlZD1cIm9uTG9hZGVkXCJcclxuICA+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IudXNlcm5hbWVcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyKiwxKiwqMypcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XHJcbiAgICAgICAgICA8RHJvcERvd25cclxuICAgICAgICAgICAgY29sPVwiMFwiXHJcbiAgICAgICAgICAgIHJlZj1cImRyb3BEb3duTGlzdDFcIlxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIDppdGVtcz1cImNvdW50cnlDb2RlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpdGVtLWRyb3AtZG93blwiXHJcbiAgICAgICAgICAgIEBzZWxlY3RlZEluZGV4Q2hhbmdlZD1cImRyb3BEb3duU2VsZWN0ZWRDb3VudHJ5Q2hhbmdlZFwiXHJcbiAgICAgICAgICA+PC9Ecm9wRG93bj5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgY29sPVwiMVwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVmPVwidGVtcENvdW50cnlDb2RlXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICBpc0VuYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwidGVtcENvdW50cnlDb2RlXCJcclxuICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIGNvbD1cIjJcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlZj1cImNvbnRhY3ROdW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIGhpbnQ9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW5sZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInRlbXBDb250YWN0TnVtYmVyXCJcclxuICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiZXJyb3IuY29udGFjdG51bWJlclwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIkVtYWlsXCJcclxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLmVtYWlsXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLnBhc3N3b3JkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICA8RHJvcERvd25cclxuICAgICAgICAgICAgcmVmPVwiZHJvcERvd25MaXN0MlwiXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgOml0ZW1zPVwicm9sZUxpc3RCeU5hbWVcIlxyXG4gICAgICAgICAgICBAc2VsZWN0ZWRJbmRleENoYW5nZWQ9XCJkcm9wRG93blNlbGVjdGVkSW5kZXhDaGFuZ2VkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpdGVtLWRyb3AtZG93blwiXHJcbiAgICAgICAgICA+PC9Ecm9wRG93bj5cclxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cImVycm9yLnJvbGVcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPEJ1dHRvbiA6dGV4dD1cInNpZ25JblwiIEB0YXA9XCJyZWdpc3RlclwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCBjbGFzcz1cImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIiBAdGFwPVwidG9nZ2xlRm9ybVwiPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICA8U3BhbiA6dGV4dD1cImJhY2tUb0xvZ2luXCI+PC9TcGFuPlxyXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICA8L0xhYmVsPlxyXG5cclxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiZ29vZ2xlIExvZ2luXCIgQHRhcD1cIm9uTG9naW5UYXAoKVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1hY3RpdmVcIiAvPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdXRoLXNlcnZpY2VcIik7XHJcbnZhciBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RcIik7XHJcbnZhciBjb3VudHJ5Q29kZSA9IHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvY291bnRyeUNvZGUuanNvblwiKTtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgY29uZmlndXJlT0F1dGhQcm92aWRlcnMsIHRuc09hdXRoTG9naW4gfSBmcm9tIFwiLi4vLi4vYXV0aC1zZXJ2aWNlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lXCI7XHJcbmltcG9ydCBHZW9UcmFja2VyIGZyb20gXCIuLi9jdXN0b20vZ2VvLXRyYWNrZXJcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuLi9jdXN0b20vYWRtaW5cIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jdXN0b20vbG9naW5cIjtcclxuaW1wb3J0IFZ1ZVRlbElucHV0IGZyb20gXCJ2dWUtdGVsLWlucHV0XCI7XHJcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuY29uZmlndXJlT0F1dGhQcm92aWRlcnMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBWdWVUZWxJbnB1dCxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb3VudHJ5Q29kZUxpc3Q6IFtdLFxyXG4gICAgICByb2xlTGlzdEJ5TmFtZTogW10sXHJcbiAgICAgIGVycm9yczogW10sXHJcbiAgICAgIHJvbGVMaXN0OiBbXSxcclxuICAgICAgc2lnbkluOiBcIlNpZ24gVXBcIixcclxuICAgICAgYmFja1RvTG9naW46IFwiQmFjayB0byBMb2dpblwiLFxyXG4gICAgICBjb3VudHJ5Q29kZTogbnVsbCxcclxuICAgICAgdGVtcENvbnRhY3ROdW1iZXI6IG51bGwsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICByb2xlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdE51bWJlcjogbnVsbCxcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBjb250YWN0bnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJvbGU6IFwiXCIsXHJcbiAgICAgICAgY291bnRyeUNvZGU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBodHRwXHJcbiAgICAgIC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiaHR0cDovLzE3Mi4xNi45Ljc3OjUwMDAvYXBpL3JvbGVcIixcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMucm9sZUxpc3RCeU5hbWUgPSByZXNwb25zZS5jb250ZW50XHJcbiAgICAgICAgICAgIC50b0pTT04oKVxyXG4gICAgICAgICAgICAucGF5bG9hZC5tYXAoKGUpID0+IGUubmFtZSk7XHJcbiAgICAgICAgICB0aGlzLnJvbGVMaXN0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKS5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGUpID0+IHt9XHJcbiAgICAgICk7XHJcbiAgICB0aGlzLmNvdW50cnlDb2RlID0gY291bnRyeUNvZGUubWFwKChlKSA9PiBlLm5hbWUpO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGRyb3BEb3duU2VsZWN0ZWRJbmRleENoYW5nZWQoKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy4kcmVmcy5kcm9wRG93bkxpc3QyICYmXHJcbiAgICAgICAgdGhpcy4kcmVmcy5kcm9wRG93bkxpc3QyLm5hdGl2ZVZpZXcgJiZcclxuICAgICAgICB0aGlzLiRyZWZzLmRyb3BEb3duTGlzdDIubmF0aXZlVmlldy5zZWxlY3RlZEluZGV4XHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4kcmVmcy5kcm9wRG93bkxpc3QyLm5hdGl2ZVZpZXcuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB0aGlzLnVzZXIucm9sZSA9IHRoaXMucm9sZUxpc3RbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZXJyb3Iucm9sZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcm9wRG93blNlbGVjdGVkQ291bnRyeUNoYW5nZWQoKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4kcmVmcy5kcm9wRG93bkxpc3QxLm5hdGl2ZVZpZXcuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgdGhpcy50ZW1wQ291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZVtpbmRleF0uZGlhbF9jb2RlO1xyXG4gICAgfSxcclxuXHJcbiAgdmFsaWRhdGVMb2dpbigpIHtcclxuICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZC5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGFzc3dvcmQgPSBcIlBhc3N3b3JkIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXNzd29yZCA9IFwiUGFzc3dvcmQgTGVuZ3RoIE11c3QgQmUgR3JlYXRlciB0aGVuIDguXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIubmFtZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IudXNlcm5hbWUgPSBcIlVzZXJuYW1lIHJlcXVpcmVkLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50ZW1wQ291bnRyeUNvZGUpIHtcclxuICAgICAgICB0aGlzLmVycm9yLmNvdW50cnlDb2RlID0gXCJDb250cnkgQ29kZSBSZXF1aXJlXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFjdE51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IuY29udGFjdG51bWJlciA9IFwiQ29udGFjdCBOdW1iZXIgcmVxdWlyZWQuXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnVzZXIucm9sZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3Iucm9sZSA9IFwiUm9sZSByZXF1aXJlZC5cIjtcclxuICAgICAgfSBcclxuICB9LFxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICB2YWxpZGF0ZUxvZ2luKClcclxuICAgICAgdGhpcy51c2VyLmNvbnRhY3ROdW1iZXIgPSB0aGlzLnRlbXBDb3VudHJ5Q29kZSArIHRoaXMudGVtcENvbnRhY3ROdW1iZXI7XHJcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3IpLmV2ZXJ5KFxyXG4gICAgICAgICh4KSA9PiB4ID09PSBudWxsIHx8IHggPT09IFwiXCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKGlzRW1wdHkpIHtcclxuICAgICAgICBodHRwXHJcbiAgICAgICAgICAucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vMTcyLjE2LjkuNzc6NTAwMC9hcGkvdXNlclwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U9PT09XCIsIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkuc3RhdHVzKTtcclxuICAgICAgICAgICAgICB0aGlzLnRvYXN0TWVzc2FnZShyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50LnRvSlNPTigpLnBheWxvYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICh0aGlzLnVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhY3ROdW1iZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAodGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkRW1haWwoZW1haWwpIHtcclxuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9naW5UYXAoKSB7XHJcbiAgICAgIGF1dGhfc2VydmljZV8xLnRuc09hdXRoTG9naW4oXCJnb29nbGVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9nb3V0VGFwKCkge1xyXG4gICAgICBhdXRoX3NlcnZpY2VfMS50bnNPYXV0aExvZ291dCgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY29udGFjdG51bWJlcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge30pO1xyXG4gICAgfSxcclxuICAgIHRvYXN0TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIHZhciB0b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KG1lc3NhZ2UpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMjtcclxuICBoZWlnaHQ6IDkwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2Q1MWExYTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTA7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDUgNSA1IDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MWExYTtcclxuICBib3JkZXItcmFkaXVzOiA1O1xyXG4gIGZvbnQtc2l6ZTogMjA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxvZ2luLWxhYmVsIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhOGE4YTg7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuLnNpZ24tdXAtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLml0ZW0tZHJvcC1kb3duIHtcclxuICBmb250LXNpemU6IDE1O1xyXG4gIGhlaWdodDogNDA7XHJcbiAgcGFkZGluZzogNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDEwO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogI2Q0NDg0ODtcclxuICBmb250LXNpemU6IDE0O1xyXG59XHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFidmlldy5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiA1MDtcXG59XFxuLnRhYnZpZXdUZXh0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXHJcXG4gIGZvbnQtc2l6ZTogMTM7XFxyXFxuICBjb2xvcjogI2Q4ZDJkMjtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5hdlRhYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTIyO1xcbn1cXG4ubmF2VGFidmlldyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4uc3RhdHVzLWltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXHJcXG4gIHdpZHRoOiAzMDtcXHJcXG4gIGhlaWdodDogMzA7XFxufVxcbi5zdGF0dXMtcHJvZmlsZSB7XFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlYmViO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXRvcDogNDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxyXFxuICB3aWR0aDogMzA7XFxyXFxuICBoZWlnaHQ6IDMwO1xcbn1cXG4uc3RhdHVzLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTU7XFxyXFxuICBtYXJnaW4tdG9wOiA4O1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Ib21lLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2xvc2VbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XFxuICAgIG1hcmdpbjogMTUgMCAwIDE1O1xcbn1cXG5UZXh0Vmlld1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxufVxcbi5kZXNjcmlwdGlvbi10ZXh0W2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZGVzY3JpcHRpb24taWNvbltkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjM2U5ZWRiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucmF0ZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNGRkU5MDA7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBjb2xvcjogIzQwODBGRjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG4uY29udGVudFtkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cXG59XFxuLmNhcmQtaW1nW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5jYXJkLWltZy10aHVtYltkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyODI4MjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgd2lkdGg6IDEzMDtcXG4gICAgaGVpZ2h0OiA3MDtcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saW5lW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuLmxpbmVCcmVha1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5hbmltLXBhZ2VbZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZS1kYXRhLXYtMzUwYzM2MjQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1wYWdlLWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG59XFxuMjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XFxufVxcbjEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbn1cXG4uYW5pbS1jb3ZlcltkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtMzUwYzM2MjQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY292ZXItZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4zMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWltYWdlc1tkYXRhLXYtMzUwYzM2MjRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXMtZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWltYWdlcy1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taXRlbUluZm9bZGF0YS12LTM1MGMzNjI0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm8tZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4yO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWl0ZW1JbmZvLWRhdGEtdi0zNTBjMzYyNCB7XFxuMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWxpa2VzW2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzLWRhdGEtdi0zNTBjMzYyNDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1saWtlcy1kYXRhLXYtMzUwYzM2MjQge1xcbjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1jb250ZW50W2RhdGEtdi0zNTBjMzYyNF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTM1MGMzNjI0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMS44O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQtZGF0YS12LTM1MGMzNjI0IHtcXG4wJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0l0ZW1EZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGVmYXVsdC1pbWdbZGF0YS12LTdkNTA3NzcxXSB7XFxuICAgIGNvbG9yOiAjZDFjZWNlNWI7XFxufVxcbi5jYXRlZ29yeS1uYW1lW2RhdGEtdi03ZDUwNzc3MV0ge1xcbiAgICBjb2xvcjogI2Y3ZjdmNztcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1IDAgMTUgMFxcbn1cXG4uYmFubmVyW2RhdGEtdi03ZDUwNzc3MV0ge1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgb3BhY2l0eTogLjM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLnJhdGluZy1pY29uW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBwYWRkaW5nLXRvcDogMztcXG4gICAgY29sb3I6ICNGRkU5MDA7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIGNvbG9yOiAjNDA4MEZGO1xcbn1cXG4uaGVhcnQtYWN0aXZlW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG4uaXRlbS1uYW1lW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LWMxYjg2ZWY0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4uY2F0ZWdvcnktaWNvbltkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG4uY29udGVudFtkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICBtYXJnaW4tdG9wOiAxNjtcXG59XFxuLmNhcmQtaW1nW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5saW5lW2RhdGEtdi1jMWI4NmVmNF0ge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuLmxpbmVCcmVha1tkYXRhLXYtYzFiODZlZjRdIHtcXG4gICAgaGVpZ2h0OiA3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvY3VzdG9tL2l0ZW0udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuLnJhdGluZy1pY29uW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBwYWRkaW5nLXRvcDogMztcXG4gICAgY29sb3I6ICNGRkU5MDA7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGNvbG9yOiAjNDA4MEZGO1xcbn1cXG4uaGVhcnQtYWN0aXZlW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG4uaXRlbS1uYW1lW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4uY2F0ZWdvcnktaWNvbltkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG4uY29udGVudFtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICBtYXJnaW4tdG9wOiAxNjtcXG59XFxuLmNhcmQtaW1nW2RhdGEtdi02OWNlZGM4Nl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbn1cXG4ubGluZVtkYXRhLXYtNjljZWRjODZdIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LTY5Y2VkYzg2XSB7XFxuICAgIGhlaWdodDogNztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9pdGVtTGlrZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LTYxMWFmNDg2XSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG4gIGhlaWdodDogOTA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2Q1MWExYTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuLmlucHV0W2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgZm9udC1zaXplOiAxMjtcXHJcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xcbn1cXG4uaW5wdXQtZmllbGQgLmlucHV0W2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgZm9udC1zaXplOiAxMDtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgaGVpZ2h0OiA1MDtcXHJcXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MWExYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi02MTFhZjQ4Nl0ge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNhOGE4YTg7XFxyXFxuICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtNjExYWY0ODZdIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5sYWJlbFtkYXRhLXYtNjExYWY0ODZdIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBjb2xvcjogI2Q0NDg0ODsgZm9udC1zaXplOiAxNDt9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5hdkJvdHRvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG4ubmF2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMERjNDM3NzY7XFxufVxcbi5uYXZJY29uIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1XFxufVxcbi5uYXZJY29uLmFjdGl2ZSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi5uYXZUZXh0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgLyogY29sb3I6ICNjNDM3NzY7ICovXFxuICAgIGNvbG9yOiAjZDYyNTI2O1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9jdXN0b20vbmF2Qm90dG9tLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtMGU5ZDg5NGJdIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtMGU5ZDg5NGJdIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxyXFxuICBmbGV4LWdyb3c6IDI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubG9nb1tkYXRhLXYtMGU5ZDg5NGJdIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEyO1xcclxcbiAgaGVpZ2h0OiA5MDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi0wZTlkODk0Yl0ge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZDUxYTFhO1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LTBlOWQ4OTRiXSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uaW5wdXRbZGF0YS12LTBlOWQ4OTRiXSB7XFxyXFxuICBmb250LXNpemU6IDEwO1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxufVxcbi5pbnB1dC1maWVsZCAuaW5wdXRbZGF0YS12LTBlOWQ4OTRiXSB7XFxyXFxuICBmb250LXNpemU6IDEwO1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LTBlOWQ4OTRiXSB7XFxyXFxuICBoZWlnaHQ6IDUwO1xcclxcbiAgbWFyZ2luOiA1IDUgNSA1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MWExYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi0wZTlkODk0Yl0ge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNhOGE4YTg7XFxyXFxuICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtMGU5ZDg5NGJdIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtMGU5ZDg5NGJdIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uaXRlbS1kcm9wLWRvd25bZGF0YS12LTBlOWQ4OTRiXSB7XFxyXFxuICBmb250LXNpemU6IDE1O1xcclxcbiAgaGVpZ2h0OiA0MDtcXHJcXG4gIHBhZGRpbmc6IDQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMTA7XFxyXFxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcbmxhYmVsW2RhdGEtdi0wZTlkODk0Yl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGNvbG9yOiAjZDQ0ODQ4O1xcclxcbiAgZm9udC1zaXplOiAxNDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2N1c3RvbS9zaWdudXAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0bywqLGF1dG9cIiwgY29sdW1uczogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlN0YXR1c0JhclwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZTdGF0dXNCYXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmQyMTIyXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKixhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy10aXRsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiSG9tZVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmJlbGwgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb2ZmZXIucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9mZmVyIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1wcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21lLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvTG9naW4gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2VGFiXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMyVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnBvcHVsYXIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXc9PTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvcG9wdWxhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIlBPUFVMQVJcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzQlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93Q2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkNBVEVHT1JZXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd1Byb21vcyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUFJPTU9TXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5pbmRleCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0dmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkNhdGVnb3J5XCIsIHsgYXR0cnM6IHsgaXRlbTogaXRlbSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiR3JpZExheW91dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIm5hdkJvdHRvbVwiLCB7IGF0dHJzOiB7IHJvdzogXCIzXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLm9uTG9hZGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWFpblwiLCBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItNDBcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxODBcIixcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNsb3NlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtYXJyb3ctbGVmdFwiKSxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWltYWdlc1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW0uaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsIGNvbHVtbnM6IFwiYXV0b1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taXRlbUluZm9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNhdGVnb3J5LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShfdm0uY2F0ZWdvcnlJY29uKSxcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uaXRlbS5jYXRlZ29yeVRhZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkF2ZXJhZ2UgUmF0ZTpcIiArIF92bS5pdGVtLnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMVwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zdGFyXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXN0YXJcIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zdGFyLWhhbGYtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lIGFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxMFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCosYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMFwiLCByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCJhdXRvLGF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUxpa2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5pc0xpa2UgPyBcImxpa2VkLWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTGlrZSA/IFwiZmEtdGh1bWJzLXVwXCIgOiBcImZhLXRodW1icy1vLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBfdm0uaXRlbS5saWtlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1jb21tZW50LW9cIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXRlbS5jb21tZW50cyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlSGVhcnQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiAgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmlzSGVhcnQgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzSGVhcnQgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjNcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2hhcmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZGxheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IGFuaW0tY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sKlwiLCBtYXJnaW5Ub3A6IFwiMTVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBkZXNjcmlwdGlvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXRhZ3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJEZXNjcmlwdGlvblwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0dmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWRtaW5cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3dzOiBcIipcIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwXCIsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiAvPlxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhbm5lcjJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM0ODllOWU5ZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeSArIFwiIChcIiArIF92bS5pdGVtLmNvdW50ICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInBhZ2VcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiR2VvXCIgfSwgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXAgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzdHJldGNoOiBcImFzcGVjdEZpbGxcIiwgc3JjOiBfdm0uaXRlbS5jb3ZlciB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNhdGVnb3J5LWljb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoX3ZtLmNhdGVnb3J5SWNvbiksXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uaXRlbS5jYXRlZ29yeVRhZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHJhdGluZy1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc3RhclwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyYXRpbmctdmFsdWUgaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMlwiLCByb3c6IFwiMFwiLCB0ZXh0OiBfdm0uaXRlbS5yYXRpbmcgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiNVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkl0ZW1MaWtlXCIsIHsgYXR0cnM6IHsgaXRlbTogX3ZtLml0ZW0gfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVCcmVha1wiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkdyaWRMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywqLGF1dG8sYXV0b1wiLCByb3dzOiBcImF1dG9cIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVMaWtlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcImxpa2VcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBmYVwiLFxuICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXRlbS5pc0xpa2UgPyBcImxpa2VkLWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNMaWtlID8gXCJmYS10aHVtYnMtdXBcIiA6IFwiZmEtdGh1bWJzLW8tdXBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IF92bS5pdGVtLmxpa2VzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMVwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsIG1hcmdpbkxlZnQ6IFwiMTVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBsYXlvdXQgZmFcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtY29tbWVudC1vXCIpIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLml0ZW0uY29tbWVudHMgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUhlYXJ0IH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcImZhdm9yaXRlXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gIGZhXCIsXG4gICAgICAgICAgICBjbGFzczogW192bS5pdGVtLmlzRmF2b3JpdGUgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiM1wiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsIGF0dHJzOiB7IHRleHQ6IFwiU2hhcmVcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9LFxuICAgICAgb246IHsgbG9hZGVkOiBfdm0ub25Mb2FkZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci5lbWFpbCB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IG1hcmdpbkJvdHRvbTogXCIyNVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci5wYXNzd29yZCB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dpblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9naW4gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uc2lnbkFzayB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2lnblVwIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiR3JpZExheW91dFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkJvdHRvbVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZcIixcbiAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFiID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyNSVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0uaG9tZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAwXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdmhvbWVtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdmhvbWUucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAwLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWI9PTBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2VGV4dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZcIixcbiAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFiID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyNSVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgdGFwOiBfdm0uY2FydCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAxXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdmNhcnRtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA6IFwifi9hc3NldHMvaW1hZ2VzL25hdmNhcnQucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAxLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWIgPT0gMVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkNhcnRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5oaXN0b3J5IH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYiA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFiID09IDJcbiAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvbmF2b3JkZXJzbS5wbmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIn4vYXNzZXRzL2ltYWdlcy9uYXZvcmRlcnMucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYiA9PSAyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWIgPT0gMlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcIkhpc3RvcnlcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyB0YXA6IF92bS5hYm91dCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWIgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYiA9PSAzXG4gICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL25hdnVzbS5wbmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIn4vYXNzZXRzL2ltYWdlcy9uYXZ1cy5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFiID09IDMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYiA9PSAzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQWJvdXRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwLTE1XCIsIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9xci5wbmdcIiwgc3RyZXRjaDogXCJub25lXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlIE1vZGFsXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9LFxuICAgICAgb246IHsgbG9hZGVkOiBfdm0ub25Mb2FkZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlVzZXIgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci51c2VybmFtZSB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMiosMSosKjMqXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJEcm9wRG93blwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJkcm9wRG93bkxpc3QxXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tZHJvcC1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZWQ6IF92bS5kcm9wRG93blNlbGVjdGVkQ291bnRyeUNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IGNvbDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRlbXBDb3VudHJ5Q29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZW1wQ291bnRyeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVtcENvdW50cnlDb2RlID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZW1wQ291bnRyeUNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IGNvbDogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbnRhY3ROdW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbnRhY3QgTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZW1wQ29udGFjdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZW1wQ29udGFjdE51bWJlciA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVtcENvbnRhY3ROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IuY29udGFjdG51bWJlciB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IuZW1haWwgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInBhc3N3b3JkXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IucGFzc3dvcmQgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJEcm9wRG93blwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJkcm9wRG93bkxpc3QyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tZHJvcC1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlbGVjdGVkSW5kZXg6IFwiMFwiLCBpdGVtczogX3ZtLnJvbGVMaXN0QnlOYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZWQ6IF92bS5kcm9wRG93blNlbGVjdGVkSW5kZXhDaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5lcnJvci5yb2xlIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2lnbkluIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucmVnaXN0ZXIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLmJhY2tUb0xvZ2luIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mbyBidG4tYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcImdvb2dsZSBMb2dpblwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Mb2dpblRhcCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2F1dGgtc2VydmljZS5qc1wiOiBcIi4vYXV0aC1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9mb250cy9mb250LWF3ZXNvbWUuY3NzXCI6IFwiLi9mb250cy9mb250LWF3ZXNvbWUuY3NzXCIsXG5cdFwiLi9mb250cy9pb25pY29ucy5jc3NcIjogXCIuL2ZvbnRzL2lvbmljb25zLmNzc1wiLFxuXHRcIi4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL2xpYi5qc1wiOiBcIi4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL2xpYi5qc1wiLFxuXHRcIi4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL25hdGl2ZXNjcmlwdC1mb250aWNvbi5qc1wiOiBcIi4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL25hdGl2ZXNjcmlwdC1mb250aWNvbi5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXHJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxyXFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcclxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcclxcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcclxcblxcclxcbi8qXFxyXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxyXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXHJcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcclxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXHJcXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250QXdlc29tZVxcXCIsIFxcXCJmb250YXdlc29tZS13ZWJmb250XFxcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJpb25pY29uc1xcXCJcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuXHJcbi8vIFVuY29tbW1lbnQgdGhlIGZvbGxvd2luZyB0byBzZWUgTmF0aXZlU2NyaXB0LVZ1ZSBvdXRwdXQgbG9nc1xyXG5WdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICcuL25hdGl2ZXNjcmlwdC1mb250aWNvbic7XHJcblxyXG5UTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xyXG5UTlNGb250SWNvbi5wYXRocyA9IHtcclxuICAgICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnLFxyXG4gICAgJ2lvbic6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycsXHJcbn07XHJcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcclxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XHJcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXCJEcm9wRG93blwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9kcm9wLWRvd25cIikuRHJvcERvd24pO1xyXG5cclxuXHJcbm5ldyBWdWUoe1xyXG5cclxuICAgIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEhvbWUpXSlcclxuXHJcbn0pLiRzdGFydCgpO1xyXG4iLCJcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbmF0aXZlc2NyaXB0X29hdXRoMl8xID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9hdXRoMicpXHJcbnZhciBwcm92aWRlcnNfMSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb2F1dGgyL3Byb3ZpZGVyc1wiKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKTtcclxudmFyIGNsaWVudCA9IG51bGw7XHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzKCkge1xyXG4gICAgdmFyIG1pY3Jvc29mdFByb3ZpZGVyID0gY29uZmlndXJlT0F1dGhQcm92aWRlck1pY3Jvc29mdCgpO1xyXG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyID0gY29uZmlndXJlT0F1dGhQcm92aWRlckdvb2dsZSgpO1xyXG4gICAgdmFyIGZhY2Vib29rUHJvdmlkZXIgPSBjb25maWd1cmVPQXV0aFByb3ZpZGVyRmFjZWJvb2soKTtcclxuICAgIG5hdGl2ZXNjcmlwdF9vYXV0aDJfMS5jb25maWd1cmVUbnNPQXV0aChbbWljcm9zb2Z0UHJvdmlkZXIsIGdvb2dsZVByb3ZpZGVyLCBmYWNlYm9va1Byb3ZpZGVyXSk7XHJcbn1cclxuZXhwb3J0cy5jb25maWd1cmVPQXV0aFByb3ZpZGVycyA9IGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzO1xyXG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVyR29vZ2xlKCkge1xyXG4gICAgdmFyIGdvb2dsZVByb3ZpZGVyT3B0aW9ucyA9IHtcclxuICAgICAgICBvcGVuSWRTdXBwb3J0OiBcIm9pZC1mdWxsXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IFwiOTkwNzY3MDc0NjEwLW51bTI0YjhwYjlmcW5zZTMya3UzMmVwNGQxNTNxNGd1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXHJcbiAgICAgICAgcmVkaXJlY3RVcmk6IFwiY29tLmdvb2dsZXVzZXJjb250ZW50LmFwcHMuOTkwNzY3MDc0NjEwLW51bTI0YjhwYjlmcW5zZTMya3UzMmVwNGQxNTNxNGd1Oi9hdXRoXCIsXHJcbiAgICAgICAgdXJsU2NoZW1lOiBcImNvbS5nb29nbGV1c2VyY29udGVudC5hcHBzLjk5MDc2NzA3NDYxMC1udW0yNGI4cGI5ZnFuc2UzMmt1MzJlcDRkMTUzcTRndVwiLFxyXG4gICAgICAgIHNjb3BlczogW1wiZW1haWxcIl1cclxuICAgIH07XHJcbiAgICB2YXIgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzXzEuVG5zT2FQcm92aWRlckdvb2dsZShnb29nbGVQcm92aWRlck9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIGdvb2dsZVByb3ZpZGVyO1xyXG59XHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJGYWNlYm9vaygpIHtcclxuICAgIHZhciBmYWNlYm9va1Byb3ZpZGVyT3B0aW9ucyA9IHtcclxuICAgICAgICBvcGVuSWRTdXBwb3J0OiBcIm9pZC1ub25lXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IFwiNjkxMjA4NTU0NDE1NjQ1XCIsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBcImQ4NzI1YWM0MTZmYTFiYjE5MTdjY2ZmZDE2NzBlM2M2XCIsXHJcbiAgICAgICAgcmVkaXJlY3RVcmk6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Nvbm5lY3QvbG9naW5fc3VjY2Vzcy5odG1sXCIsXHJcbiAgICAgICAgc2NvcGVzOiBbXCJlbWFpbFwiXVxyXG4gICAgfTtcclxuICAgIHZhciBmYWNlYm9va1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVyc18xLlRuc09hUHJvdmlkZXJGYWNlYm9vayhmYWNlYm9va1Byb3ZpZGVyT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gZmFjZWJvb2tQcm92aWRlcjtcclxufVxyXG5mdW5jdGlvbiBjb25maWd1cmVPQXV0aFByb3ZpZGVyTWljcm9zb2Z0KCkge1xyXG4gICAgdmFyIG1pY3Jvc29mdFByb3ZpZGVyT3B0aW9ucyA9IHtcclxuICAgICAgICBvcGVuSWRTdXBwb3J0OiBcIm9pZC1mdWxsXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IFwiZjM3NmZhODctNjRhOS00OWExLThiNTYtZTBkNDhmYzA4MTBiXCIsXHJcbiAgICAgICAgLy8gcmVkaXJlY3RVcmk6IFwidXJuOmlldGY6d2c6b2F1dGg6Mi4wOm9vYlwiLFxyXG4gICAgICAgIHJlZGlyZWN0VXJpOiBcIm1zYWxmMzc2ZmE4Ny02NGE5LTQ5YTEtOGI1Ni1lMGQ0OGZjMDgxMGI6Ly9hdXRoXCIsXHJcbiAgICAgICAgdXJsU2NoZW1lOiBcIm1zYWxmMzc2ZmE4Ny02NGE5LTQ5YTEtOGI1Ni1lMGQ0OGZjMDgxMGJcIixcclxuICAgICAgICBzY29wZXM6IFtcImh0dHBzOi8vb3V0bG9vay5vZmZpY2UuY29tL21haWwucmVhZFwiXVxyXG4gICAgfTtcclxuICAgIHZhciBtaWNyb3NvZnRQcm92aWRlciA9IG5ldyBwcm92aWRlcnNfMS5UbnNPYVByb3ZpZGVyTWljcm9zb2Z0KG1pY3Jvc29mdFByb3ZpZGVyT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gbWljcm9zb2Z0UHJvdmlkZXI7XHJcbn1cclxuZnVuY3Rpb24gdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpIHtcclxuICAgIGNsaWVudCA9IG5ldyBuYXRpdmVzY3JpcHRfb2F1dGgyXzEuVG5zT0F1dGhDbGllbnQocHJvdmlkZXJUeXBlKTtcclxuXHJcbiAgICBjbGllbnQubG9naW5XaXRoQ29tcGxldGlvbihmdW5jdGlvbiAodG9rZW5SZXN1bHQsIGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGVycm9yOiBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGFjY2VzcyB0b2tlbjogXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlblJlc3VsdCk7XHJcbiAgICAgICAgICAgIGh0dHAucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj1cIiArIHRva2VuUmVzdWx0LmFjY2Vzc1Rva2VuLCBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlPT09PT09PT09PScsIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly8xNzIuMTYuOS43Nzo1MDAwL2FwaS91c2VyL2dvb2dsZUF1dGhlbnRpY2F0aW9uXCIsIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpLmVtYWlsIH0pLCBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXM9PT09PT09PT09JywgcmVzLmNvbnRlbnQudG9KU09OKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG5zT2F1dGhMb2dvdXQoKSB7XHJcbiAgICBpZiAoY2xpZW50KSB7XHJcbiAgICAgICAgY2xpZW50LmxvZ291dCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnRzLnRuc09hdXRoTG9naW4gPSB0bnNPYXV0aExvZ2luO1xyXG5leHBvcnRzLnRuc09hdXRoTG9nb3V0ID0gdG5zT2F1dGhMb2dvdXQ7XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MGMzNjI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1MGMzNjI0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNTBjMzYyNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUwYzM2MjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwYzM2MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwYzM2MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNTBjMzYyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9JdGVtRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTBjMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwYzM2MjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FkbWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTNhYjUyOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZG1pbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FkbWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZTNhYjUyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZTNhYjUyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZTNhYjUyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYWRtaW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlM2FiNTI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZlM2FiNTI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9hZG1pbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkbWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTNhYjUyOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZDUwNzc3MVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2Q1MDc3NzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2Q1MDc3NzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2Q1MDc3NzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZDUwNzc3MSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZDUwNzc3MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1MDc3NzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNTA3NzcxJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9nZW8tdHJhY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFiZDE2Y2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2VvLXRyYWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nZW8tdHJhY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWFiZDE2Y2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWFiZDE2Y2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWFiZDE2Y2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2dlby10cmFja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YWJkMTZjZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5YWJkMTZjZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vZ2VvLXRyYWNrZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dlby10cmFja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dlby10cmFja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nZW8tdHJhY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFiZDE2Y2UmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMWI4NmVmNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzFiODZlZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzFiODZlZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzFiODZlZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MxYjg2ZWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxYjg2ZWY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzFiODZlZjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjljZWRjODZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5Y2VkYzg2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5Y2VkYzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5Y2VkYzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjljZWRjODYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjljZWRjODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL2l0ZW1MaWtlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtTGlrZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5Y2VkYzg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1MaWtlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWNlZGM4NiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MTFhZjQ4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjExYWY0ODYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTFhZjQ4NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MTFhZjQ4NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExYWY0ODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1YmIxOTRiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxMZWFybmluZyBwcm9qZWN0c1xcXFxWdWVOZXdQcm9qXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1YmIxOTRiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1YmIxOTRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1YmIxOTRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1YmIxOTRiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1YmIxOTRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9uYXZCb3R0b20udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZCb3R0b20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2Qm90dG9tLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdkJvdHRvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViYjE5NGImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29mZmVyUXJNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI0YWY5ZmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjRhZjlmYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjRhZjlmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjRhZjlmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjRhZjlmYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjRhZjlmYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vb2ZmZXJRck1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2ZmZXJRck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZlclFyTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNGFmOWZhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaWdudXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlOWQ4OTRiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpZ251cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpZ251cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2lnbnVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlOWQ4OTRiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwZTlkODk0YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGU5ZDg5NGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGU5ZDg5NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGU5ZDg5NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NpZ251cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU5ZDg5NGImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGU5ZDg5NGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY3VzdG9tL3NpZ251cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbnVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZ251cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZ251cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTlkODk0YiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWdudXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGU5ZDg5NGImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbnVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTlkODk0YiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhLWdsYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbXVzaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbG06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOFxcXCI7XFxyXFxufVxcclxcbi5mYS10aC1sYXJnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGgtbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVtb3ZlOmJlZm9yZSxcXHJcXG4uZmEtY2xvc2U6YmVmb3JlLFxcclxcbi5mYS10aW1lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaC1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcG93ZXItb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbmFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VhcjpiZWZvcmUsXFxyXFxuLmZhLWNvZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNFxcXCI7XFxyXFxufVxcclxcbi5mYS1ob21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kb3dubG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluYm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmUsXFxyXFxuLmZhLXJlcGVhdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZnJlc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhZHBob25lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNlxcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXFyY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhcmNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQVxcXCI7XFxyXFxufVxcclxcbi5mYS10YWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQlxcXCI7XFxyXFxufVxcclxcbi5mYS10YWdzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9vazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2ttYXJrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHJpbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYW1lcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb250OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9sZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWl0YWxpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRleHQtaGVpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGV4dC13aWR0aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1jZW50ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVkZW50OmJlZm9yZSxcXHJcXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZGVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpZGVvLWNhbWVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob3RvOmJlZm9yZSxcXHJcXG4uZmEtaW1hZ2U6YmVmb3JlLFxcclxcbi5mYS1waWN0dXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wZW5jaWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtbWFya2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRqdXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGludDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVkaXQ6YmVmb3JlLFxcclxcbi5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWplY3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OFxcXCI7XFxyXFxufVxcclxcbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmZvLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSxcXHJcXG4uZmEtc2hhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHBhbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21wcmVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2N1xcXCI7XFxyXFxufVxcclxcbi5mYS1taW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2lmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlYWY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2FybmluZzpiZWZvcmUsXFxyXFxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxhbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDczXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJhbmRvbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWduZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmV0d2VldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItb3BlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXItY2hhcnQtbzpiZWZvcmUsXFxyXFxuLmZhLWJhci1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FtZXJhLXJldHJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODNcXFwiO1xcclxcbn1cXHJcXG4uZmEta2V5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VhcnM6YmVmb3JlLFxcclxcbi5mYS1jb2dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NlxcXCI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mYS10aHVtYnMtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OVxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbi1vdXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYi10YWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ24taW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MFxcXCI7XFxyXFxufVxcclxcbi5mYS10cm9waHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXBsb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVtb24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NlxcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rbWFyay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdHRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLWY6YmVmb3JlLFxcclxcbi5mYS1mYWNlYm9vazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubG9jazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWRpdC1jYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmVlZDpiZWZvcmUsXFxyXFxuLmZhLXJzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhkZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVsbGhvcm46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMVxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBM1xcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdsb2JlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtd3JlbmNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQURcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFza3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWx0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMFxcXCI7XFxyXFxufVxcclxcbi5mYS1icmllZmNhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ3JvdXA6YmVmb3JlLFxcclxcbi5mYS11c2VyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoYWluOmJlZm9yZSxcXHJcXG4uZmEtbGluazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhc2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jdXQ6YmVmb3JlLFxcclxcbi5mYS1zY2lzc29yczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvcHk6YmVmb3JlLFxcclxcbi5mYS1maWxlcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2F2ZTpiZWZvcmUsXFxyXFxuLmZhLWZsb3BweS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmF2aWNvbjpiZWZvcmUsXFxyXFxuLmZhLXJlb3JkZXI6YmVmb3JlLFxcclxcbi5mYS1iYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC11bDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5kZXJsaW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWdpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRydWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9uZXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2x1bW5zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5zb3J0ZWQ6YmVmb3JlLFxcclxcbi5mYS1zb3J0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1kb3duOmJlZm9yZSxcXHJcXG4uZmEtc29ydC1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC11cDpiZWZvcmUsXFxyXFxuLmZhLXNvcnQtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMFxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5rZWRpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSxcXHJcXG4uZmEtdW5kbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlZ2FsOmJlZm9yZSxcXHJcXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFM1xcXCI7XFxyXFxufVxcclxcbi5mYS1kYXNoYm9hcmQ6YmVmb3JlLFxcclxcbi5mYS10YWNob21ldGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudHMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYXNoOmJlZm9yZSxcXHJcXG4uZmEtYm9sdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpdGVtYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOFxcXCI7XFxyXFxufVxcclxcbi5mYS11bWJyZWxsYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhc3RlOmJlZm9yZSxcXHJcXG4uZmEtY2xpcGJvYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlnaHRidWxiLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQlxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNoYW5nZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1tZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXRob3Njb3BlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VpdGNhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2ZmZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jdXRsZXJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS10ZXh0LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNlxcXCI7XFxyXFxufVxcclxcbi5mYS1idWlsZGluZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG9zcGl0YWwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lZGtpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWgtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVza3RvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhcHRvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhYmxldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsXFxyXFxuLmZhLW1vYmlsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVvdGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtcmVwbHk6YmVmb3JlLFxcclxcbi5mYS1yZXBseTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1Yi1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExM1xcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vcGVuLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zbWlsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZnJvd24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1laC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2FtZXBhZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWtleWJvYXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRFxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlcm1pbmFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSxcXHJcXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcXHJcXG4uZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLFxcclxcbi5mYS1zdGFyLWhhbGYtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGUtZm9yazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubGluazpiZWZvcmUsXFxyXFxuLmZhLWNoYWluLWJyb2tlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1ZXN0aW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5mbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VwZXJzY3JpcHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWJzY3JpcHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1lcmFzZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRVxcXCI7XFxyXFxufVxcclxcbi5mYS1taWNyb3Bob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaWVsZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1heGNkbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWh0bWw1OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3NzMzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuY2hvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubG9jay1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1idWxsc2V5ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVsbGlwc2lzLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnNzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXktY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGlja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1sZXZlbC11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxldmVsLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21wYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLWRvd246YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLXVwOmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MVxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtcmlnaHQ6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV1cm86YmVmb3JlLFxcclxcbi5mYS1ldXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1nYnA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1kb2xsYXI6YmVmb3JlLFxcclxcbi5mYS11c2Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1ydXBlZTpiZWZvcmUsXFxyXFxuLmZhLWlucjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNueTpiZWZvcmUsXFxyXFxuLmZhLXJtYjpiZWZvcmUsXFxyXFxuLmZhLXllbjpiZWZvcmUsXFxyXFxuLmZhLWpweTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJ1YmxlOmJlZm9yZSxcXHJcXG4uZmEtcm91YmxlOmJlZm9yZSxcXHJcXG4uZmEtcnViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtd29uOmJlZm9yZSxcXHJcXG4uZmEta3J3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0Y29pbjpiZWZvcmUsXFxyXFxuLmZhLWJ0YzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXRleHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MVxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2M1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NFxcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXhpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OFxcXCI7XFxyXFxufVxcclxcbi5mYS14aW5nLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmUtcGxheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsaWNrcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGJ1Y2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MlxcXCI7XFxyXFxufVxcclxcbi5mYS10dW1ibHI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3M1xcXCI7XFxyXFxufVxcclxcbi5mYS10dW1ibHItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcHBsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmRyb2lkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGludXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1kcmliYmJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNreXBlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm91cnNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyZWxsbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZlbWFsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1naXR0aXA6YmVmb3JlLFxcclxcbi5mYS1ncmF0aXBheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1bi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9vbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJjaGl2ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1ZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2VpYm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZW5yZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYWdlbGluZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1sZWZ0OmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvdC1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdoZWVsY2hhaXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5M1xcXCI7XFxyXFxufVxcclxcbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NFxcXCI7XFxyXFxufVxcclxcbi5mYS10dXJraXNoLWxpcmE6YmVmb3JlLFxcclxcbi5mYS10cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsYWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd29yZHByZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlbmlkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5zdGl0dXRpb246YmVmb3JlLFxcclxcbi5mYS1iYW5rOmJlZm9yZSxcXHJcXG4uZmEtdW5pdmVyc2l0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlDXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vcnRhci1ib2FyZDpiZWZvcmUsXFxyXFxuLmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOURcXFwiO1xcclxcbn1cXHJcXG4uZmEteWFob286YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RVxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3R1bWJsZXVwb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNFxcXCI7XFxyXFxufVxcclxcbi5mYS1kZWxpY2lvdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNVxcXCI7XFxyXFxufVxcclxcbi5mYS1kaWdnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllZC1waXBlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJ1cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtam9vbWxhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQlxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1idWlsZGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoaWxkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Bvb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jdWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3ViZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCM1xcXCI7XFxyXFxufVxcclxcbi5mYS1iZWhhbmNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hdXRvbW9iaWxlOmJlZm9yZSxcXHJcXG4uZmEtY2FyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FiOmJlZm9yZSxcXHJcXG4uZmEtdGF4aTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zcG90aWZ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGV2aWFudGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRVxcXCI7XFxyXFxufVxcclxcbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcGRmLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXdvcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtZXhjZWwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1waG90by1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWltYWdlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXppcC1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1hcmNoaXZlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXNvdW5kLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWF1ZGlvLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDN1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLW1vdmllLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLXZpZGVvLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLWNvZGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlcGVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtanNmaWRkbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1saWZlLWJvdXk6YmVmb3JlLFxcclxcbi5mYS1saWZlLWJ1b3k6YmVmb3JlLFxcclxcbi5mYS1saWZlLXNhdmVyOmJlZm9yZSxcXHJcXG4uZmEtc3VwcG9ydDpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmE6YmVmb3JlLFxcclxcbi5mYS1yZWJlbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlOmJlZm9yZSxcXHJcXG4uZmEtZW1waXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLFxcclxcbi5mYS15Yy1zcXVhcmU6YmVmb3JlLFxcclxcbi5mYS1oYWNrZXItbmV3czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENVxcXCI7XFxyXFxufVxcclxcbi5mYS1xcTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdlY2hhdDpiZWZvcmUsXFxyXFxuLmZhLXdlaXhpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbmQ6YmVmb3JlLFxcclxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbmQtbzpiZWZvcmUsXFxyXFxuLmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOVxcXCI7XFxyXFxufVxcclxcbi5mYS1oaXN0b3J5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLXRoaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQlxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFkZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wYXJhZ3JhcGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERFxcXCI7XFxyXFxufVxcclxcbi5mYS1zbGlkZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvbWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcXHJcXG4uZmEtZnV0Ym9sLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFM1xcXCI7XFxyXFxufVxcclxcbi5mYS10dHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNFxcXCI7XFxyXFxufVxcclxcbi5mYS1iaW5vY3VsYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1ZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsaWRlc2hhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFN1xcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0Y2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOFxcXCI7XFxyXFxufVxcclxcbi5mYS15ZWxwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmV3c3BhcGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQVxcXCI7XFxyXFxufVxcclxcbi5mYS13aWZpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsY3VsYXRvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBheXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS13YWxsZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy12aXNhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWRpc2NvdmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtYW1leDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXBheXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXN0cmlwZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLXNsYXNoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGN1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvcHlyaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllZHJvcHBlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhaW50LWJydXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmlydGhkYXktY2FrZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFyZWEtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7XFxyXFxufVxcclxcbi5mYS1waWUtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5lLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFzdGZtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaWN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW94aG9zdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2VsbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hla2VsOmJlZm9yZSxcXHJcXG4uZmEtc2hlcWVsOmJlZm9yZSxcXHJcXG4uZmEtaWxzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVhbnBhdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1idXlzZWxsYWRzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29ubmVjdGRldmVsb3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1kYXNoY3ViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcnVtYmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVhbnB1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbGxzeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaXJ0c2luYnVsazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpbXBseWJ1aWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJ0LXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kaWFtb25kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0cmVldC12aWV3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVyY3VyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWludGVyc2V4OmJlZm9yZSxcXHJcXG4uZmEtdHJhbnNnZW5kZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7XFxyXFxufVxcclxcbi5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNVxcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51cy1kb3VibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLWRvdWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzLW1hcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmV1dGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VuZGVybGVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLW9mZmljaWFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0LXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7XFxyXFxufVxcclxcbi5mYS13aGF0c2FwcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlcnZlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItdGltZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3RlbDpiZWZvcmUsXFxyXFxuLmZhLWJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpYWNvaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzN1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1YndheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lZGl1bTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXljOmJlZm9yZSxcXHJcXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZW5jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS00OmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0zOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMjpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMTpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMDpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NFxcXCI7XFxyXFxufVxcclxcbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1vYmplY3QtZ3JvdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWpjYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsXFxyXFxuLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy0yOmJlZm9yZSxcXHJcXG4uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXBhcGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NlxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXNjaXNzb3JzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLWxpemFyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1zcG9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1wb2ludGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXBlYWNlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1QlxcXCI7XFxyXFxufVxcclxcbi5mYS10cmFkZW1hcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZWdpc3RlcmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2ctY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJpcGFkdmlzb3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZXQtcG9ja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2lraXBlZGlhLXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7XFxyXFxufVxcclxcbi5mYS1zYWZhcmk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaHJvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlZm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlbGV2aXNpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jb250YW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RFxcXCI7XFxyXFxufVxcclxcbi5mYS01MDBweDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFtYXpvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci10aW1lcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZHVzdHJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLXBpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRpbmctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXp6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmltZW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb250aWNvbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lZGdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kaWVwaWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1tb2R4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWl4Y2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zY3JpYmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWJhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ibHVldG9vdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5M1xcXCI7XFxyXFxufVxcclxcbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlcmNlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NVxcXCI7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uaW9uLWFsZXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFsZXJ0LWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWxhcm0tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFwcHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1iYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1iaWN5Y2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJ1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzczXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udHJhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kZXNrdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9uZS1hbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWV4aXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZm9sZGVyLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tZW51OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbW9yZS12ZXJ0aWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtbm9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW9wdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXByaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVzdGF1cmFudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNlbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2hhcmUtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3luYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdHJhaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhbGs6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YXJuaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13aWZpOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFwZXJ0dXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFyY2hpdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLWRvd24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbW92ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXNpemU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmV0dXJuLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXNocmluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1zd2FwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFzdGVyaXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhY2tzcGFjZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1jaGFyZ2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktZnVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmVha2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJlZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmx1ZXRvb3RoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvbmZpcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYm9va21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYm93dGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1idWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZS1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29mZmVlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29tcG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjsgfVxcclxcblxcclxcbi5pb24tY29udHJhc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjsgfVxcclxcblxcclxcbi5pb24tY3JvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jdWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRpc2M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjsgfVxcclxcblxcclxcbi5pb24tZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kcmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVhcnRoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVhc2VsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWdnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVqZWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVtYWlsLXVucmVhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVybGVubWV5ZXItZmxhc2stYnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tZXllLWRpc2FibGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZlbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlsbS1tYXJrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlyZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFtZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFzaC1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yay1yZXBvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdlYXItYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1nZWFyLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ3JpZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYW1tZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFwcHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFkcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhcnQtYnJva2VuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscC1idW95OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHAtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWljZWNyZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWltYWdlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbmZvcm1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbmZvcm1hdGlvbi1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvbmljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGFybTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxhcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxidW1zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbmFseXRpY3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFuYWx5dGljcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFyY29kZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNlYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFza2V0YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iZWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9sdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9sdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2ttYXJrczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyb3dzZXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxjdWxhdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRidWJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcmstZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaXJjbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci1maWx0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci13YW5kLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb3B5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb3B5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWV5ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZXllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFzay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nZWFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdsYXNzZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ3JpZC12aWV3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHAtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZpbml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDREXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1rZXlwYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpZ2h0YnVsYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2F0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVkaWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGtpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYy1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vbml0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb3JlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW51dHJpdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbnV0cml0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDczXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZW9wbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGhvdG9zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waG90b3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbGF5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaW50ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHVsc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmFpbnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlY29yZGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVjb3JkaW5nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXdpbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEExXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2h1ZmZsZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zbm93eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0b3B3YXRjaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVsZXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVubmlzYmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10cmFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5kbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5kby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdmlkZW9jYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZpZGVvY2FtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13b3JsZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd29ybGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcG9kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWpldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1rZXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk2XFxcIjsgfVxcclxcblxcclxcbi5pb24ta25pZmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxlYWY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbGV2ZWxzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxpZ2h0YnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2ctaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9nLW91dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hZ25ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYWxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1lcmdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9kZWwtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW91c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbXVzaWMtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmljb24tcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmV0d29yazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uby1zbW9raW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW51Y2xlYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tb3V0bGV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhaW50YnJ1c2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFpbnRidWNrZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFwZXItYWlycGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFwZXJjbGlwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpZS1ncmFwaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGlucG9pbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGl6emE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxhbmV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxheXN0YXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1cy1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb2RpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpY2V0YWdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXFyLXNjYW5uZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcXVvdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcmFkaW8td2F2ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVjb3JkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVwbHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVwbHktYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJpYmJvbi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJpYmJvbi1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zY2lzc29yczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2hhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNraXAtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5kcm9pZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmd1bGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFwcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1iaXRjb2luOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYnVmZmVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNocm9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNvZGVwZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY3NzMzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY3NzMy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcmliYmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJvcGJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ldXJvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZhY2Vib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ2l0aHViLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1odG1sNTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbWFya2Rvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW5vZGVqczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yZWRkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1za3lwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2t5cGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1bWJscjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1eDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC11c2Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC12aW1lbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdoYXRzYXBwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWFob286YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlhaG9vLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXllbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlvdXR1YmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb3VwLWNhbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb3VwLWNhbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcGVlZG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcG9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0YXRzLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RlYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aGVybW9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aHVtYnNkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRodW1ic3VwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRvZ2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10b2dnbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYXNoLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhc2gtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cm9waHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHNoaXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRzaGlydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVtYnJlbGxhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVuaXZlcnNpdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVzYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12aWRlb2NhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1tZWRpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLW11dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjsgfVxcclxcblxcclxcbi5pb24td2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13YXRlcmRyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjsgfVxcclxcblxcclxcbi5pb24td2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjsgfVxcclxcblxcclxcbi5pb24td29tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjsgfVxcclxcblxcclxcbi5pb24td3JlbmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXhib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBDXFxcIjsgfVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvaW9uaWNvbnMuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLm1hcENzcyA9IGZ1bmN0aW9uIChkYXRhLCBkZWJ1Zykge1xyXG4gICAgdmFyIG1hcCA9IHt9O1xyXG4gICAgdmFyIHNldHMgPSBkYXRhLnNwbGl0KCd9Jyk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHNldHNfMSA9IHNldHM7IF9pIDwgc2V0c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzZXQgPSBzZXRzXzFbX2ldO1xyXG4gICAgICAgIHZhciBwYWlyID0gc2V0LnNwbGl0KC86YmVmb3JlXFxzKnsvKTtcclxuICAgICAgICB2YXIga2V5R3JvdXBzID0gcGFpclswXTtcclxuICAgICAgICB2YXIga2V5cyA9IGtleUdyb3Vwcy5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGlmIChwYWlyWzFdKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV4cG9ydHMuY2xlYW5WYWx1ZShwYWlyWzFdKTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBrZXlzXzEgPSBrZXlzOyBfYSA8IGtleXNfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzFbX2FdO1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnRyaW0oKS5zbGljZSgxKS5zcGxpdCgnOmJlZm9yZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgbWFwW2tleV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZygyKSwgMTYpKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSArIFwiOiBcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmV4cG9ydHMuY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgIHZhciBtYXRjaGVzID0gdmFsLm1hdGNoKC9jb250ZW50OlxccypcIlxcXFxmKFteXCJdKylcIi9pKTtcclxuICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXFxcXHVmXCIgKyBtYXRjaGVzWzFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZvaWQgMDtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGliLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmaWxlX3N5c3RlbV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7XHJcbnZhciBsaWIgPSByZXF1aXJlKFwiLi9saWJcIik7XHJcbnZhciBUTlNGb250SWNvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUTlNGb250SWNvbigpIHtcclxuICAgIH1cclxuICAgIFROU0ZvbnRJY29uLmxvYWRDc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgdmFyIGN1cnJlbnROYW1lO1xyXG4gICAgICAgIHZhciBmb250SWNvbkNvbGxlY3Rpb25zID0gT2JqZWN0LmtleXMoVE5TRm9udEljb24ucGF0aHMpO1xyXG4gICAgICAgIGlmIChUTlNGb250SWNvbi5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbGxlY3Rpb25zIHRvIGxvYWQ6IFwiICsgZm9udEljb25Db2xsZWN0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbml0Q29sbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY3VycmVudE5hbWUgPSBmb250SWNvbkNvbGxlY3Rpb25zW2NudF07XHJcbiAgICAgICAgICAgIFROU0ZvbnRJY29uLmNzc1tjdXJyZW50TmFtZV0gPSB7fTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBsb2FkRmlsZSA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChUTlNGb250SWNvbi5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBjb2xsZWN0aW9uICdcIiArIGN1cnJlbnROYW1lICsgXCInIGZyb20gZmlsZTogXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3NzRmlsZSA9IGZpbGVfc3lzdGVtXzEua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY3NzRmlsZS5yZWFkVGV4dCgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0gbGliLm1hcENzcyhkYXRhLCBUTlNGb250SWNvbi5kZWJ1Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgVE5TRm9udEljb24uY3NzW2N1cnJlbnROYW1lXSA9IG1hcDtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbG9hZEZpbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIGluaXRDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY250IDwgZm9udEljb25Db2xsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkRmlsZShUTlNGb250SWNvbi5wYXRoc1tjdXJyZW50TmFtZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRGaWxlcygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbG9hZEZpbGVzKCk7XHJcbiAgICB9O1xyXG4gICAgVE5TRm9udEljb24uY3NzID0ge307XHJcbiAgICBUTlNGb250SWNvbi5wYXRocyA9IHt9O1xyXG4gICAgVE5TRm9udEljb24uZGVidWcgPSBmYWxzZTtcclxuICAgIHJldHVybiBUTlNGb250SWNvbjtcclxufSgpKTtcclxuZXhwb3J0cy5UTlNGb250SWNvbiA9IFROU0ZvbnRJY29uO1xyXG5mdW5jdGlvbiBmb250aWNvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy0nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSB2YWx1ZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4gVE5TRm9udEljb24uY3NzW3ByZWZpeF1bdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZvbnRpY29uIGNsYXNzbmFtZSBkaWQgbm90IGNvbnRhaW4gYSBwcmVmaXguIGkuZS4sIFxcJ2ZhLWJsdWV0b290aFxcJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5leHBvcnRzLmZvbnRpY29uID0gZm9udGljb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdGl2ZXNjcmlwdC1mb250aWNvbi5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9