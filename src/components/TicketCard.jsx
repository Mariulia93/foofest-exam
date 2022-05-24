import React from "react";
import CountTicket from "./CountTicket";

function TicketCard(props) {
  return (
    <div className="ticketContainer">
      <div className="svgWave">
        <h3>{props.title} </h3>
      </div>
      <ul>
        {props.description.split(";").map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h4>{props.price}</h4>
      <p>{props.amount}</p>
      <CountTicket
        count={props.count}
        incrementCount={props.incrementCount}
        decrementCount={props.decrementCount}
      />
    </div>
  );
}

export default TicketCard;
