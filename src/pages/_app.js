import "@/styles/globals.css";
import Head from 'next/head';
import { Gtm, GTM_ID } from '../components/Gtm';

function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <Gtm />
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  );
}

export default App;

