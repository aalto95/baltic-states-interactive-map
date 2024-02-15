import React from "react";
import { IRegion } from "../interfaces/Region";

interface PathProps extends IRegion {
  onOver: (regionInfo: Partial<IRegion>) => void;
  onLeave: () => void;
}

const Path: React.FC<PathProps> = (props) => {
  function onMouseOver() {
    props.onOver({
      population: props.population,
      image: props.image,
      capital: props.capital,
      area: props.area,
      title: props.title,
    });
  }
  return (
    <path
      id={props.id}
      d={props.d}
      onMouseOver={onMouseOver}
      onMouseLeave={props.onLeave}
    />
  );
};

export default Path;
