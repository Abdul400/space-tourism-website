import React, { useEffect, useState } from 'react';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ setShowMobileMenu, showMobileMenu }) => {
  let [isDesktop, setIsDesktop] = useState(true);
  let [myWindow, setMyWindow] = useState(0);

  const router = useRouter();
  let style,
    style1,
    style2,
    style3 = {};
  if (router.asPath === '/') {
    style = {
      borderBottom: '4px solid white',
    };
  }
  if (router.asPath === '/destination') {
    style1 = {
      borderBottom: '4px solid white',
    };
  }
  if (router.asPath === '/crew') {
    style2 = {
      borderBottom: '4px solid white',
    };
  }
  if (router.asPath === '/technology') {
    style3 = {
      borderBottom: '4px solid white',
    };
  }

  useEffect(() => {
    setMyWindow(window.innerWidth);
    window.addEventListener('resize', () => {
      setMyWindow(window.innerWidth);
      if (window.innerWidth <= 650) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
        setShowMobileMenu(false);
      }
    });

    return window.removeEventListener('resize', () => {
      setMyWindow(window.innerWidth);
      if (window.innerWidth <= 650) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    });
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/assets/shared/logo.svg" alt="logo" />
        {isDesktop && myWindow >= 650 && (
          <div className={styles.horizontal}></div>
        )}
      </div>
      {isDesktop && myWindow >= 650 ? (
        <div className={styles.linksContainer}>
          <ul className={styles.list}>
            <li style={style} onClick={() => router.push('/')}>
              <div>
                {isDesktop && <span className={styles.number}>00 </span>}
                {isDesktop && <Link href="/"> HOME</Link>}
              </div>
            </li>
            <li style={style1} onClick={() => router.push('/destination')}>
              <div>
                {isDesktop && <span className={styles.number}>01 </span>}
                {isDesktop && <Link href="/destination">DESTINATION</Link>}
              </div>
            </li>
            <li style={style2} onClick={() => router.push('/crew')}>
              <div>
                {isDesktop && <span className={styles.number}>02 </span>}
                {isDesktop && <Link href="/crew">CREW</Link>}
              </div>
            </li>
            <li style={style3} onClick={() => router.push('/technology')}>
              <div>
                {isDesktop && <span className={styles.number}>03 </span>}
                {isDesktop && <Link href="/technology">TECHNOLOGY</Link>}
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <img
          className={styles.hamburger}
          src="/assets/shared/icon-hamburger.svg"
          alt="mobile menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      )}
    </div>
  );
};

export default Navbar;
