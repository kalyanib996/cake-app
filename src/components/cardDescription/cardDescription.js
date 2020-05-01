import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../header/header';
import Footer from '../footer/footer';
import { connect } from 'react-redux';


var cake_descp

class CardDescription extends React.Component {
  componentWillMount() {
    
    console.log("Card description componentWillMount");
    if (this.props.selectedCake) {
      console.log("Asasasasasasasas", this.props.selectedCake);
      console.log(Object.keys(this.props.cake).length ,this.props.cake[2].id)
      for (let i = 0; i < Object.keys(this.props.cake).length; i++) {
        // console.log("in for loop hihihih",this.props.cake[i])
        if (this.props.selectedCake.selectedCake == this.props.cake[i].id) {
          cake_descp = this.props.cake[i]
          // console.log("In IF hihihihihihihih",this.props.cake[i])
          return cake_descp
        }
      }
      // console.log("second time hihihihihi",cake_descp)
    }
  }

  render() {
    let cakedescription = cake_descp
    console.log("sssssssssssssss",cakedescription.name)
    return (
      <React.Fragment>
        <Navbar />
        {console.log("IN RENDER RETURN ",cakedescription.name)}
        <div className="container">
          <h1 className="my-4">{cakedescription.name}</h1>
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
                <li>NAME : {cakedescription.name}</li>
                <li>PRICE : {cakedescription.price}</li>
                <li>TYPE : NON-VEG</li>
                <li>WIIGHT : {cakedescription.name}</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
function mapStateToProps({ cake, currentUser, selectedCake }) {
  return {
    cake: cake,
    currentUser: currentUser,
    selectedCake: selectedCake



  }
}


export default connect(mapStateToProps)(CardDescription);
