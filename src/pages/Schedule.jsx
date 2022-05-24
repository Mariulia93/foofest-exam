import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import BandCard from "../components/BandCard";
import BandPopUp from "../components/BandPopUp";
import Footer from "../components/Footer";
import RadioButton from "../components/RadioButton";

export default function Schedule(props) {
  const [midgard, setMidgard] = useState({});
  const [vanaheim, setVanaheim] = useState({});
  const [jotunheim, setJotunheim] = useState({});
  const [displayedJ, setDisplayedJ] = useState([]);
  const [displayedM, setDisplayedM] = useState([]);
  const [displayedV, setDisplayedV] = useState([]);
  const [hideM, setHideM] = useState(false);
  const [hideV, setHideV] = useState(false);
  const [hideJ, setHideJ] = useState(false);
  const [hideSchedules, setHideSchedules] = useState(false);
  const [hiddenPopUp, setHiddenPopUp] = useState(true);
  const [popUpBand, setPopUpBand] = useState({});

  useEffect(() => {
    fetch("https://foofest2022.herokuapp.com/schedule")
      .then((response) => response.json())
      .then((data) => {
        setMidgard(data.Midgard);
        setVanaheim(data.Vanaheim);
        setJotunheim(data.Jotunheim);
        // console.log(midgard.mon[0].act);
        // console.log(vanaheim.fri);
        // Object.keys(jotunheim).map((key) => jotunheim[key].map((item) => console.log(item.act)));
      });
  }, []);

  function filterByDay(day) {
    if (day === "all") {
      setHideSchedules(true);
      let alldays = [];
      Object.keys(midgard).map((key) => midgard[key].map((item) => alldays.push(item)));
      setDisplayedM(alldays);
      alldays = [];
      Object.keys(vanaheim).map((key) => vanaheim[key].map((item) => alldays.push(item)));
      setDisplayedV(alldays);
      alldays = [];
      Object.keys(jotunheim).map((key) => jotunheim[key].map((item) => alldays.push(item)));
      setDisplayedJ(alldays);
    } else {
      setHideSchedules(false);
      setDisplayedJ(jotunheim[day]);
      setDisplayedM(midgard[day]);
      setDisplayedV(vanaheim[day]);
    }
  }

  function filterByStage(stage) {
    if (stage === "midgard") {
      setHideM(false);
      setHideV(true);
      setHideJ(true);
    } else if (stage === "vanaheim") {
      setHideM(true);
      setHideV(false);
      setHideJ(true);
    } else if (stage === "jotunheim") {
      setHideM(true);
      setHideV(true);
      setHideJ(false);
    } else {
      setHideM(false);
      setHideV(false);
      setHideJ(false);
    }
  }

  function showPopup(props) {
    setHiddenPopUp(false);
    console.log(props);
    setPopUpBand(props);
  }

  function hidePopUp() {
    setHiddenPopUp(true);
  }

  return (
    <div>
      <Nav />
      <div className="scheduleButtons">
        <div className="daysButtons">
          <RadioButton
            number={"all"}
            name={"day"}
            value={"all"}
            filterFunction={filterByDay}
            labelTop={"All"}
            labelBottom={"days"}
          />
          <RadioButton
            number={"1"}
            name={"day"}
            value={"mon"}
            filterFunction={filterByDay}
            labelTop={"Day 1"}
            labelBottom={"(10/07)"}
          />
          <RadioButton
            number={"2"}
            name={"day"}
            value={"tue"}
            filterFunction={filterByDay}
            labelTop={"Day 2"}
            labelBottom={"(11/07)"}
          />
          <RadioButton
            number={"3"}
            name={"day"}
            value={"wed"}
            filterFunction={filterByDay}
            labelTop={"Day 3"}
            labelBottom={"(12/07)"}
          />
          <RadioButton
            number={"4"}
            name={"day"}
            value={"thu"}
            filterFunction={filterByDay}
            labelTop={"Day 4"}
            labelBottom={"(13/07)"}
          />
          <RadioButton
            number={"5"}
            name={"day"}
            value={"fri"}
            filterFunction={filterByDay}
            labelTop={"Day 5"}
            labelBottom={"(14/07)"}
          />
          <RadioButton
            number={"6"}
            name={"day"}
            value={"sat"}
            filterFunction={filterByDay}
            labelTop={"Day 6"}
            labelBottom={"(15/07)"}
          />
          <RadioButton
            number={"7"}
            name={"day"}
            value={"sun"}
            filterFunction={filterByDay}
            labelTop={"Day 7"}
            labelBottom={"(16/07)"}
          />
        </div>
        <div className="stagesButtons">
          <RadioButton
            number={"all"}
            name={"stage"}
            value={"all"}
            filterFunction={filterByStage}
            labelTop={"All"}
            labelBottom={"stages"}
          />
          <RadioButton
            number={"1"}
            name={"stage"}
            value={"midgard"}
            filterFunction={filterByStage}
            labelTop={"Stage 1"}
            labelBottom={"MIDGARD"}
          />
          <RadioButton
            number={"2"}
            name={"stage"}
            value={"vanaheim"}
            filterFunction={filterByStage}
            labelTop={"Stage 2"}
            labelBottom={"VANAHEIM"}
          />
          <RadioButton
            number={"3"}
            name={"stage"}
            value={"jotunheim"}
            filterFunction={filterByStage}
            labelTop={"Stage 3"}
            labelBottom={"JOTUNHEIM"}
          />
        </div>
      </div>
      <div className="schedules">
        {!hideM && !hideSchedules && (
          <div>
            <p>migdard</p>
            <ul>
              {displayedM.map((item) => (
                <li
                  key={item.act + item.start}
                  style={item.act !== "break" ? { cursor: "pointer" } : null}
                  onClick={
                    item.act !== "break"
                      ? () => {
                          showPopup(props.bands.find((band) => band.name === item.act));
                        }
                      : null
                  }
                >
                  {" "}
                  {item.start} {item.act}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!hideV && !hideSchedules && (
          <div>
            <p>vanaheim</p>
            <ul>
              {displayedV.map((item) => (
                <li
                  key={item.act + item.start}
                  style={item.act !== "break" ? { cursor: "pointer" } : null}
                  onClick={
                    item.act !== "break"
                      ? () => {
                          showPopup(props.bands.find((band) => band.name === item.act));
                        }
                      : null
                  }
                >
                  {" "}
                  {item.start} {item.act}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!hideJ && !hideSchedules && (
          <div>
            <p>jotunheim</p>
            <ul>
              {displayedJ.map((item) => (
                <li
                  key={item.act + item.start}
                  style={item.act !== "break" ? { cursor: "pointer" } : null}
                  onClick={
                    item.act !== "break"
                      ? () => {
                          showPopup(props.bands.find((band) => band.name === item.act));
                        }
                      : null
                  }
                >
                  {" "}
                  {item.start} {item.act}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* artists list */}
      <div className="artistsList">
        {!hideM && (
          <>
            {displayedM.map((item) =>
              item.act !== "break" ? (
                <BandCard
                  key={item.act}
                  stage={"midgard"}
                  time={item.start}
                  showPopUpFunction={showPopup}
                  band={props.bands.find((band) => band.name === item.act)}
                />
              ) : null
            )}
          </>
        )}
        {!hideV && (
          <>
            {displayedV.map((item) =>
              item.act !== "break" ? (
                <BandCard
                  key={item.act}
                  stage={"vanaheim"}
                  time={item.start}
                  showPopUpFunction={showPopup}
                  band={props.bands.find((band) => band.name === item.act)}
                />
              ) : null
            )}
          </>
        )}
        {!hideJ && (
          <>
            {displayedJ.map((item) =>
              item.act !== "break" ? (
                <BandCard
                  key={item.act}
                  stage={"jotunheim"}
                  time={item.start}
                  showPopUpFunction={showPopup}
                  band={props.bands.find((band) => band.name === item.act)}
                />
              ) : null
            )}
          </>
        )}
      </div>
      {!hiddenPopUp && <BandPopUp band={popUpBand} hidePopUp={hidePopUp} />}
      <Footer />
    </div>
  );
}
