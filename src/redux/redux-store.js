import { combineReducers, createStore } from "redux";
import mapReducer from "./map-reducer";

let reducers = combineReducers({
  map: mapReducer,
});

let store = createStore(reducers);

export default store;
