import React from "react";

function Summary(props) {
  let sumPrice = props.vipCount * props.vipPrice + props.regularCount * props.regularPrice;
  return (
    <div>
      <div style={props.vipCount < 1 ? { display: "none" } : null}>
        <p>{props.vipCount}x VIP</p>
        <p>{props.vipCount * props.vipPrice}</p>
      </div>
      <div style={props.regularCount < 1 ? { display: "none" } : null}>
        <p>{props.regularCount}x Regular</p>
        <p>{props.regularCount * props.regularPrice}</p>
      </div>
      <p>Total {sumPrice}kr</p>
    </div>
  );
}

export default Summary;
