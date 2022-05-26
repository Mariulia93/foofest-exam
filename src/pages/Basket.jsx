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
  const twoPeopleTentPrice = 299;
  const threePeopleTentPrice = 399;
  const [greenCampingPrice, setGreenCampingPrice] = useState(0);

  function greenCampChange() {
    if (greenCampingPrice === 0) setGreenCampingPrice(249);
    else {
      setGreenCampingPrice(0);
    }
  }
  const [selectedArea, setSelectedArea] = useState("");
  function getArea(area) {
    setSelectedArea(area);
  }

  console.log(stepCounter);
  function showNextStep() {
    console.log(selectedArea);
    setStepCounter((old) => old + 1);
    console.log(stepCounter);
    stepCounter === 4 ? setIsDisabled(true) : setIsDisabled(false);
    if (stepCounter === 2) {
      let ticketTotal = props.vipCount + props.regularCount;
      const obj = {
        area: selectedArea,
        amount: ticketTotal,
      };

      fetch("https://foofest2022.herokuapp.com/reserve-spot", {
        method: "put",
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }

  function resetCount() {
    setStepCounter(1);
    setIsDisabled(false);
  }
  function disableNextStep(iHaveTent) {
    setIsDisabled(!iHaveTent);
  }
  return (
    <div>
      <Nav />
      <main className="basketContainer">
        <ul>
          <StepItem name="1. Tickets" stepNumber={1} count={stepCounter} />
          <StepItem name="2. Accomodation" stepNumber={2} count={stepCounter} />
          <StepItem
            name="3. Personal Data"
            stepNumber={3}
            count={stepCounter}
          />
          <StepItem name="4. Payment" stepNumber={4} count={stepCounter} />
        </ul>
        <section>
          <div>
            {stepCounter === 1 ? (
              <StepTickets
                vipCount={props.vipCount}
                regularCount={props.regularCount}
                vipPrice={props.vipPrice}
                regularPrice={props.regularPrice}
                incrementCount={props.incrementCount}
                decrementCount={props.decrementCount}
              />
            ) : null}
            {stepCounter === 2 ? (
              <StepAccomodation
                vipCount={props.vipCount}
                regularCount={props.regularCount}
                stepCounter={stepCounter}
                availableSpots={props.availableSpots}
                twoPeopleTent={props.twoPeopleTent}
                threePeopleTent={props.threePeopleTent}
                incrementCount={props.incrementCount}
                decrementCount={props.decrementCount}
                twoPeopleTentPrice={twoPeopleTentPrice}
                threePeopleTentPrice={threePeopleTentPrice}
                resetTents={props.resetTents}
                greenCampChange={greenCampChange}
                disableNextStep={disableNextStep}
                getArea={getArea}
              />
            ) : null}
            {stepCounter === 3 ? (
              <StepPersonalData stepCounter={stepCounter} />
            ) : null}
            {stepCounter === 4 ? (
              <StepPayment stepCounter={stepCounter} />
            ) : null}
          </div>
          <aside>
            <Summary
              vipCount={props.vipCount}
              regularCount={props.regularCount}
              vipPrice={props.vipPrice}
              regularPrice={props.regularPrice}
              twoPeopleTentPrice={twoPeopleTentPrice}
              threePeopleTentPrice={threePeopleTentPrice}
              twoPeopleTent={props.twoPeopleTent}
              threePeopleTent={props.threePeopleTent}
              greenCampingPrice={greenCampingPrice}
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
