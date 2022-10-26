import React, { Component } from "react";
import './App.css'
import GridSamples from "./components/GridSamples";
import FlexSamples from './components/FlexSamples'

class App extends Component {
  state = { isGrid: true };

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
