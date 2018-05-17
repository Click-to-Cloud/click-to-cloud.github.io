var pageComponent =
webpackJsonppageComponent([1],{

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(2);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(3);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(31);

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

var _indexSoy = __webpack_require__(263);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bEDUo = function (_Component) {
  _inherits(bEDUo, _Component);

  function bEDUo() {
    _classCallCheck(this, bEDUo);

    return _possibleConstructorReturn(this, (bEDUo.__proto__ || Object.getPrototypeOf(bEDUo)).apply(this, arguments));
  }

  return bEDUo;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bEDUo, _indexSoy2.default);

exports.default = bEDUo;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bEDUo = undefined;

var _metalComponent = __webpack_require__(2);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(3);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace bEDUo.
   * @public
   */

  goog.module('bEDUo.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param258 = function param258() {
      ie_open('h2');
      var dyn24 = opt_data.page.title;
      if (typeof dyn24 == 'function') dyn24();else if (dyn24 != null) itext(dyn24);
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Project');
      ie_close('th');
      ie_open('th');
      itext('Documentation');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Query.apex');
      ie_close('td');
      ie_open('td');
      itext('Under Development');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('R.apex');
      ie_close('td');
      ie_open('td');
      ie_open('a', null, null, 'href', 'https://click-to-cloud.github.io/r-apex/');
      itext('Docs');
      ie_close('a');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Script.apex');
      ie_close('td');
      ie_open('td');
      ie_open('a', null, null, 'href', 'https://click-to-cloud.github.io/script-apex/');
      itext('Docs');
      ie_close('a');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment.apex');
      ie_close('td');
      ie_open('td');
      ie_open('a', null, null, 'href', 'https://click-to-cloud.github.io/moment-apex/');
      itext('Docs');
      ie_close('a');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Async.apex');
      ie_close('td');
      ie_open('td');
      ie_open('a', null, null, 'href', 'https://click-to-cloud.github.io/async-apex/');
      itext('Docs');
      ie_close('a');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param258 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bEDUo.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bEDUo = function (_Component) {
  _inherits(bEDUo, _Component);

  function bEDUo() {
    _classCallCheck(this, bEDUo);

    return _possibleConstructorReturn(this, (bEDUo.__proto__ || Object.getPrototypeOf(bEDUo)).apply(this, arguments));
  }

  return bEDUo;
}(_metalComponent2.default);

_metalSoy2.default.register(bEDUo, templates);
exports.bEDUo = bEDUo;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[262]);