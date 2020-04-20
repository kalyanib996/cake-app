import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Tryout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.submit1 = this.submit1.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submit1(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log("Inside submit method")
  }


  render() {
    return (
      <form>
        <label>
          Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className="btn btn-primary btn-lg btn-block register-btn form-control" type="submit"  onSubmit={this.submit1} >Register</button>

        
      </form>
    );
  }
}

export default Tryout;