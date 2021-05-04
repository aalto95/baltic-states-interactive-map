import React from "react";
import s from "./DivisionOfMunicipalities.module.css";

const DivisionOfMunicipalities = props => {

  let municipalityTable = ""
  let municipalities = props.state.municipalities

  function generateCounties(idx) {
    return Object.keys(municipalities)[idx]
  }

  function generateMunicipalities() {

    let generatedData = ``

    for (let i = 0; i < Object.keys(municipalities).length; i++) {

      let generatedCounty = ""
      let generatedMunicipalities = ""

      generatedCounty = generateCounties(i)
      generatedData += generatedCounty
      console.log((generatedCounty))

      for (let j = 0; j < Object.values(municipalities)[i].length; j++) {
        generatedMunicipalities += Object.values(municipalities)[i][j]
      }

      generatedData += generatedMunicipalities

    }
    return generatedData
  }

  municipalityTable += generateMunicipalities()

  console.log(municipalityTable)

  return (
      <div>
        {municipalityTable}
      </div>
  );
}

export default DivisionOfMunicipalities;
