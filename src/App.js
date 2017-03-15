import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';

class App extends Component {

  render() {
    return (
      <div className="main container">
        <div className="grid -middle -center">
            <div className="cell -6of12">
              <figure><img style={{
                maxWidth: '340px',
              }} src={logo} alt="seripap" /></figure>

            </div>
        </div>
        <footer className="grid -middle -center">
          <div className="cell -6of12" style={{textAlign: 'center'}}>
            <p><a href="https://github.com/seripap">code</a><br />
            <a href="https://twitter.com/gibberish">gibberish</a><br />
            <a href="https://www.linkedin.com/in/danielseripap">linkedin</a></p>
            <p>no-reply@seripap.com</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
