import PropTypes from 'prop-types';
import Meta from './Meta';
import styles from './layout.styles.js';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <main className="main">{children}</main>

      <style jsx>
        {styles}
      </style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Layout;
