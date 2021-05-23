import React from "react";
import s from "./Divisions.module.css";

const Divisions = (props) => {
    console.log(props.divisions)

    return (
        <div className={s.municipalitiesTable}>
            {
                props.divisions.map((division) => {
                    return <>
                        <h3 key={division.id}>{division.name}</h3>
                        <ul>
                          {division.parishes.map((parish) => {
                            return <>
                              <li>{parish}</li>
                            </>
                          })}
                        </ul>
                    </>
                })
            }
        </div>
    );
}

export default Divisions;
