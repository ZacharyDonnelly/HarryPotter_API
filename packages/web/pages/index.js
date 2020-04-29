import React from 'react';
import Link from 'next/link';
import Layout from '../src/components/layout';
import * as styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <Layout title="Harry Potter Api">
      <div className={styles.container}>
        <h3 className={styles.article}>Article</h3>
        <span className={styles.border} />
        <header className={styles.header}>The Art of Doing Nothing</header>
        <h2 className={styles.subHeader}>
          &quot;To love oneself is the beginning of a lifelong romance.&quot; - Oscar
          Wilde
        </h2>
        <Link href="about">
          <a className={styles.link}>Read More &gt;</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
