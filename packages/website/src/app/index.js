import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../components/loader';
import * as styles from './index.module.scss';

const Home = () => {
  const GET_CHAR = gql`
    {
      character(filter: { name: "Harry Potter" }) {
        id
        name
        actor
        house
        gender
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_CHAR);

  if (loading) return <Loader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(data.character);
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
          <Link to="about" className={styles.link}>
            See More &gt;
          </Link>
        </div>
      </div>
      <span style={{ fontSize: 14, padding: '1rem .95rem 0 0' }}>
        {data.character.name}
      </span>
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
