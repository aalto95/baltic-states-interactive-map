import React, { useState, useEffect } from "react";
import Path from "../Path.jsx";
import styles from "./Map.module.scss";

const Map = (props) => {
  const data = props.map.data;
  const [currentCountry, setCurrentCountry] = useState("estonia");
  const [map, setMap] = useState({});

  useEffect(() => {
    fetch(`data/${currentCountry}.json`)
      .then((response) => response.json())
      .then((data) => {
        setMap(data);
      });
  }, [currentCountry]);

  function changeCurrentCountry(event) {
    setCurrentCountry(event.target.value);
  }

  return (
    <section className={styles.mapSection}>
      <select onChange={changeCurrentCountry} name="select">
        <option value="estonia">Estonia</option>
        <option value="latvia">Latvia</option>
      </select>
      <div className={styles.mapContainer}>
        <svg viewBox={map.viewBox} className={styles.map}>
          {map.regions?.map((path) => (
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
          {data.image && <img src={data.image} alt="region-flag" />}
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
