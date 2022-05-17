import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <>
      <div className="container">
        <button className="bannerImage">
          <Link to={props.name}>{props.title}</Link>
        </button>
      </div>
    </>
  );
}

export default Banner;
