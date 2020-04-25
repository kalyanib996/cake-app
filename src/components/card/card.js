import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {withRouter} from 'react-router-dom';

import './card.css';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

class Card1 extends React.Component {
  render() {
    const cake_details = this.props.cake;
    console.log("cake details--->", cake_details)
    return (

      <React.Fragment>
        <div className="card-item">
          <Card className="card1">
            <CardImg src={process.env.PUBLIC_URL + '/978798654.jpg'} />
            <CardTitle className="card-title">{cake_details.name}</CardTitle>
            <CardBody>{cake_details.desciption}</CardBody>
          </Card>
          </div>
     





      </React.Fragment>
    )
  }


}
export default Card1;

