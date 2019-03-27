import React, { Component } from 'react';

class Person extends Component {
    render() {
      return (
        <div className="Home">
          <header className="App-header">
              <span className="back-btn"><</span>
              <span>Back</span></div>
            <strong>Person</strong>
          </header>
           <img src={{personImg}}></img>
           <h3>{{personName}}</h3>
           <h5>{{personLocation}}</h5>
        </div>
      );
    }
  }
  
  export default Person;