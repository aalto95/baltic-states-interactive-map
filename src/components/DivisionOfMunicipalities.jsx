import React from "react";
import s from "./DivisionOfMunicipalities.module.css";

const DivisionOfMunicipalities = props => {

  let municipalities = props.state.municipalities

  function generateCounty(i) {
    return `<h3>` + Object.keys(municipalities)[i] + `</h3>`
  }

  function generateMunicipalities(i, j) {
    return `<li>` + Object.values(municipalities)[i][j] + `</li>`
  }

  function generateTable() {

    let generatedTable = ``

    for (let i = 0; i < Object.keys(municipalities).length; i++) {

      generatedTable += `<div class=${s.countyAndMunicipalities}>` + generateCounty(i)

      let generatedMunicipalities = `<ul>`

      for (let j = 0; j < Object.values(municipalities)[i].length; j++) {
        generatedMunicipalities += generateMunicipalities(i, j)
      }

      generatedMunicipalities += `</ul>`

      generatedTable += generatedMunicipalities + `</div>`

    }
    return {__html: generatedTable}
  }

  return (
      <div className={s.municipalitiesTable} dangerouslySetInnerHTML={generateTable()} />
  );
}

export default DivisionOfMunicipalities;
