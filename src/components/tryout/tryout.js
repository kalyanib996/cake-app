import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Tryout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txtEmail: '' ,
    formErrors: {},};

    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = event => {
    
    if (Object.keys(this.state.formErrors).length > 0) {
      event.preventDefault();
    }
  };

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

  

  handleSubmit(event) {
    
    if (Object.keys(this.state.formErrors).length > 0) {
      event.preventDefault();
      console.log("hello")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.txtEmail} onChange={this.validateEmail} />
          <span id="errorMsg" className="text-danger">{this.state.formErrors.txtEmail}</span>
        </label>
        <button >Signup</button>
      </form>
    );
  }
}


export default Tryout;