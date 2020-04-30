/* eslint-disable react/display-name */
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href="/">
            <span className={styles.item}>Home</span>
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href="/about">
            <span className={styles.item}>About</span>
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href="/documentation">
            <span className={styles.item}>Documentation</span>
          </Link>
        </Breadcrumb.Section>
      </Breadcrumb>
    </div>
  );
};
export default Nav;
