// Explore.js
import React from "react";
import Styles from "./Explore.module.css";
import Munnar from '../Assets/TrendingDestinations/NewDelhi.jpg';

const Explore = () => {
  const destinations = [
    { name: "Goa", properties: "5,251 properties", image: Munnar },
    { name: "Ooty", properties: "471 properties", image: Munnar},
    { name: "Mumbai", properties: "1,652 properties", image: Munnar},
    { name: "New Delhi", properties: "2,919 properties", image: Munnar},
    { name: "Bangalore", properties: "2,044 properties", image: Munnar },
    { name: "Munnar", properties: "512 properties", image: Munnar },
    { name: "Munnar", properties: "512 properties", image: Munnar },
 
 
    { name: "Munnar", properties: "512 properties", image: Munnar },
  ];

  return (
    <div className={Styles.exploreContainer}>
      <h2>Explore India</h2>
      <p>These popular destinations have a lot to offer</p>
      <div className={Styles.exploreScroll}>
        {destinations.map((destination, index) => (
          <div key={index} className={Styles.destinationCard}>
            <img src={destination.image} alt={destination.name} className={Styles.destinationImage} />
            <h3>{destination.name}</h3>
            <p>{destination.properties}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;