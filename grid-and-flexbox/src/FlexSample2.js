import React from "react";

const FlexSample2 = () => {
  return (
    <div>
      <h2>
        divs are side by side , occupy all their continer width using
        display:flex on their container
      </h2>

      <div className="container1">
        <div>
          <h2>header1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla
            tempora aspernatur?
          </p>
        </div>
        <div>
          <h2>header2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla
            tempora aspernatur?
          </p>
        </div>
        <div>
          <h2>header3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla
            tempora aspernatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexSample2;
