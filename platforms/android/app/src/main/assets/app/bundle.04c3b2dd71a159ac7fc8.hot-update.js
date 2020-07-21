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
      console.log('login');
      this.$navigateTo(_custom_login__WEBPACK_IMPORTED_MODULE_6__["default"]);
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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=script&lang=js&":
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
                on: { tap: _vm.login }
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=template&id=611af486&":
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

/***/ "./components/custom/login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/login.vue?vue&type=template&id=611af486&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/custom/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('611af486')) {
      api.createRecord('611af486', component.options)
    } else {
      api.reload('611af486', component.options)
    }
    module.hot.accept("./components/custom/login.vue?vue&type=template&id=611af486&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/custom/login.vue?vue&type=template&id=611af486&");
(function () {
      api.rerender('611af486', {
        render: _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
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

/***/ "./components/custom/login.vue?vue&type=template&id=611af486&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/custom/login.vue?vue&type=template&id=611af486&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_611af486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/OTAzMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzg3OWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlPzdlZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQURBO0FBRUEsOERBRkE7QUFHQTtBQUhBLEdBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQU5BOztBQVlBLGFBQ0E7QUFDQSxHQWRBOztBQWVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLDRCQUZBO0FBR0Esb0JBSEE7QUFJQSx3QkFKQTtBQUtBO0FBQ0EsZ0RBREE7QUFFQSxtREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMEJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxxQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsb0JBakJBO0FBa0JBLHFCQWxCQTtBQW1C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O0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFxRjtBQUN6RyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4REFBNEMsRUFBRTtBQUFBO0FBQ3BFO0FBQ0EsZ0JBQWdCLGdGQUFNO0FBQ3RCLHlCQUF5Qix5RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJLLENBQWdCLHlPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBL0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS4wNGMzYjJkZDcxYTE1OWFjN2ZjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxyXG5cdFx0PCEtLSBAbG9hZGVkPVwib25Mb2FkZWRcIiAtLT5cclxuXHJcblx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLCosYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCI+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCByb3c9XCIwXCIgcmVmPVwibmF2U3RhdHVzQmFyXCIgY2xhc3M9XCJuYXZTdGF0dXNCYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjYmQyMTIyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBoZWlnaHQ9XCI0MFwiXHJcblx0XHRcdCB3aWR0aD1cIjEwMCVcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqLGF1dG8sYXV0byxhdXRvXCI+XHJcblx0XHRcdFx0PExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgdGV4dD1cIkhvbWVcIiBjbGFzcz1cInN0YXR1cy10aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMFwiIHJvdz1cIjBcIiBAdGFwPVwic2VhcmNoXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgY2xhc3M9XCJzdGF0dXMtaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMVwiIHJvdz1cIjBcIiBAdGFwPVwiYmVsbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCIgLz5cclxuXHRcdFx0XHRcdDxJbWFnZSBjb2w9XCIyXCIgcm93PVwiMFwiIEB0YXA9XCJvZmZlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL29mZmVyLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgIEB0YXA9XCJsb2dpblwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgY29sPVwiM1wiXHJcblx0XHRcdFx0XHRcdFx0cm93PVwiMFwiIGNsYXNzPVwic3RhdHVzLXByb2ZpbGVcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbWUuanBnXCIgLz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgIHJvdz1cIjFcIiByZWY9XCJuYXZUYWJcIiBjbGFzcz1cIm5hdlRhYlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNTBcIlxyXG5cdFx0XHRcdFx0d2lkdGg9XCIxMDAlXCIgIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0byxhdXRvXCI+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwicG9wdWxhclwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjBcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMzJVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXc9PTBcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09MD8nfi9hc3NldHMvaW1hZ2VzL3BvcHVsYXIucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJQT1BVTEFSXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93Q2F0ZWdvcnlcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIxXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzNCVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09MT8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiQ0FURUdPUllcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwic2hvd1Byb21vc1wiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjJcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMzJVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjBcIiBjbGFzcz1cIm5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPyd+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nJzonJ1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0yPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJQUk9NT1NcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGl0ZW0gOml0ZW09XCJpdGVtXCIgQGNsaWNrZWQ9XCJzaG93SXRlbShpdGVtKVwiIC8+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9MaXN0Vmlldz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cdFx0XHJcblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxDYXRlZ29yeSA6aXRlbT1cIml0ZW1cIj4gPC9DYXRlZ29yeT5cclxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMlwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PG5hdkJvdHRvbSByb3c9XCIzXCIgLz5cclxuXHJcblx0XHQ8L0dyaWRMYXlvdXQ+XHJcbjwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHQvLyBpbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xyXG5cdGltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xyXG5cdGltcG9ydCBuYXZCb3R0b20gZnJvbSBcIi4vY3VzdG9tL25hdkJvdHRvbVwiO1xyXG5cdGltcG9ydCBJdGVtIGZyb20gXCIuL2N1c3RvbS9pdGVtXCI7XHJcblx0aW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2N1c3RvbS9jYXRlZ29yeVwiO1xyXG5cdGltcG9ydCBRck1vZGFsIGZyb20gXCIuL2N1c3RvbS9vZmZlclFyTW9kYWxcIjtcclxuXHRpbXBvcnQgSXRlbURldGFpbHMgZnJvbSBcIi4vSXRlbURldGFpbHNcIjtcclxuXHRpbXBvcnQgTG9naW4gZnJvbSAnLi9jdXN0b20vbG9naW4nO1xyXG5cdGNvbnN0IGdlc3R1cmVzID0gcmVxdWlyZShcInVpL2dlc3R1cmVzXCIpOyBcclxuXHRjb25zdCBhcHAgPSByZXF1aXJlKFwiYXBwbGljYXRpb25cIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0bmF2Qm90dG9tLFxyXG5cdFx0SXRlbSxcclxuXHRcdENhdGVnb3J5XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0aXRlbXNDYXRlZ29yeSgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jYXRlZ29yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRtb3VudGVkICgpIHtcclxuXHRcdC8vIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcihcIiNiNTEyMTNcIik7XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFzdERlbFk6IDAsXHJcblx0XHRcdGhlYWRlckNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdHNlbGVjdGVkVGFiOiAwLFxyXG5cdFx0XHRzZWxlY3RlZFRhYnZpZXc6IDAsXHJcblx0XHRcdGl0ZW1zOiBbe1xyXG5cdFx0XHRcdG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIyLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI1LmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIn1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQnVyZ2VyXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiIzJEOUNEQlwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjMwMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA5ODcsXHJcblx0XHRcdFx0aXNMaWtlOiBmYWxzZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiAxMyxcclxuXHRcdFx0XHRyYXRpbmc6IFwiNC41XCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiBcIlF1ZXpvbiBDaG9jb2xhdGUgTWFyYmxlIFBhbmNha2VcIixcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMi5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTYuanBnXCJ9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJQYW5jYWtlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjIzMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA4OTEsXHJcblx0XHRcdFx0aXNMaWtlOiB0cnVlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDcsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuMFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UzLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlNC5qcGdcIn1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkNha2VcIixcclxuXHRcdFx0XHRjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcblx0XHRcdFx0cHJpY2U6IFwiMzAwLjAwXCIsXHJcblx0XHRcdFx0bGlrZXM6IDczMCxcclxuXHRcdFx0XHRpc0xpa2U6IHRydWUsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogMTEsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuMFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRjYXRlZ29yeTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJVUkdFUlwiLFxyXG5cdFx0XHRcdGNvdW50OiBcIjEzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlBBTkNBS0VcIixcclxuXHRcdFx0XHRjb3VudDogXCI1XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkNBS0VcIixcclxuXHRcdFx0XHRjb3VudDogXCI5XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9iZWVyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJFRVJcIixcclxuXHRcdFx0XHRjb3VudDogXCI3XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNlYXJjaCgpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnc2VhcmNoJylcclxuXHRcdH0sXHJcblx0XHRiZWxsKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdiZWxsJylcclxuXHRcdH0sXHJcblx0XHRvZmZlcigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1FSJylcclxuXHRcdFx0dGhpcy4kc2hvd01vZGFsKFFyTW9kYWwpXHJcblx0XHR9LFxyXG5cdFx0bG9naW4oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdsb2dpbicpXHJcblx0XHRcdHRoaXMuJG5hdmlnYXRlVG8oTG9naW4pXHJcblx0XHR9LFxyXG5cdFx0c2hvd0l0ZW0ocGF5bG9hZCkge1xyXG5cdFx0XHR0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLHtcclxuXHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0aXRlbTogcGF5bG9hZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YW5pbWF0ZWQ6IHRydWUsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdFx0bmFtZTogXCJzbGlkZVRvcFwiLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDM4MCxcclxuXHRcdFx0XHRcdGN1cnZlOiBcImVhc2VJblwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cG9wdWxhcigpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG5cdFx0fSxcclxuXHRcdHNob3dDYXRlZ29yeSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG5cdFx0fSxcclxuXHRcdHNob3dQcm9tb3MoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuXHRcdH0sXHJcblx0XHRob21lKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMDtcclxuXHRcdH0sXHJcblx0XHRjYXJ0KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMTtcclxuXHRcdH0sXHJcblx0XHRoaXN0b3J5KCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuXHRcdH0sXHJcblx0XHRhYm91dCgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYnZpZXcuYWN0aXZlIHtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAzO1xyXG5cdG1hcmdpbjogMDtcclxuXHRoZWlnaHQ6IDUwO1xyXG59XHJcbi50YWJ2aWV3VGV4dCB7XHJcblx0bWFyZ2luLXRvcDogMTU7XHJcblx0bWFyZ2luLWJvdHRvbTogNTtcclxuXHRmb250LXNpemU6IDEzO1xyXG5cdGNvbG9yOiAjZDhkMmQyO1xyXG5cdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFidmlld1RleHQuYWN0aXZlIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hdlRhYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2JkMjEyMjtcclxufVxyXG4ubmF2VGFidmlldyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4uc3RhdHVzLWltZyB7XHJcblx0bWFyZ2luLXRvcDogNDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwO1xyXG5cdHdpZHRoOiAzMDtcclxuXHRoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtcHJvZmlsZSB7XHJcblx0Ym9yZGVyLXdpZHRoOiAxO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlYmViO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiA0O1xyXG5cdG1hcmdpbi1yaWdodDogMTU7XHJcblx0d2lkdGg6IDMwO1xyXG5cdGhlaWdodDogMzA7XHJcbn1cclxuLnN0YXR1cy10aXRsZSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1O1xyXG5cdG1hcmdpbi10b3A6IDg7XHJcblx0aG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxTdGFja0xheW91dCBjbGFzcz1cInAtMTVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0bywqLGF1dG9cIiwgY29sdW1uczogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlN0YXR1c0JhclwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZTdGF0dXNCYXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmQyMTIyXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKixhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy10aXRsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiSG9tZVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlbGwucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmJlbGwgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb2ZmZXIucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9mZmVyIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1wcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21lLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5sb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMzJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucG9wdWxhciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIn4vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiUE9QVUxBUlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwifi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwiQ0FURUdPUllcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzMlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93UHJvbW9zIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcnkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCJQUk9NT1NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJHcmlkTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwibmF2Qm90dG9tXCIsIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicC0xNVwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmVcIixcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZSBNb2RhbFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJG1vZGFsLmNsb3NlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTFhZjQ4NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcTGVhcm5pbmcgcHJvamVjdHNcXFxcVnVlTmV3UHJvalxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MTFhZjQ4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MTFhZjQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MTFhZjQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMWFmNDg2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYxMWFmNDg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTFhZjQ4NiZcIiJdLCJzb3VyY2VSb290IjoiIn0=