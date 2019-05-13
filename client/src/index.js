import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ws from "./util/ws";
import * as serviceWorker from "./serviceWorker";

window.ws = ws;

localStorage.removeItem('auth')

const renderApp = Component => ReactDOM.render(
    <Component />
    , document.getElementById('root'));

renderApp(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Webpack Hot Module Replacement API

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./App', () => {
            // console.log('Hot reload just happened');
            const NextApp = require('./App').default;
            renderApp(NextApp);
        });
    }
}