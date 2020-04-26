import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect,Link,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../login/login';
import {setLoggedInUser } from '../../actions/loggedInUser_action';

class Navbar extends React.Component {
  
  constructor(){
    super();
    this.state={
      login:false,
      Signup:false,
      logout:false,
    
      
    }
  }
  componentWillMount(){
    if(this.props.currentUser_data){
      console.log(this.props.currentUser_data);
    }
  }


  loginClick=()=>{
    this.setState({login:true});
  }
  
  logoutClick=()=>{
  console.log("Logout click");
  this.setState({logout:true});
  }



  signupClick=()=>{
    this.setState({signup:true});
  }
  render() {
    
    var redirect = null;
    if(this.state.login){
      redirect=<Redirect to={'/login'} push></Redirect>
    }

    if(this.state.signup){
      redirect=<Redirect to={'/signup'} push></Redirect>
    }
    if(this.state.logout){
      this.props.setLoggedInUser("",false)
      redirect=<Redirect to={'/login'} push></Redirect>
    }
    return (
      <React.Fragment>
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Our LOGO</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
              {this.props.currentUser_data.currentUser?<h3 className="loggedUsername">Hello {this.props.currentUser_data.loggedUsername} </h3>:
                <button className="btn btn-primary ml-5" onClick={this.loginClick}>Login</button> }
                {redirect}
              </li>

              <li className="nav-item">
              {this.props.currentUser_data.currentUser?<button className="btn btn-primary ml-3" onClick={this.logoutClick}>Logout</button>:
                <button className="btn btn-primary ml-3" onClick={this.signupClick}>Signup</button>}
              </li>          
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link mr-3">Contact Us</Link>
              </li>
            </ul>
            
          </div>
        </nav>
       
      </React.Fragment>
    )
  }
}
function mapStateToProps({currentUser }) {
  return {
    currentUser_data:currentUser,
    
  }
}

const mapDispatchToProps = {
  setLoggedInUser : setLoggedInUser

}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

