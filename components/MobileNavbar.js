import React, { useEffect, useState } from 'react';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNavbar = ({ setShowMobileMenu, showMobileMenu }) => {
  let myStyle = {
    width: showMobileMenu ? '50%' : '0%',
  };

  const router = useRouter();
  let style,
    style1,
    style2,
    style3 = {};
  if (router.asPath === '/') {
    style = {
      borderRight: '2px solid white',
    };
  }
  if (router.asPath === '/destination') {
    style1 = {
      borderRight: '2px solid white',
    };
  }
  if (router.asPath === '/crew') {
    style2 = {
      borderRight: '2px solid white',
    };
  }
  if (router.asPath === '/technology') {
    style3 = {
      borderRight: '2px solid white',
    };
  }

  return (
    <div className={styles.mobileLinksContainer} style={myStyle}>
      {showMobileMenu && (
        <img
          className={styles.close}
          src="/assets/shared/icon-close.svg"
          alt="close menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      )}
      {showMobileMenu && (
        <ul className={styles.mobileList}>
          <li style={style}>
            <div>
              <span className={styles.number}>00 </span>
              <Link href="/"> HOME</Link>
            </div>
          </li>
          <li style={style1}>
            <div>
              <span className={styles.number}>01 </span>
              <Link href="/destination">DESTINATION</Link>
            </div>
          </li>
          <li style={style2}>
            <div>
              <span className={styles.number}>02 </span>
              <Link href="/crew">CREW</Link>
            </div>
          </li>
          <li style={style3}>
            <div>
              <span className={styles.number}>03 </span>
              <Link href="/technology">TECHNOLOGY</Link>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
