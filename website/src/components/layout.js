/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" to="/static/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <a
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
        />
      </Head>
      <div>{children}</div>
    </>
  );
}
