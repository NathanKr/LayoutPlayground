import React from "react";
import Blue from "./Blue";

const GridSample1 = () => {
  return (
    <div>
      <h2>GridSample1</h2>
      <h2>
        <Blue>grid-template-columns</Blue> : 50% 30% 20%;{" "}
        <Blue>grid-column-gap</Blue>: 10px; <Blue>grid-row-gap</Blue>: 3px;
      </h2>
      <div className="wrapper1">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          incidunt reiciendis impedit voluptate! Eveniet praesentium quo tenetur
          officiis ducimus ipsam ea non, odit error mollitia iste officia
          reprehenderit harum consequatur fugiat! Rem magni quod similique
          dolore incidunt eveniet quibusdam dolorem commodi numquam, nihil aut
          exercitationem at veniam placeat maxime officia deserunt assumenda
          quam, inventore recusandae! Dolorum nobis, odio nulla eaque debitis
          quam possimus provident dicta assumenda illum minima perferendis
          excepturi distinctio aperiam, quisquam quia quod porro et! Itaque,
          sunt natus.
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ratione
          vitae odit aperiam quae impedit placeat numquam eaque, expedita nisi a
          hic quibusdam quod illum harum sapiente sunt rerum dolore.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, repellat delectus sed nobis, ex unde aperiam sapiente
          porro odit expedita, excepturi ea amet hic omnis debitis veniam vero
          magni deserunt architecto reiciendis sint a. Sint dolore ut quis
          explicabo officia.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, repellat delectus sed nobis, ex unde aperiam sapiente
          porro odit expedita, excepturi ea amet hic omnis debitis veniam vero
          magni deserunt architecto reiciendis sint a. Sint dolore ut quis
          explicabo officia.
        </div>
      </div>
    </div>
  );
};

export default GridSample1;
