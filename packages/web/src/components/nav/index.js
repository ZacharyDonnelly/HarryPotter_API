/* eslint-disable react/display-name */
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import Link from 'next/link';
import * as styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link href="/">
            <a className={styles.item}>Home</a>
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href="/about">
            <a className={styles.item}>About</a>
          </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>
          <Link href="/documentation">
            <a className={styles.item}>Documentation</a>
          </Link>
        </Breadcrumb.Section>
      </Breadcrumb>
    </div>
  );
};
export default Nav;
