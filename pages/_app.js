import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>
          Space Tourism |{' '}
          {router.asPath === '/' ? 'Home' : router.route.slice(1)}
        </title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../assets/shared/logo.svg"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
