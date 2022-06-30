import '../styles/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
import React from 'react';
import '../styles/Slider.css';
import { StateContext } from '../context/StateContex';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'Z-50',
  delay: 100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
