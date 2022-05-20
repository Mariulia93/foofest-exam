import React from "react";

function TicketCard(props) {
  return (
    <div className="ticketContainer">
      <div className="svgWave">

      <h3>{props.title} </h3>
      </div>
      <ul> 
        {props.description.split(";").map((item)=><li>{item}</li>)}

      </ul>
      <h4>{props.price}
      </h4>
      <p>{props.amount}</p>
    </div>
  );
}

export default TicketCard;
