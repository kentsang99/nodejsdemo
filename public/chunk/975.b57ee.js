"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[975],{6975:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberProperty)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6073);\n/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7332);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5832);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3207);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2035);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8095);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(859);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4668);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4606);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7585);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9657);\n/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8805);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7178);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4696);\n/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4172);\n/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4847);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6517);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6674);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\nvar _types = /*#__PURE__*/new WeakMap();\nvar _propertyPoints = /*#__PURE__*/new WeakMap();\nvar _propertyAllocate = /*#__PURE__*/new WeakMap();\nvar _propertyAllocateLimit = /*#__PURE__*/new WeakMap();\nvar CyberProperty = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberProperty, _ui$view$CyberTheme$C);\n  var _super = _createSuper(CyberProperty);\n  function CyberProperty() {\n    var _this;\n    _classCallCheck(this, CyberProperty);\n    _this = _super.call(this);\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _types, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyPoints, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocate, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocateLimit, {\n      writable: true,\n      value: void 0\n    });\n    var types = _classPrivateFieldSet(_assertThisInitialized(_this), _types, core.PropertyTypes);\n    _this.btnCharmIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, 1]);\n    _this.btnCharmReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, -1]);\n    _this.btnIntelligenceIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, 1]);\n    _this.btnIntelligenceReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, -1]);\n    _this.btnStrengthIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, 1]);\n    _this.btnStrengthReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, -1]);\n    _this.btnMoneyIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, 1]);\n    _this.btnMoneyReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, -1]);\n    _this.inputCharm.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.CHR]);\n    _this.inputIntelligence.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.INT]);\n    _this.inputStrength.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.STR]);\n    _this.inputMoney.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.MNY]);\n    var selectAll = function selectAll(_ref) {\n      var item = _ref.currentTarget;\n      item.text = \'\';\n    };\n    _this.inputCharm.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n    _this.inputIntelligence.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n    _this.inputStrength.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n    _this.inputMoney.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n    _this.btnRandomAllocate.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.random);\n    _this.btnNext.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.next);\n    _this.listSelectedTalents.renderHandler = Laya.Handler.create(_assertThisInitialized(_this), _this.renderTalent, null, false);\n    return _this;\n  }\n  _createClass(CyberProperty, [{\n    key: "init",\n    value: function init(_ref2) {\n      var _classPrivateFieldSet2;\n      var talents = _ref2.talents;\n      this.listSelectedTalents.array = talents;\n      var replace = core.remake(talents.map(function (talent) {\n        return talent.id;\n      }));\n      if (replace.length > 0) {\n        $$event(\'message\', [replace.map(function (v) {\n          return [\'F_TalentReplace\', v];\n        })]);\n      }\n      _classPrivateFieldSet(this, _propertyPoints, core.getPropertyPoints());\n      _classPrivateFieldSet(this, _propertyAllocateLimit, core.propertyAllocateLimit);\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints);\n      _classPrivateFieldSet(this, _propertyAllocate, (_classPrivateFieldSet2 = {}, _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).CHR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).INT, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).STR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).MNY, 0), _classPrivateFieldSet2));\n      this.updateAllocate();\n    }\n  }, {\n    key: "next",\n    value: function next() {\n      var left = _classPrivateFieldGet(this, _propertyPoints) - this.total;\n      if (left > 0) {\n        return $$event(\'message\', [\'F_PropertyPointLeft\', left]);\n      }\n      $ui.switchView(UI.pages.TRAJECTORY, {\n        propertyAllocate: _classPrivateFieldGet(this, _propertyAllocate),\n        talents: this.listSelectedTalents.array,\n        enableExtend: true\n      });\n    }\n  }, {\n    key: "total",\n    get: function get() {\n      return _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n    }\n  }, {\n    key: "updateAllocate",\n    value: function updateAllocate() {\n      var charm = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR];\n      var intelligence = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT];\n      var strength = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR];\n      var money = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n      this.inputCharm.text = \'\' + charm;\n      this.inputIntelligence.text = \'\' + intelligence;\n      this.inputStrength.text = \'\' + strength;\n      this.inputMoney.text = \'\' + money;\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints) - this.total;\n      this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = false;\n      this.btnCharmReduce.disabled = this.btnCharmReduce.gray = false;\n      this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = false;\n      this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = false;\n      this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = false;\n      this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = false;\n      this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = false;\n      this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = false;\n      if (this.total >= _classPrivateFieldGet(this, _propertyPoints)) {\n        this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = true;\n        this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = true;\n        this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = true;\n        this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = true;\n      } else if (this.total <= 0) {\n        this.btnCharmReduce.disabled = this.btnCharmReduce.gray = true;\n        this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = true;\n        this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = true;\n        this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = true;\n      }\n      if (charm <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnCharmReduce.disabled = this.btnCharmReduce.gray = true;\n      } else if (charm >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = true;\n      }\n      if (intelligence <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = true;\n      } else if (intelligence >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = true;\n      }\n      if (strength <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = true;\n      } else if (strength >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = true;\n      }\n      if (money <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = true;\n      } else if (money >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = true;\n      }\n    }\n  }, {\n    key: "check",\n    value: function check(left, right, value) {\n      if (value < left) return false;\n      if (value > right) return false;\n      return true;\n    }\n  }, {\n    key: "random",\n    value: function random() {\n      var t = _classPrivateFieldGet(this, _propertyPoints);\n      var arr = new Array(4).fill(_classPrivateFieldGet(this, _propertyAllocateLimit)[1]);\n      while (t > 0) {\n        var sub = Math.round(Math.random() * (Math.min(t, _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) - 1)) + 1;\n        while (true) {\n          var select = Math.floor(Math.random() * 4) % 4;\n          if (arr[select] - sub < 0) continue;\n          arr[select] -= sub;\n          t -= sub;\n          break;\n        }\n      }\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[0];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[1];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[2];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[3];\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocate",\n    value: function onPropertyAllocate(type, value) {\n      if (!this.check(_classPrivateFieldGet(this, _propertyAllocateLimit)[0], _classPrivateFieldGet(this, _propertyAllocateLimit)[1], _classPrivateFieldGet(this, _propertyAllocate)[type] + value)) {\n        return;\n      }\n      if (!this.check(0, _classPrivateFieldGet(this, _propertyPoints), this.total + value)) {\n        return;\n      }\n      _classPrivateFieldGet(this, _propertyAllocate)[type] += value;\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocateInput",\n    value: function onPropertyAllocateInput(type, inputItem) {\n      var value = parseInt(inputItem.text) || 0;\n      var total = this.total;\n      if (total + value < 0) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0] * 4 - total;\n      } else if (total + value > _classPrivateFieldGet(this, _propertyPoints)) {\n        value = _classPrivateFieldGet(this, _propertyPoints) - total;\n      }\n      if (value < _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0];\n      } else if (value > _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[1];\n      }\n      var alter = value - _classPrivateFieldGet(this, _propertyAllocate)[type];\n      if (alter) {\n        this.onPropertyAllocate(type, alter);\n      } else {\n        this.updateAllocate();\n      }\n    }\n  }, {\n    key: "renderTalent",\n    value: function renderTalent(box) {\n      var dataSource = box.dataSource;\n      var labTitle = box.getChildByName("labTitle");\n      var grade1 = box.getChildByName("grade1");\n      var grade2 = box.getChildByName("grade2");\n      var grade3 = box.getChildByName("grade3");\n      var labDescription = box.getChildByName("labDescription");\n      labTitle.text = dataSource.name;\n      labDescription.text = dataSource.description;\n      switch (dataSource.grade) {\n        case 1:\n          grade1.visible = true;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n        case 2:\n          grade1.visible = false;\n          grade2.visible = true;\n          grade3.visible = false;\n          break;\n        case 3:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = true;\n          break;\n        default:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n      }\n    }\n  }]);\n  return CyberProperty;\n}(ui.view.CyberTheme.CyberPropertyUI);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9zcmMvdWkvdGhlbWVzL2N5YmVyL3Byb3BlcnR5LmpzPzk0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3liZXJQcm9wZXJ0eSBleHRlbmRzIHVpLnZpZXcuQ3liZXJUaGVtZS5DeWJlclByb3BlcnR5VUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVzID1cbiAgICAgICAgdGhpcy4jdHlwZXMgPSBjb3JlLlByb3BlcnR5VHlwZXM7XG5cbiAgICAgICAgdGhpcy5idG5DaGFybUluY3JlYXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuQ0hSLCAxXSk7XG4gICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5DSFIsIC0xXSk7XG5cbiAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VJbmNyZWFzZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLklOVCwgMV0pO1xuICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLklOVCwgLTFdKTtcblxuICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoSW5jcmVhc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5TVFIsIDFdKTtcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLlNUUiwgLTFdKTtcblxuICAgICAgICB0aGlzLmJ0bk1vbmV5SW5jcmVhc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5NTlksIDFdKTtcbiAgICAgICAgdGhpcy5idG5Nb25leVJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLk1OWSwgLTFdKTtcblxuICAgICAgICB0aGlzLmlucHV0Q2hhcm0ub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGVJbnB1dCwgW3R5cGVzLkNIUl0pO1xuICAgICAgICB0aGlzLmlucHV0SW50ZWxsaWdlbmNlLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQsIFt0eXBlcy5JTlRdKTtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVuZ3RoLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQsIFt0eXBlcy5TVFJdKTtcbiAgICAgICAgdGhpcy5pbnB1dE1vbmV5Lm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQsIFt0eXBlcy5NTlldKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RBbGwgPSAoe2N1cnJlbnRUYXJnZXQ6IGl0ZW19KSA9PiB7IGl0ZW0udGV4dD0nJzsgfTtcbiAgICAgICAgdGhpcy5pbnB1dENoYXJtLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgc2VsZWN0QWxsKTtcbiAgICAgICAgdGhpcy5pbnB1dEludGVsbGlnZW5jZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHNlbGVjdEFsbCk7XG4gICAgICAgIHRoaXMuaW5wdXRTdHJlbmd0aC5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHNlbGVjdEFsbCk7XG4gICAgICAgIHRoaXMuaW5wdXRNb25leS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHNlbGVjdEFsbCk7XG5cbiAgICAgICAgdGhpcy5idG5SYW5kb21BbGxvY2F0ZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLnJhbmRvbSk7XG4gICAgICAgIHRoaXMuYnRuTmV4dC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm5leHQpO1xuXG4gICAgICAgIHRoaXMubGlzdFNlbGVjdGVkVGFsZW50cy5yZW5kZXJIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLnJlbmRlclRhbGVudCwgbnVsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgICN0eXBlcztcbiAgICAjcHJvcGVydHlQb2ludHM7XG4gICAgI3Byb3BlcnR5QWxsb2NhdGU7XG4gICAgI3Byb3BlcnR5QWxsb2NhdGVMaW1pdDtcblxuICAgIGluaXQoe3RhbGVudHN9KSB7XG4gICAgICAgIHRoaXMubGlzdFNlbGVjdGVkVGFsZW50cy5hcnJheSA9IHRhbGVudHM7XG4gICAgICAgIGNvbnN0IHJlcGxhY2UgPSBjb3JlLnJlbWFrZSh0YWxlbnRzLm1hcCh0YWxlbnQgPT4gdGFsZW50LmlkKSk7XG4gICAgICAgIGlmKHJlcGxhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCRldmVudCgnbWVzc2FnZScsIFtyZXBsYWNlLm1hcCh2ID0+IFsnRl9UYWxlbnRSZXBsYWNlJywgdl0pXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcHJvcGVydHlQb2ludHMgPSBjb3JlLmdldFByb3BlcnR5UG9pbnRzKCk7XG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdCA9IGNvcmUucHJvcGVydHlBbGxvY2F0ZUxpbWl0O1xuICAgICAgICB0aGlzLmxhYkxlZnRQcm9wZXJ0eVBvaW50LnRleHQgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cztcbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZSA9IHtcbiAgICAgICAgICAgIFt0aGlzLiN0eXBlcy5DSFJdOiAwLFxuICAgICAgICAgICAgW3RoaXMuI3R5cGVzLklOVF06IDAsXG4gICAgICAgICAgICBbdGhpcy4jdHlwZXMuU1RSXTogMCxcbiAgICAgICAgICAgIFt0aGlzLiN0eXBlcy5NTlldOiAwLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQWxsb2NhdGUoKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy4jcHJvcGVydHlQb2ludHMgLSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAobGVmdCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAkJGV2ZW50KCdtZXNzYWdlJywgWydGX1Byb3BlcnR5UG9pbnRMZWZ0JywgbGVmdF0pO1xuICAgICAgICB9XG4gICAgICAgICR1aS5zd2l0Y2hWaWV3KFxuICAgICAgICAgICAgVUkucGFnZXMuVFJBSkVDVE9SWSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFsbG9jYXRlOiB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlLFxuICAgICAgICAgICAgICAgIHRhbGVudHM6IHRoaXMubGlzdFNlbGVjdGVkVGFsZW50cy5hcnJheSxcbiAgICAgICAgICAgICAgICBlbmFibGVFeHRlbmQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5DSFJdXG4gICAgICAgICAgICArICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLklOVF1cbiAgICAgICAgICAgICsgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuU1RSXVxuICAgICAgICAgICAgKyAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5NTlldO1xuICAgIH1cblxuICAgIHVwZGF0ZUFsbG9jYXRlKCkge1xuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuQ0hSXTtcbiAgICAgICAgY29uc3QgaW50ZWxsaWdlbmNlID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5JTlRdO1xuICAgICAgICBjb25zdCBzdHJlbmd0aCA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuU1RSXTtcbiAgICAgICAgY29uc3QgbW9uZXkgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLk1OWV07XG5cbiAgICAgICAgdGhpcy5pbnB1dENoYXJtLnRleHQgPSAnJytjaGFybTtcbiAgICAgICAgdGhpcy5pbnB1dEludGVsbGlnZW5jZS50ZXh0ID0gJycraW50ZWxsaWdlbmNlO1xuICAgICAgICB0aGlzLmlucHV0U3RyZW5ndGgudGV4dCA9ICcnK3N0cmVuZ3RoO1xuICAgICAgICB0aGlzLmlucHV0TW9uZXkudGV4dCA9ICcnK21vbmV5O1xuXG4gICAgICAgIHRoaXMubGFiTGVmdFByb3BlcnR5UG9pbnQudGV4dCA9IHRoaXMuI3Byb3BlcnR5UG9pbnRzIC0gdGhpcy50b3RhbDtcblxuICAgICAgICB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZ3JheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkNoYXJtUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5DaGFybVJlZHVjZS5ncmF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5ncmF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5ncmF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuU3RyZW5ndGhSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5Nb25leUluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leUluY3JlYXNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5Nb25leVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlSZWR1Y2UuZ3JheSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnRvdGFsID49IHRoaXMuI3Byb3BlcnR5UG9pbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZ3JheSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5JbnRlbGxpZ2VuY2VJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtUmVkdWNlLmdyYXkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RyZW5ndGhSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLmdyYXkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5Nb25leVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlSZWR1Y2UuZ3JheSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhcm0gPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNoYXJtUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5DaGFybVJlZHVjZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFybSA+PSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlbGxpZ2VuY2UgPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuSW50ZWxsaWdlbmNlUmVkdWNlLmdyYXkgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGludGVsbGlnZW5jZSA+PSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLmdyYXkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmVuZ3RoIDw9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFswXSkge1xuICAgICAgICAgICAgdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuU3RyZW5ndGhSZWR1Y2UuZ3JheSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZW5ndGggPj0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKSB7XG4gICAgICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0blN0cmVuZ3RoSW5jcmVhc2UuZ3JheSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9uZXkgPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bk1vbmV5UmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leVJlZHVjZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtb25leSA+PSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKGxlZnQsIHJpZ2h0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPCBsZWZ0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZSA+IHJpZ2h0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJhbmRvbSgpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cztcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDQpLmZpbGwodGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKTtcblxuICAgICAgICB3aGlsZSAodCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChNYXRoLm1pbih0LCB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIC0gMSkpICsgMTtcbiAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgaWYoYXJyW3NlbGVjdF0gLSBzdWIgPDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGFycltzZWxlY3RdIC09IHN1YjtcbiAgICAgICAgICAgICAgICB0IC09IHN1YjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLkNIUl0gPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0gLSBhcnJbMF07XG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuSU5UXSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSAtIGFyclsxXTtcbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5TVFJdID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdIC0gYXJyWzJdO1xuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLk1OWV0gPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0gLSBhcnJbM107XG5cbiAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xuICAgIH1cblxuICAgIG9uUHJvcGVydHlBbGxvY2F0ZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soXG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdLFxuICAgICAgICAgICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSxcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3R5cGVdICsgdmFsdWVcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eVBvaW50cyxcbiAgICAgICAgICAgIHRoaXMudG90YWwgKyB2YWx1ZVxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0eXBlXSArPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xuICAgIH1cblxuICAgIG9uUHJvcGVydHlBbGxvY2F0ZUlucHV0KHR5cGUsIGlucHV0SXRlbSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChpbnB1dEl0ZW0udGV4dCkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAodG90YWwgKyB2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdICogNCAtIHRvdGFsO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsICsgdmFsdWUgPiB0aGlzLiNwcm9wZXJ0eVBvaW50cykge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cyAtIHRvdGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFswXTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV07XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGFsdGVyID0gdmFsdWUgLSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3R5cGVdO1xuICAgICAgICBpZiAoYWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlKHR5cGUsIGFsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsb2NhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclRhbGVudChib3gpIHtcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGJveC5kYXRhU291cmNlO1xuXG4gICAgICAgIGNvbnN0IGxhYlRpdGxlID0gYm94LmdldENoaWxkQnlOYW1lKFwibGFiVGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGdyYWRlMSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImdyYWRlMVwiKTtcbiAgICAgICAgY29uc3QgZ3JhZGUyID0gYm94LmdldENoaWxkQnlOYW1lKFwiZ3JhZGUyXCIpO1xuICAgICAgICBjb25zdCBncmFkZTMgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJncmFkZTNcIik7XG4gICAgICAgIGNvbnN0IGxhYkRlc2NyaXB0aW9uID0gYm94LmdldENoaWxkQnlOYW1lKFwibGFiRGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgbGFiVGl0bGUudGV4dCA9IGRhdGFTb3VyY2UubmFtZTtcbiAgICAgICAgbGFiRGVzY3JpcHRpb24udGV4dCA9IGRhdGFTb3VyY2UuZGVzY3JpcHRpb247XG4gICAgICAgIHN3aXRjaCAoZGF0YVNvdXJjZS5ncmFkZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBncmFkZTIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGdyYWRlMy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZ3JhZGUxLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBncmFkZTIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBncmFkZTEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBncmFkZTEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6975\n')}}]);