import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import * as styles from './index.module.scss';

const Home = () => {
  return (
    <>
      <Nav />
      <div className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.border} />
          <header className={styles.header}>The Harry Potter API</header>
          <h2 className={styles.subHeader}>
            &quot;It does not do well to dwell on dreams and forget to live.&quot; -
            Albus Dumbledore.
          </h2>
          <Link href="about">
            <span className={styles.link}>See More &gt;</span>
          </Link>
        </div>
      </div>
      <div className={styles.lowerWrapper}>
        <div className={styles.lower} style={{ margin: '0 !important' }} />
      </div>
      <footer className={styles.footer}>
        <section className={styles.section}>
          <span className={styles.by}>by</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://zachdonnelly.io"
            className={styles.name}>
            Zach Donnelly
          </a>
          <span className={styles.year}>2020</span>
        </section>
      </footer>
    </>
  );
};

export default Home;
