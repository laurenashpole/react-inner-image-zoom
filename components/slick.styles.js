import css from 'styled-jsx/css';

export default css.global`
  /* Slider */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    z-index: 998;
  }

  .slick-active.slick-current {
    z-index: 999;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  /* Arrows */
  .slick-prev,
  .slick-next {
    height: 0;
    padding: 0;
    visibility: hidden;
    -webkit-appearance: none;
    appearance: none;
  }

  @media (min-width: 768px) {
    .slick-prev,
    .slick-next {
      background: #727292;
      width: 52px;
      height: 52px;
      padding: 0 0 0 5px;
      border: 6px solid #f2f3f7;
      outline: none;
      color: transparent;
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 50%;
      display: block;
      visibility: visible;
      cursor: pointer;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: transparent;
      outline: none;
    }

    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }

    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: .25;
    }

    .slick-prev:before,
    .slick-next:before {
      content: " ";
      opacity: .75;
      width: 14px;
      height: 14px;
      margin: 0 auto;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      display: block;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .slick-prev {
      left: 0;
    }

    [dir='rtl'] .slick-prev {
      left : 100%;
      -webkit-transform: translate(-50%, -50%) scaleX(-1);
      -ms-transform: translate(-50%, -50%) scaleX(-1);
      transform: translate(-50%, -50%) scaleX(-1);
    }

    .slick-next{
      left: 100%;
      -webkit-transform: translate(-50%, -50%) scaleX(-1);
      -ms-transform: translate(-50%, -50%) scaleX(-1);
      transform: translate(-50%, -50%) scaleX(-1);
    }

    [dir='rtl'] .slick-next {
      left: 0;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: -20px;
    display: block;
    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    padding: 0;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .slick-dots li button {
    background: transparent;
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 0;
    outline: none;
    color: transparent;
    font-size: 0;
    line-height: 0;
    display: block;
    cursor: pointer;
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }

  .slick-dots li button:before {
    content: " ";
    background: #727292;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.25;
    display: block;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
  }
`;
