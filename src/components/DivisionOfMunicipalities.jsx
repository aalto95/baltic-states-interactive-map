import React from "react";
import s from "./DivisionOfMunicipalities.module.css";

const DivisionOfMunicipalities = props => {

  let municipalities = props.state.municipalities

  function generateCounty(county) {
    return `<h3>` + county + `</h3>`
  }

  function generateMunicipalities(municipality) {
    return `<li>` + municipality + `</li>`
  }

  function generateTable() {
    let generatedTable = []

    Object.keys(municipalities).map(county => {

      generatedTable += `<div class=${s.countyAndMunicipalities}>` + generateCounty(county)

      let generatedMunicipalities = `<ul>`

      Object.values(municipalities[county]).map(municipality => {
        generatedMunicipalities += generateMunicipalities(municipality)
      })

      generatedMunicipalities += `</ul>`

      generatedTable += generatedMunicipalities + `</div>`

    })
    return {__html: generatedTable}
  }

  return (
      <div className={s.municipalitiesTable} dangerouslySetInnerHTML={generateTable()} />
  );
}

export default DivisionOfMunicipalities;
