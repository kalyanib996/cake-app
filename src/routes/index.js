import React from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import {Login} from '../components/login/login.js';
import {Registration} from '../components/signup/registration';


const routes=(
    <div> 
        <Switch>
        {/* used to route wrong urls to a specific page */}
        {/* <Route component={Login} /> */} 
        <Route exact path='/' render={() => (<Redirect to='/login'/>) } />
        {/* <Route exact path='/' component={Login}/> */}
        <Route  path='/login' component={Login}/>
        <Route path='/signup' component={Registration}/>
        </Switch>

    </div>
)
export default routes;