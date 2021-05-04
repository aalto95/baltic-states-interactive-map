import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={ store.getState() }
                regionData={ store.regionData.bind(store) }
                regionDataOff = { store.regionDataOff.bind(store) }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
