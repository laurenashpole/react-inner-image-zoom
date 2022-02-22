_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{AiPt:function(e,t,i){e.exports={container:"Docs_container__qi2p3",heading:"Docs_heading__2CuED",nav:"Docs_nav__C9dJl",content:"Docs_content__2gX2P",code:"Docs_code__3r4k4",inlineCode:"Docs_inlineCode__30b-6",propsList:"Docs_propsList__3hI8W"}},IYmA:function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),s=i("5Yp1"),r=i("0TKL"),c=i("Uy1Q"),o=i.n(c),a=i("ZQVT"),l=i.n(a),d=i("AiPt"),h=i.n(d);r.a.registerLanguage("javascript",o.a);t.default=function(){return Object(n.jsx)(s.a,{title:"Docs",children:Object(n.jsxs)("div",{className:h.a.container,children:[Object(n.jsx)("h2",{className:h.a.heading,children:"Docs"}),Object(n.jsxs)("nav",{className:h.a.nav,"aria-label":"Topics",children:[Object(n.jsx)("a",{href:"#installation",children:"Installation"}),Object(n.jsx)("a",{href:"#styling",children:"Styling"}),Object(n.jsx)("a",{href:"#usage",children:"Usage"}),Object(n.jsx)("a",{href:"#props",children:"Props"})]}),Object(n.jsxs)("section",{className:h.a.content,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{id:"installation",children:"Installation"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Note:"})," Version 2.0.0 introduces React hooks and requires React v16.8.0 or above. To use this package with older versions of React, install with ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"npm install react-inner-image-zoom@1.3.0"})," or ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"yarn add react-inner-image-zoom@1.3.0"})," instead of the instructions below."]}),Object(n.jsx)("h4",{children:"NPM"}),Object(n.jsx)("pre",{className:h.a.code,children:Object(n.jsx)("code",{children:"npm install react-inner-image-zoom"})}),Object(n.jsx)("h4",{children:"Yarn"}),Object(n.jsx)("pre",{className:h.a.code,children:Object(n.jsx)("code",{children:"yarn add react-inner-image-zoom"})}),Object(n.jsx)("h4",{children:"TypeScript"}),Object(n.jsx)("p",{children:"For TypeScript users, type definitions are available through DefinitelyTyped and can be installed with:"}),Object(n.jsx)("pre",{className:h.a.code,children:Object(n.jsx)("code",{children:"npm install --save-dev @types/react-inner-image-zoom"})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{id:"styling",children:"Styling"}),Object(n.jsx)("h4",{children:"Download"}),Object(n.jsx)("p",{children:"Grab the raw CSS from Github to use however you see fit:"}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css",target:"_blank",rel:"noopener noreferrer",children:"styles.css"})}),Object(n.jsx)("p",{children:"or the minified version:"}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.min.css",target:"_blank",rel:"noopener noreferrer",children:"styles.min.css"})}),Object(n.jsx)("h4",{children:"Import"}),Object(n.jsx)("p",{children:"If your setup supports it, import the CSS directly from your node_modules:"}),Object(n.jsx)(r.a,{language:"javascript|html",style:l.a,customStyle:{margin:0,padding:"1.5rem",background:"#f2f3f7",borderRadius:"1px"},children:"import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';"}),Object(n.jsx)("p",{children:"or the minified version:"}),Object(n.jsx)(r.a,{language:"javascript|html",style:l.a,customStyle:{margin:0,padding:"1.5rem",background:"#f2f3f7",borderRadius:"1px"},children:"import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{id:"usage",children:"Usage"}),Object(n.jsx)("p",{children:"Import and render the component:"}),Object(n.jsx)(r.a,{language:"javascript|html",style:l.a,customStyle:{margin:0,padding:"1.5rem",background:"#f2f3f7",borderRadius:"1px"},children:'import InnerImageZoom from \'react-inner-image-zoom\';\n\n...\n\n<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />'})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{id:"props",children:"Props"}),Object(n.jsxs)("ul",{className:h.a.propsList,children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"src (String): "}),"Required. URL for the original image."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"sources (Array): "}),"A list of image sources for using the picture tag to serve the appropriate original image (see below for more details)."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"width (Number): "}),"Width attribute for original image."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"height (Number): "}),"Height attribute for original image."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"hasSpacer (Boolean): "}),"Default false. If true, gets the original image's aspect ratio based on the width and height props and creates a spacer to prevent cumulative layout shift."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"imgAttributes (Object): "}),Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes",target:"_blank",rel:"noopener noreferrer",children:"Img"})," and ",Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes",target:"_blank",rel:"noopener noreferrer",children:"global"})," attributes for the original image (excluding ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"src"}),", ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"width"}),", ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"height"}),", and ",Object(n.jsx)("code",{className:h.a.inlineCode,children:"style"})," which are set elsewhere). The imgAttributes keys should follow the ",Object(n.jsx)("a",{href:"https://reactjs.org/docs/dom-elements.html",target:"_blank",rel:"noopener noreferrer",children:"React DOM element"})," naming conventions."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"zoomSrc (String): "}),"URL for the larger zoom image. Falls back to original image src if not defined."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"zoomScale (Number): "}),"Default 1. Multiplied against the natural width and height of the zoomed image. This will generally be a decimal (example, 0.9 for 90%)."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"zoomPreload (Boolean): "}),"Default false If set to true, preloads the zoom image instead of waiting for mouseenter and (unless on a touch device) persists the image on mouseleave."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"moveType (String): "}),"Default pan. Accepts pan or drag options. The user behavior for moving zoomed images on non-touch devices."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"zoomType (String): "}),"Default click. Accepts click or hover options. The user behavior for triggering zoom. When using hover, combine with zoomPreload to avoid flickering on rapid mouse movements."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"fadeDuration (Number): "}),"Default 150. Fade transition time in milliseconds. If zooming in on transparent images, set this to 0 for best results."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"fullscreenOnMobile (Boolean): "}),"Default false. Enables fullscreen zoomed image on touch devices below a specified breakpoint."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"mobileBreakpoint (Number): "}),"Default 640. The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"hideCloseButton (Boolean): "}),"Default false. Hides the close button on touch devices. If set to true, zoom out is triggered by tap."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"hideHint (Boolean): "}),"Default false. Hides the magnifying glass hint."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"className (String): "}),"Custom classname for styling the component."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"afterZoomIn (Function): "}),"Function to be called after zoom in."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"afterZoomOut (Function): "}),"Function to be called after zoom out."]})]}),Object(n.jsx)("h4",{children:"Sources"}),Object(n.jsxs)("p",{children:["This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details ",Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",children:"here"}),": "]}),Object(n.jsxs)("ul",{className:h.a.propsList,children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"srcSet (String): "}),"Srcset attribute for source tag."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"sizes (String): "}),"Sizes attribute for source tag."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"media (String): "}),"An attribute containing a media condition for use with the srcset."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"type (String): "}),"An image MIME type. This is useful for using newer formats like WebP."]})]})]})]})]})})}},zYe7:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return i("IYmA")}])}},[["zYe7",0,2,1,3,4]]]);