import styles from "../styles/GridSampleComplex1.module.css";
import React from "react";

const GridSampleComplex1 = () => {
  return (
    <>
      <h2>Complex grid using grid-template-areas</h2>
      <div class={styles.grid_container}>
        <div class={styles.item1}>Header</div>
        <div class={styles.item2}>Menu</div>
        <div class={styles.item3}>Main</div>
        <div class={styles.item4}>Right</div>
        <div class={styles.item5}>Footer</div>
      </div>
    </>
  );
};

export default GridSampleComplex1;
