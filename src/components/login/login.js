import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from '../signup/registration';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      password:"",
      formErrors: {},
    
    };

  }
  validate = event => {
    if (Object.keys(this.state.formErrors).length > 0) {
      event.preventDefault();
    }
  };


  getUsername = event => {
    this.setState({ txtUsername: event.target.value });
    var formErrorsCopy = this.state.formErrors;
    if (event.target.value.length < 5) {
      formErrorsCopy.txtUsername = "Username must have atleast 5 characters";
    } else {
      delete formErrorsCopy["txtUsername"];

    }
    this.setState({ formErrors: formErrorsCopy });

  };

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
        <div className="container-fluid main1">
          <div className="container login ">
            <div className="row">
              <div className="col-md ">
                <h3 className="logintext">Member Login</h3>
              </div>
            </div>
            <form onSubmit={this.validate}>
              <div className="form-group ">
                <label for="username"></label>
                <input type="text" className="form-control" placeholder="Username" value={this.state.txtUsername}
                  onChange={this.getUsername}></input>
                <span id="errorMsg" className="text-danger">{this.state.formErrors.txtUsername}</span>

                <label for="password"></label>
                <input type="password" className="form-control" placeholder="Password" value={this.state.password}   onChange={this.getPassword}></input>
                <label for="password"></label>
                <span id="errorMsg" className="text-danger">{this.state.formErrors.passwordError}</span>
                <button className="btn btn-primary btn-lg btn-block login-btn form-control" onSubmit={this.login} >Login</button>
                <label for="password"></label>
            
                <button className="btn btn-primary btn-lg btn-block signup-btn form-control">signup</button>


              </div>

            </form>
          </div>
        </div>

      </React.Fragment>

    )


  }
}
export default Login;