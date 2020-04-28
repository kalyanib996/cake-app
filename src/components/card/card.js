import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import setCakeId from '../../actions/cardDescription_action';

import './card.css';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import CardDescription from '../cardDescription/cardDescription';

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cardClicked:false,
      selectedCakeid:''
    }
    this.cardClick=this.cardClick.bind(this);
  }
  cardClick=(id)=>{
    console.log(id)
    console.log(":::::::::::::::::")
    this.setState({cardClicked:true})
    console.log(this.state.cardClicked)
    this.setState({selectedCakeid:id})
    console.log(this.state.selectedCakeid)
    console.log(id)
    // this.props.setCakeId(id)
  }
  
  render() {
    const cake_details = this.props.cake;
    console.log("cake_details.id",cake_details.id);  
    console.log("cake details--->", cake_details)
    
    if(!this.state.cardClicked){
      console.log("this.props.selectedCake",this.props.selectedCake)
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
      console.log(this.state.cardClicked)
      console.log(this.state.selectedCakeid)
      return(
        <Redirect to= '/card_description'push/>
      )
    }
  }
}
function mapStateToProps({cake,selectedCake}) {
  return {
  
  selectedCake :selectedCake
  
    
  }
}

const mapDispatchToProps = {
  setCakeId : setCakeId

}

export default connect(mapStateToProps,mapDispatchToProps)(Card1);


