import AvailableSpots from "../components/AvailableSpots";
import Nav from "../components/Nav";
import TicketCard from "../components/TicketCard";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Tickets(props) {
  return (
    <>
      <div>
        <Nav vipCount={props.vipCount} regularCount={props.regularCount} />
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
      </div>
      {!(props.vipCount === 0 && props.regularCount === 0) && (
        // !(props.vipCount === 0 && props.regularCount === 0)
        // &&
        <aside
          className="ticketsSummary"
          // style={props.vipCount || props.regularCount < 1 ? { display: "none" } : null}
        >
          <Summary
            vipCount={props.vipCount}
            regularCount={props.regularCount}
            vipPrice={props.vipPrice}
            regularPrice={props.regularPrice}
            twoPeopleTent={props.twoPeopleTent}
            threePeopleTent={props.threePeopleTent}
            greenCampChange={props.greenCampChange}
            greenCampingPrice={props.greenCampingPrice}
            twoPeopleTentPrice={props.twoPeopleTentPrice}
            threePeopleTentPrice={props.threePeopleTentPrice}
          />
          <Link to="/basket" className="primaryCTA">
            Add to cart
          </Link>
        </aside>
      )}
      <h3 className="campingAvailability">Check our camping availability</h3>
      <table>
        <tr>
          <th>Camping Site</th>
          <th>Total spots</th>
          <th>Spots available</th>
        </tr>

        {props.availableSpots.map((availableSpot) => (
          <tr>
            {" "}
            <AvailableSpots availableSpot={availableSpot} />
          </tr>
        ))}
      </table>

      <Footer />
    </>
  );
}
