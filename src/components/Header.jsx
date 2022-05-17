import CountDownTimer from "@inlightmedia/react-countdown-timer";
export default function Header() {
  return (
    <div className="landingHeader">
      <h1 className="logo">FOOFEST</h1>
      <div id="countdownContainer">
        <CountDownTimer
          dateTime="2022-07-10T20:00:00+02:00"
          shouldShowSeparator={false}
          shouldHidePrecedingZeros
          style={{ color: "#2F5061" }}
        ></CountDownTimer>
        <h3> SUNRISES HOURS MINUTES SECONDS</h3>
      </div>
      <p>BARCELONA || 10-17 JUL</p>
    </div>
  );
}
