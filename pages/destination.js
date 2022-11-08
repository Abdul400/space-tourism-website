import React, { useState, useEffect } from 'react';
import layoutStyle from '../styles/Layout.module.css';
import { useRouter } from 'next/router';
import style from '../styles/destination.module.css';
import data from '../data/data.json';
import { nanoid } from 'nanoid';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion } from 'framer-motion';

const destination = () => {
  let [displayArray, setDisplayArray] = useState(data.destinations[0]);
  let [selectedItem, setSelectedItem] = useState('Moon');

  const router = useRouter();
  useEffect(() => {
    let indexBody = document.querySelector(`.${layoutStyle.LayoutContainer}`);
    if (router.asPath === '/destination') {
      if (window.innerWidth <= 650) {
        indexBody.style.backgroundImage =
          "url('/assets/destination/background-destination-mobile.jpg')";
      } else if (window.innerWidth > 650 && window.innerWidth < 768) {
        indexBody.style.backgroundImage =
          "url('/assets/destination/background-destination-tablet.jpg')";
      } else {
        indexBody.style.backgroundImage =
          "url('/assets/destination/background-destination-desktop.jpg')";
      }
    }

    window.addEventListener('resize', () => {
      if (router.asPath === '/destination') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-desktop.jpg')";
        }
      }
    });
    return window.removeEventListener('resize', () => {
      if (router.asPath === '/destination') {
        if (window.innerWidth <= 650) {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-mobile.jpg')";
        } else if (window.innerWidth > 650 && window.innerWidth < 768) {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-tablet.jpg')";
        } else {
          indexBody.style.backgroundImage =
            "url('/assets/destination/background-destination-desktop.jpg')";
        }
      }
    });
  }, []);

  function showItem(e, item) {
    setSelectedItem(e.target.textContent);
    for (let i = 0; i < data.destinations.length; i++) {
      if (e.target.textContent === data.destinations[i].name) {
        setDisplayArray(data.destinations[i]);
      }
    }
  }

  return (
    <div className={style.destinationContainer}>
      <div className={style.pictureContainer}>
        <div className={style.legend}>
          <h2 className={style.destination}>
            <span className={style.number}>01</span>
            pick your destination
          </h2>
        </div>
        <div className={style.gallery}>
          <motion.img
            key={nanoid()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            className={style.image}
            src={displayArray.images.png}
            alt={displayArray.name}
          />
        </div>
      </div>
      <div className={style.contentContainer}>
        <ul className={style.options}>
          {data.destinations.map((item) => {
            return (
              <li
                style={{
                  borderBottom:
                    item.name === selectedItem ? '4px solid white' : '',
                }}
                key={item.name}
                onClick={(e) => showItem(e, item)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <motion.div
          key={nanoid()}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className={style.contents}
        >
          <h2 className={style.itemName}>{displayArray.name}</h2>
          <p className={style.description}>{displayArray.description}</p>
          <div className={style.horizontal}></div>
          <div className={style.bottom}>
            <div className={style.left}>
              <p className={style.average}>Avg. Distance</p>
              <p className={style.data}>{displayArray.distance}</p>
            </div>
            <div className={style.right}>
              <p className={style.average}>Est. Travel Time</p>
              <p className={style.data}>{displayArray.travel}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default destination;
