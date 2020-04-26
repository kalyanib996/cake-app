import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';

import './card.css';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cardClicked:false,
    }
    this.cardClick = this.cardClick.bind(this);
    
  }
  cardClick() {
    console.log(":::::::::::::::::")
    this.setState({cardClicked:true})
    console.log(this.state.cardClicked)

  }

  render() {
    const cake_details = this.props.cake;
    console.log("cake details--->", cake_details)  
    if(!this.state.cardClicked){
    return (
      <React.Fragment>
        <div className="card-item">
          <Card className="card1">
            <CardImg onClick={this.cardClick} src={process.env.PUBLIC_URL + '/978798654.jpg'} />
            <CardTitle className="card-title">{cake_details.name}</CardTitle>
            <CardBody>{cake_details.desciption}</CardBody>
          </Card>
          </div>
      </React.Fragment>
    )
    }
    else{
      return(
      <Redirect to= '/card_description'/>
      )
    }
  }
}
export default Card1;

