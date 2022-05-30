import React from "react";
import AvailableSpots from "./AvailableSpots";
import CountTicket from "./CountTicket";
import { useState, useEffect } from "react";

function StepAccomodation(props) {
  // const [props.ownTent, setOwnTent] = useState(false);
  const { twoPeopleTent, threePeopleTent, vipCount, regularCount, disableNextStep, ownTent } =
    props;
  const [peopleEqual, setPeopleEqual] = useState(false);

  useEffect(() => {
    disableNextStep(ownTent);
  }, [ownTent, disableNextStep]);

  function ownTentChange() {
    props.setOwnTent((oldvalue) => !oldvalue);
    props.resetTents();
    props.disableNextStep(props.ownTent);
  }

  useEffect(() => {
    if (!props.ownTent) {
      if (twoPeopleTent * 2 + threePeopleTent * 3 === vipCount + regularCount) {
        disableNextStep(true);
        setPeopleEqual(true);
      } else {
        setPeopleEqual(false);
        disableNextStep(false);
      }
    }
  }, [props.ownTent, twoPeopleTent, threePeopleTent, disableNextStep, vipCount, regularCount]);

  function handleAreaChange(evt) {
    props.getArea(evt.target.value);
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
                <input
                  type="radio"
                  name="campsites"
                  value={availableSpot.area}
                  onChange={handleAreaChange}
                ></input>
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
            ownTent={props.ownTent}
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
            ownTent={props.ownTent}
          />
          <p>{props.threePeopleTentPrice}</p>
        </div>
      </div>
      {!peopleEqual && (
        <p>Amount of people in the tents should be equal to the amount of tickets!</p>
      )}
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
