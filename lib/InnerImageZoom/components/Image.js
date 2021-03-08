"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Image = function Image(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet,
      sizes = _ref.sizes,
      sources = _ref.sources,
      width = _ref.width,
      height = _ref.height,
      hasSpacer = _ref.hasSpacer,
      alt = _ref.alt,
      isZoomed = _ref.isZoomed,
      fadeDuration = _ref.fadeDuration;
  var createSpacer = width && height && hasSpacer;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingTop: createSpacer ? height / width * 100 + "%" : null
    }
  }, sources && sources.length > 0 ? /*#__PURE__*/_react["default"].createElement("picture", null, sources.map(function (source, i) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: i
    }, source.srcSet && /*#__PURE__*/_react["default"].createElement("source", {
      srcSet: source.srcSet,
      sizes: source.sizes,
      media: source.media,
      type: source.type
    }));
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: "iiz__img " + (isZoomed ? 'iiz__img--hidden' : '') + " " + (createSpacer ? 'iiz__img--abs' : ''),
    style: {
      transition: "linear 0ms opacity " + (isZoomed ? fadeDuration : 0) + "ms, linear " + fadeDuration + "ms visibility " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    srcSet: srcSet,
    sizes: sizes,
    width: width,
    height: height,
    alt: alt
  })) : /*#__PURE__*/_react["default"].createElement("img", {
    className: "iiz__img " + (isZoomed ? 'iiz__img--hidden' : '') + " " + (createSpacer ? 'iiz__img--abs' : ''),
    style: {
      transition: "linear 0ms opacity " + (isZoomed ? fadeDuration : 0) + "ms, linear " + fadeDuration + "ms visibility " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    srcSet: srcSet,
    sizes: sizes,
    width: width,
    height: height,
    alt: alt
  }));
};

Image.propTypes = process.env.NODE_ENV !== "production" ? {
  src: _propTypes["default"].string.isRequired,
  srcSet: _propTypes["default"].string,
  sizes: _propTypes["default"].string,
  sources: _propTypes["default"].array,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  hasSpacer: _propTypes["default"].bool,
  alt: _propTypes["default"].string,
  fadeDuration: _propTypes["default"].number,
  isZoomed: _propTypes["default"].bool
} : {};
var _default = Image;
exports["default"] = _default;
module.exports = exports.default;