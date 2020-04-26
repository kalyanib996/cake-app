import React from 'react';
import {Route,Redirect,Switch,Link} from "react-router-dom";
import Navbar from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import Login from '../components/login/login.js';
import Registration from '../components/signup/registration';
import Homepage from '../components/homepage/homepage';
import Card1 from '../components/card/card';
import Filter from '../components/filter/filter';
import Contact from '../components/contact/contact.js';
import CardDescription from '../components/cardDescription/cardDescription.js';
import Tryout from '../components/tryout/tryout.js';



const routes=(
    <div> 
        
      

        <Switch>
        {/* used to route wrong urls to a specific page */}
        {/* <Route component={Login} />  */}
        <Route exact path='/' render={() => (<Redirect to='/login'/>) } />
        {/* <Route exact path='/' component={Login}/> */}
        <Route  path='/login' component={Login}/>
        <Route path='/signup' component={Registration}/>
        <Route path='/navbar' component={Navbar}/>
        <Route path='/footer' component={Footer}/>
        <Route path='/homepage' component={Homepage}/>
        <Route path='/card' component={Card1}/>
        <Route path='/filter' component={Filter}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/card_description' component={CardDescription}/>
        <Route path='/tryout' component={Tryout}/>

            {/* <Route path={'/:username'} render={({match}) => {return <h1> Hello {match.params.username}!</h1> }}/>     */}


        </Switch>

    </div>
)
export default routes;