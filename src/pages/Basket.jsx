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
  //   const [step, setStep] = useState(StepTickets);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(1);
  function showNextStep() {
    setCount((old) => old + 1);
    console.log(count);

    count === 4 ? setIsDisabled(true) : setIsDisabled(false);
  }

  function resetCount() {
    setCount(1);
    setIsDisabled(false);
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
            {/* {!hideM && !hideSchedules && (
              <div>
                <p>migdard</p>
                <ul>
                  {displayedM.map((item) => (
                    <li>
                      {" "}
                      {item.start} {item.act}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
            <p>THIS CONTENT CHANGES</p>

            {/* <StepTickets count={count} />
            <StepAccomodation setStep={setStep} /> */}
            {count === 1 ? <StepTickets count={count} /> : null}
            {count === 2 ? <StepAccomodation count={count} /> : null}
            {count === 3 ? <StepPersonalData count={count} /> : null}
            {count === 4 ? <StepPayment count={count} /> : null}
          </div>
          <aside>
            <Summary />
          </aside>
        </section>
        {/* {count === 5 ? (setDisabled = true) : (setDisabled = false)} */}
        <button onClick={showNextStep} disabled={isDisabled}>
          Next Step
        </button>
        <button onClick={resetCount}>Reset Count</button>
      </main>
      <Footer />
    </div>
  );
}

export default Basket;
