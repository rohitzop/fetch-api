import React from "react";

// function Greet()
// {
//     return (
//         <h1>Hello Rohit</h1>
//     )
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} is student of {props.college}
      </h1>
      <p>This is mine case</p>
    </div>
  );
};

export default Greet;
