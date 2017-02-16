import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="main container">
        <div className="grid">
          <div className="cell -2of12">
            <svg width="100" height="100">
              <rect width="100" height="100"/>
              <text x="50" y="90" fill="white">DS</text>
            </svg>
              <p><a href="https://github.com/seripap">github</a><br />
              <a href="https://twitter.com/gibberish">twitter</a><br />
              <a href="https://www.linkedin.com/in/danielseripap">linkedin</a></p>
            </div>
            <div className="cell -10of12">
              <h1>daniel seripap</h1>
              <h2>from Brooklyn.</h2>
              <p>person who writes code.</p>
            </div>
        </div>
        <footer>
          <p>no-reply@seripap.com</p>
        </footer>
      </div>
    );
  }
}

export default App;
