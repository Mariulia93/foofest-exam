import React from "react";

function StepItem(props) {
  return (
    <li className={props.count === props.stepNumber ? "selected" : "notSelected"}>{props.name}</li>
  );
}

export default StepItem;
