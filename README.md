# react-inner-image-zoom

React component for magnifying an image within its parent container. Zooming behavior is triggered on click with default hover panning that switches to drag if touch is detected.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Usage

## Props

Prop | Type | Default | Description
--- | --- | --- | ---
src | String | N/A | TK
zoomSrc | String | N/A | TK
fullscreenOnMobile | Boolean | N/A | TK
onZoomIn | Function | N/A | TK
onZoomOut | Function | N/A | TK

## Issues

Please leave requests or issues [here](https://github.com/laurenashpole/react-inner-image-zoom/issues).

This component only includes a click to zoom trigger because in my personal experience that has been the most popular implementation. If there's a demand for zooming on other events like hover or grab, I would be open to adding them so don't be afraid to ask.

## License

MIT

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
