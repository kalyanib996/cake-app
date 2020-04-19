import React from 'react';
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      cnfpassword: '',

      formErrors: {
        emailErr: '',
        passwordErr: '',
        cnfpasswordErr: '',
      },

      fieldValidity: {
        email: false,
        password: false,
        cnfpassword: false
      },
      formValid: false,
      successMessage: ''
    };
  }

  // click =() => {
  //   console.log("button clicked")
  // }

  validateEmail = (e) => {
    const email = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ email: e.target.value });
    console.log(email.length);
    if (email.length < 5) {
      formErrors.emailErr = "Email must be at least 5 chars";
      fieldValidity.email = false;
    }
    else {
      formErrors.emailErr = "";
      fieldValidity.email = true;
    }
    this.setState({ fieldValidity: fieldValidity })
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }
  validatePassword = (e) => {
    const password = e.target.value;
    this.setState({ password: password });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (password.length < 8) {
      formErrors.emailErr = "Password must be at least 8 chars";
      fieldValidity.password = false;
    }
    else {
      formErrors.passwordErr = "";
      fieldValidity.password = true;
    }


    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }

  validateCnfpassword = (e) => {
    const cnfpassword = e.target.value;
    this.setState({ cnfpassword: cnfpassword });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (cnfpassword.length < 8) {
      formErrors.emailErr = "cnfpassword must be at least 8 chars";
      fieldValidity.cnfpassword = false;
    }
    else {
      formErrors.cnfpasswordErr = "";
      fieldValidity.cnfpassword = true;
    }


    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.password == this.state.cnfpassword && this.state.formValid){
      
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className="container-fluid main1">
          <div className="container signup ">
            <div className="row">
              <div className="col-md-12">
                <h4 className="registertext">Register Yourself!</h4>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label for="firstName"></label>
                  <input type="text" className="form-control" placeholder="First Name"></input>
                  <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>
                </div>
                <div className="col-md-6">
                  <label for="LastName"></label>
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md" >
                  <div className="form-group">
                    <label for="email"></label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.validateEmail} required placeholder="Email"></input>
                    <span className="text-danger">{this.state.formErrors.emailErr } </span>
                    <label for="password"></label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.validatePassword} required placeholder="Password"></input>
                    <span className="text-danger">{this.state.formErrors.PasswordErr } </span>
                    <label for="password"></label>
                    <input type="password" className="form-control" value={this.state.cnfpassword} onChange={this.validateCnfpassword} required placeholder="Confirm Password"></input>
                    <span className="text-danger">{this.state.formErrors.cnfpasswordErr } </span>
                    <div>
                      <br />
                      <div>
                        <label for="checkbox"></label>
                        <input type="checkbox"></input>
                        <span>I agree to <a href="/login">Terms of use</a> and <nbsp />
                          <a href="google.com">Privacy Policy</a>
                        </span>
                      </div>


                      <label for="password"></label>
                      <button className="btn btn-primary btn-lg btn-block register-btn form-control"  onClick={this.update} disabled={!this.state.formValid}>Register</button>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </React.Fragment >

    )
  }
}
export default Registration;