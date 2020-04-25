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
  constructor(props){
  super(props);
  // this.state={
  //   userMdl:this.props.userMdl
  // }
  
  }

  componentWillMount() {
    console.log(" Inside componentWillMount")
    console.log(this.props.currentUser.currentUser);
    console.log(this.props.cake[0].name);

    if (this.props.currentUser == false) {
      const cake_details = this.props.cake.initialCakeState;
      console.log("inside componentWillMount if");
    } else {
      return <Login />;
    }

  }



  render() {
    return (
      <React.Fragment>

        <div className="homepage">
          <Navbar />
          <Filter />
          <Card1 />
          <Footer />

        </div>
      </React.Fragment>
    )
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