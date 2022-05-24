import AvailableSpots from "../components/AvailableSpots";
import Nav from "../components/Nav";
import TicketCard from "../components/TicketCard";
import Summary from "../components/Summary";
import { useState } from "react";

export default function Tickets(props) {
  const vip = 1299;
  const regular = 799;
  let [vipCount, setVipCount] = useState(0);
  let [regularCount, setRegularCount] = useState(0);

  function incrementVipCount() {
    setVipCount((old) => old + 1);
  }
  function incrementRegularCount() {
    setRegularCount((old) => old + 1);
  }

  function decrementVipCount() {
    setVipCount((old) => old - 1);
  }

  function decrementRegularCount() {
    setRegularCount((old) => old - 1);
  }
  return (
    <>
      <div>
        <Nav />
      </div>
      <h1>CHOOSE YOUR TICKETS</h1>
      <div className="ticketsBox">
        <TicketCard
          title="VIP"
          description="Camping spot;All stages;7 days;VIP backstage entrance;Breakfast"
          price={vip + "kr"}
          amount="choose the amount of VIP tickets"
          count={vipCount}
          incrementCount={incrementVipCount}
          decrementCount={decrementVipCount}
        />
        <TicketCard
          title="REGULAR"
          description="Camping spot;All stages;7 days"
          price={regular + "kr"}
          amount="choose the amount of Regular tickets"
          count={regularCount}
          incrementCount={incrementRegularCount}
          decrementCount={decrementRegularCount}
        />

        <Summary vipCount={vipCount} regularCount={regularCount} />
        <table>
          <tr>
            <th>Camping Site</th>
            <th>Total spots</th>
            <th>Spots available</th>
          </tr>

          {props.availableSpots.map((availableSpot) => (
            <AvailableSpots availableSpot={availableSpot} />
          ))}
        </table>
      </div>
    </>
  );
}
