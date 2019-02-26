import React, { Component } from 'react';
import './App.css';
import FivePlayerGame from "./views/FivePlayerGame/FivePlayerGame";
import {GameSetup} from "./views/GameSetup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameSetup></GameSetup>
      </div>
    );
  }
}

export default App;
