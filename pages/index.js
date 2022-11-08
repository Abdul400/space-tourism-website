import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LayoutStyle from '../styles/Layout.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let indexBody = document.querySelector(`.${LayoutStyle.LayoutContainer}`);
    if (router.asPath === '/') {
      if (window.innerWidth <= 650) {
        indexBody.style.backgroundImage =
          "url('/assets/home/background-home-mobile.jpg')";
      } else if (window.innerWidth > 650 && window.innerWidth < 768) {
        indexBody.style.backgroundImage =
          "url('/assets/home/background-home-tablet.jpg')";
      } else {
        indexBody.style.backgroundImage =
          "url('/assets/home/background-home-desktop.jpg')";
      }
    }
    window.addEventListener('resize', () => {
      if (router.asPath === '/') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-desktop.jpg')";
        }
      }
    });
    return window.removeEventListener('resize', () => {
      if (router.asPath === '/') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/home/background-home-desktop.jpg')";
        }
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className={styles.explorer}
        onClick={() => router.push('/destination')}
      >
        <div className={styles.circle}>
          <p> Explore</p>
        </div>
        <div className={styles.circle2}></div>
      </div>
    </div>
  );
}
