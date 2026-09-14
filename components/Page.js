import styles from './page.styles.js';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Moved to innerimagezoom.com - React Inner Image Zoom</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, follow" />
        <meta httpEquiv="refresh" content="0; url=https://innerimagezoom.com/" />
        <link rel="canonical" href="https://innerimagezoom.com/" />
      </Head>

      <main className="main">
        <h1>React Inner Image Zoom<br />has moved to <a href="https://innerimagezoom.com/">innerimagezoom.com</a></h1>
      </main>
 
      <style jsx>
        {styles}
      </style>
    </>
  );
};

export default Page;
