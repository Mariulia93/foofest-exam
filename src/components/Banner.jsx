import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="bannerContainer">
      <button className="bannerImage" style={props.style}>
        <Link to={props.name}>{props.title}</Link>
      </button>
    </div>
  );
}

export default Banner;
