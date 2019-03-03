import React, { Component } from 'react';
import './App.css';
import {GameSetup} from "./views/GameSetup";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <GameSetup></GameSetup>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
