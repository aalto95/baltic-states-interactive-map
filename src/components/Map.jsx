import React from "react";
import * as s from './../App.css'

const Map = props => {

    const generatePaths = () => {

        let parsed = props.state.parsed
        let properties = parsed.children[0]

        let paths = properties.children.map((path) => <path
            onMouseOver={props.regionData}
            onMouseLeave={props.regionDataOff}
            d={path.properties.d}
            title={path.properties.title}
            area={path.properties.area}
            population={path.properties.population}
            id={path.properties.id}
        />)
        return paths
    }

    return (
        <svg
            width="650"
            height="400"
        >
            {generatePaths()}
        </svg>
    )

}

export default Map;
