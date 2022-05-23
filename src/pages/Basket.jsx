import Nav from "../components/Nav";
import StepTickets from "../components/StepTickets";
import StepAccomodation from "../components/StepAccomodation";
import StepPersonalData from "../components/StepPersonalData";
import StepPayment from "../components/StepPayment";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { useState } from "react";
function Basket() {
  //   const [step, setStep] = useState(StepTickets);
  const [count, setCount] = useState(1);
  function showNextStep() {
    setCount((old) => old + 1);
    console.log(count);
    if (count === 2) {
      //   show step accomodation
      console.log("step accomodation");
    }
  }
  return (
    <div>
      <Nav />
      <main className="basketContainer">
        <ul>
          <StepTickets count={count} selected={true} />
          <StepAccomodation />
          <StepPersonalData />
          <StepPayment />
        </ul>
        <section>
          <p>THIS CONTENT CHANGES</p>
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
