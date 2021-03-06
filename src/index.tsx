import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import { Provider } from 'react-redux'
import configureStore from './store/index';

const store = configureStore();
const Root = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(
    <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
axios.defaults.baseURL="http://localhost:3300";
//http://47.99.223.227:3300
//http://localhost:3300
