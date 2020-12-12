import React from 'react';
import { Router} from 'react-router';
import './App.css'
import {createBrowserHistory} from 'history'
import Routes from './routes'
import { CoverPanel } from './companent/content/market';
export const history = createBrowserHistory()
const App:React.FC =()=>{
    return(
        <Router history={history}>
            <Routes/>
        </Router>
    )
}

export default App;
