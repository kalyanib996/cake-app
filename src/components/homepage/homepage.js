import React from 'react';
import Filter from '../filter/filter';
import Card1 from '../card/card';
import Navbar from '../header/header';  
import './homepage.css';
import Footer from '../footer/footer'
class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <div className="homepage">
            <Navbar/>
              <Filter/>
              <Card1/>
              <Footer/>
              
              </div>
            </React.Fragment>
        )
    }
}
export default Homepage;