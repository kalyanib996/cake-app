import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../header/header';
import Footer from '../footer/footer';
import { connect } from 'react-redux';




class CardDescription extends React.Component {


  componentWillMount(){
    console.log("Card description componentWillMount");
    if(this.props.selectedCake){
    console.log("Asasasasasasasas",this.props.selectedCake);
    console.log("njnjnjnnjnjnnj",this.props.currentUser);

  }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1 className="my-4">Page Heading</h1>
          <div className="row">
            <div className="col-md-8">
              <img className="img-fluid" src={process.env.PUBLIC_URL + '/cake_image.jpg'} alt="" />
            </div>
            <div className="col-md-4">
              <h3 className="my-3">Description</h3>
              <p>rich cake, typically containing layers of cream and fruit.
              A small, rich sponge cake soaked in a rum-flavoured syrup.
              A cake made with treacle and flavoured with ginger powder.
              A rich, sweet tart with a biscuit base and a cream or soft cheese topping.</p>
              <h3 className="my-3">Cake Details</h3>
              <ul>
                <li>NAME : COCHO TRUFFLE</li>
                <li>PRICE : $30</li>
                <li>TYPE : NON-VEG</li>
                <li>WIIGHT : 1KG</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
function mapStateToProps({currentUser,selectedCake}) {
  return {
    currentUser:currentUser,
  selectedCake :selectedCake
  
  
    
  }
}


export default connect(mapStateToProps)(CardDescription);
