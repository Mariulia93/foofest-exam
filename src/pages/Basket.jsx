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
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        {/* <div className="text">Remaining</div> */}
        <div className="value">{remainingTime}</div>
        <div className="text">sec</div>
      </div>
    );
  };
  return (
    <div className="basketPageContainer">
      <Nav />
      <div className="timer-wrapper">
        <p>Your purchase will expire in:</p>
        <CountdownCircleTimer
          isPlaying
          duration={15}
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
              />
            ) : null}
            {stepCounter === 2 ? <StepAccomodation stepCounter={stepCounter} /> : null}
            {stepCounter === 3 ? <StepPersonalData stepCounter={stepCounter} /> : null}
            {stepCounter === 4 ? <StepPayment stepCounter={stepCounter} /> : null}
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
