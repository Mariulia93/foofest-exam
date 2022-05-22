import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import BandCard from "../components/BandCard";
import Band from "../components/Band";

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

  useEffect(() => {
    fetch("https://foofest2022.herokuapp.com/schedule")
      .then((response) => response.json())
      .then((data) => {
        setMidgard(data.Midgard);
        setVanaheim(data.Vanaheim);
        setJotunheim(data.Jotunheim);
        console.log(props.bands.find((band) => band.name === "Tool"));
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

  return (
    <div>
      <Nav />
      <input type="radio" id="alldays" name="day" value="alldays" onChange={() => filterByDay("all")} />
      <label htmlFor="alldays">All days</label>
      <br />
      <input type="radio" id="day1" name="day" value="mon" onChange={() => filterByDay("mon")} />
      <label htmlFor="day1">Day 1 (10/07)</label>
      <br />
      <input type="radio" id="day2" name="day" value="tue" onChange={() => filterByDay("tue")} />
      <label htmlFor="day2">Day 2 (11/07)</label>
      <br />
      <input type="radio" id="day3" name="day" value="wed" onChange={() => filterByDay("wed")} />
      <label htmlFor="day3">Day 3 (12/07)</label>
      <br />
      <input type="radio" id="day4" name="day" value="thu" onChange={() => filterByDay("thu")} />
      <label htmlFor="day4">Day 4 (13/07)</label>
      <br />
      <input type="radio" id="day5" name="day" value="fri" onChange={() => filterByDay("fri")} />
      <label htmlFor="day5">Day 5 (14/07)</label>
      <br />
      <input type="radio" id="day6" name="day" value="sat" onChange={() => filterByDay("sat")} />
      <label htmlFor="day6">Day 6 (15/07)</label>
      <br />
      <input type="radio" id="day7" name="day" value="sun" onChange={() => filterByDay("sun")} />
      <label htmlFor="day7">Day 7 (16/07)</label>
      <br />

      <input type="radio" id="allstages" name="stage" value="allstages" onChange={() => filterByStage("all")} />
      <label htmlFor="allstages">All stages</label>
      <br />
      <input type="radio" id="stage1" name="stage" value="midgard" onChange={() => filterByStage("midgard")} />
      <label htmlFor="stage1">Stage 1 MIDGARD</label>
      <br />
      <input type="radio" id="stage2" name="stage" value="vanaheim" onChange={() => filterByStage("vanaheim")} />
      <label htmlFor="stage2">Stage 2 VANAHEIM</label>
      <br />
      <input type="radio" id="stage3" name="stage" value="jotunheim" onChange={() => filterByStage("jotunheim")} />
      <label htmlFor="stage3">Stage 3 JOTUNHEIM</label>
      <br />

      <div className="schedules">
        {!hideM && !hideSchedules && (
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
        )}

        {!hideV && !hideSchedules && (
          <div>
            <p>vanaheim</p>
            <ul>
              {displayedV.map((item) => (
                <li>
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
                <li>
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
              item.act !== "break" ? <BandCard band={props.bands.find((band) => band.name === item.act)} /> : null
            )}
          </>
        )}
        {!hideV && (
          <>
            {displayedV.map((item) =>
              item.act !== "break" ? <BandCard band={props.bands.find((band) => band.name === item.act)} /> : null
            )}
          </>
        )}
        {!hideJ && (
          <>
            {displayedJ.map((item) =>
              item.act !== "break" ? <BandCard band={props.bands.find((band) => band.name === item.act)} /> : null
            )}
          </>
        )}
      </div>
    </div>
  );
}
