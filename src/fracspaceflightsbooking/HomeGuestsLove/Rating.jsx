import React from 'react';
import styles from './Rating.module.css';
import Munnar from '../Assets/TrendingDestinations/NewDelhi.jpg';



const Rating = () => {
  return (
    <div className={styles.container}>

      <h3>Homes Guests Love</h3>

      <div className={styles.card}>
        <img src={Munnar}  alt="Aparthotel Stare Miasto" />
        <div className={styles.cardContent}>
          <h3>Aparthotel Stare Miasto</h3>
          <p>Old Town, Poland, Krakow</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="7Seasons Apartments Budapest" />
        <div className={styles.cardContent}>
          <h3>7Seasons Apartments Budapest</h3>
          <p>06. Terézváros, Hungary, Budapest</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</ span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="7Seasons Apartments Budapest" />
        <div className={styles.cardContent}>
          <h3>7Seasons Apartments Budapest</h3>
          <p>06. Terézváros, Hungary, Budapest</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</ span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="7Seasons Apartments Budapest" />
        <div className={styles.cardContent}>
          <h3>7Seasons Apartments Budapest</h3>
          <p>06. Terézváros, Hungary, Budapest</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</ span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>


      <div className={styles.card}>
        <img src={Munnar} alt="7Seasons Apartments Budapest" />
        <div className={styles.cardContent}>
          <h3>7Seasons Apartments Budapest</h3>
          <p>06. Terézváros, Hungary, Budapest</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</ span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Munnar} alt="7Seasons Apartments Budapest" />
        <div className={styles.cardContent}>
          <h3>7Seasons Apartments Budapest</h3>
          <p>06. Terézváros, Hungary, Budapest</p>
          <div className={styles.rating}>
            <span className={styles.ratingScore}>8.8</ span>
            <span className={styles.ratingText}>Excellent</span>
            <span className={styles.ratingCount}>• 3,028 reviews</span>
          </div>
          <p className={styles.price}>Starting from ₹ 11,132</p>
        </div>
      </div>    









    </div>
  );
};

export default Rating;