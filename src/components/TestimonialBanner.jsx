import React from "react";

function TestimonialBanner({data}) {
  
  return (
    <div className="testContainer">
      <div className="testImg">
        <img src={data.icon} alt="something"></img>
      </div>
      <div className="testText">
      <h2>My Foofest Story</h2>
      <p>{data.description}</p>
      <h4>{data.name}</h4>
      </div>
    </div>
  );
}

export default TestimonialBanner;
