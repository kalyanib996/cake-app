import React from 'react';
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../header/header'; 

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cnfpassword: '',
      agreement: false,
      passwd_acc_msg: '',
      passwd_match_msg: '',



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

    this.submit1 = this.submit1.bind(this)
  }

  validateFirstname = (e) => {
    let firstname = e.target.value;
    this.setState({ firstname: firstname })
  }

  validateLastname = (e) => {
    let lastname = e.target.value;
    this.setState({ lastname: lastname })
  }

  validateAgreement = (e) => {
    let agreement = e.target.value;
    this.setState({ agreement: true })
  }

  validateEmail = (e) => {
    const email = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ email: e.target.value });
    const case_match = email.match(/^[a-z]+\@[a-z]+\.[a-z]{2,3}$/);
    if (!case_match) {
      formErrors.emailErr = "Invalid email id";
      fieldValidity.email = false;
    }
    else {
      formErrors.emailErr = "";
      fieldValidity.email = true
    }
    this.setState({ fieldValidity: fieldValidity })
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }
  validatePassword = (e) => {
    const passwordErrMsg = <div>
      <span>Invalid Password</span>
      <div className="container password">
        <ul>
          <li>Pasword must have minimum 4 and  maximum 8 characters.</li>
          <li>Password must include at least one upper case letter, one lower case letter, and one numeric digit.</li>
        </ul>
      </div>
    </div>

    let passwd_err_msg = "";
    let passwd_acc_msg = "";
    const password = e.target.value;
    this.setState({ password: password });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    const case_password = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/)
    if (!case_password) {
      this.setState({ passwd_acc_msg: "" })
      formErrors.passwordErr = passwordErrMsg;
      fieldValidity.password = false;
    }
    else {
      this.setState({ passwd_err_msg: "" });
      this.setState({ passwd_acc_msg: "Password Accepted" });
      formErrors.passwordErr = "";
      fieldValidity.password = true;
    }


    this.setState({ formErrors: formErrors })
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }

  validateCnfpassword = (e) => {
    const acc = <div>
      <i className="fa fa-plus-circle"></i> <span>Passwords match</span>
    </div>
    const err =<div><i className="fa fa-minus-circle"></i> <span>Passwords dont match</span></div>
    const cnfpassword = e.target.value;
    this.setState({ cnfpassword: cnfpassword });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (cnfpassword !== this.state.password) {
      formErrors.cnfpasswordErr = err;
      this.setState({ passwd_match_msg: "" })
      fieldValidity.cnfpassword = false;
    }
    else {
      formErrors.cnfpasswordErr = "";
      this.setState({ passwd_match_msg: acc })
      fieldValidity.cnfpassword = true;
    }


    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.email && fieldValidity.password && fieldValidity.cnfpassword })
  }

 
  submit1(e)  {
    e.preventDefault();
    console.log("Inside submit method")
    console.log(this.state.email)
  }


  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="container-fluid main1">
          <div className="container signup ">
            <div className="row">
              <div className="col-md-12">
                <h4 className="registertext">Register Yourself!</h4>
              </div>
            </div>
            <form onSubmit={this.submit1}>
              <div className="row">
                <div className="col-md-6">
                  <label for="firstName"></label>
                  <input type="text" className="form-control" placeholder="First Name" onChange={this.validateFirstname}></input>
                  <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>
                </div>
                <div className="col-md-6">
                  <label for="LastName"></label>
                  <input type="text" className="form-control" placeholder="Last Name" onChange={this.validateLastname} />
                </div>
                <div className="col-md" >
                  <div className="form-group">
                    <label for="email"></label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.validateEmail} required placeholder="Email"></input>
                    <span className="text-danger">{this.state.formErrors.emailErr} </span>

                    <label for="password"></label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.validatePassword} required placeholder="Password"></input>
                    <span className="text-danger">{this.state.formErrors.passwordErr} </span>

                    <span className="text-success">{this.state.passwd_acc_msg} </span>


                    <label for="password"></label>
                    <input type="password" className="form-control" value={this.state.cnfpassword} onChange={this.validateCnfpassword} required placeholder="Confirm Password"></input>
                    <span className="text-danger">{this.state.formErrors.cnfpasswordErr} </span>
                    <span className="text-success">{this.state.passwd_match_msg} </span>
                    <div>
                      <br />
                      <div>
                        <label for="checkbox"></label>
                        <input type="checkbox" onClick={this.validateAgreement}></input>
                        <span>I agree to <a href="/login">Terms of use</a> and <a href="google.com">Privacy Policy</a>
                        </span>
                      </div>

                      <label for="password"></label>
                      <button className="btn btn-primary btn-lg btn-block register-btn form-control" disabled={!this.state.formValid}>Register</button>
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