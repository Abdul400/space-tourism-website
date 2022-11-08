import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import layoutStyle from '../styles/Layout.module.css';
import MobileNavbar from './MobileNavbar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   let indexBody = document.querySelector(`.${layoutStyle.LayoutContainer}`);
  //   if (router.asPath === '/') {
  //     if (window.innerWidth <= 650) {
  //       indexBody.style.backgroundImage =
  //         "url('/assets/home/background-home-mobile.jpg')";
  //     } else if (window.innerWidth > 650 && window.innerWidth < 768) {
  //       indexBody.style.backgroundImage =
  //         "url('/assets/home/background-home-tablet.jpg')";
  //     } else {
  //       indexBody.style.backgroundImage =
  //         "url('/assets/home/background-home-desktop.jpg')";
  //     }
  //   }
  //   console.log(indexBody);
  //   window.addEventListener('resize', () => {
  //     if (router.asPath === '/') {
  //       if (window.innerWidth <= 650) {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-mobile.jpg')";
  //       } else if (window.innerWidth > 650 && window.innerWidth < 768) {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-tablet.jpg')";
  //       } else {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-desktop.jpg')";
  //       }
  //     }
  //   });
  //   return window.removeEventListener('resize', () => {
  //     if (router.asPath === '/') {
  //       if (window.innerWidth <= 650) {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-mobile.jpg')";
  //       } else if (window.innerWidth > 650 && window.innerWidth < 768) {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-tablet.jpg')";
  //       } else {
  //         indexBody.style.backgroundImage =
  //           "url('/assets/home/background-home-desktop.jpg')";
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div className={layoutStyle.LayoutContainer}>
      <MobileNavbar
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <Navbar
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {children}
    </div>
  );
};

export default Layout;
