import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => gtag('config', 'UA-12207477-4'));
  }, [router.events]);

  return <Component {...pageProps} />
};

export default App;
