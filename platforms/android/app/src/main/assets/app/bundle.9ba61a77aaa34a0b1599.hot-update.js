webpackHotUpdate("bundle",{

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
      console.log('search');
    },

    bell() {
      console.log('bell');
    },

    offer() {
      console.log('QR');
      this.$showModal(_custom_offerQrModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
    },

    login() {
      console.log('Login');
      this.$showModal(_custom_offerQrModal__WEBPACK_IMPORTED_MODULE_4__["default"]); // this.$navigateTo(login)
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0VBREE7QUFFQSw4REFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBTkE7O0FBWUEsYUFDQTtBQUNBLEdBZEE7O0FBZUE7QUFDQTtBQUNBLGlCQURBO0FBRUEsNEJBRkE7QUFHQSxvQkFIQTtBQUlBLHdCQUpBO0FBS0E7QUFDQSxnREFEQTtBQUVBLG1EQUZBO0FBR0EsaUJBQ0E7QUFBQTtBQUFBLFNBREEsRUFFQTtBQUFBO0FBQUEsU0FGQSxFQUdBO0FBQUE7QUFBQSxTQUhBLEVBSUE7QUFBQTtBQUFBLFNBSkEsRUFLQTtBQUFBO0FBQUEsU0FMQSxFQU1BO0FBQUE7QUFBQSxTQU5BLENBSEE7QUFXQSwwQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSxrQkFkQTtBQWVBLHFCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSxvQkFqQkE7QUFrQkEscUJBbEJBO0FBbUJBO0FBbkJBLFNBcUJBO0FBQ0EsK0NBREE7QUFFQSxvREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMkJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxvQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsbUJBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQW5CQSxPQXJCQSxFQTBDQTtBQUNBLHlDQURBO0FBRUEsaURBRkE7QUFHQSxpQkFDQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQSxTQUZBLEVBR0E7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUEsU0FKQSxDQUhBO0FBU0Esd0JBVEE7QUFVQSw4QkFWQTtBQVdBLHVCQVhBO0FBWUEsa0JBWkE7QUFhQSxvQkFiQTtBQWNBLHdCQWRBO0FBZUEsb0JBZkE7QUFnQkEscUJBaEJBO0FBaUJBO0FBakJBLE9BMUNBLENBTEE7QUFtRUEsaUJBQ0E7QUFDQSxtREFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxPQURBLEVBTUE7QUFDQSxvREFEQTtBQUVBLDJCQUZBO0FBR0E7QUFIQSxPQU5BLEVBV0E7QUFDQSxpREFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQSxPQVhBLEVBZ0JBO0FBQ0EsaURBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsT0FoQkE7QUFuRUE7QUEyRkEsR0EzR0E7O0FBNEdBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0Esb0ZBRkEsQ0FHQTtBQUNBLEtBZkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBREEsU0FEQTtBQUlBLHNCQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFIQTtBQUxBO0FBV0EsS0E1QkE7O0FBOEJBO0FBQ0E7QUFDQSxLQWhDQTs7QUFpQ0E7QUFDQTtBQUNBLEtBbkNBOztBQW9DQTtBQUNBO0FBQ0EsS0F0Q0E7O0FBdUNBO0FBQ0E7QUFDQSxLQXpDQTs7QUEwQ0E7QUFDQTtBQUNBLEtBNUNBOztBQTZDQTtBQUNBO0FBQ0EsS0EvQ0E7O0FBZ0RBO0FBQ0E7QUFDQTs7QUFsREE7QUE1R0EsRyIsImZpbGUiOiJidW5kbGUuOWJhNjFhNzdhYWEzNGEwYjE1OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuXHRcdDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcblxyXG5cdFx0PEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgcm93PVwiMFwiIHJlZj1cIm5hdlN0YXR1c0JhclwiIGNsYXNzPVwibmF2U3RhdHVzQmFyXCIgYmFja2dyb3VuZENvbG9yPVwiI2JkMjEyMlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNDBcIlxyXG5cdFx0XHQgd2lkdGg9XCIxMDAlXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKixhdXRvLGF1dG8sYXV0b1wiPlxyXG5cdFx0XHRcdDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHRleHQ9XCJIb21lXCIgY2xhc3M9XCJzdGF0dXMtdGl0bGVcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjBcIiByb3c9XCIwXCIgQHRhcD1cInNlYXJjaFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjFcIiByb3c9XCIwXCIgQHRhcD1cImJlbGxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9iZWxsLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMlwiIHJvdz1cIjBcIiBAdGFwPVwib2ZmZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlICBAdGFwPVwibG9naW5cIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiBjb2w9XCIzXCJcclxuXHRcdFx0XHRcdFx0XHRyb3c9XCIwXCIgY2xhc3M9XCJzdGF0dXMtcHJvZmlsZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9tZS5qcGdcIiAvPlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCAgcm93PVwiMVwiIHJlZj1cIm5hdlRhYlwiIGNsYXNzPVwibmF2VGFiXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBoZWlnaHQ9XCI1MFwiXHJcblx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIiAgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJwb3B1bGFyXCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMFwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzMlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPyd+L2Fzc2V0cy9pbWFnZXMvcG9wdWxhci5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIlBPUFVMQVJcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dDYXRlZ29yeVwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjFcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjM0JVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPyd+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJDQVRFR09SWVwiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93UHJvbW9zXCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMlwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzMlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAyXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIlBST01PU1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAwXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8aXRlbSA6aXRlbT1cIml0ZW1cIiBAY2xpY2tlZD1cInNob3dJdGVtKGl0ZW0pXCIgLz5cclxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHRcdFx0XHQ8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc0NhdGVnb3J5XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PENhdGVnb3J5IDppdGVtPVwiaXRlbVwiPiA8L0NhdGVnb3J5PlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAyXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHRcdFxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8bmF2Qm90dG9tIHJvdz1cIjNcIiAvPlxyXG5cclxuXHRcdDwvR3JpZExheW91dD5cclxuPC9wYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdC8vIGltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XHJcblx0aW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXHJcblx0aW1wb3J0IG5hdkJvdHRvbSBmcm9tIFwiLi9jdXN0b20vbmF2Qm90dG9tXCI7XHJcblx0aW1wb3J0IEl0ZW0gZnJvbSBcIi4vY3VzdG9tL2l0ZW1cIjtcclxuXHRpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY3VzdG9tL2NhdGVnb3J5XCI7XHJcblx0aW1wb3J0IFFyTW9kYWwgZnJvbSBcIi4vY3VzdG9tL29mZmVyUXJNb2RhbFwiO1xyXG5cdGltcG9ydCBJdGVtRGV0YWlscyBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiO1xyXG5cdGltcG9ydCBsb2dpbiBmcm9tICcuL2N1c3RvbS9sb2dpbic7XHJcblx0Y29uc3QgZ2VzdHVyZXMgPSByZXF1aXJlKFwidWkvZ2VzdHVyZXNcIik7IFxyXG5cdGNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRuYXZCb3R0b20sXHJcblx0XHRJdGVtLFxyXG5cdFx0Q2F0ZWdvcnlcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRpdGVtc0NhdGVnb3J5KCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhdGVnb3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdG1vdW50ZWQgKCkge1xyXG5cdFx0Ly8gU3dpc3NBcm15S25pZmUuc2V0QW5kcm9pZFN0YXR1c0JhckNvbG9yKFwiI2I1MTIxM1wiKTtcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYXN0RGVsWTogMCxcclxuXHRcdFx0aGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0ZWRUYWI6IDAsXHJcblx0XHRcdHNlbGVjdGVkVGFidmlldzogMCxcclxuXHRcdFx0aXRlbXM6IFt7XHJcblx0XHRcdFx0bmFtZTogXCJNYW5pbGEgVWx0aW1hdGUgVG9tYnN0b25lIEJ1cmdlclwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIzLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjUuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI2LmpwZ1wifVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCdXJnZXJcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMzAwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDk4NyxcclxuXHRcdFx0XHRpc0xpa2U6IGZhbHNlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDEzLFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjVcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6IFwiUXVlem9uIENob2NvbGF0ZSBNYXJibGUgUGFuY2FrZVwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UyLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMy5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTQuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U1LmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNi5qcGdcIn1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlBhbmNha2VcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMjMwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDg5MSxcclxuXHRcdFx0XHRpc0xpa2U6IHRydWUsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogNyxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC4wXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiBcIkJpbm9uZG8gQmxhY2sgRm9yZXN0IENha2VcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMi5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wifVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQ2FrZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcclxuXHRcdFx0XHRwcmljZTogXCIzMDAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogNzMwLFxyXG5cdFx0XHRcdGlzTGlrZTogdHJ1ZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiAxMSxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC4wXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdGNhdGVnb3J5OiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQlVSR0VSXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiMTNcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiUEFOQ0FLRVwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjVcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQ0FLRVwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjlcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQkVFUlwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjdcIixcclxuXHRcdFx0fSxcclxuXHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0c2VhcmNoKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzZWFyY2gnKVxyXG5cdFx0fSxcclxuXHRcdGJlbGwoKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2JlbGwnKVxyXG5cdFx0fSxcclxuXHRcdG9mZmVyKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUVInKVxyXG5cdFx0XHR0aGlzLiRzaG93TW9kYWwoUXJNb2RhbClcclxuXHRcdH0sXHJcblx0XHRsb2dpbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0xvZ2luJylcclxuXHRcdFx0dGhpcy4kc2hvd01vZGFsKFFyTW9kYWwpXHJcblx0XHRcdC8vIHRoaXMuJG5hdmlnYXRlVG8obG9naW4pXHJcblx0XHR9LFxyXG5cdFx0c2hvd0l0ZW0ocGF5bG9hZCkge1xyXG5cdFx0XHR0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLHtcclxuXHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0aXRlbTogcGF5bG9hZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YW5pbWF0ZWQ6IHRydWUsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJzbGlkZVRvcFwiLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDM4MCxcclxuXHRcdFx0XHRcdGN1cnZlOiBcImVhc2VJblwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cG9wdWxhcigpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG5cdFx0fSxcclxuXHRcdHNob3dDYXRlZ29yeSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG5cdFx0fSxcclxuXHRcdHNob3dQcm9tb3MoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuXHRcdH0sXHJcblx0XHRob21lKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMDtcclxuXHRcdH0sXHJcblx0XHRjYXJ0KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMTtcclxuXHRcdH0sXHJcblx0XHRoaXN0b3J5KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuXHRcdH0sXHJcblx0XHRhYm91dCgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYnZpZXcuYWN0aXZlIHtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAzO1xyXG5cdG1hcmdpbjogMDtcclxuXHRoZWlnaHQ6IDUwO1xyXG59XHJcbi50YWJ2aWV3VGV4dCB7XHJcblx0bWFyZ2luLXRvcDogMTU7XHJcblx0bWFyZ2luLWJvdHRvbTogNTtcclxuXHRmb250LXNpemU6IDEzO1xyXG5cdGNvbG9yOiAjZDhkMmQyO1xyXG5cdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFidmlld1RleHQuYWN0aXZlIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hdlRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2JkMjEyMjtcclxufVxyXG4ubmF2VGFidmlldyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4uc3RhdHVzLWltZyB7XHJcblx0bWFyZ2luLXRvcDogNDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwO1xyXG5cdHdpZHRoOiAzMDtcclxuXHRoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtcHJvZmlsZSB7XHJcblx0Ym9yZGVyLXdpZHRoOiAxO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlYmViO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiA0O1xyXG5cdG1hcmdpbi1yaWdodDogMTU7XHJcblx0d2lkdGg6IDMwO1xyXG5cdGhlaWdodDogMzA7XHJcbn1cclxuLnN0YXR1cy10aXRsZSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1O1xyXG5cdG1hcmdpbi10b3A6IDg7XHJcblx0aG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==