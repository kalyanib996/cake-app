import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {withRouter} from 'react-router-dom';

import './card.css';
import { Card, CardImg,CardTitle,CardBody } from 'reactstrap';

class Card1 extends React.Component {
    render() {

        return (

            <React.Fragment>

                <div className="cardss">

                    <div className="row card-row">
                        <div className="col-md-2">
                            <Card className="card1">
                                <CardImg src={process.env.PUBLIC_URL + '/978798654.jpg'} />
                                <CardTitle className="card-title">cake_name</CardTitle>
                                <CardBody>description</CardBody>
                            </Card>
                        </div>
                    </div>

                </div>


            </React.Fragment>
        )
    }


}
export default Card1;

