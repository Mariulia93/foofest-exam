import Campsite from "./Campsite";
import svartheim from "../sass/svartheim.jpg";
import nilfheim from "../sass/nilfheim.jpg";
import helheim from "../sass/helheim.jpg";
import muspelheim from "../sass/muspelheim.jpg";
import alfheim from "../sass/alfheim.jpg";

export default function AccomodationInfo() {
  return (
    <div>
      <h2>Our campsites:</h2>
      <Campsite
        name={"Svartheim"}
        img={svartheim}
        desc={"Cloakrooms;Showers both cold (free) and warm;Toilet facilities"}
      ></Campsite>
      <Campsite
        name={"Nilfheim"}
        img={nilfheim}
        desc={
          "Closest to the stages;A great number of food stalls around the campsite;Shopping facilities including camping gear, groceries, pharmacies and a whole bunch of fun festival accessories;Cloakrooms;Showers both cold (free) and warm;Toilet facilities"
        }
      ></Campsite>
      <Campsite name={"Helheim"} img={helheim} desc={"Cloakrooms;Showers both cold (free) and warm;Toilet facilities"}></Campsite>
      <Campsite
        name={"Muspelheim"}
        img={muspelheim}
        desc={
          "A great number of food stalls around the campsite;Shopping facilities including camping gear, groceries, pharmacies and a whole bunch of fun festival accessories;Cloakrooms;Showers both cold (free) and warm;Toilet facilities"
        }
      ></Campsite>
      <Campsite name={"Alfheim"} img={alfheim} desc={"Showers both cold (free) and warm;Toilet facilities"}></Campsite>
    </div>
  );
}
