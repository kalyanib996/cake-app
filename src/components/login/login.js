import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from '../signup/registration';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "CayBee",
      formErrors: {}
    };
    this.validate = event => {
      if (Object.keys(this.state.formErrors).length > 0) {
        event.preventDefault();
      }
    };
    this.getName = event => {
      this.setState({ txtUsername: event.target.value });
      var formErrorsCopy = this.state.formErrors;
      if (event.target.value.length < 5) {
        formErrorsCopy.txtUsername = "Cannot be less than 5";
      } else {
        delete formErrorsCopy["txtUsername"];
      }
      this.setState({ formErrors: formErrorsCopy });
    };
  }


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
                  onChange={this.getName}></input>
                <div id="errorMsg" className="text-danger">{this.state.formErrors.txtUsername}</div>

                <label for="password"></label>
                <input type="password" className="form-control" placeholder="Password" value={this.state.password}></input>
                <label for="password"></label>
                <button className="btn btn-primary btn-lg btn-block login-btn form-control" onSubmit={this.login} >Login</button>
                <label for="password"></label>
                <button className="btn btn-primary btn-lg btn-block signup-btn form-control">SignUp</button>


              </div>

            </form>
          </div>
        </div>

      </React.Fragment>

    )


  }
}
export default Login;