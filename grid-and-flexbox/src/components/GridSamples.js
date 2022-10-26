import React from "react";
import GridSample1 from "./GridSample1";
import GridSample2 from "./GridSample2";
import GridSampleNesting from './GridSampleNesting'
import GridSample3 from "./GridSample3";
import "../styles/GridSamples.css";
import GridSampleComplex1 from "./GridSampleComplex1";
import GridSampleComplex2 from "./GridSampleComplex2";



const GridSamples = () => {
  return (
    <div>
      <GridSampleComplex1/>
      <GridSampleComplex2/>
      <GridSample1 />
      <GridSample2 />
      <GridSampleNesting />
      <GridSample3/>
    </div>
  );
};

export default GridSamples;
