webpackJsonp([2],{

/***/ "79tp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("3EgV");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/HamburgerApp.vue
var _this = this;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var calcSizeGlobal = null;

/* harmony default export */ var HamburgerApp = ({
  name: 'HamburgerApp',
  data: function data() {
    return {
      dialog: false,
      drawer: null,
      siteUrl: GlobalConfigs.homeSitePageUrl,
      menuItems: GlobalConfigs.menuItems,
      isDarkTheme: GlobalConfigs.styling.isDarkTheme,
      menuColor: GlobalConfigs.styling.menuColor,
      showLogo: GlobalConfigs.styling.showLogo,
      isMenuFlat: GlobalConfigs.styling.isMenuFlat
    };
  },
  methods: {
    onMenuItemClick: function onMenuItemClick(item) {
      var url = item.url;
      if (!(item.onClick == null) && typeof item.onClick == "function") {
        item.onClick();
      } else {
        if (GlobalConfigs.useIFramesEverywhere && !(item.notLoadToIFrame === true)) {
          this.siteUrl = url;
        } else {
          window.location.href = url;
        }
      }
    }
  },
  watch: {
    drawer: function drawer(val) {
      if (_this.myContentDiv === undefined) {
        _this.myContentDiv = document.getElementById("my-content");
      }
      var myD = _this.myContentDiv;
      if (window.innerWidth > 1264 && val) {
        myD.style.width = "calc(100% - 300px)";
      } else {
        myD.style.width = "100%";
      }
    }
  },
  computed: {
    appTitle: {
      get: function get() {
        return GlobalConfigs.styling.showTitleInMenu ? GlobalConfigs.pageTitle : "";
      }
    }
  },
  props: {
    source: Object
  },

  //hooks!
  created: function created() {

    //            for (var i = 0; i < 50; i++) {
    //                this.$data.content.push({label: 'label#' + i});
    //            }
  },
  mounted: function mounted() {
    function initCalcSizeGlobal() {
      var divContent = null,
          content = null;
      divContent = document.getElementById("my-div-content").children[0];
      content = document.getElementById("my-content");

      function calcSize() {

        content.style.height = "calc(100% - " + divContent.style.paddingTop + ")";
      }

      calcSizeGlobal = calcSize;
    };
    initCalcSizeGlobal();
    calcSizeGlobal();
    window.addEventListener('resize', calcSizeGlobal);
  },
  destroyed: function destroyed() {
    window.attachEvent('resize', calcSizeGlobal);
  }
  //!hooks

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1432598c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/HamburgerApp.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"inspire","dark":_vm.isDarkTheme}},[_c('v-navigation-drawer',{attrs:{"fixed":"","app":"","clipped":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_vm._l((_vm.menuItems),function(item){return [(item.children)?_c('v-list-group',{attrs:{"no-action":""},model:{value:(item.model),callback:function ($$v) {_vm.$set(item, "model", $$v)},expression:"item.model"}},[_c('v-list-tile',{attrs:{"slot":"item"},on:{"click":function($event){_vm.onMenuItemClick(item)}},slot:"item"},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(item.model ? item.icon : item.iconAlt))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                "+_vm._s(item.text)+"\n              ")])],1)],1),_vm._v(" "),_vm._l((item.children),function(child){return _c('v-list-tile',{on:{"click":function($event){_vm.onMenuItemClick(item)}}},[_c('v-list-tile-action',[(child.icon)?_c('v-icon',[_vm._v(_vm._s(child.icon))]):_vm._e()],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                "+_vm._s(child.text)+"\n              ")])],1)],1)})],2):_c('v-list-tile',{on:{"click":function($event){_vm.onMenuItemClick(item)}}},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n              "+_vm._s(item.text)+"\n            ")])],1)],1)]})],2)],1),_vm._v(" "),_c('v-toolbar',{attrs:{"color":_vm.menuColor,"app":"","clipped-left":"","fixed":"","flat":_vm.isMenuFlat,"dense":"","dark":""}},[_c('v-toolbar-title',{staticClass:"ml-0",style:(_vm.$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 290px' : 'min-width: 72px')},[_c('v-toolbar-side-icon',{attrs:{"id":"my-toolbaricon"},on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('span',{staticClass:"hidden-xs-only"},[_vm._v(_vm._s(_vm.appTitle))])],1),_vm._v(" "),_c('div',{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[(_vm.showLogo)?_c('v-avatar',{attrs:{"size":"22px","tile":""}},[_c('img',{attrs:{"src":__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/logo.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),"alt":""}})]):_vm._e()],1)],1),_vm._v(" "),_c('v-content',{attrs:{"id":"my-div-content"}},[_c('iframe',{staticStyle:{"background":"#FFFFFF","overflow-y":"scroll","position":"fixed","width":"100%","right":"0"},attrs:{"id":"my-content","width":"100%","height":"100%","frameborder":"0","src":_vm.siteUrl}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_HamburgerApp = (esExports);
// CONCATENATED MODULE: ./src/HamburgerApp.vue
function injectStyle (ssrContext) {
  __webpack_require__("79tp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  HamburgerApp,
  selectortype_template_index_0_src_HamburgerApp,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_HamburgerApp = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/ListApp.vue
var ListApp__this = this;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var ListApp_calcSizeGlobal = null;

/* harmony default export */ var ListApp = ({
  name: 'ListApp',
  data: function data() {
    return {
      dialog: false,
      drawer: 1,
      menuItems: GlobalConfigs.menuItems,
      isDarkTheme: GlobalConfigs.styling.isDarkTheme,
      menuColor: GlobalConfigs.styling.menuColor,
      showLogo: GlobalConfigs.styling.showLogo,
      isMenuFlat: GlobalConfigs.styling.isMenuFlat
    };
  },
  methods: {
    onMenuItemClick: function onMenuItemClick(item) {
      if (!(item.onClick == null) && typeof item.onClick == "function") {
        item.onClick();
      } else {
        window.location.href = item.url;
      }
    }
  },
  watch: {
    drawer: function drawer(val) {
      if (ListApp__this.myContentDiv === undefined) {
        ListApp__this.myContentDiv = document.getElementById("my-content");
      }
      var myD = ListApp__this.myContentDiv;
      if (window.innerWidth > 1264 && val) {
        myD.style.width = "calc(100% - 300px)";
      } else {
        myD.style.width = "100%";
      }
    }
  },
  computed: {
    appTitle: {
      get: function get() {
        return GlobalConfigs.styling.showTitleInMenu ? GlobalConfigs.pageTitle : "";
      }
    }
  },
  props: {
    source: Object
  },

  //hooks!
  created: function created() {
    //            for (var i = 0; i < 50; i++) {
    //                this.$data.content.push({label: 'label#' + i});
    //            }
  },
  mounted: function mounted() {
    function initCalcSizeGlobal() {
      var divContent = null,
          content = null;
      divContent = document.getElementById("my-div-content").children[0];
      content = document.getElementById("my-content");

      function calcSize() {

        content.style.height = "calc(100% - " + divContent.style.paddingTop + ")";
      }

      ListApp_calcSizeGlobal = calcSize;
    };
    initCalcSizeGlobal();
    ListApp_calcSizeGlobal();
    window.addEventListener('resize', ListApp_calcSizeGlobal);
  },
  destroyed: function destroyed() {
    window.attachEvent('resize', ListApp_calcSizeGlobal);
  }
  //!hooks

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dcd1b1c6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/ListApp.vue
var ListApp_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"inspire","dark":_vm.isDarkTheme}},[_c('v-toolbar',{attrs:{"color":_vm.menuColor,"app":"","clipped-left":"","fixed":"","dense":"","flat":_vm.isMenuFlat,"dark":""}},[_c('v-toolbar-title',{staticClass:"ml-4",style:(_vm.$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 290px' : 'min-width: 72px')},[_c('span',[_vm._v(_vm._s(_vm.appTitle))])]),_vm._v(" "),_c('div',{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[(_vm.showLogo)?_c('v-avatar',{attrs:{"size":"22px","tile":""}},[_c('img',{attrs:{"src":__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/logo.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),"alt":""}})]):_vm._e()],1)],1),_vm._v(" "),_c('v-content',{attrs:{"id":"my-div-content"}},[_c('v-list',{staticStyle:{"position":"absolute","height":"100%","width":"100%"},attrs:{"id":"my-content"}},[_vm._l((_vm.menuItems),function(item){return [_c('v-list-tile',{on:{"click":function($event){_vm.onMenuItemClick(item)}}},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                "+_vm._s(item.text)+"\n              ")])],1)],1)]})],2)],1)],1)}
var ListApp_staticRenderFns = []
var ListApp_esExports = { render: ListApp_render, staticRenderFns: ListApp_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_ListApp = (ListApp_esExports);
// CONCATENATED MODULE: ./src/ListApp.vue
function ListApp_injectStyle (ssrContext) {
  __webpack_require__("m9p8")
}
var ListApp_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ListApp___vue_template_functional__ = false
/* styles */
var ListApp___vue_styles__ = ListApp_injectStyle
/* scopeId */
var ListApp___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ListApp___vue_module_identifier__ = null
var ListApp_Component = ListApp_normalizeComponent(
  ListApp,
  selectortype_template_index_0_src_ListApp,
  ListApp___vue_template_functional__,
  ListApp___vue_styles__,
  ListApp___vue_scopeId__,
  ListApp___vue_module_identifier__
)

/* harmony default export */ var src_ListApp = (ListApp_Component.exports);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
__webpack_require__("w9Jk");


__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "tLzU"));


//import router from './router'


vue_esm["a" /* default */].config.productionTip = false;
vue_esm["a" /* default */].use(vuetify_default.a);

if (GlobalConfigs.navigationType === ProjectConsts.allNavigationTypes.listMenu) {
  new vue_esm["a" /* default */]({
    el: '#apploc',
    components: { ListApp: src_ListApp },
    template: '<ListApp/>'
  });
} else if (GlobalConfigs.navigationType === ProjectConsts.allNavigationTypes.hamburger) {

  new vue_esm["a" /* default */]({
    el: '#apploc',
    components: { HamburgerApp: src_HamburgerApp },
    template: '<HamburgerApp/>'
  });
} else if (GlobalConfigs.navigationType === ProjectConsts.allNavigationTypes.singlePage) {
  if (GlobalConfigs.useIFramesEverywhere) {
    document.getElementById("apploc").innerHTML = "<iframe\n" + "        id=\"my-content\"\n" + "        style=\"overflow-y: scroll;position: fixed; width:100%;right:0\"\n" + "        width=\"100%\" height=\"100%\" frameborder=\"0\"\n" + "        src=\"" + GlobalConfigs.homeSitePageUrl + "\">\n" + "      </iframe>";
  } else {
    window.location.href = GlobalConfigs.homeSitePageUrl;
  }
} else {
  document.getElementById("apploc").innerHTML = "<h1>Navigation type not found</h1>";
}

document.title = GlobalConfigs.pageTitle;

/***/ }),

/***/ "m9p8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.351b81b6d4753966efcb.js.map