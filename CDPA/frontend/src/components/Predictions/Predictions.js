import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPredictions, deletePrediction } from '../../actions/predictions';
import predictions from '../../reducers/predictions';

class Predictions extends Component {
  static propTypes = {
    predictions: PropTypes.array.isRequired,
    getPredictions: PropTypes.func.isRequired,
    deletePrediction: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getPredictions();
  }

  render() {
    return (
      <Fragment>
        <h2>Recent User Uploads</h2>
        {this.props.predictions.map(prediction => (
          <div key={prediction.id} className="card" style={{ width: '50rem' }}>
            <img src={prediction.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">The photo indicates your crop might have a {prediction.prediction} infection</p>
              <button onClick={this.props.deletePrediction.bind(this, prediction.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  predictions: state.predictions.predictions
})

export default connect(mapStateToProps, { getPredictions, deletePrediction })(Predictions);
