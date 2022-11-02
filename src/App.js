import React from "react";
import "./App.css";
import DivisionsContainer from "./components/Divisions/DivisionsContainer.jsx";
import MapContainer from "./components/Map/MapContainer.jsx";

const App = () => {
  return (
    <div>
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
