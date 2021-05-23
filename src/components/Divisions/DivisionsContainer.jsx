import React, {useEffect} from "react";
import Divisions from "./Divisions.jsx";
import {connect} from "react-redux";
import {setDivisionTable} from "../../redux/divisions-reducer";
import axios from "axios";

const DivisionsContainer = (props) => {
    let setDivisionTable = () => {
        axios.get(`https://60a0e51dd2855b00173b15c9.mockapi.io/municipalities`)
            .then(response => {
                console.log(response.data)
                props.setDivisionTable(response.data)
            })
    }
    useEffect(setDivisionTable, [])

    return <Divisions divisions={props.divisions}/>
}

let mapStateToProps = (state) => ({
    divisions: state.divisionTable.divisions
})

let mapDispatchToProps = {
    setDivisionTable
}

export default connect(mapStateToProps, mapDispatchToProps) (DivisionsContainer)
