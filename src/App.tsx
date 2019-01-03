import React, { Component } from 'react';
import './App.css';
import FivePlayers from "./views/FivePlayers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FivePlayers></FivePlayers>
      </div>
    );
  }
}

export default App;
