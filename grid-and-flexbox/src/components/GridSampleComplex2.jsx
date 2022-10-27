import React from "react";
import styles from "../styles/GridSampleComplex2.module.css";
import Blue from './Blue'

const GridSampleComplex2 = () => {
  return (
    <>
      <h2>
        complex grid using : <Blue>grid-template-columns</Blue>: repeat(4,1fr);{" "}
        <Blue>gap</Blue>: 1.0rem;
        <Blue>grid-column-start</Blue>: 4;
        <Blue>grid-row-start</Blue> : 1;
        <Blue>grid-row-end</Blue> : 3;
      </h2>
      <div className={styles.container}>
        <div
          style={{ backgroundColor: "purple", color: "white" }}
          className={`${styles.grid_col_span_2} ${styles.grid_item}`}
        >
          <h4>i recived</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptas laborum odio. Explicabo vel nisi consectetur iusto quis
            nihil sit.
          </p>
        </div>
        <div
          style={{ backgroundColor: "grey", color: "white" }}
          className={styles.grid_item}
        >
          <h4>The team was</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            similique omnis odit quas harum doloremque. Quia rerum commodi nam
            inventore!
          </p>
        </div>
        <div
          style={{ backgroundColor: "grey", color: "white" }}
          className={styles.grid_item}
        >
          <h4>an overall wonderfull</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet est
            eos optio dolor rem ipsum autem soluta, sapiente ut fugiat, mollitia
            aliquam? Sit modi, at accusantium repellat harum nesciunt non,
            voluptas cupiditate labore atque illum?
          </p>
        </div>

        <div
          style={{ backgroundColor: "black", color: "white" }}
          className={`${styles.grid_item} ${styles.grid_col_span_2}`}
        >
          <h4>Awesome teaching</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            perspiciatis veritatis magnam impedit, culpa pariatur quas
            recusandae quae ratione, facilis error repudiandae iste, molestias
            ullam ipsum nisi voluptatibus laudantium adipisci similique maiores
            ipsa! Qui vero reiciendis ad perspiciatis numquam tempore!
          </p>
        </div>
        <div style={{ color: "grey" }} className={styles.grid_item}>
          <h4>Such a life changing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            obcaecati quis neque praesentium repellendus id? Quisquam, amet
            consequuntur odio quis quo consequatur sapiente optio repellendus
            delectus veritatis corporis, facere rerum autem possimus aut quae
            reiciendis repudiandae soluta nemo labore? Laboriosam, fuga
            assumenda debitis ut eveniet eaque iste dicta architecto quia
            excepturi. Ratione saepe assumenda consectetur architecto, quos
            eaque minima, provident dolor adipisci debitis vitae, quisquam iste.
            Laboriosam reprehenderit iusto tempora obcaecati nulla. Sequi iusto
            ducimus odio explicabo deserunt numquam repellendus quaerat, illum
            modi nostrum cumque incidunt et ex a illo eius unde perspiciatis
            quibusdam? Consequatur in voluptatum distinctio nihil eligendi!
          </p>
        </div>
      </div>
    </>
  );
};

export default GridSampleComplex2;
