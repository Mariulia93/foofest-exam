import React from "react";

function Band(props) {
  return (
    <article>
      <p>{props.band.name}</p>
    </article>
  );
}

export default Band;
