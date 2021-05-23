import {combineReducers, createStore} from "redux";
import divisionsReducer from "./divisions-reducer";
import mapReducer from "./map-reducer";

let reducers = combineReducers({
    divisionTable: divisionsReducer,
    map: mapReducer
})

let store = createStore(reducers)
window.store = store

export default store