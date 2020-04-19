import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state={
      login:false,
      Signup:false
    }
  }
  loginClick=()=>{
    this.setState({login:true});
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
                <button className="btn btn-primary ml-5" onClick={this.loginClick}>Login</button>
                {redirect}
              </li>

              <li className="nav-item">
                <button className="btn btn-primary ml-3" onClick={this.signupClick}>Signup</button>
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
export default Navbar;