import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from '../signup/registration';
import Navbar from '../header/header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import homepage from '../homepage/homepage';
import { setLoggedInUser } from '../../actions/loggedInUser_action';
import { toastr } from 'react-redux-toastr';
var user_flag = ''
var user_name = ''
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtEmail: "",
      password: "",
      formErrors: {},
      txtEmailerr: "",
      txtPassworderr: "",
      flag: false,
    };
    this.submit1 = this.submit1.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

  }


  validateEmail = (event) => {
    const txtEmail = event.target.value;
    this.setState({ txtEmail: event.target.value });
    var formErrorsCopy = this.state.formErrors;
    const case_match = txtEmail.match(/^[a-z]+\@[a-z]+\.[a-z]{2,3}$/);
    if (!case_match) {
      this.setState({ txtEmailerr: "" })
      formErrorsCopy.txtEmail = "Invalid Email";

    }
    else {
      delete formErrorsCopy["txtEmail"];
    }
    this.setState({ formErrors: formErrorsCopy });
  }

  getPassword = (event) => {
    this.setState({ password: event.target.value });
    if (this.state.password != "") {
      this.setState({ txtPassworderr: "" })
    }
    var formErrorsCopy = this.state.formErrors;
    if (event.target.value == "") {
      formErrorsCopy.passwordError = "Password cannot be blank";
    } else {
      delete formErrorsCopy["passwordError"];

    } this.setState({ formErrors: formErrorsCopy });

  };

  submit1(event) {
    event.preventDefault();
    if (this.state.txtEmail == "") {
      this.setState({ txtEmailerr: "Please provide Email" })
      this.setState({ txtPassworderr: "" })
      // event.preventDefault();
    }
    else if (this.state.password == "") {
      this.setState({ txtEmailerr: "" })
      this.setState({ txtPassworderr: "Please provide Password" })
      // event.preventDefault();
    }
    else if (Object.keys(this.state.formErrors).length > 0 || this.state.txtEmail == "" || this.state.password == "") {
      this.setState({ txtEmailerr: "" })
      this.setState({ txtPassworderr: "" })
      // event.preventDefault();
    }

    else {
      console.log("aaaaaa")
      const userPramLength = Object.keys(this.props.user).length
      const userPram = this.props.user
      console.log(userPramLength)
      let i = 0
      for (i; i < userPramLength; i++) {
        console.log("FORRRRRRRRRRRR")
        if (this.state.txtEmail == userPram[i].email && this.state.password == userPram[i].password) {
          console.log("Inside for--if-------")
          user_flag = true
          user_name = userPram[i].firstname
          break
        }
        else {
          console.log(this.state.flag)
          console.log("Inside for--elseeee-------")
          toastr.error('Login Failed ', 'Incorrect Credentials')

        }

      } if (user_flag) {
        console.log("user_flag", user_flag)
        this.setState({ flag: true })
        console.log("flag", this.state.flag)
        this.props.setLoggedInUser(user_name, user_flag)
      }

    }
  }

  render() {
    if (this.state.flag == false) {
      console.log("inside if")
      return (

        <React.Fragment>
          <Navbar />
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
                  <span id="errorMsg" className="text-danger">{this.state.formErrors.txtEmail} {this.state.txtEmailerr}</span>

                  <label for="password"></label>
                  <input type="password" className="form-control" placeholder="Password" onChange={this.getPassword}></input>
                  <div id="errorMsg" className="text-danger">{this.state.formErrors.passwordError} {this.state.txtPassworderr}</div>

                  <label for="button"></label>
                  <button className="btn btn-primary btn-lg btn-block signup-btn form-control">Login</button>

                  <label for="button1"></label>
                  <button className="btn btn-primary btn-lg btn-block signup-btn form-control">Signup</button>

                </div>
              </form>
            </div>
          </div>

        </React.Fragment>

      )
    }
    else {
      console.log("inside ssssslse")
      console.log(this.state.flag)
      // const toastrOptions = {
      //   timeOut: 3000, // Default value is 0
      //   onShowComplete: () => {console.log('SHOW: animation is done')
      
      // },
      //   onCloseButtonClick: () => { console.log("jfgshdg")},
      // }
      // toastr.success('Title','success', toastrOptions)
      // =================================
      // const toastrConfirmOptions = {
      //   onOk: () => (
      //     <div>
      //       <Redirect to='/homepage' />
      //     </div>),
          
      //   onCancel: () => console.log('CANCEL: clicked')
      // };
      // toastr.confirm('Are you sure about that!', toastrConfirmOptions);

      return (
        <div>
          <Redirect to='/homepage' />
        </div>)
    



    }
  }
}


function mapStateToProps({ user }) {
  return {
    user
  }
}

const mapDispatchToProps = {
  setLoggedInUser: setLoggedInUser

}


export default connect(mapStateToProps, mapDispatchToProps)(Login);