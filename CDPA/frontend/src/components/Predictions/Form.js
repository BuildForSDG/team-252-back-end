import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addPrediction } from '../../actions/predictions';

class Form extends Component {
  state = {
    image: null
  }

  static propTypes = {
    addPrediction: PropTypes.func.isRequired
  }

  fileChangedHandler = event => {
    this.setState({ image: event.target.files[0] })
  }
  uploadHandler = () => {
    const { image } = this.state;
    const formData = new FormData()
    formData.append(
      'image',
      image,
    );
    this.props.addPrediction(formData)
    this.setState({
      image: null
    })
  }
  render() {
    return (
      <div>
        <input style={{ display: 'none' }} type='file' onChange={this.fileChangedHandler} ref={fileInput => this.fileInput = fileInput} required />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.uploadHandler}>Upload</button>
      </div>
    )
  }
}

export default connect(null, { addPrediction })(Form);
