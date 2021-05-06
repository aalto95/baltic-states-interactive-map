import React from "react";
import "./App.css";
import Map from "./components/Map.jsx";
import DivisionOfMunicipalities from "./components/DivisionOfMunicipalities.jsx";

const App = (props) => {
  return (
    <div>
      <div id="acab">
        <p>{props.state.data.title}</p>
        <p>Area: {props.state.data.area} km<sup>2</sup></p>
        <p>Population: {props.state.data.population}</p>
        <p>Capital: {props.state.data.capital}</p>
      </div>
      <h1>Estonia</h1>
      <div className="App">
        <div className="container">
          <Map
            state={props.state}
            regionData={props.regionData}
            regionDataOff={props.regionDataOff}
          />
          <DivisionOfMunicipalities state={props.state} />
        </div>
      </div>
    </div>
  );
};

export default App;
