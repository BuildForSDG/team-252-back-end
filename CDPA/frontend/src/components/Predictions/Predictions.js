import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPredictions, deletePrediction } from '../../actions/predictions';
import { MDBRow, MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";

class Predictions extends Component {
  static propTypes = {
    predictions: PropTypes.array.isRequired,
    getPredictions: PropTypes.func.isRequired,
    deletePrediction: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPredictions();
  }

  render() {
    return (
      <Fragment>
        <br />
        <br />
        <h2>Recent User Uploads</h2>
        <br />
        <MDBRow>
          {this.props.predictions.map(prediction => (
            < MDBCol key={prediction.id} lg="4" md="12" className="mb-lg-0 mb-4" >
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src={prediction.image}
                  alt="User Uploaded Image"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <p className="dark-grey-text">
                The photo indicates your crop might have a {prediction.prediction} infection.
              </p>
              <MDBBtn onClick={this.props.deletePrediction.bind(this, prediction.id)} color="pink" rounded size="md">
                Delete
            </MDBBtn>
            </MDBCol>
          ))}
        </MDBRow>
      </Fragment >
    );
  }
}

const mapStateToProps = state => ({
  predictions: state.predictions.predictions
});

export default connect(mapStateToProps, { getPredictions, deletePrediction })(Predictions);
