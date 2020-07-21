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
      routes: {
        info: CatInfo,
        pic: CatPic,
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

    login() {
      console.log('Login'); // this.$showModal(QrModal)

      this.$navigateTo(this.routes[s]);
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
                on: {
                  tap: function($event) {
                    return _vm.login("login")
                  }
                }
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQURBO0FBRUEsOERBRkE7QUFHQTtBQUhBLEdBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQU5BOztBQVlBLGFBQ0E7QUFDQSxHQWRBOztBQWVBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBLE9BREE7QUFNQSxpQkFOQTtBQU9BLDRCQVBBO0FBUUEsb0JBUkE7QUFTQSx3QkFUQTtBQVVBO0FBQ0EsZ0RBREE7QUFFQSxtREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMEJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxxQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsb0JBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQW5CQSxTQXFCQTtBQUNBLCtDQURBO0FBRUEsb0RBRkE7QUFHQSxpQkFDQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQSxTQUZBLEVBR0E7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUEsU0FKQSxFQUtBO0FBQUE7QUFBQSxTQUxBLEVBTUE7QUFBQTtBQUFBLFNBTkEsQ0FIQTtBQVdBLDJCQVhBO0FBWUEsOEJB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YUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUyxhQUFhLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1gsMkJBQTJCLFNBQVMsV0FBVyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYTUwZTJiZTU1ZDkyNTZkMjBlMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuXHRcdDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcblxyXG5cdFx0PEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgcm93PVwiMFwiIHJlZj1cIm5hdlN0YXR1c0JhclwiIGNsYXNzPVwibmF2U3RhdHVzQmFyXCIgYmFja2dyb3VuZENvbG9yPVwiI2JkMjEyMlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNDBcIlxyXG5cdFx0XHQgd2lkdGg9XCIxMDAlXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKixhdXRvLGF1dG8sYXV0b1wiPlxyXG5cdFx0XHRcdDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHRleHQ9XCJIb21lXCIgY2xhc3M9XCJzdGF0dXMtdGl0bGVcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjBcIiByb3c9XCIwXCIgQHRhcD1cInNlYXJjaFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjFcIiByb3c9XCIwXCIgQHRhcD1cImJlbGxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9iZWxsLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMlwiIHJvdz1cIjBcIiBAdGFwPVwib2ZmZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlICBAdGFwPVwibG9naW4oJ2xvZ2luJylcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiBjb2w9XCIzXCJcclxuXHRcdFx0XHRcdFx0XHRyb3c9XCIwXCIgY2xhc3M9XCJzdGF0dXMtcHJvZmlsZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9tZS5qcGdcIiAvPlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCAgcm93PVwiMVwiIHJlZj1cIm5hdlRhYlwiIGNsYXNzPVwibmF2VGFiXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBoZWlnaHQ9XCI1MFwiXHJcblx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIiAgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJwb3B1bGFyXCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMFwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzMlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPyd+L2Fzc2V0cy9pbWFnZXMvcG9wdWxhci5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIlBPUFVMQVJcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dDYXRlZ29yeVwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjFcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjM0JVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPyd+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJDQVRFR09SWVwiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93UHJvbW9zXCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMlwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzMlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAyXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTI/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIlBST01PU1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAwXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8aXRlbSA6aXRlbT1cIml0ZW1cIiBAY2xpY2tlZD1cInNob3dJdGVtKGl0ZW0pXCIgLz5cclxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHRcdFx0XHQ8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc0NhdGVnb3J5XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PENhdGVnb3J5IDppdGVtPVwiaXRlbVwiPiA8L0NhdGVnb3J5PlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAyXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHRcdFxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8bmF2Qm90dG9tIHJvdz1cIjNcIiAvPlxyXG5cclxuXHRcdDwvR3JpZExheW91dD5cclxuPC9wYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdC8vIGltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XHJcblx0aW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXHJcblx0aW1wb3J0IG5hdkJvdHRvbSBmcm9tIFwiLi9jdXN0b20vbmF2Qm90dG9tXCI7XHJcblx0aW1wb3J0IEl0ZW0gZnJvbSBcIi4vY3VzdG9tL2l0ZW1cIjtcclxuXHRpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY3VzdG9tL2NhdGVnb3J5XCI7XHJcblx0aW1wb3J0IFFyTW9kYWwgZnJvbSBcIi4vY3VzdG9tL29mZmVyUXJNb2RhbFwiO1xyXG5cdGltcG9ydCBJdGVtRGV0YWlscyBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiO1xyXG5cdGltcG9ydCBMb2dpbiBmcm9tICcuL2N1c3RvbS9sb2dpbic7XHJcblx0Y29uc3QgZ2VzdHVyZXMgPSByZXF1aXJlKFwidWkvZ2VzdHVyZXNcIik7IFxyXG5cdGNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRuYXZCb3R0b20sXHJcblx0XHRJdGVtLFxyXG5cdFx0Q2F0ZWdvcnksXHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0aXRlbXNDYXRlZ29yeSgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jYXRlZ29yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRtb3VudGVkICgpIHtcclxuXHRcdC8vIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcihcIiNiNTEyMTNcIik7XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm91dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBpbmZvOiBDYXRJbmZvLFxyXG4gICAgICAgICAgICAgICAgcGljOiBDYXRQaWMsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogTG9naW5cclxuICAgICAgICAgICAgfSxcclxuXHRcdFx0bGFzdERlbFk6IDAsXHJcblx0XHRcdGhlYWRlckNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdHNlbGVjdGVkVGFiOiAwLFxyXG5cdFx0XHRzZWxlY3RlZFRhYnZpZXc6IDAsXHJcblx0XHRcdGl0ZW1zOiBbe1xyXG5cdFx0XHRcdG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIyLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI1LmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIn1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQnVyZ2VyXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiIzJEOUNEQlwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjMwMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA5ODcsXHJcblx0XHRcdFx0aXNMaWtlOiBmYWxzZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiAxMyxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC41XCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiBcIlF1ZXpvbiBDaG9jb2xhdGUgTWFyYmxlIFBhbmNha2VcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMi5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTYuanBnXCJ9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJQYW5jYWtlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjIzMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA4OTEsXHJcblx0XHRcdFx0aXNMaWtlOiB0cnVlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDcsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuMFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UzLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlNC5qcGdcIn1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkNha2VcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMzAwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDczMCxcclxuXHRcdFx0XHRpc0xpa2U6IHRydWUsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogMTEsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuMFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRjYXRlZ29yeTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJVUkdFUlwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjEzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlBBTkNBS0VcIixcclxuXHRcdFx0XHRjb3VudDogXCI1XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkNBS0VcIixcclxuXHRcdFx0XHRjb3VudDogXCI5XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9iZWVyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJFRVJcIixcclxuXHRcdFx0XHRjb3VudDogXCI3XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNlYXJjaCgpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnc2VhcmNoJylcclxuXHRcdH0sXHJcblx0XHRiZWxsKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdiZWxsJylcclxuXHRcdH0sXHJcblx0XHRvZmZlcigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1FSJylcclxuXHRcdFx0dGhpcy4kc2hvd01vZGFsKFFyTW9kYWwpXHJcblx0XHR9LFxyXG5cdFx0bG9naW4oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbicpXHJcblx0XHRcdC8vIHRoaXMuJHNob3dNb2RhbChRck1vZGFsKVxyXG5cdFx0ICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5yb3V0ZXNbc10pO1xyXG5cdFx0fSxcclxuXHRcdHNob3dJdGVtKHBheWxvYWQpIHtcclxuXHRcdFx0dGhpcy4kbmF2aWdhdGVUbyhJdGVtRGV0YWlscyx7XHJcblx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdGl0ZW06IHBheWxvYWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFuaW1hdGVkOiB0cnVlLFxyXG5cdFx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHRcdG5hbWU6IFwic2xpZGVUb3BcIixcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAzODAsXHJcblx0XHRcdFx0XHRjdXJ2ZTogXCJlYXNlSW5cIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHBvcHVsYXIoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuXHRcdH0sXHJcblx0XHRzaG93Q2F0ZWdvcnkoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuXHRcdH0sXHJcblx0XHRzaG93UHJvbW9zKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XHJcblx0XHR9LFxyXG5cdFx0aG9tZSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcblx0XHR9LFxyXG5cdFx0Y2FydCgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcblx0XHR9LFxyXG5cdFx0aGlzdG9yeSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcblx0XHR9LFxyXG5cdFx0YWJvdXQoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJ2aWV3LmFjdGl2ZSB7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMztcclxuXHRtYXJnaW46IDA7XHJcblx0aGVpZ2h0OiA1MDtcclxufVxyXG4udGFidmlld1RleHQge1xyXG5cdG1hcmdpbi10b3A6IDE1O1xyXG5cdG1hcmdpbi1ib3R0b206IDU7XHJcblx0Zm9udC1zaXplOiAxMztcclxuXHRjb2xvcjogI2Q4ZDJkMjtcclxuXHRob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRtYXJnaW4tYm90dG9tOiA1O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZUYWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiZDIxMjI7XHJcbn1cclxuLm5hdlRhYnZpZXcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnN0YXR1cy1pbWcge1xyXG5cdG1hcmdpbi10b3A6IDQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMDtcclxuXHR3aWR0aDogMzA7XHJcblx0aGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXByb2ZpbGUge1xyXG5cdGJvcmRlci13aWR0aDogMTtcclxuXHRib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogNDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE1O1xyXG5cdHdpZHRoOiAzMDtcclxuXHRoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtdGl0bGUge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRmb250LXNpemU6IDE4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNTtcclxuXHRtYXJnaW4tdG9wOiA4O1xyXG5cdGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcblx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLCosYXV0b1wiLCBjb2x1bW5zOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibmF2U3RhdHVzQmFyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlN0YXR1c0JhclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiZDIxMjJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCIqLGF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zZWFyY2ggfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVsbC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYmVsbCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub2ZmZXIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvZ2luKFwibG9naW5cIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucG9wdWxhciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUE9QVUxBUlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ0FURUdPUllcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzMlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93UHJvbW9zIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJQUk9NT1NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJHcmlkTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwibmF2Qm90dG9tXCIsIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=