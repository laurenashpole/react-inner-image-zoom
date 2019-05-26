# react-inner-image-zoom

React component for magnifying an image within its parent container. Zooming behavior is triggered on click with default hover panning that switches to drag if touch is detected.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

### NPM
```
TK
```

### Yarn
```
TK
```

### Script Tag
```
TK
```

## Usage

Import and render the component:
```
import InnerImageZoom from 'react-inner-image-zoom';

...

<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />
```

This is the simplest usage. For additional examples, visit the [demo page](https://laurenashpole.github.io/react-inner-image-zoom).

## Props

Prop | Type | Default | Description
--- | --- | --- | ---
src | String | N/A | (Required) URL for the original image.
srcSet | String | N/A | Default srcset attribute for a responsive original image.
sources | Array | N/A | A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).
zoomSrc | String | N/A | URL for the larger zoom image. Falls back to original image src if not defined.
alt | String | N/A | Alternative text for the original image.
fadeDuration | Number | 150 | Fade transition time in milliseconds.
fullscreenOnMobile | Boolean | false | Enables fullscreen zoomed image on touch devices below a specified breakpoint.
mobileBreakpoint | Number | 640 | The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.
className | String | N/A | A custom classname for styling the component.
onZoomIn | Function | N/A | A function to be called after zoom in.
onZoomOut | Function | N/A | A function to be called after zoom out.

### Sources

## Notes

## Issues

Please leave requests or issues [here](https://github.com/laurenashpole/react-inner-image-zoom/issues).

This component only includes a click to zoom trigger because in my personal experience that has been the most popular implementation. If there's a demand for zooming on other events like hover or grab, I would be open to adding them so don't be afraid to ask.

## License

[MIT](https://github.com/laurenashpole/react-inner-image-zoom/blob/master/LICENSE)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
