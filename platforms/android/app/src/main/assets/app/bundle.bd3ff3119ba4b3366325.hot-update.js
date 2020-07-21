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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZT85MDMwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/ODc5ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS9sb2dpbi52dWU/N2VlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0VBREE7QUFFQSw4REFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBTkE7O0FBWUEsYUFDQTtBQUNBLEdBZEE7O0FBZUE7QUFDQTtBQUNBLGlCQURBO0FBRUEsNEJBRkE7QUFHQSxvQkFIQTtBQUlBLHdCQUpBO0FBS0E7QUFDQSxnREFEQTtBQUVBLG1EQUZBO0FBR0EsaUJBQ0E7QUFBQTtBQUFBLFNBREEsRUFFQTtBQUFBO0FBQUEsU0FGQSxFQUdBO0FBQUE7QUFBQSxTQUhBLEVBSUE7QUFBQTtBQUFBLFNBSkEsRUFLQTtBQUFBO0FBQUEsU0FMQSxFQU1BO0FBQUE7QUFBQSxTQU5BLENBSEE7QUFXQSwwQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSxrQkFkQTtBQWVBLHFCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSxvQkFqQkE7QUFrQkEscUJBbEJBO0FBbUJBO0FBbkJBLFNBcUJBO0FBQ0EsK0NBREE7QUFFQSxvREFGQTtBQUdBLGlCQUNBO0FBQUE7QUFBQSxTQURBLEVBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBLFNBTEEsRUFNQTtBQUFBO0FBQUEsU0FOQSxDQUhBO0FBV0EsMkJBWEE7QUFZQSw4QkFaQTtBQWFBLHVCQWJBO0FBY0Esa0JBZEE7QUFlQSxvQkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsbUJBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQW5CQSxPQXJCQSxFQTBDQTtBQUNBLHlDQURBO0FBRUEsaURBRkE7QUFHQSxpQkFDQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQSxTQUZBLEVBR0E7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUEsU0FKQSxDQUhBO0FBU0Esd0JBVEE7QUFVQSw4QkFWQTtBQVdBLHVCQVhBO0FBWUEsa0JBWkE7QUFhQSxvQkFiQTtBQWNBLHdCQWRBO0FBZUEsb0JBZkE7QUFnQkEscUJBaEJBO0FBaUJBO0FBakJBLE9BMUNBLENBTEE7QUFtRUEsaUJBQ0E7QUFDQSxtREFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxPQURBLEVBTUE7QUFDQSxvREFEQTtBQUVBLDJCQUZBO0FBR0E7QUFIQSxPQU5BLEVBV0E7QUFDQSxpREFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQSxPQVhBLEVBZ0JBO0FBQ0EsaURBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsT0FoQkE7QUFuRUE7QUEyRkEsR0EzR0E7O0FBNEdBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxLQWRBOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsU0FEQTtBQUlBLHNCQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFIQTtBQUxBO0FBV0EsS0EzQkE7O0FBNkJBO0FBQ0E7QUFDQSxLQS9CQTs7QUFnQ0E7QUFDQTtBQUNBLEtBbENBOztBQW1DQTtBQUNBO0FBQ0EsS0FyQ0E7O0FBc0NBO0FBQ0E7QUFDQSxLQXhDQTs7QUF5Q0E7QUFDQTtBQUNBLEtBM0NBOztBQTRDQTtBQUNBO0FBQ0EsS0E5Q0E7O0FBK0NBO0FBQ0E7QUFDQTs7QUFqREE7QUE1R0EsRzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw4QkFBOEIsMkJBQTJCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBcUY7QUFDekcsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsOERBQTRDLEVBQUU7QUFBQTtBQUNwRTtBQUNBLGdCQUFnQixnRkFBTTtBQUN0Qix5QkFBeUIseUZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEySyxDQUFnQix5T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQS9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuYmQzZmYzMTE5YmE0YjMzNjYzMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuXHRcdDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcblxyXG5cdFx0PEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqLGF1dG9cIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgcm93PVwiMFwiIHJlZj1cIm5hdlN0YXR1c0JhclwiIGNsYXNzPVwibmF2U3RhdHVzQmFyXCIgYmFja2dyb3VuZENvbG9yPVwiI2JkMjEyMlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNDBcIlxyXG5cdFx0XHQgd2lkdGg9XCIxMDAlXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKixhdXRvLGF1dG8sYXV0b1wiPlxyXG5cdFx0XHRcdDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHRleHQ9XCJIb21lXCIgY2xhc3M9XCJzdGF0dXMtdGl0bGVcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjBcIiByb3c9XCIwXCIgQHRhcD1cInNlYXJjaFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwic3RhdHVzLWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwifi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlIGNvbD1cIjFcIiByb3c9XCIwXCIgQHRhcD1cImJlbGxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9iZWxsLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgY29sPVwiMlwiIHJvdz1cIjBcIiBAdGFwPVwib2ZmZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cInN0YXR1cy1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9vZmZlci5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PEltYWdlIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiICBAdGFwPVwibG9naW5cIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIGNvbD1cIjNcIlxyXG5cdFx0XHRcdFx0XHRcdHJvdz1cIjBcIiBjbGFzcz1cInN0YXR1cy1wcm9maWxlXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL21lLmpwZ1wiIC8+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0ICByb3c9XCIxXCIgcmVmPVwibmF2VGFiXCIgY2xhc3M9XCJuYXZUYWJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhlaWdodD1cIjUwXCJcclxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiICByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInBvcHVsYXJcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIwXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMyVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J34vYXNzZXRzL2ltYWdlcy9wb3B1bGFyLnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiUE9QVUxBUlwiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRAdGFwPVwic2hvd0NhdGVnb3J5XCIgcm93cz1cIiosYXV0b1wiIGNvbHM9XCJhdXRvXCIgY29sPVwiMVwiIHJvdz1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzQlXCI+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMFwiIGNsYXNzPVwibmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J34vYXNzZXRzL2ltYWdlcy9jYXRlZ29yeS5wbmcnOicnXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIkNBVEVHT1JZXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09Mj8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dQcm9tb3NcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIyXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzMyVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIiByb3c9XCIwXCIgY2xhc3M9XCJuYXZJY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cInNlbGVjdGVkVGFidmlldz09Mj8nfi9hc3NldHMvaW1hZ2VzL2NhdGVnb3J5LnBuZyc6JydcIi8+XHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09Mj8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiUFJPTU9TXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHQ8TGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHRcdFxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zQ2F0ZWdvcnlcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+IDwvQ2F0ZWdvcnk+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9MaXN0Vmlldz5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDJcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cdFx0XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdDxuYXZCb3R0b20gcm93PVwiM1wiIC8+XHJcblxyXG5cdFx0PC9HcmlkTGF5b3V0PlxyXG48L3BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0Ly8gaW1wb3J0IHsgU3dpc3NBcm15S25pZmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmVcIjtcclxuXHRpbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcclxuXHRpbXBvcnQgbmF2Qm90dG9tIGZyb20gXCIuL2N1c3RvbS9uYXZCb3R0b21cIjtcclxuXHRpbXBvcnQgSXRlbSBmcm9tIFwiLi9jdXN0b20vaXRlbVwiO1xyXG5cdGltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vY2F0ZWdvcnlcIjtcclxuXHRpbXBvcnQgUXJNb2RhbCBmcm9tIFwiLi9jdXN0b20vb2ZmZXJRck1vZGFsXCI7XHJcblx0aW1wb3J0IEl0ZW1EZXRhaWxzIGZyb20gXCIuL0l0ZW1EZXRhaWxzXCI7XHJcblx0aW1wb3J0IGxvZ2luIGZyb20gJy4vY3VzdG9tL2xvZ2luJztcclxuXHRjb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTsgXHJcblx0Y29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdG5hdkJvdHRvbSxcclxuXHRcdEl0ZW0sXHJcblx0XHRDYXRlZ29yeVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGl0ZW1zQ2F0ZWdvcnkoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2F0ZWdvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0bW91bnRlZCAoKSB7XHJcblx0XHQvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhc3REZWxZOiAwLFxyXG5cdFx0XHRoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxyXG5cdFx0XHRzZWxlY3RlZFRhYjogMCxcclxuXHRcdFx0c2VsZWN0ZWRUYWJ2aWV3OiAwLFxyXG5cdFx0XHRpdGVtczogW3tcclxuXHRcdFx0XHRuYW1lOiBcIk1hbmlsYSBVbHRpbWF0ZSBUb21ic3RvbmUgQnVyZ2VyXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG5cdFx0XHRcdGltYWdlczogW1xyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIxLmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMi5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjMuanBnXCJ9LFxyXG5cdFx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI0LmpwZ1wifSxcclxuXHRcdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNS5qcGdcIn0sXHJcblx0XHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjYuanBnXCJ9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkJ1cmdlclwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiMyRDlDREJcIixcclxuXHRcdFx0XHRwcmljZTogXCIzMDAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogOTg3LFxyXG5cdFx0XHRcdGlzTGlrZTogZmFsc2UsXHJcblx0XHRcdFx0aXNGYXZvcml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21tZW50czogMTMsXHJcblx0XHRcdFx0cmF0aW5nOiBcIjQuNVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImFcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRpbWFnZXM6IFtcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMS5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTIuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNC5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTUuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wifVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiUGFuY2FrZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5VGFnOiBcIiNlNGNlMGRcIixcclxuXHRcdFx0XHRwcmljZTogXCIyMzAuMDBcIixcclxuXHRcdFx0XHRsaWtlczogODkxLFxyXG5cdFx0XHRcdGlzTGlrZTogdHJ1ZSxcclxuXHRcdFx0XHRpc0Zhdm9yaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGNvbW1lbnRzOiA3LFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjBcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6IFwiQmlub25kbyBCbGFjayBGb3Jlc3QgQ2FrZVwiLFxyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcblx0XHRcdFx0aW1hZ2VzOiBbXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTEuanBnXCJ9LFxyXG5cdFx0XHRcdFx0e3NyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wifSxcclxuXHRcdFx0XHRcdHtzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIn0sXHJcblx0XHRcdFx0XHR7c3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTQuanBnXCJ9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJDYWtlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG5cdFx0XHRcdHByaWNlOiBcIjMwMC4wMFwiLFxyXG5cdFx0XHRcdGxpa2VzOiA3MzAsXHJcblx0XHRcdFx0aXNMaWtlOiB0cnVlLFxyXG5cdFx0XHRcdGlzRmF2b3JpdGU6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudHM6IDExLFxyXG5cdFx0XHRcdHJhdGluZzogXCI0LjBcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJhXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Y2F0ZWdvcnk6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuXHRcdFx0XHRjb3VudDogXCIxM1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiNVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJDQUtFXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiOVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJCRUVSXCIsXHJcblx0XHRcdFx0Y291bnQ6IFwiN1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRzZWFyY2goKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3NlYXJjaCcpXHJcblx0XHR9LFxyXG5cdFx0YmVsbCgpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYmVsbCcpXHJcblx0XHR9LFxyXG5cdFx0b2ZmZXIoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdRUicpXHJcblx0XHRcdHRoaXMuJHNob3dNb2RhbChRck1vZGFsKVxyXG5cdFx0fSxcclxuXHRcdGxvZ2luKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9naW4nKVxyXG5cdFx0XHR0aGlzLiRuYXZpZ2F0ZVRvKGxvZ2luKVxyXG5cdFx0fSxcclxuXHRcdHNob3dJdGVtKHBheWxvYWQpIHtcclxuXHRcdFx0dGhpcy4kbmF2aWdhdGVUbyhJdGVtRGV0YWlscyx7XHJcblx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdGl0ZW06IHBheWxvYWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFuaW1hdGVkOiB0cnVlLFxyXG5cdFx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHRcdG5hbWU6IFwic2xpZGVUb3BcIixcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAzODAsXHJcblx0XHRcdFx0XHRjdXJ2ZTogXCJlYXNlSW5cIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHBvcHVsYXIoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuXHRcdH0sXHJcblx0XHRzaG93Q2F0ZWdvcnkoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuXHRcdH0sXHJcblx0XHRzaG93UHJvbW9zKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XHJcblx0XHR9LFxyXG5cdFx0aG9tZSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcblx0XHR9LFxyXG5cdFx0Y2FydCgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcblx0XHR9LFxyXG5cdFx0aGlzdG9yeSgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcblx0XHR9LFxyXG5cdFx0YWJvdXQoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJ2aWV3LmFjdGl2ZSB7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMztcclxuXHRtYXJnaW46IDA7XHJcblx0aGVpZ2h0OiA1MDtcclxufVxyXG4udGFidmlld1RleHQge1xyXG5cdG1hcmdpbi10b3A6IDE1O1xyXG5cdG1hcmdpbi1ib3R0b206IDU7XHJcblx0Zm9udC1zaXplOiAxMztcclxuXHRjb2xvcjogI2Q4ZDJkMjtcclxuXHRob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRtYXJnaW4tYm90dG9tOiA1O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZUYWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiZDIxMjI7XHJcbn1cclxuLm5hdlRhYnZpZXcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnN0YXR1cy1pbWcge1xyXG5cdG1hcmdpbi10b3A6IDQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMDtcclxuXHR3aWR0aDogMzA7XHJcblx0aGVpZ2h0OiAzMDtcclxufVxyXG4uc3RhdHVzLXByb2ZpbGUge1xyXG5cdGJvcmRlci13aWR0aDogMTtcclxuXHRib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogNDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE1O1xyXG5cdHdpZHRoOiAzMDtcclxuXHRoZWlnaHQ6IDMwO1xyXG59XHJcbi5zdGF0dXMtdGl0bGUge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRmb250LXNpemU6IDE4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNTtcclxuXHRtYXJnaW4tdG9wOiA4O1xyXG5cdGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcblx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTE1XCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiQ2xvc2UgTW9kYWxcIiBAdGFwPVwiJG1vZGFsLmNsb3NlKClcIiAvPlxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInAtMTVcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2UgTW9kYWxcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjExYWY0ODYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXExlYXJuaW5nIHByb2plY3RzXFxcXFZ1ZU5ld1Byb2pcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjExYWY0ODYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjExYWY0ODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTFhZjQ4NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MTFhZjQ4NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jdXN0b20vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjExYWY0ODYmXCIiXSwic291cmNlUm9vdCI6IiJ9