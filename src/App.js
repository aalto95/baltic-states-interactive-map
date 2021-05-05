//import React, { useState } from 'react'
import './App.css';
// eslint-disable-next-line no-unused-vars
import Map from "./components/Map";
// eslint-disable-next-line no-unused-vars
import DivisionOfMunicipalities from "./components/DivisionOfMunicipalities";

const App = (props) => {
    return (
        <div>
            <div id="acab">
                <p>{props.state.data.title}</p>
                <p>Area: {props.state.data.area} km<sup>2</sup></p>
                <p>Population: {props.state.data.population}</p>
            </div>
            <h1>Estonia</h1>
            <div className="App">


                <div className="container">
                    <Map
                        state={props.state}
                        regionData={props.regionData}
                        regionDataOff={props.regionDataOff}
                    />
                    <DivisionOfMunicipalities
                        state={props.state}
                    />
                </div>
            </div>
        </div>

  );
}

export default App;
