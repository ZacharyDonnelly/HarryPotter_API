/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globalStyles.css';
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
