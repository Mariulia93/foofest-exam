import React from "react";

function StepItem(props) {
  return (
    <li className={props.count === props.stepNumber ? "selected" : "notSelected"}>
      <span>{props.stepNumber}</span> {props.name}
      <svg
        style={props.stepNumber === 4 ? { display: "none" } : null}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </li>
  );
}

export default StepItem;
