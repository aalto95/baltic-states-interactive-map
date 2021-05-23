import React from "react";
import styles from './Map.module.css'

const Map = (props) => {
    let data = props.map.data
    const generatePaths = () => {
        let parsed = props.map.parsed
        let properties = parsed.children[0]

        let paths = properties.children.map((path) => <path
            onMouseOver={props.changeRegionData}
            onMouseLeave={props.removeRegionData}
            key={path.properties.id}
            d={path.properties.d}
            title={path.properties.title}
            area={path.properties.area}
            population={path.properties.population}
            capital={path.properties.capital}
            image={path.properties.image}
            id={path.properties.id}
        />)
        return paths
    }

    return (
        <section className={styles.mapSection}>
            <svg
                width="650"
                height="400"
            >
                {generatePaths()}
            </svg>
            <div className={styles.mapData}>
                {data.title &&
                    <>
                        <p>{data.title}</p>
                        <p>Area: {data.area}km^2</p>
                        <p>Population: {data.population}</p>
                        <p>Capital: {data.capital}</p>
                        <img src={data.image} alt=""/>
                    </>
                }

            </div>
        </section>

    )

}

export default Map;
