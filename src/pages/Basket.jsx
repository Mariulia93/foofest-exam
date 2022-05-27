import Nav from "../components/Nav";
import StepItem from "../components/StepItem";
import StepTickets from "../components/StepTickets";
import StepAccomodation from "../components/StepAccomodation";
import StepPersonalData from "../components/StepPersonalData";
import StepPayment from "../components/StepPayment";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Basket(props) {
  //   const [step, setStep] = useState(StepTickets);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stepCounter, setStepCounter] = useState(1);
  const twoPeopleTentPrice = 299;
  const threePeopleTentPrice = 399;
  // const [greenCampingPrice, setGreenCampingPrice] = useState(0);

  // function greenCampChange() {
  //   if (greenCampingPrice === 0) setGreenCampingPrice(249);
  //   else {
  //     setGreenCampingPrice(0);
  //   }
  // }
  const [selectedArea, setSelectedArea] = useState("");
  function getArea(area) {
    setSelectedArea(area);
  }

  console.log(stepCounter);
  function showNextStep() {
    console.log(selectedArea);
    setStepCounter((old) => old + 1);
    stepCounter === 4 ? setIsDisabled(true) : setIsDisabled(false);
    if (stepCounter === 2) {
      let ticketTotal = props.vipCount + props.regularCount;
      const obj = {
        area: selectedArea,
        amount: ticketTotal,
      };

      fetch("https://foofest2022.herokuapp.com/reserve-spot", {
        headers: { "Content-Type": "application/json" },
        method: "put",
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      props.resetTickets();
    }

    return (
      <div className="timer">
        {/* <div className="text">Remaining</div> */}
        <div className="value">{remainingTime}</div>
        <div className="text">sec</div>
      </div>
    );
  };

  function disableNextStep(iHaveTent) {
    setIsDisabled(!iHaveTent);
  }
  return (
    <div className="basketPageContainer">
      <Nav />
      <div className="timer-wrapper">
        <p>Your purchase will expire in:</p>
        <CountdownCircleTimer
          isPlaying
          duration={120}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 10, 5, 0]}
          onComplete={() => ({ shouldRepeat: false })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <main className="basketContainer">
        <ul>
          <StepItem stepNumber={1} name="Tickets" count={stepCounter} />
          <StepItem stepNumber={2} name="Accomodation" count={stepCounter} />
          <StepItem stepNumber={3} name="Personal Data" count={stepCounter} />
          <StepItem stepNumber={4} name="Payment" count={stepCounter} />
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
                resetVipTicket={props.resetVipTicket}
                resetRegularTicket={props.resetRegularTicket}
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
                greenCampChange={props.greenCampChange}
                greenCampingPrice={props.greenCampingPrice}
                disableNextStep={disableNextStep}
                getArea={getArea}
              />
            ) : null}
            {stepCounter === 3 ? <StepPersonalData stepCounter={stepCounter} /> : null}
            {stepCounter === 4 ? <StepPayment stepCounter={stepCounter} /> : null}
            <button onClick={showNextStep} disabled={isDisabled} className="primaryCTA">
              Next Step
            </button>
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
              greenCampingPrice={props.greenCampingPrice}
            />
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Basket;
