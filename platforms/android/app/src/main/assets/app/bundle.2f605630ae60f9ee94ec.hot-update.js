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
      console.log('search');
    },

    bell() {
      console.log('bell');
    },

    offer() {
      console.log('QR');
      this.$showModal(_custom_offerQrModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
    },

    goToLogin() {
      this.$navigateTo(_custom_login__WEBPACK_IMPORTED_MODULE_6__["default"]);
      console.log('Login'); // this.$showModal(QrModal)
      //   router.push({ name: 'LoginDetails' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLDhEQUZBO0FBR0E7QUFIQSxHQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FOQTs7QUFZQSxhQUNBO0FBQ0EsR0FkQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBLE9BREE7QUFJQSxpQkFKQTtBQUtBLDRCQUxBO0FBTUEsb0JBTkE7QUFPQSx3QkFQQTtBQVFBO0FBQ0EsZ0RBREE7QUFFQSxtREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMEJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxxQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsb0JBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQW5CQSxTQXFCQTtBQUNBLCtDQURBO0FBRUEsb0RBRkE7QUFHQSxpQkFDQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQSxTQUZBLEVBR0E7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUEsU0FKQSxFQUtBO0FBQUE7QUFBQSxTQUxBLEVBTUE7QUFBQTtBQUFBLFNBTkEsQ0FIQTtBQVdBLDJCQVhBO0FBWUEsOEJBWkE7QUFhQSx1QkFiQTtBQWNBLGtCQWRBO0FBZUEsb0JBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLG1CQWpCQTtBQWtCQSxxQkFsQkE7QUFtQkE7QUFuQkEsT0FyQkEsRUEwQ0E7QUFDQSx5Q0FEQTtBQUVBLGlEQUZBO0FBR0EsaUJBQ0E7QUFBQTtBQUFBLFNBREEsRUFFQTtBQUFBO0FBQUEsU0FGQSxFQUdBO0FBQUE7QUFBQSxTQUhBLEVBSUE7QUFBQTtBQUFBLFNBSkEsQ0FIQTtBQVNBLHdCQVRBO0FBVUEsOEJBVkE7QUFXQSx1QkFYQTtBQVlBLGtCQVpBO0FBYUEsb0JBYkE7QUFjQSx3QkFkQTtBQWVBLG9CQWZBO0FBZ0JBLHFCQWhCQTtBQWlCQTtBQWpCQSxPQTFDQSxDQVJBO0FBc0VBLGlCQUNBO0FBQ0EsbURBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsT0FEQSxFQU1BO0FBQ0Esb0RBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEEsT0FOQSxFQVdBO0FBQ0EsaURBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsT0FYQSxFQWdCQTtBQUNBLGlEQURBO0FBRUEsd0JBRkE7QUFHQTtBQUhBLE9BaEJBO0FBdEVBO0FBOEZBLEdBOUdBOztBQStHQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQ0E7QUFDQSxLQU5BOztBQU9BO0FBQ0E7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBLDJCQUZBLENBR0E7QUFDQTtBQUVBLEtBakJBOztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQURBLFNBREE7QUFJQSxzQkFKQTtBQUtBO0FBQ0EsMEJBREE7QUFFQSx1QkFGQTtBQUdBO0FBSEE7QUFMQTtBQVdBLEtBOUJBOztBQWdDQTtBQUNBO0FBQ0EsS0FsQ0E7O0FBbUNBO0FBQ0E7QUFDQSxLQXJDQTs7QUFzQ0E7QUFDQTtBQUNBLEtBeENBOztBQXlDQTtBQUNBO0FBQ0EsS0EzQ0E7O0FBNENBO0FBQ0E7QUFDQSxLQTlDQTs7QUErQ0E7QUFDQTtBQUNBLEtBakRBOztBQWtEQTtBQUNBO0FBQ0E7O0FBcERBO0FBL0dBLEciLCJmaWxlIjoiYnVuZGxlLjJmNjA1NjMwYWU2MGY5ZWU5NGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XHJcblx0XHQ8IS0tIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIC0tPlxyXG5cclxuXHRcdDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLGF1dG8sKixhdXRvXCIgY29sdW1ucz1cImF1dG9cIj5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHJvdz1cIjBcIiByZWY9XCJuYXZTdGF0dXNCYXJcIiBjbGFzcz1cIm5hdlN0YXR1c0JhclwiIGJhY2tncm91bmRDb2xvcj1cIiNiZDIxMjJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhlaWdodD1cIjQwXCJcclxuXHRcdFx0IHdpZHRoPVwiMTAwJVwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIiosYXV0byxhdXRvLGF1dG9cIj5cclxuXHRcdFx0XHQ8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiB0ZXh0PVwiSG9tZVwiIGNsYXNzPVwic3RhdHVzLXRpdGxlXCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDxJbWFnZSBjb2w9XCIwXCIgcm93PVwiMFwiIEB0YXA9XCJzZWFyY2hcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nXCIgLz5cclxuXHRcdFx0XHRcdDxJbWFnZSBjb2w9XCIxXCIgcm93PVwiMFwiIEB0YXA9XCJiZWxsXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvYmVsbC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjJcIiByb3c9XCIwXCIgQHRhcD1cIm9mZmVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvb2ZmZXIucG5nXCIgLz5cclxuXHRcdFx0XHRcdDwhLS0gPEltYWdlICBAdGFwPVwibG9naW5cIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiBjb2w9XCIzXCJcclxuXHRcdFx0XHRcdFx0XHRyb3c9XCIwXCIgY2xhc3M9XCJzdGF0dXMtcHJvZmlsZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9tZS5qcGdcIiAvPiAtLT5cclxuXHRcdFx0XHRcdFx0ICAgICAgPCEtLSA8QnV0dG9uIHRleHQ9J0xvZycgQHRhcD1cImxvZ2luKCdsb2dpbicpXCIgcm93PVwiMFwiIGNvbD1cIjNcIiAvPiAtLT5cclxuXHRcdFx0XHRcdFx0XHQgPEJ1dHRvbiBAdGFwPVwiZ29Ub0xvZ2luXCIgdGV4dD1cIkdPIFRPIFBBR0UgMlwiIGNvbD1cIjBcIiByb3c9XCIxXCIgLz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgIHJvdz1cIjFcIiByZWY9XCJuYXZUYWJcIiBjbGFzcz1cIm5hdlRhYlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNTBcIlxyXG5cdFx0XHRcdFx0d2lkdGg9XCIxMDAlXCIgIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvXCI+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwicG9wdWxhclwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjBcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMzJVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXc9PTBcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09MD8nfi9hc3NldHMvaW1hZ2VzL3BvcHVsYXIucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJQT1BVTEFSXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93Q2F0ZWdvcnlcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIxXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzNCVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09MT8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiQ0FURUdPUllcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwic2hvd1Byb21vc1wiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjJcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMzJVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPyd+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJQUk9NT1NcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGl0ZW0gOml0ZW09XCJpdGVtXCIgQGNsaWNrZWQ9XCJzaG93SXRlbShpdGVtKVwiIC8+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9MaXN0Vmlldz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cdFx0XHJcblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxDYXRlZ29yeSA6aXRlbT1cIml0ZW1cIj4gPC9DYXRlZ29yeT5cclxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PG5hdkJvdHRvbSByb3c9XCIzXCIgLz5cclxuXHJcblx0XHQ8L0dyaWRMYXlvdXQ+XHJcbjwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHQvLyBpbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xyXG5cdGltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xyXG5cdGltcG9ydCBuYXZCb3R0b20gZnJvbSBcIi4vY3VzdG9tL25hdkJvdHRvbVwiO1xyXG5cdGltcG9ydCBJdGVtIGZyb20gXCIuL2N1c3RvbS9pdGVtXCI7XHJcblx0aW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2N1c3RvbS9jYXRlZ29yeVwiO1xyXG5cdGltcG9ydCBRck1vZGFsIGZyb20gXCIuL2N1c3RvbS9vZmZlclFyTW9kYWxcIjtcclxuXHRpbXBvcnQgSXRlbURldGFpbHMgZnJvbSBcIi4vSXRlbURldGFpbHNcIjtcclxuXHRpbXBvcnQgTG9naW4gZnJvbSAnLi9jdXN0b20vbG9naW4nO1xyXG5cdGNvbnN0IGdlc3R1cmVzID0gcmVxdWlyZShcInVpL2dlc3R1cmVzXCIpOyBcclxuXHRjb25zdCBhcHAgPSByZXF1aXJlKFwiYXBwbGljYXRpb25cIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0bmF2Qm90dG9tLFxyXG5cdFx0SXRlbSxcclxuXHRcdENhdGVnb3J5LFxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGl0ZW1zQ2F0ZWdvcnkoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2F0ZWdvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0bW91bnRlZCAoKSB7XHJcblx0XHQvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvdXRlczoge1xyXG4gICAgICAgICAgICAgICAgbG9naW46IExvZ2luXHJcbiAgICAgICAgICAgIH0sXHJcblx0XHRcdGxhc3REZWxZOiAwLFxyXG5cdFx0XHRoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxyXG5cdFx0XHRzZWxlY3RlZFRhYjogMCxcclxuXHRcdFx0c2VsZWN0ZWRUYWJ2aWV3OiAwLFxyXG5cdFx0XHRpdGVtczogW3tcclxuXHRcdFx0XHRuYW1lOiBcIk1hbmlsYSBVbHRpbWF0ZSBUb21ic3RvbmUgQnVyZ2VyXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIxLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMi5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI0LmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNS5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjYuanBnXCJ9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJ1cmdlclwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiMyRDlDREJcIixcclxuXHRcdFx0XHRwcmljZTogXCIzMDAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogOTg3LFxyXG5cdFx0XHRcdGlzTGlrZTogZmFsc2UsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogMTMsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuNVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNC5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTUuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wifVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiUGFuY2FrZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiNlNGNlMGRcIixcclxuXHRcdFx0XHRwcmljZTogXCIyMzAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogODkxLFxyXG5cdFx0XHRcdGlzTGlrZTogdHJ1ZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiA3LFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjBcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6IFwiQmlub25kbyBCbGFjayBGb3Jlc3QgQ2FrZVwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTQuanBnXCJ9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJDYWtlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjMwMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA3MzAsXHJcblx0XHRcdFx0aXNMaWtlOiB0cnVlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDExLFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjBcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Y2F0ZWdvcnk6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuXHRcdFx0XHRjb3VudDogXCIxM1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiNVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJDQUtFXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiOVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCRUVSXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiN1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRzZWFyY2goKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3NlYXJjaCcpXHJcblx0XHR9LFxyXG5cdFx0YmVsbCgpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYmVsbCcpXHJcblx0XHR9LFxyXG5cdFx0b2ZmZXIoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdRUicpXHJcblx0XHRcdHRoaXMuJHNob3dNb2RhbChRck1vZGFsKVxyXG5cdFx0fSxcclxuXHRcdGdvVG9Mb2dpbigpIHtcclxuXHRcdFx0ICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbicpXHJcblx0XHRcdC8vIHRoaXMuJHNob3dNb2RhbChRck1vZGFsKVxyXG5cdFx0XHQvLyAgIHJvdXRlci5wdXNoKHsgbmFtZTogJ0xvZ2luRGV0YWlscycgfSlcclxuXHRcdCBcclxuXHRcdH0sXHJcblx0XHRzaG93SXRlbShwYXlsb2FkKSB7XHJcblx0XHRcdHRoaXMuJG5hdmlnYXRlVG8oSXRlbURldGFpbHMse1xyXG5cdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHRpdGVtOiBwYXlsb2FkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhbmltYXRlZDogdHJ1ZSxcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRuYW1lOiBcInNsaWRlVG9wXCIsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMzgwLFxyXG5cdFx0XHRcdFx0Y3VydmU6IFwiZWFzZUluXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRwb3B1bGFyKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XHJcblx0XHR9LFxyXG5cdFx0c2hvd0NhdGVnb3J5KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XHJcblx0XHR9LFxyXG5cdFx0c2hvd1Byb21vcygpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAyO1xyXG5cdFx0fSxcclxuXHRcdGhvbWUoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xyXG5cdFx0fSxcclxuXHRcdGNhcnQoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG5cdFx0fSxcclxuXHRcdGhpc3RvcnkoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xyXG5cdFx0fSxcclxuXHRcdGFib3V0KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMztcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udGFidmlldy5hY3RpdmUge1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDM7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGhlaWdodDogNTA7XHJcbn1cclxuLnRhYnZpZXdUZXh0IHtcclxuXHRtYXJnaW4tdG9wOiAxNTtcclxuXHRtYXJnaW4tYm90dG9tOiA1O1xyXG5cdGZvbnQtc2l6ZTogMTM7XHJcblx0Y29sb3I6ICNkOGQyZDI7XHJcblx0aG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogNTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2VGFiIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTIyO1xyXG59XHJcbi5uYXZUYWJ2aWV3IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi5zdGF0dXMtaW1nIHtcclxuXHRtYXJnaW4tdG9wOiA0O1xyXG5cdG1hcmdpbi1yaWdodDogMjA7XHJcblx0d2lkdGg6IDMwO1xyXG5cdGhlaWdodDogMzA7XHJcbn1cclxuLnN0YXR1cy1wcm9maWxlIHtcclxuXHRib3JkZXItd2lkdGg6IDE7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMWViZWI7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbi10b3A6IDQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNTtcclxuXHR3aWR0aDogMzA7XHJcblx0aGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXRpdGxlIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxODtcclxuXHRtYXJnaW4tbGVmdDogMTU7XHJcblx0bWFyZ2luLXRvcDogODtcclxuXHRob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9