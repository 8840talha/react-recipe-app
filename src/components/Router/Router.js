import React from 'react';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../../App';
import Recepe from '../Recepe/Recepe'
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path='/recipe/:id' component={Recepe} />
            </Switch>
        </BrowserRouter>
    )
}




export default Router;