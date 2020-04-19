import React from 'react';
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "CayBee",
      formErrors: {
          txtUsernameErr:'' 
            },
      fieldValidity: {
            txtUsername: false
            },
      formValid: false
    };
    
    this.ValidateUsername = (event) => {
      const name = event.target.value;
      var formErrors = this.state.formErrors;
      var fieldValidity = this.state.fieldValidity;
      this.setState({txtUsername:event.target.value});
      if (name.length < 5) {
        formErrors.txtUsernameErr = "Cannot be less than 5";
        fieldValidity.txtUsername = false;
      } else {
        formErrors.txtUsernameErr = "";
        fieldValidity.txtUsername = true;
      }
      this.setState({ formErrors: formErrors });
      this.setState({ formValid: fieldValidity.txtUsername})
    };
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
                  <input type="text" className="form-control" value={this.state.txtUsername} onChange={this.ValidateUsername}></input>
                  <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>
                </div>
                <div className="col-md-6">
                  <label for="LastName"></label>
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md" >
                  <div className="form-group">
                    <label for="email"></label>
                    <input type="email" className="form-control" placeholder="Email" required></input>

                    <label for="password"></label>
                    <input type="password" className="form-control" placeholder="Password"></input>

                    <label for="password"></label>
                    <input type="password" className="form-control" placeholder="Confirm Password"></input>
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
                      <button className="btn btn-primary btn-lg btn-block register-btn form-control">Register</button>
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