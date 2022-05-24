import React from "react";

function Summary(props) {
  let sumCount = props.vipCount + props.regularCount;
  return <div>{sumCount}</div>;
}

export default Summary;
