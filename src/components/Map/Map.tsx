import { useState, useEffect, ChangeEvent } from "react";
import Path from "../Path.js";
import styles from "./Map.module.scss";
import Preloader from "../Preloader/Preloader";
import { IMap } from "../../interfaces/Map";
import { useMapStore } from "../../store/map.store.js";

interface MapProps {
  map: any;
  regions: any;
  changeRegionData: any;
  removeRegionData: any;
}

const Map: React.FC<MapProps> = (props) => {
  const mapStore = useMapStore();
  const hoveredRegion = mapStore.hoveredRegion;
  const [currentCountry, setCurrentCountry] = useState("estonia");
  const [map, setMap] = useState<IMap>();
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

  function changeCurrentCountry(event: ChangeEvent) {
    setCurrentCountry((event.target as HTMLSelectElement).value);
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
            <svg viewBox={map?.viewBox} className={styles.svg}>
              {map?.regions?.map((path: any) => (
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
      {hoveredRegion ? (
        <div className={styles.regionInfo}>
          <ul>
            {hoveredRegion.title && <li>{hoveredRegion.title}</li>}
            {hoveredRegion.area && (
              <li>
                Area: {hoveredRegion.area} km<sup>2</sup>
              </li>
            )}
            {hoveredRegion.population && (
              <li>Population: {hoveredRegion.population}</li>
            )}
            {hoveredRegion.capital && <li>Capital: {hoveredRegion.capital}</li>}
          </ul>
          {hoveredRegion.image && (
            <img src={hoveredRegion.image} alt="region-flag" />
          )}
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
