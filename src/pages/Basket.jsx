import Nav from "../components/Nav";
import StepItem from "../components/StepItem";
import StepTickets from "../components/StepTickets";
import StepAccomodation from "../components/StepAccomodation";
import StepPersonalData from "../components/StepPersonalData";
import StepPayment from "../components/StepPayment";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { useState } from "react";
function Basket() {
  // const [step, setStep] = useState(StepTickets);
  const [count, setCount] = useState(1);
  function showNextStep() {
    setCount((old) => old + 1);
    console.log(count);
    if (count === 2) {
      //   show step accomodation
      console.log("step accomodation");
      // console.log("step", step);
    }
  }
  return (
    <div>
      <Nav />
      <main className="basketContainer">
        <ul>
          <StepItem name="1. Tickets" />
          <StepItem name="2. Accomodation" />
          <StepItem name="3. Personal Data" />
          <StepItem name="4. Payment" />
        </ul>
        <section>
          <div>
            <p>THIS CONTENT CHANGES</p>
            <StepTickets count={count} selected={true} />
            <StepAccomodation />
            <StepPersonalData />
            <StepPayment />
          </div>
          <aside>
            <Summary />
          </aside>
        </section>
        <button onClick={showNextStep}>Next Step</button>
      </main>
      <Footer />
    </div>
  );
}

export default Basket;
