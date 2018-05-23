import React, { Component } from 'react';
import '../App/App.css';

import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      snackInput: '',
    }
  }
  handleSnackInputChange = (event) => {
    this.setState({
      snackInput: event.target.value,
    });
  }
  handleSnackSubmit = (event) => {
    event.preventDefault();
    const action = {type: 'SNACK_SUBMIT', payload: this.state.snackInput};
    this.props.dispatch(action);
    this.setState({
      snackInput: '',
    });
  }
  render() {
    return (
        <form>
          <h3>Add snack</h3>
          <input type="text" onChange={this.handleSnackInputChange} value={this.state.snackInput}/>
          <input type="submit" onClick={this.handleSnackSubmit} />
        </form>
    );
  }
}

export default connect()(Form);
