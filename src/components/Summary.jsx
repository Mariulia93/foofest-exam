import React from "react";

function Summary(props) {
  let sumPrice = props.vipCount * props.vipPrice + props.regularCount * props.regularPrice;
  return (
    <div>
      <h3>Summary</h3>
      <div className="cartRow" style={props.vipCount < 1 ? { display: "none" } : null}>
        <p>{props.vipCount}x VIP</p>
        <p>{props.vipCount * props.vipPrice}kr</p>
      </div>
      <div className="cartRow" style={props.regularCount < 1 ? { display: "none" } : null}>
        <p>{props.regularCount}x Regular</p>
        <p>{props.regularCount * props.regularPrice}kr</p>
      </div>
      <p>Total {sumPrice}kr</p>
    </div>
  );
}

export default Summary;
