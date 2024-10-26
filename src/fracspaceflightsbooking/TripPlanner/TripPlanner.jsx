import React, { useState } from 'react';
import styles from './TripPlanner.module.css';
import Munnar from '../Assets/TrendingDestinations/Ooty.jpg'
import NewDelhi from '../Assets/TrendingDestinations/NewDelhi.jpg'
import Ooty from '../Assets/Destination/Munnar.JPG';


const TripPlanner = () => {
  const [selectedOption, setSelectedOption] = useState('Outdoors');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const destinations = {
    Outdoors: [
      {
        name: 'Panchgani',
        image: Munnar,
        distance: '490 km away',
      },
      {
        name: 'Mahabaleshwar',
        image: Ooty,
        distance: '505 km away',
      },
      {
        name: 'Lonavala',
        image: Munnar,
        distance: '551 km away',
      },
      {
        name: 'Yercaud',
        image: NewDelhi,
        distance: '621 km away',
      },
      {
        name: 'Palakkad',
        image: NewDelhi,
        distance: '780 km away',
      },
      {
        name: 'Mysuru',
        image: NewDelhi,
        distance: '921 km away',
      }, 
    ],
    City: [
      {
        name: 'Chikmagalūr',
        image: NewDelhi,
        distance: '531 km away',
      },
      {
        name: 'Bhuvaneshwar',
        image: NewDelhi,
        distance: '800 km away',
      },
    ],
    Beach: [
      {
        name: 'Madikeri',
        image: Munnar,
        distance: '620 km away',
      },
      {
        name: 'Madurai',
        image: Munnar,
        distance: '650 km away',
      }
    
    
    
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>Trip and Easy Planner </h2>
        <button
          className={styles.optionButton}
          onClick={() => handleOptionChange('Outdoors')}
        ><span/>
          <span className={styles.optionIcon}>🚲</span>
          Outdoors
        </button>
        <button
          className={styles.optionButton}
          onClick={() => handleOptionChange('City')}
        >
          <span className={styles.optionIcon}>🏙️</span>
          City
        </button>
        <button className={styles.optionButton}
          onClick={() => handleOptionChange('Beach')}
        >
          <span className={styles.optionIcon}>🏖️</span>
          Beach
        </button>
      </div>
      <div className={styles.imageContainer}>
        {destinations[selectedOption].map((destination, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={destination.image} alt={destination.name} />
            <div className={styles.imageContent}>
              <h3>{destination.name}</h3>
              <p>{destination.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPlanner;