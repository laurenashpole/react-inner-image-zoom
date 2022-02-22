import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-12207477-4" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-12207477-4');
          ` }} />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script async defer src="https://buttons.github.io/buttons.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
