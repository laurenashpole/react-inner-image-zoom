"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("./components/Image"));

var _ZoomImage = _interopRequireDefault(require("./components/ZoomImage"));

var _FullscreenPortal = _interopRequireDefault(require("./components/FullscreenPortal"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InnerImageZoom = function InnerImageZoom(_ref) {
  var _ref$moveType = _ref.moveType,
      moveType = _ref$moveType === void 0 ? 'pan' : _ref$moveType,
      _ref$zoomType = _ref.zoomType,
      zoomType = _ref$zoomType === void 0 ? 'click' : _ref$zoomType,
      src = _ref.src,
      srcSet = _ref.srcSet,
      sizes = _ref.sizes,
      sources = _ref.sources,
      width = _ref.width,
      height = _ref.height,
      hasSpacer = _ref.hasSpacer,
      zoomSrc = _ref.zoomSrc,
      _ref$zoomScale = _ref.zoomScale,
      zoomScale = _ref$zoomScale === void 0 ? 1 : _ref$zoomScale,
      zoomPreload = _ref.zoomPreload,
      alt = _ref.alt,
      _ref$fadeDuration = _ref.fadeDuration,
      fadeDuration = _ref$fadeDuration === void 0 ? 150 : _ref$fadeDuration,
      fullscreenOnMobile = _ref.fullscreenOnMobile,
      _ref$mobileBreakpoint = _ref.mobileBreakpoint,
      mobileBreakpoint = _ref$mobileBreakpoint === void 0 ? 640 : _ref$mobileBreakpoint,
      hideCloseButton = _ref.hideCloseButton,
      hideHint = _ref.hideHint,
      className = _ref.className,
      afterZoomIn = _ref.afterZoomIn,
      afterZoomOut = _ref.afterZoomOut;
  var img = (0, _react.useRef)(null);
  var zoomImg = (0, _react.useRef)(null);
  var imgProps = (0, _react.useRef)({});

  var _useState = (0, _react.useState)(zoomPreload),
      isActive = _useState[0],
      setIsActive = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isTouch = _useState2[0],
      setIsTouch = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      isZoomed = _useState3[0],
      setIsZoomed = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      isFullscreen = _useState4[0],
      setIsFullscreen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      isDragging = _useState5[0],
      setIsDragging = _useState5[1];

  var _useState6 = (0, _react.useState)(false),
      isValidDrag = _useState6[0],
      setIsValidDrag = _useState6[1];

  var _useState7 = (0, _react.useState)(moveType),
      currentMoveType = _useState7[0],
      setCurrentMoveType = _useState7[1];

  var _useState8 = (0, _react.useState)(0),
      left = _useState8[0],
      setLeft = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      top = _useState9[0],
      setTop = _useState9[1];

  var handleMouseEnter = function handleMouseEnter(e) {
    setIsActive(true);
    zoomType === 'hover' && !isZoomed && handleClick(e);
  };

  var handleTouchStart = function handleTouchStart() {
    setIsTouch(true);
    setIsFullscreen(getFullscreenStatus(fullscreenOnMobile, mobileBreakpoint));
    setCurrentMoveType('drag');
  };

  var handleClick = function handleClick(e) {
    if (isZoomed) {
      if (isTouch) {
        hideCloseButton && handleClose();
      } else {
        !isValidDrag && zoomOut();
      }

      return;
    }

    isTouch && setIsActive(true);

    if (zoomImg.current) {
      handleLoad({
        target: zoomImg.current
      });
      zoomIn(e.pageX, e.pageY);
    } else {
      imgProps.current.onLoadCallback = zoomIn.bind(_this, e.pageX, e.pageY);
    }
  };

  var handleLoad = function handleLoad(e) {
    zoomImg.current = e.target;
    zoomImg.current.setAttribute('width', zoomImg.current.naturalWidth * zoomScale);
    zoomImg.current.setAttribute('height', zoomImg.current.naturalHeight * zoomScale);
    imgProps.current.bounds = getBounds(img.current, false);
    imgProps.current.ratios = getRatios(imgProps.current.bounds, zoomImg.current);

    if (imgProps.current.onLoadCallback) {
      imgProps.current.onLoadCallback();
      imgProps.current.onLoadCallback = null;
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    var left = e.pageX - imgProps.current.offsets.x;
    var top = e.pageY - imgProps.current.offsets.y;
    left = Math.max(Math.min(left, imgProps.current.bounds.width), 0);
    top = Math.max(Math.min(top, imgProps.current.bounds.height), 0);
    setLeft(left * -imgProps.current.ratios.x);
    setTop(top * -imgProps.current.ratios.y);
  };

  var handleDragStart = function handleDragStart(e) {
    imgProps.current.offsets = getOffsets(e.pageX || e.changedTouches[0].pageX, e.pageY || e.changedTouches[0].pageY, zoomImg.current.offsetLeft, zoomImg.current.offsetTop);
    setIsDragging(true);

    if (!isTouch) {
      imgProps.current.eventPosition = {
        x: e.pageX,
        y: e.pageY
      };
    }
  };

  var handleDragMove = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var left = (e.pageX || e.changedTouches[0].pageX) - imgProps.current.offsets.x;
    var top = (e.pageY || e.changedTouches[0].pageY) - imgProps.current.offsets.y;
    left = Math.max(Math.min(left, 0), (zoomImg.current.offsetWidth - imgProps.current.bounds.width) * -1);
    top = Math.max(Math.min(top, 0), (zoomImg.current.offsetHeight - imgProps.current.bounds.height) * -1);
    setLeft(left);
    setTop(top);
  }, []);

  var handleDragEnd = function handleDragEnd(e) {
    setIsDragging(false);

    if (!isTouch) {
      var moveX = Math.abs(e.pageX - imgProps.current.eventPosition.x);
      var moveY = Math.abs(e.pageY - imgProps.current.eventPosition.y);
      setIsValidDrag(moveX > 5 || moveY > 5);
    }
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    currentMoveType === 'drag' && isZoomed ? handleDragEnd(e) : handleClose();
  };

  var handleClose = function handleClose() {
    zoomOut(function () {
      setTimeout(function () {
        zoomImg.current = null;
        imgProps.current = getDefaults();
        setIsActive(false);
        setIsTouch(false);
        setIsFullscreen(false);
        setCurrentMoveType(moveType);
      }, fadeDuration);
    });
  };

  var initialMove = function initialMove(pageX, pageY) {
    imgProps.current.offsets = getOffsets(window.pageXOffset, window.pageYOffset, -imgProps.current.bounds.left, -imgProps.current.bounds.top);
    handleMouseMove({
      pageX: pageX,
      pageY: pageY
    });
  };

  var initialDrag = function initialDrag(pageX, pageY) {
    var initialPageX = (pageX - (window.pageXOffset + imgProps.current.bounds.left)) * -imgProps.current.ratios.x;
    var initialPageY = (pageY - (window.pageYOffset + imgProps.current.bounds.top)) * -imgProps.current.ratios.y;
    imgProps.current.bounds = getBounds(img.current, isFullscreen);
    imgProps.current.offsets = getOffsets(0, 0, 0, 0);
    handleDragMove({
      changedTouches: [{
        pageX: initialPageX,
        pageY: initialPageY
      }],
      preventDefault: function preventDefault() {},
      stopPropagation: function stopPropagation() {}
    });
  };

  var zoomIn = function zoomIn(pageX, pageY) {
    setIsZoomed(true);
    currentMoveType === 'drag' ? initialDrag(pageX, pageY) : initialMove(pageX, pageY);
    afterZoomIn && afterZoomIn();
  };

  var zoomOut = function zoomOut(callback) {
    setIsZoomed(false);
    afterZoomOut && afterZoomOut();
    callback && callback();
  };

  var getDefaults = function getDefaults() {
    return {
      onLoadCallback: null,
      bounds: {},
      offsets: {},
      ratios: {},
      eventPosition: {}
    };
  };

  var getBounds = function getBounds(img, isFullscreen) {
    if (isFullscreen) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0
      };
    }

    return img.getBoundingClientRect();
  };

  var getOffsets = function getOffsets(pageX, pageY, left, top) {
    return {
      x: pageX - left,
      y: pageY - top
    };
  };

  var getRatios = function getRatios(bounds, zoomImg) {
    return {
      x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
      y: (zoomImg.offsetHeight - bounds.height) / bounds.height
    };
  };

  var getFullscreenStatus = function getFullscreenStatus(fullscreenOnMobile, mobileBreakpoint) {
    return fullscreenOnMobile && window.matchMedia && window.matchMedia("(max-width: " + mobileBreakpoint + "px)").matches;
  };

  var zoomImageProps = {
    src: zoomSrc || src,
    fadeDuration: isFullscreen ? 0 : fadeDuration,
    top: top,
    left: left,
    isZoomed: isZoomed,
    onLoad: handleLoad,
    onDragStart: currentMoveType === 'drag' ? handleDragStart : null,
    onDragEnd: currentMoveType === 'drag' ? handleDragEnd : null,
    onClose: !hideCloseButton && isTouch ? handleClose : null
  };
  (0, _react.useEffect)(function () {
    imgProps.current = getDefaults();
  }, []);
  (0, _react.useEffect)(function () {
    getFullscreenStatus(fullscreenOnMobile, mobileBreakpoint) && setIsActive(false);
  }, [fullscreenOnMobile, mobileBreakpoint]);
  (0, _react.useEffect)(function () {
    if (!zoomImg.current) {
      return;
    }

    var eventType = isTouch ? 'touchmove' : 'mousemove';

    if (isDragging) {
      zoomImg.current.addEventListener(eventType, handleDragMove, {
        passive: false
      });
    } else {
      zoomImg.current.removeEventListener(eventType, handleDragMove);
    }
  }, [isDragging, isTouch, handleDragMove]);
  return /*#__PURE__*/_react["default"].createElement("figure", {
    className: "iiz " + (currentMoveType === 'drag' ? 'iiz--drag' : '') + " " + (className ? className : ''),
    style: {
      width: width
    },
    ref: img,
    onTouchStart: isZoomed ? null : handleTouchStart,
    onClick: handleClick,
    onMouseEnter: isTouch ? null : handleMouseEnter,
    onMouseMove: currentMoveType === 'drag' || !isZoomed ? null : handleMouseMove,
    onMouseLeave: isTouch ? null : handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    src: src,
    srcSet: srcSet,
    sizes: sizes,
    sources: sources,
    width: width,
    height: height,
    hasSpacer: hasSpacer,
    alt: alt,
    fadeDuration: fadeDuration,
    isZoomed: isZoomed
  }), isActive && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, isFullscreen ? /*#__PURE__*/_react["default"].createElement(_FullscreenPortal["default"], null, /*#__PURE__*/_react["default"].createElement(_ZoomImage["default"], zoomImageProps)) : /*#__PURE__*/_react["default"].createElement(_ZoomImage["default"], zoomImageProps)), !hideHint && !isZoomed && /*#__PURE__*/_react["default"].createElement("span", {
    className: "iiz__btn iiz__hint"
  }));
};

InnerImageZoom.propTypes = process.env.NODE_ENV !== "production" ? {
  moveType: _propTypes["default"].string,
  zoomType: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  srcSet: _propTypes["default"].string,
  sizes: _propTypes["default"].string,
  sources: _propTypes["default"].array,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  hasSpacer: _propTypes["default"].bool,
  zoomSrc: _propTypes["default"].string,
  zoomScale: _propTypes["default"].number,
  zoomPreload: _propTypes["default"].bool,
  alt: _propTypes["default"].string,
  fadeDuration: _propTypes["default"].number,
  fullscreenOnMobile: _propTypes["default"].bool,
  mobileBreakpoint: _propTypes["default"].number,
  hideCloseButton: _propTypes["default"].bool,
  hideHint: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  afterZoomIn: _propTypes["default"].func,
  afterZoomOut: _propTypes["default"].func
} : {};
var _default = InnerImageZoom;
exports["default"] = _default;
module.exports = exports.default;