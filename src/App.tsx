import "./App.scss";

import Map from "./components/Map/Map";

const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
