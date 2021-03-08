"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ZoomImage = function ZoomImage(_ref) {
  var src = _ref.src,
      fadeDuration = _ref.fadeDuration,
      top = _ref.top,
      left = _ref.left,
      isZoomed = _ref.isZoomed,
      onLoad = _ref.onLoad,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
    className: "iiz__zoom-img " + (isZoomed ? 'iiz__zoom-img--visible' : ''),
    style: {
      top: top,
      left: left,
      transition: "linear " + fadeDuration + "ms opacity, linear " + fadeDuration + "ms visibility"
    },
    src: src,
    onLoad: onLoad,
    onTouchStart: onDragStart,
    onTouchEnd: onDragEnd,
    onMouseDown: onDragStart,
    onMouseUp: onDragEnd,
    draggable: "false",
    alt: ""
  }), onClose && /*#__PURE__*/_react["default"].createElement("button", {
    className: "iiz__btn iiz__close " + (isZoomed ? 'iiz__close--visible' : ''),
    style: {
      transition: "linear " + fadeDuration + "ms opacity, linear " + fadeDuration + "ms visibility"
    },
    onClick: onClose,
    "aria-label": "Zoom Out"
  }));
};

ZoomImage.propTypes = process.env.NODE_ENV !== "production" ? {
  src: _propTypes["default"].string,
  fadeDuration: _propTypes["default"].number,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  isZoomed: _propTypes["default"].bool,
  onLoad: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func,
  onDragEnd: _propTypes["default"].func,
  onClose: _propTypes["default"].func
} : {};
var _default = ZoomImage;
exports["default"] = _default;
module.exports = exports.default;