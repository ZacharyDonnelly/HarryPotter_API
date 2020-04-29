import React from 'react';
import Layout from '../src/components/layout';
import Link from 'next/link';

const About = () => {
  return (
    <Layout title="ugh">
      <div
        style={{
          color: '#4d4d4d',
          fontSize: '46px',
          fontFamily: 'Proxima nova',
          fontWeight: 600,
          textDecoration: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(50%, 25%)',
        }}>
        <Link href="/">
          <a>GO HOME</a>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
