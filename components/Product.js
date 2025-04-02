import InnerImageZoom from 'react-inner-image-zoom';
import styles from './product.styles.js';

const Product = () => {
  return(
    <section className="product">
      <div className="product__img">
        <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-1.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-1-large.jpg" imgAttributes={{ alt: 'Product details page style zoomable image' }} />
      </div>

      <div className="product__details">
        <h2>React Inner Image Zoom Component</h2>
        <p>Great for ecommerce product images! An open source React component for magnifying an image within its original container.</p>
        <a className="product__btn" href="https://github.com/laurenashpole/react-inner-image-zoom">View on Github</a>

        <ul className="product__list">
          <li>Details</li>
          <li>Zoom on click or hover</li>
          <li>Move by dragging on touch devices and dragging or panning on hover on non-touch devices</li>
          <li>Supports responsive images</li>
          <li>Can be used with other popular React components</li>
          <li>Photo credit: <a href="https://unsplash.com/photos/jQ0CTkvlz2U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Micheile Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></li>
        </ul>
      </div>

      <style jsx>
        {styles}
      </style>
    </section>
  );
};

export default Product;
