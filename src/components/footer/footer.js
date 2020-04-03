import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row">

              <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12">
                <ul className="adress">
                  <span>Adress</span>
                  <li>
                    <p>Lorem ipsum dolor sit amet, vero omnis vocibus</p>
                  </li>

                  <li>
                    <p>+90 1234 56789</p>
                  </li>

                  <li>
                    <p>CakeKingo@gmail.com</p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <ul className="contact">
                  <span>Contact</span>
                  <li>
                    <a href="#">Home</a>
                  </li>

                  <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">Blog</a>
                  </li>

                  <li>
                    <a href="#">Gallery </a>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                <ul className="social">
                  <span>Social</span>
                  <li>
                    <a href="#"><i className="fa fa-facebook fa-2x"></i></a>
                  </li>

                  <li>
                    <a href="#"><i className="fa fa-github fa-2x"></i></a>
                  </li>

                  <li>
                    <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                  </li>

                  <li>
                    <a href="#"><i className="fa fa-tumblr fa-2x"></i></a>
                  </li>

                  <li>
                    <a href="#"><i className="fa fa-google-plus fa-2x"></i></a>
                  </li>

                </ul>
              </div>


            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}