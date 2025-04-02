import { Fragment, useEffect } from 'react';
import styles from './redirect.styles.js';

const Redirect = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://innerimagezoom.com?utm_source=react-inner-image-zoom';
    }, 10000);
  }, []);

  return(
    <Fragment>
      <div className="redirect">
        <div className="redirect__overlay">
          <div className="redirect__message">
            <p className="redirect__p">
              This site has moved to{" "}
              <a href="https://innerimagezoom.com?utm_source=react-inner-image-zoom">innerimagezoom.com</a>.
            </p>

            <p className="redirect__p">
              You should be redirected shortly or you can{" "}
              <a href="https://innerimagezoom.com?utm_source=react-inner-image-zoom">click here</a> to get
              moving right now!
            </p>
          </div>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </Fragment>
  );
};

export default Redirect;
