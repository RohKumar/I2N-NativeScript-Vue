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

    login() {
      console.log('Login'); // this.$showModal(QrModal)

      this.$navigateTo(this.routes['login']);
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
              _c("Button", {
                attrs: { text: "Log", row: "0", col: "3" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLDhEQUZBO0FBR0E7QUFIQSxHQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FOQTs7QUFZQSxhQUNBO0FBQ0EsR0FkQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBLE9BREE7QUFJQSxpQkFKQTtBQUtBLDRCQUxBO0FBTUEsb0JBTkE7QUFPQSx3QkFQQTtBQVFBO0FBQ0EsZ0RBREE7QUFFQSxtREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMEJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxxQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsb0JBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQW5CQSxTQXFCQTtBQUNBLCtDQURBO0FBRUEsb0RBRkE7QUFHQSxpQkFDQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQSxTQUZBLEVBR0E7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUEsU0FKQSxFQUtBO0FBQUE7QUFBQSxTQUxBLEVBTUE7QUFBQTtBQUFBLFNBTkEsQ0FIQTtBQVdBLDJCQVhBO0FBWUEsOEJBWkE7QUFhQSx1QkFiQTtBQWNBLGtC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O0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTLGFBQWEsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCwyQkFBMkIsU0FBUyxXQUFXLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS43YWY5Y2UxZjY2YjliOWM1NDU2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxyXG5cdFx0PCEtLSBAbG9hZGVkPVwib25Mb2FkZWRcIiAtLT5cclxuXHJcblx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLCosYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCI+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCByb3c9XCIwXCIgcmVmPVwibmF2U3RhdHVzQmFyXCIgY2xhc3M9XCJuYXZTdGF0dXNCYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjYmQyMTIyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBoZWlnaHQ9XCI0MFwiXHJcblx0XHRcdCB3aWR0aD1cIjEwMCVcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqLGF1dG8sYXV0byxhdXRvXCI+XHJcblx0XHRcdFx0PExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cInN0YXR1cy10aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMFwiIHJvdz1cIjBcIiBAdGFwPVwic2VhcmNoXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMVwiIHJvdz1cIjBcIiBAdGFwPVwiYmVsbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCIgLz5cclxuXHRcdFx0XHRcdDxJbWFnZSBjb2w9XCIyXCIgcm93PVwiMFwiIEB0YXA9XCJvZmZlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL29mZmVyLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8IS0tIDxJbWFnZSAgQHRhcD1cImxvZ2luKCdsb2dpbicpXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgY29sPVwiM1wiXHJcblx0XHRcdFx0XHRcdFx0cm93PVwiMFwiIGNsYXNzPVwic3RhdHVzLXByb2ZpbGVcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCIgLz4gLS0+XHJcblx0XHRcdFx0XHRcdCAgICAgIDxCdXR0b24gdGV4dD0nTG9nJyBAdGFwPVwibG9naW4oJ2xvZ2luJylcIiByb3c9XCIwXCIgY29sPVwiM1wiIC8+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0ICByb3c9XCIxXCIgcmVmPVwibmF2VGFiXCIgY2xhc3M9XCJuYXZUYWJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhlaWdodD1cIjUwXCJcclxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiICByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInBvcHVsYXJcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIwXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMyVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J34vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiUE9QVUxBUlwiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwic2hvd0NhdGVnb3J5XCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMVwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzQlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIkNBVEVHT1JZXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09Mj8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dQcm9tb3NcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIyXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMyVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09Mj8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09Mj8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiUFJPTU9TXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHQ8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHRcdFxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zQ2F0ZWdvcnlcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+IDwvQ2F0ZWdvcnk+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9MaXN0Vmlldz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cdFx0XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxuYXZCb3R0b20gcm93PVwiM1wiIC8+XHJcblxyXG5cdFx0PC9HcmlkTGF5b3V0PlxyXG48L3BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0Ly8gaW1wb3J0IHsgU3dpc3NBcm15S25pZmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmVcIjtcclxuXHRpbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcclxuXHRpbXBvcnQgbmF2Qm90dG9tIGZyb20gXCIuL2N1c3RvbS9uYXZCb3R0b21cIjtcclxuXHRpbXBvcnQgSXRlbSBmcm9tIFwiLi9jdXN0b20vaXRlbVwiO1xyXG5cdGltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vY2F0ZWdvcnlcIjtcclxuXHRpbXBvcnQgUXJNb2RhbCBmcm9tIFwiLi9jdXN0b20vb2ZmZXJRck1vZGFsXCI7XHJcblx0aW1wb3J0IEl0ZW1EZXRhaWxzIGZyb20gXCIuL0l0ZW1EZXRhaWxzXCI7XHJcblx0aW1wb3J0IExvZ2luIGZyb20gJy4vY3VzdG9tL2xvZ2luJztcclxuXHRjb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTsgXHJcblx0Y29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdG5hdkJvdHRvbSxcclxuXHRcdEl0ZW0sXHJcblx0XHRDYXRlZ29yeSxcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRpdGVtc0NhdGVnb3J5KCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhdGVnb3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdG1vdW50ZWQgKCkge1xyXG5cdFx0Ly8gU3dpc3NBcm15S25pZmUuc2V0QW5kcm9pZFN0YXR1c0JhckNvbG9yKFwiI2I1MTIxM1wiKTtcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3V0ZXM6IHtcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBMb2dpblxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHRsYXN0RGVsWTogMCxcclxuXHRcdFx0aGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0ZWRUYWI6IDAsXHJcblx0XHRcdHNlbGVjdGVkVGFidmlldzogMCxcclxuXHRcdFx0aXRlbXM6IFt7XHJcblx0XHRcdFx0bmFtZTogXCJNYW5pbGEgVWx0aW1hdGUgVG9tYnN0b25lIEJ1cmdlclwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIzLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjUuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI2LmpwZ1wifVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCdXJnZXJcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMzAwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDk4NyxcclxuXHRcdFx0XHRpc0xpa2U6IGZhbHNlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDEzLFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjVcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6IFwiUXVlem9uIENob2NvbGF0ZSBNYXJibGUgUGFuY2FrZVwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UyLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMy5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTQuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U1LmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNi5qcGdcIn1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlBhbmNha2VcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMjMwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDg5MSxcclxuXHRcdFx0XHRpc0xpa2U6IHRydWUsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogNyxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC4wXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiBcIkJpbm9uZG8gQmxhY2sgRm9yZXN0IENha2VcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMi5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wifVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQ2FrZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcclxuXHRcdFx0XHRwcmljZTogXCIzMDAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogNzMwLFxyXG5cdFx0XHRcdGlzTGlrZTogdHJ1ZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiAxMSxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC4wXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdGNhdGVnb3J5OiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQlVSR0VSXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiMTNcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiUEFOQ0FLRVwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjVcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQ0FLRVwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjlcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQkVFUlwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjdcIixcclxuXHRcdFx0fSxcclxuXHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0c2VhcmNoKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzZWFyY2gnKVxyXG5cdFx0fSxcclxuXHRcdGJlbGwoKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2JlbGwnKVxyXG5cdFx0fSxcclxuXHRcdG9mZmVyKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUVInKVxyXG5cdFx0XHR0aGlzLiRzaG93TW9kYWwoUXJNb2RhbClcclxuXHRcdH0sXHJcblx0XHRsb2dpbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0xvZ2luJylcclxuXHRcdFx0Ly8gdGhpcy4kc2hvd01vZGFsKFFyTW9kYWwpXHJcblx0XHQgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnJvdXRlc1snbG9naW4nXSk7XHJcblx0XHR9LFxyXG5cdFx0c2hvd0l0ZW0ocGF5bG9hZCkge1xyXG5cdFx0XHR0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLHtcclxuXHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0aXRlbTogcGF5bG9hZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YW5pbWF0ZWQ6IHRydWUsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJzbGlkZVRvcFwiLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDM4MCxcclxuXHRcdFx0XHRcdGN1cnZlOiBcImVhc2VJblwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cG9wdWxhcigpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG5cdFx0fSxcclxuXHRcdHNob3dDYXRlZ29yeSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG5cdFx0fSxcclxuXHRcdHNob3dQcm9tb3MoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuXHRcdH0sXHJcblx0XHRob21lKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMDtcclxuXHRcdH0sXHJcblx0XHRjYXJ0KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMTtcclxuXHRcdH0sXHJcblx0XHRoaXN0b3J5KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuXHRcdH0sXHJcblx0XHRhYm91dCgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYnZpZXcuYWN0aXZlIHtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAzO1xyXG5cdG1hcmdpbjogMDtcclxuXHRoZWlnaHQ6IDUwO1xyXG59XHJcbi50YWJ2aWV3VGV4dCB7XHJcblx0bWFyZ2luLXRvcDogMTU7XHJcblx0bWFyZ2luLWJvdHRvbTogNTtcclxuXHRmb250LXNpemU6IDEzO1xyXG5cdGNvbG9yOiAjZDhkMmQyO1xyXG5cdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFidmlld1RleHQuYWN0aXZlIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hdlRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2JkMjEyMjtcclxufVxyXG4ubmF2VGFidmlldyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4uc3RhdHVzLWltZyB7XHJcblx0bWFyZ2luLXRvcDogNDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwO1xyXG5cdHdpZHRoOiAzMDtcclxuXHRoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtcHJvZmlsZSB7XHJcblx0Ym9yZGVyLXdpZHRoOiAxO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlYmViO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiA0O1xyXG5cdG1hcmdpbi1yaWdodDogMTU7XHJcblx0d2lkdGg6IDMwO1xyXG5cdGhlaWdodDogMzA7XHJcbn1cclxuLnN0YXR1cy10aXRsZSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1O1xyXG5cdG1hcmdpbi10b3A6IDg7XHJcblx0aG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInBhZ2VcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sKixhdXRvXCIsIGNvbHVtbnM6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJuYXZTdGF0dXNCYXJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2U3RhdHVzQmFyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JkMjEyMlwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosYXV0byxhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMFwiLCByb3c6IFwiMFwiLCB0ZXh0OiBcIkhvbWVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNlYXJjaCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXMtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWxsLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5iZWxsIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29mZmVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vZmZlciB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dcIiwgcm93OiBcIjBcIiwgY29sOiBcIjNcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvZ2luKFwibG9naW5cIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucG9wdWxhciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUE9QVUxBUlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ0FURUdPUllcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzMlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93UHJvbW9zIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJQUk9NT1NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJHcmlkTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwibmF2Qm90dG9tXCIsIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=