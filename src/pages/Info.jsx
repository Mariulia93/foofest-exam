import { useState } from "react";
import Nav from "../components/Nav";
import Toggle from "../components/Toggle";
import FAQ from "../components/FAQ";
import AccomodationInfo from "../components/AccomodationInfo";

export default function Info() {
  const [hidden, setHidden] = useState(true);

  function toggleSwitch() {
    setHidden((state) => !state);
  }

  return (
    <div>
      <Nav />
      <h2>Information</h2>
      <Toggle toggleSwitchFunction={toggleSwitch} />
      {!hidden ? <AccomodationInfo /> : <FAQ />}
    </div>
  );
}
