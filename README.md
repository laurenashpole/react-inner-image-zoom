# react-inner-image-zoom

[Demos](https://laurenashpole.github.io/react-inner-image-zoom)

A React component for magnifying an image within its original container. The zoom behavior is triggered on click and includes default image panning on hover that switches to drag to move if a touch device is detected. The component supports responsive images and optional fullscreen zoom on mobile.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

## Installation

### NPM
```
npm install react-inner-image-zoom
```

### Yarn
```
yarn add react-inner-image-zoom
```


## Usage

Import and render the component:
```javascript
import InnerImageZoom from 'react-inner-image-zoom';

...

<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />
```

This is the simplest usage. For additional examples, visit the [demo page](https://laurenashpole.github.io/react-inner-image-zoom).


## Props

Prop | Type | Default | Description
--- | --- | --- | ---
src | String | | (Required) URL for the original image.
srcSet | String | | Default srcset attribute for a responsive original image.
sizes | String | | Default sizes attribute for use with srcset.
sources | Array | | A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).
zoomSrc | String | | URL for the larger zoom image. Falls back to original image src if not defined.
alt | String | | Alternative text for the original image.
fadeDuration | Number | 150 | Fade transition time in milliseconds.
fullscreenOnMobile | Boolean | false | Enables fullscreen zoomed image on touch devices below a specified breakpoint.
mobileBreakpoint | Number | 640 | The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.
className | String | | Custom classname for styling the component.
afterZoomIn | Function | | Function to be called after zoom in.
afterZoomOut | Function | | Function to be called after zoom out.

### Sources

This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details on responsive images [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images):

Prop | Type | Default | Description
--- | --- | --- | ---
srcSet | String | | Srcset attribute for source tag.
sizes | String | | Sizes attribute for source tag.
media | String | | An attribute containing a media condition for use with the srcset.
type | String | | An image MIME type. This is useful for using newer formats like WebP.

## Issues

Please submit issues or requests [here](https://github.com/laurenashpole/react-inner-image-zoom/issues).

Most of the implementation choices for this component are based on use cases I've encountered in the past. For example, I chose a click to zoom trigger because it's been the most requested on product detail pages I've worked on. If there's a demand for zoom on hover or other additional functionality, I'd be open to looking into it so feel free to ask.

## License

[MIT](https://github.com/laurenashpole/react-inner-image-zoom/blob/master/LICENSE)

[build-badge]: https://travis-ci.org/laurenashpole/react-inner-image-zoom.svg?branch=master
[build]: https://travis-ci.org/laurenashpole/react-inner-image-zoom

[npm-badge]: http://img.shields.io/npm/v/react-inner-image-zoom.svg?style=flat
[npm]: https://www.npmjs.com/package/react-inner-image-zoom
