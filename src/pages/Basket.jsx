import Nav from "../components/Nav";
import StepItem from "../components/StepItem";
import StepTickets from "../components/StepTickets";
import StepAccomodation from "../components/StepAccomodation";
import StepPersonalData from "../components/StepPersonalData";
import StepPayment from "../components/StepPayment";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { useState } from "react";

function Basket(props) {
  //   const [step, setStep] = useState(StepTickets);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stepCounter, setStepCounter] = useState(1);
  console.log(stepCounter);
  function showNextStep() {
    setStepCounter((old) => old + 1);
    console.log(stepCounter);
    stepCounter === 4 ? setIsDisabled(true) : setIsDisabled(false);
  }

  function resetCount() {
    setStepCounter(1);
    setIsDisabled(false);
  }
  return (
    <div>
      <Nav />
      <main className="basketContainer">
        <ul>
          <StepItem name="1. Tickets" stepNumber={1} count={stepCounter} />
          <StepItem name="2. Accomodation" stepNumber={2} count={stepCounter} />
          <StepItem name="3. Personal Data" stepNumber={3} count={stepCounter} />
          <StepItem name="4. Payment" stepNumber={4} count={stepCounter} />
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
            {stepCounter === 1 ? <StepTickets count={stepCounter} /> : null}
            {stepCounter === 2 ? <StepAccomodation count={stepCounter} /> : null}
            {stepCounter === 3 ? <StepPersonalData count={stepCounter} /> : null}
            {stepCounter === 4 ? <StepPayment count={stepCounter} /> : null}
          </div>
          <aside>
            <Summary
              vipCount={props.vipCount}
              regularCount={props.regularCount}
              vipPrice={props.vipPrice}
              regularPrice={props.regularPrice}
            />
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
