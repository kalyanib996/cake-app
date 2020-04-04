import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from '../signup/registration';

class Login extends React.Component {
 state={
   registration:false,
    username:"",
    password:""
  }
  click1 = function click1(e) {
    // e.preventDefault();
    console.log(this.state.registration)
  }
  login=()=>{

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
            <form>
              <div className="form-group ">
                <label for="username"></label>
                <input type="text" className="form-control" placeholder="Username"value={this.state.username}></input>

                <label for="password"></label>
                <input type="password" className="form-control" placeholder="Password"value={this.state.password}></input>
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