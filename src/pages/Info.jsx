import { useState } from "react";
import Nav from "../components/Nav";
import Toggle from "../components/Toggle";
import FAQ from "../components/FAQ";
import AccomodationInfo from "../components/AccomodationInfo";
import Footer from "../components/Footer";

export default function Info() {
  const [toggle, setToggle] = useState(true);

  function toggleSwitch() {
    setToggle((state) => !state);
  }

  return (
    <div>
      <Nav />
      <h2>Information</h2>
      <Toggle toggleSwitchFunction={toggleSwitch} />
      {!toggle ? <AccomodationInfo /> : <FAQ />}
      <Footer />
    </div>
  );
}
