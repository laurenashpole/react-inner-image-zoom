# react-inner-image-zoom

[Demos](https://laurenashpole.github.io/react-inner-image-zoom)

![GitHub Actions][build-badge] [![npm package][npm-badge]][npm] [![TypeScript definitions on DefinitelyTyped][dt-badge]][dt]

A React component for magnifying an image within its original container. Zoom behavior can be triggered on click or hover and the zoomed image can be moved by dragging on touch devices and either dragging or pan on hover on non-touch devices. The component supports responsive images, loading placeholders, optional fullscreen zoom on mobile, and more.

## Installation

**Note:** Version 2.0.0 introduces React hooks and requires React v16.8.0 or above. To use this package with older versions of React, install with `npm install react-inner-image-zoom@1.3.0` or `yarn add react-inner-image-zoom@1.3.0` instead of the instructions below.

### NPM
```
npm install react-inner-image-zoom
```

### Yarn
```
yarn add react-inner-image-zoom
```

### TypeScript

For TypeScript users, type definitions are available through [DefinitelyTyped](https://definitelytyped.org/) and can be installed with:

```
npm install --save-dev @types/react-inner-image-zoom
```

### Styling

I was originally importing the CSS directly into the component but I've recently realized that makes too many assumptions about the wider build process. You can now download the raw CSS file at:

[/src/InnerImageZoom/styles.css](https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css)

or the minified raw minified version at:

[/src/InnerImageZoom/styles.min.css](https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.min.css)

to include however you see fit. Or, if your setup supports it, import the files directory from your `node_modules` using:

```javascript
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
```

or:

```javascript
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
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
sources | Array | | A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).
width | Number | | Width attribute for original image.
height | Number | | Height attribute for original image.
hasSpacer | Boolean | false | If true, gets the original image's aspect ratio based on the width and height props and creates a spacer to prevent cumulative layout shift.
imgAttributes | Object | | [Img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) and [global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) attributes for the original image (excluding `src`, `width`, `height`, and `style` which are set elsewhere). The imgAttributes keys should follow the [React DOM element](https://reactjs.org/docs/dom-elements.html) naming conventions.
zoomSrc | String | | URL for the larger zoom image. Falls back to original image src if not defined.
zoomScale | Number | 1 | Multiplied against the natural width and height of the zoomed image. This will generally be a decimal (example, 0.9 for 90%).
zoomPreload | Boolean | false | If set to true, preloads the zoom image instead of waiting for mouseenter and (unless on a touch device) persists the image on mouseleave.
moveType | String | pan | `pan` or `drag`. The user behavior for moving zoomed images on non-touch devices.
zoomType | String | click | `click` or `hover`. The user behavior for triggering zoom. When using `hover`, combine with `zoomPreload` to avoid flickering on rapid mouse movements.
fadeDuration | Number | 150 | Fade transition time in milliseconds. If zooming in on transparent images, set this to `0` for best results.
fullscreenOnMobile | Boolean | false | Enables fullscreen zoomed image on touch devices below a specified breakpoint.
mobileBreakpoint | Number | 640 | The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.
hideCloseButton | Boolean | false | Hides the close button on touch devices. If set to true, zoom out is triggered by tap.
hideHint | Boolean | false | Hides the magnifying glass hint.
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

Most of the implementation choices for this component are based on use cases I've encountered in the past. For example, I chose click to zoom as the default because it's been the most requested on product detail pages I've worked on. If there's a demand for additional triggers or other functionality, I'd be open to looking into it so feel free to ask. And if you want to talk through ideas first, check out the [discussions page](https://github.com/laurenashpole/react-inner-image-zoom/discussions).

If you're interested in contributing, check out the guidelines [here](https://github.com/laurenashpole/react-inner-image-zoom/blob/master/CONTRIBUTING.md).

## License

[MIT](https://github.com/laurenashpole/react-inner-image-zoom/blob/master/LICENSE)

[build-badge]: https://github.com/laurenashpole/react-inner-image-zoom/actions/workflows/release.yml/badge.svg

[npm-badge]: http://img.shields.io/npm/v/react-inner-image-zoom.svg?style=flat
[npm]: https://www.npmjs.com/package/react-inner-image-zoom

[dt-badge]: https://definitelytyped.org/badges/standard-flat.svg
[dt]: http://definitelytyped.org
