import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './companent/Home';
// eslint-disable-next-line import/no-anonymous-default-export
export default()=>{
    return(
        <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>

    )


}