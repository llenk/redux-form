import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'

import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default connect()(App);
