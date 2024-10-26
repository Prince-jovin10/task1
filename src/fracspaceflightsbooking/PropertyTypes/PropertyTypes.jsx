import React from "react";
import Styles from "./Property.module.css"; 
import Villa from '../Assets/TrendingDestinations/Ooty.jpg';

const PropertyType = () => {
  const propertyTypes = [
    { name: "Hotels", image: Villa },
    { name: "Apartments", image: Villa },
    { name: "Resorts", image: Villa },
    { name: "Villas", image: Villa },
    { name: "Glaamping Sites", image: Villa },
    { name: "Hostels", image: Villa },
    { name: "Guest Houses", image: Villa },
    { name: "Cottages", image: Villa },
  ];

  return (
    <div className={Styles["property-type-container"]}>
      <h2>Browse by property type</h2>
      <div className={Styles["scrollable-container"]}>
        {propertyTypes.map((property, index) => (
          <div key={index} className={Styles["property-card"]}>
            <img
              src={property.image}
              alt={property.name}
              className={Styles["property-image"]}
            />
            <p>{property.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
