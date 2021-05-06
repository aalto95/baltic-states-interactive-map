import React from "react";
import s from "./DivisionOfMunicipalities.module.css";

const DivisionOfMunicipalities = props => {

  let municipalities = props.state.municipalities
  let generatedTable = []

  Object.keys(municipalities).map(county => {

    let generatedMunicipalities = []
      generatedMunicipalities.push(Object.values(municipalities[county]).map(municipality => {
        return <li key={municipality}>{municipality}</li>
      }))

    generatedTable.push(
      <div className={s.countyAndMunicipalities}>
        <h3>{county}</h3>
        <ul>
          {generatedMunicipalities}
        </ul>
      </div>
    )
  })

  return (
    <div className={s.municipalitiesTable}>
      {generatedTable}
    </div>
  );
}

export default DivisionOfMunicipalities;
