"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[484],{3484:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7585);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9657);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8095);\n/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8805);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7178);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4696);\n/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4172);\n/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4847);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5832);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3207);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6517);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6674);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2035);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(859);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4606);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nvar Main = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Main, _ui$view$DefaultTheme);\n  var _super = _createSuper(Main);\n  function Main() {\n    var _this;\n    _classCallCheck(this, Main);\n    _this = _super.call(this);\n    _this.btnRemake.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.MODE);\n    });\n    _this.btnAchievement.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.ACHIEVEMENT);\n    });\n    _this.btnThanks.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.THANKS);\n    });\n    _this.btnGithub.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, [\'github\']);\n    _this.btnDiscord.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, [\'discord\']);\n    _this.btnThemes.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.THEMES);\n    });\n    _this.btnSaveLoad.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.SAVELOAD);\n    });\n    return _this;\n  }\n  _createClass(Main, [{\n    key: "init",\n    value: function init() {\n      this.btnDiscord.visible = this.btnAchievement.visible = this.btnThanks.visible = !!core.times;\n      var text = this.labSubTitle.text;\n      this.labSubTitle.text = \' \';\n      this.labSubTitle.text = text;\n    }\n  }], [{\n    key: "load",\n    value: function load() {\n      return ["images/atlas/images/icons.atlas"];\n    }\n  }]);\n  return Main;\n}(ui.view.DefaultTheme.MainUI);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ4NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFHQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvZGVmYXVsdC9tYWluLmpzP2IyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIHVpLnZpZXcuRGVmYXVsdFRoZW1lLk1haW5VSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYnRuUmVtYWtlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpPT4kdWkuc3dpdGNoVmlldyhVSS5wYWdlcy5NT0RFKSk7XG4gICAgICAgIHRoaXMuYnRuQWNoaWV2ZW1lbnQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLkFDSElFVkVNRU5UKSk7XG4gICAgICAgIHRoaXMuYnRuVGhhbmtzLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpPT4kdWkuc3dpdGNoVmlldyhVSS5wYWdlcy5USEFOS1MpKTtcbiAgICAgICAgdGhpcy5idG5HaXRodWIub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgZ290bywgWydnaXRodWInXSk7XG4gICAgICAgIHRoaXMuYnRuRGlzY29yZC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCBnb3RvLCBbJ2Rpc2NvcmQnXSk7XG4gICAgICAgIHRoaXMuYnRuVGhlbWVzLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpPT4kdWkuc2hvd0RpYWxvZyhVSS5wYWdlcy5USEVNRVMpKTtcbiAgICAgICAgdGhpcy5idG5TYXZlTG9hZC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+JHVpLnNob3dEaWFsb2coVUkucGFnZXMuU0FWRUxPQUQpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiaW1hZ2VzL2F0bGFzL2ltYWdlcy9pY29ucy5hdGxhc1wiLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5idG5EaXNjb3JkLnZpc2libGUgPVxuICAgICAgICB0aGlzLmJ0bkFjaGlldmVtZW50LnZpc2libGUgPVxuICAgICAgICB0aGlzLmJ0blRoYW5rcy52aXNpYmxlID0gISFjb3JlLnRpbWVzO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5sYWJTdWJUaXRsZS50ZXh0O1xuICAgICAgICB0aGlzLmxhYlN1YlRpdGxlLnRleHQgPSAnICc7XG4gICAgICAgIHRoaXMubGFiU3ViVGl0bGUudGV4dCA9IHRleHQ7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3484\n')}}]);