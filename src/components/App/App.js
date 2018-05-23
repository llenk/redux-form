import React, { Component } from 'react';
import '../App/App.css';

import { connect } from 'react-redux';

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form>
          <h3>Add snack</h3>
          <input type="text" onChange={this.handleSnackInputChange} />
          <input type="submit" onClick={this.handleSnackSubmit} />
        </form>
      </div>
    );
  }
}

export default connect()(App);
