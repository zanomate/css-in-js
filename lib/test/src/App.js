import React, { Component } from 'react';
import logo from './logo.svg';
import { css } from 'style-in-js/src/css';
import * as Properties from 'style-in-js/src/properties';

const appStyle = css();

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
