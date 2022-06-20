import React from "react";

function TestimonialBanner(props) {
  
  return (
    <div className="testContainer">
      <div className="testImg">
        <img src={props.icon} alt="something"></img>
      </div>
      <div className="testText">
      <h2>My Foofest Story</h2>
      <p>{props.description}</p>
      <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default TestimonialBanner;
