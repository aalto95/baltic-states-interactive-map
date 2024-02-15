import React, { useState, useEffect } from "react";
import Path from "../Path.jsx";
import styles from "./Map.module.scss";
import Preloader from "../Preloader/Preloader.jsx";

const Map = (props) => {
  const data = props.map.data;
  const [currentCountry, setCurrentCountry] = useState("estonia");
  const [map, setMap] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`data/${currentCountry}.json`)
      .then((response) => response.json())
      .then((data) => {
        setMap(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentCountry]);

  function changeCurrentCountry(event) {
    setCurrentCountry(event.target.value);
  }

  return (
    <section className={styles.mapSection}>
      <select
        onChange={changeCurrentCountry}
        className={styles.countrySelect}
        name="select"
        disabled={isLoading ? true : false}
      >
        <option value="estonia">🇪🇪 Estonia</option>
        <option value="latvia">🇱🇻 Latvia</option>
        <option value="lithuania">🇱🇹 Lithuania</option>
      </select>
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          {isLoading ? (
            <Preloader />
          ) : (
            <svg viewBox={map.viewBox} className={styles.svg}>
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
          )}
        </div>
      </div>
      {data.title ? (
        <div className={styles.regionInfo}>
          <ul>
            {data.title && <li>{data.title}</li>}
            {data.area && (
              <li>
                Area: {data.area} km<sup>2</sup>
              </li>
            )}
            {data.population && <li>Population: {data.population}</li>}
            {data.capital && <li>Capital: {data.capital}</li>}
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
