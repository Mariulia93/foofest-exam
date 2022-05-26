import React from "react";

function Summary(props) {
  let sumPrice = props.vipCount * props.vipPrice + props.regularCount * props.regularPrice;
  return (
    <div>
      <h4>Summary</h4>
      <div className="sumCartRow" style={props.vipCount < 1 ? { display: "none" } : null}>
        <p>{props.vipCount}x VIP</p>
        <p>{props.vipCount * props.vipPrice}kr</p>
      </div>
      <div className="sumCartRow" style={props.regularCount < 1 ? { display: "none" } : null}>
        <p>{props.regularCount}x Regular</p>
        <p>{props.regularCount * props.regularPrice}kr</p>
      </div>
      <p className="sumTotal"><span>Total </span>{sumPrice}kr</p>
    </div>
  );
}

export default Summary;
