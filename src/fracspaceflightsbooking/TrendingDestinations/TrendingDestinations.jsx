import React from "react";
import Styles from "./Destinations.module.css"; 
import NewDelhi from '../Assets/TrendingDestinations/NewDelhi.jpg';
import Ooty from '../Assets/TrendingDestinations/Ooty.jpg';

const Destinations = () => {
  const trendingDestinations = [
    { name: "New Delhi", image: NewDelhi, flag: "🇮🇳" },
    { name: "Bangalore", image: Ooty, flag: "🇮🇳" },
    { name: "Mumbai", image: NewDelhi, flag: "🇮🇳" },
    { name: "Chennai", image: Ooty, flag: "🇮🇳" },
    { name: "Hyderabad", image: NewDelhi, flag: "🇮🇳" },
    { name: "Vizag", image: Ooty, flag: "🇮🇳" },
    { name: "Goa", image: NewDelhi, flag: "🇮🇳" },    
    { name: "Mysuru", image: NewDelhi, flag: "🇮🇳" },    
    { name: "Kochi", image: NewDelhi, flag: "🇮🇳" },    
    { name: "Goa", image: NewDelhi, flag: "🇮🇳" },    
  ];

  return (
    <div className={Styles["destinations-container"]}>
      <h2>Trending destinations</h2>
      <p>Most popular choices for travelers from India</p>
      <div className={Styles["grid-container"]}>
        {trendingDestinations.map((destination, index) => (
          <div key={index} className={Styles["destination-card"]}>
            <img 
              src={destination.image} 
              alt={destination.name} 
              className={Styles["destination-image"]} 
            />
            <div className={Styles["destination-info"]}>
              <h3>{destination.name} <span>{destination.flag}</span></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
