// react
import React from 'react';
import ReactDOM from 'react-dom';
// css
import './index.css';
// app
import App from './app';
import reportWebVitals from './reportWebVitals';
// PWA
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <React.StrictMode>
    //     <App/>
    // </React.StrictMode>,
    <App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
    serviceWorker.register();
} else {
    serviceWorker.unregister();
}
