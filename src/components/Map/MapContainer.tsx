import Map from "./Map.js";
import { connect } from "react-redux";
import {
  changeRegionData,
  removeRegionData,
  setMap,
} from "../../redux/map-reducer.js";

const MapContainer = (props: any) => {
  return <Map {...props} />;
};

let mapStateToProps = (state: any) => {
  return {
    map: state.map,
  };
};

let mapDispatchToProps = {
  setMap,
  changeRegionData,
  removeRegionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
