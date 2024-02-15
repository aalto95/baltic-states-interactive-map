import "./App.css";

import MapContainer from "./components/Map/MapContainer.jsx";

const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <div className="container">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
