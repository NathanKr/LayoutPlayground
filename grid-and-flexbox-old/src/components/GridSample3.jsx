import React from "react";
import Blue from "./Blue";

const GridSample3 = () => {
  return (
    <>
      <h2>
        justify grid <Blue>grid-template-columns</Blue> 1fr 2fr ,{" "}
        <Blue>justify-items</Blue>: center
      </h2>
      <div className="wrapper3">
        <div>Lorem 1</div>
        <div>Lorem 2</div>
        <div>Lorem 3</div>
        <div>Lorem 4</div>
      </div>
    </>
  );
};

export default GridSample3;
