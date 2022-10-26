import React from "react";

const GridSampleNesting = () => {
  return (
    <div>
      <h2>nested grid , external is 1fr 2fr 1fr , internal is 1fr 1fr 1fr;</h2>
      <div class="wrapper2">
        <div className="nested">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae earum, mollitia recusandae numquam est soluta tempore
            ab? Omnis, aspernatur cum.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae earum, mollitia recusandae numquam est soluta tempore
            ab? Omnis, aspernatur cum.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae earum, mollitia recusandae numquam est soluta tempore
            ab? Omnis, aspernatur cum.
          </div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          reprehenderit fuga facere sapiente similique qui modi soluta, sed
          quaerat vero veritatis necessitatibus quibusdam, corrupti blanditiis
          itaque ea ad sequi eveniet.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          reprehenderit fuga facere sapiente similique qui modi soluta, sed
          quaerat vero veritatis necessitatibus quibusdam, corrupti blanditiis
          itaque ea ad sequi eveniet.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          reprehenderit fuga facere sapiente similique qui modi soluta, sed
          quaerat vero veritatis necessitatibus quibusdam, corrupti blanditiis
          itaque ea ad sequi eveniet.
        </div>
      </div>
    </div>
  );
};

export default GridSampleNesting;
