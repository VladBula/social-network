import React from 'react';

import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    ReactDOM.render(

            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

reportWebVitals();

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

