import React from "react";
import styles from "../styles/GridSampleComplex2.module.css";

const GridSampleComplex2 = () => {
  return (
    <div>
      <h2>Complex grid using </h2>
      <div class={styles.grid_container}>
        <div>Header</div>
        <div>Menu</div>
        <div>Main</div>
        <div>Right</div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default GridSampleComplex2;
