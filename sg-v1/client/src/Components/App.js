import React, { Component } from 'react';

import '../assets/styles/app.css'


class App extends Component {
  render() {
    return (
      <div className="App-container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
