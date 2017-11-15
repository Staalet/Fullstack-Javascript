import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds151024.mlab.com:51024/firstmongo');
console.log("connected to DB");

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
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
