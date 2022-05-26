import AvailableSpots from "../components/AvailableSpots";
import Nav from "../components/Nav";
import TicketCard from "../components/TicketCard";
import Summary from "../components/Summary";

export default function Tickets(props) {
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
          price={props.vipPrice + "kr"}
          amount="choose the amount of VIP tickets"
          count={props.vipCount}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
        />
        <TicketCard
          title="REGULAR"
          description="Camping spot;All stages;7 days"
          price={props.regularPrice + "kr"}
          amount="choose the amount of Regular tickets"
          count={props.regularCount}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
        />

        <Summary
          vipCount={props.vipCount}
          regularCount={props.regularCount}
          vipPrice={props.vipPrice}
          regularPrice={props.regularPrice}
        />
        <table>
          <tr>
            <th>Camping Site</th>
            <th>Total spots</th>
            <th>Spots available</th>
          </tr>

          {props.availableSpots.map((availableSpot) => (
            <tr> <AvailableSpots availableSpot={availableSpot} /></tr>
          ))}
        </table>
      </div>
    </>
  );
}
