# Changelog

## [3.0.2](https://github.com/laurenashpole/react-inner-image-zoom/compare/v3.0.1...v3.0.2) (2022-07-22)


### Fixed

- A bug re-zooming after clicking the close button on non-touch devices when `zoomPreload` is false.

🎉🎉🎉 Special thanks to [MaxDAyala](https://github.com/MaxdAyala) for tackling the following:

- A Firefox error when the zoomed image is dragged to the far left of the container.
- The timing of the fade out `visibility` and `opacity` transitions.
- An intermittent issue where zooming became disabled by panning in and out at a fast speed.

## [3.0.1](https://github.com/laurenashpole/react-inner-image-zoom/compare/v3.0.0...v3.0.1) (2022-06-12)

### Fixed

- Added `prop-types` to the `peerDependencies`.

## [3.0.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v2.1.0...v3.0.0) (2022-01-03)

### Changed

- Replaced `srcSet`, `sizes`, `alt`, and `title` props with `imgAttributes` to set the original image's attributes.
- Show close button when moveType is set to "drag" on all breakpoints.
- Switched from `setTimeout` to `onTransitionEnd` to check that zoomed image has finished fading out.

### Added

- This handy CHANGELOG.

### Fixed

- Added `stopPropagation` on touchmove to prevent events below fullscreen modal.

##  [2.1.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v2.0.3...v2.1.0) (2021-08-30)

### Added

- `title` prop to add attribute to original image.

##  [2.0.3](https://github.com/laurenashpole/react-inner-image-zoom/compare/v2.0.2...v2.0.3) (2021-08-05)

### Changed

- Use `touch-action` CSS property instead of `preventDefault` to prevent scroll on touchmove and drag.

### Fixed

- Sporadic missing zoom image in fullscreen modal caused by missing dimensions and incorrect positioning.

##  [2.0.2](https://github.com/laurenashpole/react-inner-image-zoom/compare/v2.0.1...v2.0.2) (2021-06-15)

### Fixed

- Incorrect initial zoom position in fullscreen modal.
- Persist the zoomed image after zoom out if `zoomPreload` is true.

##  [2.0.1](https://github.com/laurenashpole/react-inner-image-zoom/compare/v2.0.0...v2.0.1) (2021-03-12)

### Fixed

- Set the scaled image size based on `naturalWidth` and `naturalHeight` instead of `offsetWidth` and `offsetHeight`.

##  [2.0.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.3.0...v2.0.0) (2021-03-03)

### Changed

- Refactored using React hooks. All versions after 2.0.0 require React v16.8.0 or above.
- Renamed `startsActive` to `zoomPreload`

### Added

- `hideHint` prop to hide the magnifying glass icon.
- `hideCloseButton` prop to hide the close button on touch devices.
- `width`, `height`, and `hasSpacer` props to set the original image's width and height attributes and optionally generate a spacer based on those values to avoid cumulative layout shift. 
- CONTRIBUTING guide.
- ESLint and Prettier formatting.

##  [1.3.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.2.0...v1.3.0) (2020-11-24)

### Added

- `zoomScale` prop to set the size of the zoomed image.
- `startsActive` prop to load the zoomed image on render.

##  [1.2.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.1.1...v1.2.0) (2020-11-21)

### Added

- `zoomType` prop with "hover" option to trigger zoom on hover.

##  [1.1.1](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.1.0...v1.1.1) (2020-07-13)

### Fixed

- Removed unnecessary dragend events when image is not zoomed.

##  [1.1.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.0.6...v1.1.0) (2020-07-12)

### Added

- `moveType` prop with "drag" option for drag to move functionality on non-touch devices.

## [1.0.6](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.0.5...v1.0.6) (2020-05-22)

### Fixed

- Hide original image on zoom to support transparent zoom images.

## [1.0.5](https://github.com/laurenashpole/react-inner-image-zoom/compare/v1.0.0...v1.0.5) (2019-10-15)

### Changed

- Removed `styles.css` import from React component to allow for a greater variety of build approaches.

### Added

- Minified CSS file `styles.min.css`.
- "Styling" section in README file.

## [1.0.0](https://github.com/laurenashpole/react-inner-image-zoom/compare/e8e458231a32831a4332b4c009e7df2d68535ada...v1.0.0) (2019-06-19)

### Added

- InnerImageZoom React component.
- README and LICENSE.
