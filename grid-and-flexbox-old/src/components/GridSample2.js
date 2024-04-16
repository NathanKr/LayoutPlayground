import React from "react";
import Blue from './Blue'

const GridSample2 = () => {
  return (
    <div>
      <h2>
        <Blue>grid-template-columns</Blue>: 1fr 2fr 1fr;
        <Blue>grid-column-gap</Blue>: 10px;
        <Blue>grid-row-gap</Blue>: 3px;
        <Blue>grid-auto-rows</Blue>: minmax(100px, auto);
      </h2>
      <div className="wrapper2">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, unde
          doloremque. Unde sequi dolorem exercitationem facilis, eos quas itaque
          porro, excepturi possimus nisi amet ipsum earum soluta aspernatur ex
          nesciunt labore suscipit repellendus cumque dignissimos incidunt alias
          ratione saepe! Molestias sequi cupiditate enim. Dolores et voluptatem,
          magnam soluta, sint illum eos nisi debitis excepturi optio tenetur
          accusantium laudantium vel doloremque facilis voluptate impedit eaque!
          Vero laudantium a voluptatum eligendi eum dolorum deserunt tempora
          reiciendis dolores voluptatem ut, commodi accusantium unde!
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quod repellat pariatur eius odit, tempore dolorum recusandae eligendi
          dignissimos quas vel eos officia illo, facilis sit quae maxime
          voluptas possimus?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quod repellat pariatur eius odit, tempore dolorum recusandae eligendi
          dignissimos quas vel eos officia illo, facilis sit quae maxime
          voluptas possimus?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quod repellat pariatur eius odit, tempore dolorum recusandae eligendi
          dignissimos quas vel eos officia illo, facilis sit quae maxime
          voluptas possimus?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quod repellat pariatur eius odit, tempore dolorum recusandae eligendi
          dignissimos quas vel eos officia illo, facilis sit quae maxime
          voluptas possimus?
        </div>
      </div>
    </div>
  );
};

export default GridSample2;
