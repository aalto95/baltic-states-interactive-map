import React from "react";
import Path from "../Path.jsx";
import styles from "./Map.module.scss";
import { regions } from "../../data.json";

const Map = (props) => {
  const data = props.map.data;

  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <svg viewBox="-100 -200 800 800" className={styles.map}>
          {regions.map((path) => (
            <Path
              onOver={props.changeRegionData}
              onLeave={props.removeRegionData}
              key={path.id}
              d={path.d}
              title={path.title}
              area={path.area}
              population={path.population}
              capital={path.capital}
              image={path.image}
              id={path.id}
            />
          ))}
        </svg>
      </div>
      {data.title ? (
        <div className={styles.regionInfo}>
          <ul>
            <li>{data.title}</li>
            <li>Area: {data.area}km^2</li>
            <li>Population: {data.population}</li>
            <li>Capital: {data.capital}</li>
          </ul>
          <img src={data.image} alt="region-flag" />
        </div>
      ) : (
        <div className={styles.regionInfo}>
          <h1>No region is hovered</h1>
        </div>
      )}
    </section>
  );
};

export default Map;
