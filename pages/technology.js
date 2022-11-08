import React, { useState, useEffect } from 'react';
import style from '../styles/technology.module.css';
import { useRouter } from 'next/router';
import layoutStyle from '../styles/Layout.module.css';
import data from '../data/data.json';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

const technology = () => {
  let router = useRouter();
  let [selectedItem, setSelectedItem] = useState(data.technology[0]);

  useEffect(() => {
    let indexBody = document.querySelector(`.${layoutStyle.LayoutContainer}`);
    if (router.asPath === '/technology') {
      if (window.innerWidth <= 650) {
        indexBody.style.backgroundImage =
          "url('/assets/technology/background-technology-mobile.jpg')";
      } else if (window.innerWidth > 650 && window.innerWidth < 768) {
        indexBody.style.backgroundImage =
          "url('/assets/technology/background-technology-tablet.jpg')";
      } else {
        indexBody.style.backgroundImage =
          "url('/assets/technology/background-technology-desktop.jpg')";
      }
    }

    window.addEventListener('resize', () => {
      if (router.asPath === '/technology') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-desktop.jpg')";
        }
      }
    });
    return window.removeEventListener('resize', () => {
      if (router.asPath === '/technology') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/technology/background-technology-desktop.jpg')";
        }
      }
    });
  }, []);

  function changeSelectedItem(e, item) {
    setSelectedItem(item);
  }

  return (
    <div className={style.technologyContainer}>
      <div className={style.contentContainer}>
        <h2 className={style.heading}>
          <span className={style.number}>03</span> space Launch 101
        </h2>
        <div className={style.mainContent}>
          <div className={style.carousel}>
            {data.technology.map((item) => {
              return (
                <div
                  onClick={(e) => changeSelectedItem(e, item)}
                  className={style.carouselItem}
                  id={item.name}
                  key={item.name}
                  style={{
                    backgroundColor: item === selectedItem ? 'white' : '',
                    color: item === selectedItem ? 'black' : 'white',
                  }}
                >
                  {data.technology.indexOf(item) + 1}
                </div>
              );
            })}
          </div>
          <motion.div
            className={style.content}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            key={nanoid()}
          >
            <h3 className={style.innerHeader}>The Terminology...</h3>
            <h2 className={style.name}>{selectedItem.name}</h2>
            <p className={style.description}>{selectedItem.description}</p>
          </motion.div>
        </div>
      </div>
      <div className={style.pictureContainer}>
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className={style.image}
          src={selectedItem.images.portrait}
          alt={selectedItem.name}
          key={nanoid()}
        />
      </div>
    </div>
  );
};

export default technology;
