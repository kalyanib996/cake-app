import React from 'react'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class Spinner extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <Loader
              type="RevolvingDot"
              color="#00BFFF"
              height="100"
              width="100"
             
            />
          </div>
        </div>
      </div>
    )
  }
}
