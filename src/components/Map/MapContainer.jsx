import React from "react";
import Map from "./Map.jsx";
import {connect} from "react-redux";
import {changeRegionData, removeRegionData, setMap} from "../../redux/map-reducer";

const MapContainer = (props) => {
    return <Map {...props}/>
}

let mapStateToProps = (state) => {
    return {
        map: state.map,
    }
}

let mapDispatchToProps = {
    setMap,
    changeRegionData,
    removeRegionData
}

export default connect(mapStateToProps, mapDispatchToProps) (MapContainer);
