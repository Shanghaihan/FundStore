import React from 'react';
import { Route, Switch } from 'react-router';
import home from './content/home'
import market from './content/market';
const Content:React.FC=()=>{
    return(
        <Switch>
            <Route path="/Content/home" component={home}></Route>
            <Route path="/Content/market" component={market}></Route>
            <Route path="/Content/option"></Route>
            <Route path="/Content/hold"></Route>
            <Route path="/" component={home}></Route>
        </Switch>
    )
}
export default Content;