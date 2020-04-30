/* eslint-disable react/prop-types */
import React from 'react';
import '../public/global.min.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
