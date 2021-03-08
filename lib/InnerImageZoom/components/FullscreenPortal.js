"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FullscreenPortal = function FullscreenPortal(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(function () {
    var el = document.createElement('div');
    el.classList.add('iiz__zoom-portal');
    return el;
  }),
      portal = _useState[0];

  (0, _react.useEffect)(function () {
    document.body.appendChild(portal);
    return function () {
      return document.body.removeChild(portal);
    };
  }, [portal]);
  return (0, _reactDom.createPortal)(children, portal);
};

FullscreenPortal.propTypes = {
  children: _propTypes["default"].element
};
var _default = FullscreenPortal;
exports["default"] = _default;
module.exports = exports.default;