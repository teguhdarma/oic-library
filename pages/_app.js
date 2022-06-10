import '../styles/globals.css';
import React from 'react';

import { StateContext } from '../context/StateContex';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
