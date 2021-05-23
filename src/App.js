import React from "react";
import "./App.css";
import DivisionsContainer from "./components/Divisions/DivisionsContainer.jsx";
import MapContainer from "./components/Map/MapContainer.jsx";

const App = () => {
    return (
        <div>
            <div id="acab">
                <p>Title</p>
                <p>Area:  km<sup>2</sup></p>
                <p>Population: </p>
                <p>Capital: </p>
            </div>
            <h1>Estonia</h1>
            <div className="App">
                <div className="container">
                    <MapContainer />
                    <DivisionsContainer />
                </div>
            </div>
        </div>
    );
};

export default App;
