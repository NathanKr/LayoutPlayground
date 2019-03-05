import React from "react";
import "./FlexSamples.css";
import FlexSample1 from "./FlexSample1";
import FlexSample2 from "./FlexSample2";
import FlexSample3 from './FlexSample3'
import FlexSample4 from './FlexSample4'


const FlexSamples = () => {
  return (
    <div className='app-flex'>
      <FlexSample1 />
      <FlexSample2 />
      <FlexSample3 />
      <FlexSample4 />
      
    </div>
  );
};

export default FlexSamples;
