import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {

  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.image) alert.error(`Image: ${error.msg.image.join()}`)
    }
    if (message !== prevProps.message) {
      if (message.deletePrediction) alert.success(message.deletePrediction);
      if (message.addPrediction) alert.success(message.addPrediction);
    }
  }

  render() {
    return (
      <Fragment />
    )
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
