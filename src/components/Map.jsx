import React from "react";
import { parsed } from "./SvgToObject/SvgToObject";
import * as s from './../App.css'

let properties = parsed.children[0]

function SVGComponent(props) {

    const generatePaths = () => {
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
            width="650.449"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsMapsvg="http://mapsvg.com"
            xmlnsDc="http://purl.org/dc/elements/1.1/"
            xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlnsSvg="http://www.w3.org/2000/svg"
            mapsvgGeoViewBox="19.642502 81.857875 190.345967 41.185573"

        >
            {generatePaths()}
        </svg>
    )

}

export default SVGComponent;
