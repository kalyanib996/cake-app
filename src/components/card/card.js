import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import {withRouter} from 'react-router-dom';
import CardDescription from '../cardDescription/cardDescription';
import {setCakeId} from '../../actions/cardDescription_action';

import './card.css';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cardClicked:false,
      selectedCakeId:''
    }
  
 
      
  }
//  componentWillUnmount()
// {
//   this.props.dispatch(setCakeId(this.state.selectedCakeId))
//   console.log("comp unMount",this.state.selectedCakeId)
// }  
  cardClick=(a)=> {
    console.log(":::::::::::::::::")
    this.setState({cardClicked:true},{selectedCakeId:a})
    console.log(this.state.cardClicked)
    console.log(a);
   
}

  render() {
    if(!this.state.cardClicked){

    const cake_details = this.props.cake;
    console.log("cake details--->", cake_details)  
    // if(!this.state.cardClicked){
    return (
      <React.Fragment>
        <div className="card-item">
          <Card tag="a" onClick={() => this.cardClick(cake_details.id)} style={{ cursor: "pointer" }} className="card1">
            <CardImg  src={process.env.PUBLIC_URL + '/978798654.jpg'} />
            <CardTitle className="card-title">{cake_details.name}</CardTitle>
            <CardBody>{cake_details.desciption}</CardBody>
          </Card>
          </div>
     
      </React.Fragment>
    )
    }
    else{
      return(
        <Redirect to= '/card_description' push/>
      )
      
    }
  }
};
function mapStateToProps({ selectedCake}) {
  return {
    selectedCake
  }
}
const mapDispatchToProps = {
  setCakeId : setCakeId,

selectedCake
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);

