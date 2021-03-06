import React from "react";
import GridSample1 from "./GridSample1";
import GridSample2 from "./GridSample2";
import GridSampleNesting from './GridSampleNesting'
import "./GridSamples.css";

const GridSamples = () => {
  return (
    <div>
      <GridSample1 />
      <GridSample2 />
      <GridSampleNesting />
      <h2>justify grid , 1fr 2fr , justify-items: center</h2>
      <div className="wrapper3">
        <div>Lorem 1</div>
        <div>Lorem 2</div>
        <div>Lorem 3</div>
        <div>Lorem 4</div>
      </div>
    </div>
  );
};

export default GridSamples;
