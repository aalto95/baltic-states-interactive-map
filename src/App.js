import React from "react";
import "./App.css";
import DivisionsContainer from "./components/Divisions/DivisionsContainer.jsx";
import MapContainer from "./components/Map/MapContainer.jsx";

const App = () => {
    return (
        <div>
            <div className="App">
                <h1>Estonia</h1>
                <div className="container">
                    <MapContainer />
                    <DivisionsContainer />
                </div>
            </div>
        </div>
    );
};

export default App;
