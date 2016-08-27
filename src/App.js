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
              <p>i architect, build and scale microservices efficently.</p>
              <h3>seo keywords</h3>
              <p>
            {/* i should probably make this a component. */}
                <ul>
                  <li>javascript
                    <ul>
                      <li>nodejs</li>
                      <li>react</li>
                      <li>angular</li>
                      <li>nodejs</li>
                      <li>jquery</li>
                    </ul>
                  </li>
                  <li>css
                    <ul>
                      <li>postcss</li>
                      <li>scss</li>
                      <li>sass</li>
                      <li>less</li>
                    </ul>
                  </li>
                  <li>php
                    <ul>
                      <li>laravel</li>
                      <li>code igniter</li>
                    </ul>
                  </li>
                  <li>amazon web services
                    <ul>
                      <li>elb</li>
                      <li>s3</li>
                      <li>ec2</li>
                      <li>ecr</li>
                      <li>rds</li>
                      <li>r53</li>
                    </ul>
                  </li>
                  <li>cms
                    <ul>
                      <li>wordpress</li>
                      <li>expression engine</li>
                      <li>contentful</li>
                      <li>ghost</li>
                    </ul>
                  </li>
                  <li>docker</li>
                  <li>html</li>
                  <li>python</li>
                  <li>git</li>
                  <li>continous integration</li>
                  <li>devops</li>
                </ul>
            {/* yeah this probably should have been a component */}
              </p>
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
