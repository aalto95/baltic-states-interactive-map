import React, {useEffect} from "react";
import Divisions from "./Divisions.jsx";
import {connect} from "react-redux";
import {setDivisionTable} from "../../redux/divisions-reducer";
import axios from "axios";
import Preloader from "../Preloader/Preloader.jsx";

const DivisionsContainer = (props) => {
    let setDivisionTable = () => {
        axios.get(`https://60a0e51dd2855b00173b15c9.mockapi.io/municipalities`)
            .then(response => {
                props.setDivisionTable(response.data)
            })
    }
    useEffect(setDivisionTable, [])

    return (<>
            {props.divisions.length > 0
                ? <Divisions divisions={props.divisions}/>
                : <Preloader />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    divisions: state.divisionTable.divisions
})

let mapDispatchToProps = {
    setDivisionTable
}

export default connect(mapStateToProps, mapDispatchToProps) (DivisionsContainer)
