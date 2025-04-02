import PropTypes from 'prop-types';
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';
import styles from './layout.styles.js';
import Redirect from './Redirect.js';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Nav />
      <main className="main">{children}</main>
      <Footer />
      <Redirect />

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
