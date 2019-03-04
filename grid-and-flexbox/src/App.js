import React, { Component } from "react";
import './App.css'
import GridSamples from "./GridSamples";
import FlexSamples from './FlexSamples'

class App extends Component {
  state = { isGrid: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isGrid: true })}>Grid</button>
        <button onClick={() => this.setState({ isGrid: false })}>Flex</button>
        <hr />
        {this.state.isGrid ? <GridSamples /> : <FlexSamples/>}
      </div>
    );
  }
}

export default App;
