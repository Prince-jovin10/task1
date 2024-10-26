import React from 'react';
import styles from './FlightsHomePage.module.css';

const FlightsHomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Compare and book flights with ease</h1>
        <p>Discover your next dream destination</p>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchOptions}>
          <label htmlFor="roundTrip">
            <input type="radio" id="roundTrip" name="tripType" defaultChecked />
            Round trip
          </label>
          <label htmlFor="oneWay">
            <input type="radio" id="oneWay" name="tripType" />
            One way
          </label>
          <label htmlFor="multiCity">
            <input type="radio" id="multiCity" name="tripType" />
            Multi-city
          </label>
          <select name="class" id="class">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
          <label htmlFor="directFlights">
            <input type="checkbox" id="directFlights" name="directFlights" />
            Direct flights only
          </label>
        </div>
        <div className={styles.searchInputs}>
          <div className={styles.input}>
            <div className={styles.icon}>✈</div>
            <input type="text" placeholder="HYD Rajiv Gandhi International A..." />
          </div>
          <div className={styles.input}>
            <div className={styles.icon}>↔</div>
            <input type="text" placeholder="Where to?" />
          </div>
          <div className={styles.input}>
            <div className={styles.icon}>🗓</div>
            <input type="text" placeholder="Sat 23 Nov - Sat 30 N..." />
          </div>
          <div className={styles.input}>
            <div className={styles.icon}>👤</div>
            <input type="text" placeholder="1 adult" />
          </div>
          < button>Search flights</button>
        </div>
      </div>
    </div>
  );
};

export default FlightsHomePage;