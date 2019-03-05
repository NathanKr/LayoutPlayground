import React from "react";

const FlexSample3 = () => {
  return (
    <div>
      <h2>
        FlexSample3 : use display:flex on container , flex:1 on input. ditch
        button - looked odd{" "}
      </h2>
      <div className="container2">
        <input placeholder="Write your message ...    " />
        <button>submit</button>
      </div>
    </div>
  );
};

export default FlexSample3;
