import React from 'react';
import './App.css';
import {Login} from './components/login/login';
import routes from './routes';
import {BrowserRouter,Link} from "react-router-dom";

//import {Registration} from './signup/registration';

function App() {
  return (
    <BrowserRouter>
{routes}     
</BrowserRouter>
   );
}

export default App;
