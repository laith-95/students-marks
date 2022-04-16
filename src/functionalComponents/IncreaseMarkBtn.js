// class base component
import React, { Component } from "react";

const IncreaseMarkBtn = (props) => {
  console.log("[IncreaseMarkBtn.js] return");
  return (
    <button className="increase-mark-btn" onClick={props.increaseMarkHandler}>
      Increase +1
    </button>
  );
};

export default IncreaseMarkBtn;
