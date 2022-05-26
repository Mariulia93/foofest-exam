import React from "react";
import AvailableSpots from "./AvailableSpots";
import CountTicket from "./CountTicket";
import { useState } from "react";

function StepAccomodation(props) {
  const [ownTent, setOwnTent] = useState(false);
  function ownTentChange() {
    setOwnTent((oldvalue) => !oldvalue);
    props.resetTents();
  }

  return (
    <>
      <h3>Choose accomodation{props.count}</h3>
      <h4>Campsites</h4>
      <table>
        <thead>
          <tr>
            <th>Camping Site</th>
            <th>Total spots</th>
            <th>Spots available</th>
          </tr>
        </thead>
        <tbody>
          {props.availableSpots.map((availableSpot) => (
            <tr key={availableSpot.area}>
              <td>
                <input type="radio" name="campsites"></input>
              </td>
              <AvailableSpots availableSpot={availableSpot} />
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Tents</h4>
      <div>
        <div>
          <CountTicket
            count={props.twoPeopleTent}
            incrementCount={props.incrementCount}
            decrementCount={props.decrementCount}
            title="TWOTENT"
            ownTent={ownTent}
          />
          <p>{props.twoPeopleTentPrice}</p>
        </div>
        <div>
          <CountTicket
            count={props.threePeopleTent}
            incrementCount={props.incrementCount}
            decrementCount={props.decrementCount}
            title="THREETENT"
            priceThreeTent={props.threePeopleTentPrice}
            ownTent={ownTent}
          />
          <p>{props.threePeopleTentPrice}</p>
        </div>
      </div>
      <div>
        <input type="checkbox" onChange={ownTentChange}></input>
        <label>I have my own tent</label>
      </div>
      <div>
        <input type="checkbox" onChange={props.greenCampChange}></input>
        <label>Green Camping Option 249</label>
      </div>
    </>
  );
}

export default StepAccomodation;
