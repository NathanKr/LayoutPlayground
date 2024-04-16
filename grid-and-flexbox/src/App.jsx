import { useState } from "react";
// import './App.css';
import GridSamples from './components/GridSamples';
import FlexSamples from './components/FlexSamples';

function App() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div>
      <button onClick={() => setIsGrid(true)}>Grid</button>
      <button onClick={() => setIsGrid(false)}>Flex</button>
      <hr />
      {isGrid ? <GridSamples /> : <FlexSamples />}
    </div>
  );
}

export default App;
