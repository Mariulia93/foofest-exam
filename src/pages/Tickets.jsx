import Nav from "../components/Nav";
import TicketCard from "../components/TicketCard";

export default function Tickets() {
  return (
    <>
    <div>
      <Nav />
    </div>
    <h1>CHOOSE YOUR TICKETS</h1>
    <div className="ticketsBox"> 
    <TicketCard title="VIP" description="Camping spot;All stages;7 days;VIP backstage entrance;Breakfast" price="1299kr."amount="choose the amount of VIP tickets"/>
    <TicketCard title="REGULAR" description="Camping spot;All stages;7 days" price="799kr."amount="choose the amount of Regular tickets"/>

    </div>
    </>
  );
}
