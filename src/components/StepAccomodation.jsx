import React from "react";
import AvailableSpots from "./AvailableSpots";
import CountTicket from "./CountTicket";
import { useState, useEffect } from "react";

function StepAccomodation(props) {
  const [ownTent, setOwnTent] = useState(false);
  useEffect(() => {
    props.disableNextStep(ownTent);
  }, [ownTent]);
  const [peopleEqual, setPeopleEqual] = useState(false);
  function ownTentChange() {
    setOwnTent((oldvalue) => !oldvalue);
    props.resetTents();
    props.disableNextStep(ownTent);
  }

  useEffect(() => {
    if (
      props.twoPeopleTent * 2 + props.threePeopleTent * 3 ===
      props.vipCount + props.regularCount
    ) {
      console.log("hi");
      props.disableNextStep(true);
      setPeopleEqual(true);
    } else {
      setPeopleEqual(false);
      props.disableNextStep(false);
    }
  }, [props.twoPeopleTent, props.threePeopleTent]);

  function handleAreaChange(evt){
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
                <input type="radio" name="campsites" value={availableSpot.area} onChange={handleAreaChange}></input>
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
      {!peopleEqual && (
        <p>
          Amount of people in the tents should be equal with the amount of
          tickets!
        </p>
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
