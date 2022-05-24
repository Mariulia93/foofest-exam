import React from "react";
import AvailableSpots from "./AvailableSpots";
import CountTicket from "./CountTicket";

function StepAccomodation(props) {
  return (
    <>
      <h3>Choose accomodation{props.count}</h3>
      <h4>Campsites</h4>
      <table>
        <tr>
          <th>Camping Site</th>
          <th>Total spots</th>
          <th>Spots available</th>
        </tr>
        {props.availableSpots.map((availableSpot) => (
          <div>
            <input type="radio" name="campsites"></input>
            <AvailableSpots availableSpot={availableSpot} />
          </div>
        ))}
      </table>
      <h4>Tents</h4>
      <div>
      <div> 
        <CountTicket
          count={props.twoPeopleTent}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
          title="TWOTENT"
        />
        <p>
         {props.twoPeopleTentPrice}
          </p>
        </div>
        <div> 
        <CountTicket
          count={props.threePeopleTent}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
          title="THREETENT"
          priceThreeTent={props.threePeopleTentPrice}
        />
        <p>{props.threePeopleTentPrice}</p>
        </div>
      </div>
    </>
  );
}

export default StepAccomodation;
