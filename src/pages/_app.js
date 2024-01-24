import "@/styles/globals.css";
import Head from 'next/head';
import { Gtm, GTM_ID } from '../components/Gtm';
import { useEffect } from 'react';

function App({ Component, pageProps }){

  useEffect(() => {
    //register the service worker in production 
    if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered: ', registration);
        })
        .catch(registrationError => {
          console.log('Service Worker registration failed: ', registrationError);
        });
    }
  }, []);

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

