import React, { useState, useEffect } from 'react';
import style from '../styles/crew.module.css';
import layoutStyle from '../styles/Layout.module.css';
import router from 'next/router';
import data from '../data/data.json';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

const crew = () => {
  let [selectedItem, setSelectedItem] = useState(data.crew[0]);
  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let indexBody = document.querySelector(`.${layoutStyle.LayoutContainer}`);

    if (window.innerWidth <= 650) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (router.asPath === '/crew') {
      if (window.innerWidth <= 650) {
        indexBody.style.backgroundImage =
          "url('/assets/crew/background-crew-mobile.jpg')";
      } else if (window.innerWidth > 650 && window.innerWidth < 768) {
        indexBody.style.backgroundImage =
          "url('/assets/crew/background-crew-tablet.jpg')";
      } else {
        indexBody.style.backgroundImage =
          "url('/assets/crew/background-crew-desktop.jpg')";
      }
    }

    window.addEventListener('resize', () => {
      if (router.asPath === '/crew') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-desktop.jpg')";
        }
        if (window.innerWidth <= 650) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    });
    return window.removeEventListener('resize', () => {
      if (router.asPath === '/crew') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/crew/background-crew-desktop.jpg')";
        }
        if (window.innerWidth <= 650) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    });
  }, []);

  function selectItem(e, item) {
    setSelectedItem(item);
  }

  return (
    <div className={style.crewContainer}>
      <div className={style.contentContainer}>
        <h2 className={style.header}>
          <span className={style.number}>02</span> Meet your crew
        </h2>
        <div className={style.content}>
          <motion.div
            className={style.innerContent}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            key={nanoid()}
          >
            <h2 className={style.position}>{selectedItem.role}</h2>
            <h2 className={style.name}>{selectedItem.name}</h2>
            <p className={style.description}>{selectedItem.bio}</p>
          </motion.div>
          <div className={style.carouselContainer}>
            {data.crew.map((item) => {
              return (
                <div
                  id={item.name}
                  className={style.carousel}
                  key={item.name}
                  onClick={(e) => selectItem(e, item)}
                  style={{
                    backgroundColor:
                      item.name === selectedItem.name ? 'white' : '#34373e',
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.pictureContainer}>
        {isMobile ? (
          <motion.img
            key={nanoid()}
            className={style.image}
            src={selectedItem.images.png}
            alt={selectedItem.name}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
          />
        ) : (
          <motion.img
            key={nanoid()}
            className={style.image}
            src={selectedItem.images.png}
            alt={selectedItem.name}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default crew;
