import React from "react";

const ShowSingle = ({ ques, single }) => {
  const choice2 = single.map((item, index) => {
    return (
      <div>
        <div>
          <input type="radio" />
          {"  "}
          {item}{" "}
        </div>
      </div>
    );
  });
  return (
    <div className="main text-center">
      <div className="div">{choice2}</div>
    </div>
  );
};

export default ShowSingle;
