import React from 'react';
import Filter from '../filter/filter';
import Card1 from '../card/card';
import Navbar from '../header/header';
import './homepage.css';
import Footer from '../footer/footer'
import { connect } from 'react-redux';
import Login from '../login/login';
import { Redirect } from 'react-router-dom';
import getCakes from '../../actions/cake_action';



class Homepage extends React.Component {
  state = {
    redirect: false
  }

  componentWillMount() {
    console.log(" Inside componentWillMount")
    console.log(this.props.currentUser);
    console.log(this.props.cake);
    

  }

  render() {
    const cake = this.props.cake;
    if (this.props.currentUser.currentUser) {
      const cake_details = this.props.cake.initialCakeState;
      console.log("inside if");
      return (
        <React.Fragment>
          <Navbar />
          <Filter />
          <div className="homepage">
              {Object.keys(cake).map((cake_details, index) => <Card1 key={index} cake={cake[cake_details]} />)
              }
          </div>
          <Footer />
        </React.Fragment>
      )
    }
    else {
      console.log("inside else");
    console.log(  this.props.currentUser.currentUser);
      return (
        <div>
          <Redirect to='/login' />
        </div>
      )
    }

  }
}

function mapStateToProps({ cake, currentUser }) {
  return {
    cake,
    currentUser
  }
}
const mapDispatchToProps = {
  getCakes

}

export default connect(mapStateToProps)(Homepage);