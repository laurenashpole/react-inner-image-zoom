import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './404.module.css';

const Custom404 = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>404 - Page Not Found</h2>
        <p>Oops, looks like that page doesn't exist. Maybe head back <Link href="/"><a>home</a></Link>?</p>
      </div>
    </Layout>
  );
};

export default Custom404;
