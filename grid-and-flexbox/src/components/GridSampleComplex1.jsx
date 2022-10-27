import styles from "../styles/GridSampleComplex1.module.css";
import React from "react";
import Blue from './Blue'

const GridSampleComplex1 = () => {
  return (
    <>
      <h2>Complex grid using <Blue>grid-template-areas</Blue> and <Blue>grid-area</Blue></h2>
      <div className={styles.grid_container}>
        <div className={styles.item1}>Header</div>
        <div className={styles.item2}>Menu</div>
        <div className={styles.item3}>Main</div>
        <div className={styles.item4}>Right</div>
        <div className={styles.item5}>Footer</div>
      </div>
    </>
  );
};

export default GridSampleComplex1;
