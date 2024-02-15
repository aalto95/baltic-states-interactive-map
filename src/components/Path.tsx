import React from "react";
import { IRegion } from "../interfaces/Region";
import { useMapStore } from "../store/map.store";

interface PathProps extends IRegion {}

const Path: React.FC<PathProps> = (props) => {
  const mapStore = useMapStore();

  function onMouseOver() {
    mapStore.hoverRegion({
      population: props.population,
      image: props.image,
      capital: props.capital,
      area: props.area,
      title: props.title,
    });
  }

  function onMouseLeave() {
    mapStore.unhoverRegion();
  }

  return (
    <path
      id={props.id}
      d={props.d}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Path;
