import React from "react";

function Summary(props) {
  const campingFee = 99;
  let sumPrice = props.vipCount * props.vipPrice + props.regularCount * props.regularPrice + campingFee + props.twoPeopleTentPrice + props.threePeopleTentPrice;
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
      <div className="cartRow">
        <p>+ camping fee</p>
        <p>{campingFee}kr</p>
      </div>
      <div className="cartRow" style={props.twoPeopleTent < 1 ? { display: "none" } : null}>
        <p>{props.twoPeopleTent} x Two people tent</p>
        <p>{props.twoPeopleTent * props.twoPeopleTentPrice}kr</p>
      </div>
      <div className="cartRow" style={props.threePeopleTent < 1 ? { display: "none" } : null}>
        <p>{props.threePeopleTent} x Three people tent</p>
        <p>{props.threePeopleTent * props.threePeopleTentPrice}kr</p>
      </div>
      <p>Total {sumPrice}kr</p>
    </div>
    
  );
}

export default Summary;
