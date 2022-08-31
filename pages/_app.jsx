import Head from 'next/head';
import Navbar from './Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>     
     

      <Head>
        <title>Pokedex</title>
        <meta name="description" content="pokedex by mimi" />
      </Head>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
