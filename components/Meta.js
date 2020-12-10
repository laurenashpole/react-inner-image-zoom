import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ children, title, description }) => {
  return (
    <Head>
      <title>{title ? title + ' - ' : ''}React Inner Image Zoom</title>
      <link rel="icon" href="/react-inner-image-zoom/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Mada:300,400,600,900|Frank+Ruhl+Libre:400,900&display=swap" rel="stylesheet" />

      <meta name="description" content={description || 'An open source, responsive React component for zooming images.'} />
      <meta property="og:title" content="React Inner Image Zoom" />
      <meta property="og:url" content="https://laurenashpole.github.io/react-inner-image-zoom" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="An open source, responsive React component for zooming images." />
      <meta property="og:image" content="/react-inner-image-zoom/share.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="React Inner Image Zoom" />
      <meta property="twitter:url" content="https://laurenashpole.github.io/react-inner-image-zoom" />
      <meta property="twitter:description" content="An open source, responsive React component for zooming images." />
      <meta name="twitter:image" content="/react-inner-image-zoom/share.png" />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Meta;
