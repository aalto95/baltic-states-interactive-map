import React from "react";
import s from "./Divisions.module.scss";

const Divisions = (props) => {
  return (
    <div className={s.municipalitiesTable}>
      {props.divisions.map((division) => {
        return (
          <div key={division.id}>
            <h3>{division.name}</h3>
            <ul>
              {division.parishes.map((parish) => {
                return <li key={parish}>{parish}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Divisions;
