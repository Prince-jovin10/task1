import React from 'react';
import styles from './FlightsTrip.module.css';
import Munnar from '../Assets/TrendingDestinations/Ooty.jpg';



const FlightsTrip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={Munnar} alt="Singapore" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Singapore</h3>
          <p>31 Oct - 7 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src= {Munnar}alt="Male City" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Male City</h3>
          <p>28 Oct - 4 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={Munnar} alt="Bangkok" />
        <div className={styles.cardContent}>
          <h3>Hyderabad to Bangkok</h3>
          <p>25 Oct - 1 Nov. Round trip</p>
        </div>
      </div>









    </div>
  );
};

export default FlightsTrip;