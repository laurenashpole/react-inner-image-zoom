import Head from 'next/head';
import Layout from '../components/Layout';
import Product from '../components/Product';
import Quickstart from '../components/Quickstart';

const Home = () => {
  return (
    <Layout>
      <Product />
      <Quickstart />
    </Layout>
  )
}

export default Home;
