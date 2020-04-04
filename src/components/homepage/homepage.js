import React from 'react';
import Filter from '../filter/filter';
import Card1 from '../card/card';

class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                
              <Filter/>
              <Card1/>

            </React.Fragment>
        )
    }
}
export default Homepage;