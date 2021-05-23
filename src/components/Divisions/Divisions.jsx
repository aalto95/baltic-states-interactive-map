import React from "react";
import s from "./Divisions.module.css";

const Divisions = (props) => {
  console.log(props.divisions)
  let drain = 0
  if (props.divisions.length) {
    drain = 15
  }
  return (
    <div className={s.municipalitiesTable}>
      {drain}
    </div>
  );
}

export default Divisions;
