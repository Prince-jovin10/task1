import React from 'react';
import styles from './Holiday.module.css';
import Munnar from '../Assets/TrendingDestinations/Ooty.jpg';



const Holiday = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vacation rentals for every kind of trip</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Bungalows"
          />
          <h3 className={styles.cardTitle}>Bungalows</h3>
        </div>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Villas"
          />
          <h3 className={styles.cardTitle}>Villas</h3>
        </div>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Campsites & boats "
          />
          <h3 className={styles.cardTitle}>Campsites & boats</h3>
        </div>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Apartments"
          />
          <h3 className={styles.cardTitle}>Apartments</h3>
        </div>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Hotels"
          />
          <h3 className={styles.cardTitle}>Hotels</h3>
        </div>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={Munnar}
            alt="Resorts"
          />
          <h3 className={styles.cardTitle}>Resorts</h3>
        </div>
      </div>
    </div>
  );
};

export default Holiday;