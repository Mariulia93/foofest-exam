import CountDownTimer from "@inlightmedia/react-countdown-timer";
export default function Header() {
  return (
    <div id="landingHeader">
      <h1 class="logo">FOOFEST</h1>
      <div id="countdownContainer">
        <CountDownTimer
          dateTime="2022-07-10T20:00:00+02:00"
          shouldShowSeparator={false}
          shouldHidePrecedingZeros
        ></CountDownTimer>
        <h3> DAYS HOURS MINUTES SECONDS</h3>
      </div>
    </div>
  );
}
