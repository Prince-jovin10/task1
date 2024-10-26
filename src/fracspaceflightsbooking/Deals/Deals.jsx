import React from 'react';
import styles from './Deals.module.css';
import Munnar from '../Assets/TrendingDestinations/Ooty.jpg';

const Deals = () => {
  return (
    <div className={styles.dealsContainer}>
      <h2>Deals for the weekend</h2>
      <p>Save on stays for October 25 - October 27</p>
      <div className={styles.dealsGrid}>
        <a href="https://link-to-hotel-1.com" className={styles.dealItem}>
          <img src={Munnar} alt="Hotel 1" className={styles.dealImage} style={{ width: '100px', height: '100px' }} />
          <div className={styles.dealInfo}>
            <h3>Hotel The Heights A Family Hotel Near IGI Airport</h3>
            <p>New Delhi, India</p>
            <div className={styles.rating}>
              <span>10.0</span> Exceptional · 17 reviews
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>₹ 5,102</span> <span className={styles.newPrice}>₹ 1,020</span>
            </div>
          </div>
        </a>

        <a href="https://link-to-hotel-2.com" className={styles.dealItem}>
          <img src={Munnar} alt="Hotel 2" className={styles.dealImage} style={{ width: '100px', height: '100px' }} />
          <div className={styles.dealInfo}>
            <h3>Ramada Encore Domlur</h3>
            <p>Bangalore, India</p>
            <div className={styles.rating}>
              <span>8.1</span> Very Good · 551 reviews
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>₹ 8,500</span> <span className={styles.newPrice}>₹ 6,800</span>
            </div>
          </div>
        </a>

        <a href="https://link-to-hotel-3.com" className={styles.dealItem}>
          <img src={Munnar} alt="Hotel 3" className={styles.dealImage} style={{ width: '100px', height: '100px' }} />
          <div className={styles.dealInfo}>
            <h3>The Park Hyderabad, Banjara Hills near Hussain Sagar Lake</h3>
            <p>Hyderabad, India</p>
            <div className={styles.rating}>
              <span>9.2</span> Wonderful · 816 reviews
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>₹ 13,400</span> <span className={styles.newPrice}>₹ 12,814</span>
            </div>
          </div>
        </a>

        <a href="https://link-to-hotel-4.com" className={styles.dealItem}>
          <img src={Munnar} alt="Hotel 4" className={styles.dealImage} style={{ width: '100px', height: '100px' }} />
          <div className={styles.dealInfo}>
            <h3>Hotel Mehul Int-New Delhi</h3>
            <p>New Delhi, India</p>
            <div className={styles.rating}>
              <span>10.0</span> Exceptional · 42 reviews
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>₹ 9,190</span> <span className={styles.newPrice}>₹ 3,679</span>
              <span className={styles.limitedTime}>Limited-time Deal</span>
            </div>
          </div>
        </a>

        <a href="https://link-to-hotel-4.com" className={styles.dealItem}>
          <img src={Munnar} alt="Hotel 4" className={styles.dealImage} style={{ width: '100px', height: '100px' }} />
          <div className={styles.dealInfo}>
            <h3>Hotel Mehul Int-New Delhi</h3>
            <p>New Delhi, India</p>
            <div className={styles.rating}>
              <span>10.0</span> Exceptional · 42 reviews
            </div>
            <div className={styles.price}>
              <span className={styles.oldPrice}>₹ 9,190</span> <span className={styles.newPrice}>₹ 3,679</span>
              <span className={styles.limitedTime}>Limited-time Deal</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Deals;