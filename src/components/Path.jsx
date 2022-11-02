import React from "react";

const Path = (props) => {
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
    <path d={props.d} onMouseOver={onMouseOver} onMouseLeave={props.onLeave} />
  );
};

export default Path;
