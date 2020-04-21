import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from '../signup/registration';
import Navbar from '../header/header'; 


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtEmail:"",
      password:"",
      formErrors: {},
    
    };
    this.submit1=this.submit1.bind(this);
    this.validateEmail=this.validateEmail.bind(this);

  }
  submit1(event) {
    if (Object.keys(this.state.formErrors).length > 0 || this.state.txtEmail=="" || this.state.password=="") {
      event.preventDefault();
    }
  }


  validateEmail = (event) => {
    const txtEmail = event.target.value;
    this.setState({ txtEmail: event.target.value });
    var formErrorsCopy = this.state.formErrors;
    const case_match = txtEmail.match(/^[a-z]+\@[a-z]+\.[a-z]{2,3}$/);
    if (!case_match) {
      formErrorsCopy.txtEmail = "Invalid Email";
      
    }
    else {
      delete formErrorsCopy["txtEmail"];
    }
    this.setState({ formErrors: formErrorsCopy });
  }

  getPassword=(event)=>{
    this.setState({password:event.target.value});
    var formErrorsCopy=this.state.formErrors;
    if(event.target.value==""){
      formErrorsCopy.passwordError="Password cannot be blank";
    }else{
      delete  formErrorsCopy["passwordError"];
   
    }  this.setState({ formErrors: formErrorsCopy });
    
  };


  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="container-fluid main1">
          <div className="container login ">
            <div className="row">
              <div className="col-md ">
                <h3 className="logintext">Member Login</h3>
              </div>
            </div>
            <form onSubmit={this.submit1}>
              <div className="form-group ">
                <label for="username"></label>
                <input type="text" className="form-control" placeholder="Email" onChange={this.validateEmail}></input>
                <span id="errorMsg" className="text-danger">{this.state.formErrors.txtEmail}</span>

                <label for="password"></label>
                <input type="password" className="form-control" placeholder="Password" onChange={this.getPassword}></input>
                <span id="errorMsg" className="text-danger">{this.state.formErrors.passwordError}</span>

                <label for="password"></label>
                <button className="btn btn-primary btn-lg btn-block signup-btn form-control">Login</button>

                <label for="password"></label>
            
                <button className="btn btn-primary btn-lg btn-block signup-btn form-control">Signup</button>

              </div>
            </form>
          </div>
        </div>

      </React.Fragment>

    )


  }
}
export default Login;