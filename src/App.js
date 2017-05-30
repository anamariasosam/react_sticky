import React, { Component } from 'react';
import './App.css';

import Sticky from './Sticky';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container before">
          <h1>Before Sticky</h1>
        </div>
        <div className="container">
          <Sticky />
        </div>
        <div className="container after">
          <h1>After Sticky</h1>
        </div>
      </div>
    );
  }
}

export default App;
