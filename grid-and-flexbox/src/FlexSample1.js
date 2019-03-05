import React from "react";

const FlexSample1 = () => {
  return (
    <div>
        <h2>FlexSample1 : use display:flex on the container and flex:1 , flex:2 , flex:1 on child divs</h2>
      <div className="container1">
        <div className='box1'>
          <h2>header1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla tempora aspernatur?</p>
        </div>
        <div className='box2'>
          <h2>header2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla tempora aspernatur?</p>
        </div>
        <div className='box3'>
          <h2>header3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur excepturi voluptates ducimus reiciendis, ullam illum ipsa nulla tempora aspernatur?</p>
        </div>
      </div>
    </div>
  );
};

export default FlexSample1;
