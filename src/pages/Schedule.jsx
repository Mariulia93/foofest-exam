import Nav from "../components/Nav";
import { useState, useEffect } from "react";

export default function Schedule() {
  const [midgard, setMidgard] = useState({});
  const [vanaheim, setVanaheim] = useState({});
  const [jotunheim, setJotunheim] = useState({});
  const [displayedJ, setDisplayedJ] = useState([]);
  const [displayedM, setDisplayedM] = useState([]);
  const [displayedV, setDisplayedV] = useState([]);
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
      let alldays = [];
      console.log(Array.isArray(alldays));
      Object.keys(midgard).map((key) => midgard[key].map((item) => alldays.push(item)));
      setDisplayedM(alldays);
      alldays = [];
      Object.keys(vanaheim).map((key) => vanaheim[key].map((item) => alldays.push(item)));
      setDisplayedV(alldays);
      alldays = [];
      Object.keys(jotunheim).map((key) => jotunheim[key].map((item) => alldays.push(item)));
      setDisplayedJ(alldays);
    } else {
      setDisplayedJ(jotunheim[day]);
      setDisplayedM(midgard[day]);
      setDisplayedV(vanaheim[day]);
      console.log(displayedM);
    }
  }

  return (
    <div>
      <Nav />
      <input type="radio" id="alldays" name="day" value="alldays" onChange={() => filterByDay("all")} checked />
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

      <input type="radio" id="allstages" name="stage" value="allstages" />
      <label htmlFor="allstages">All stages</label>
      <br />
      <input type="radio" id="stage1" name="stage" value="midgard" />
      <label htmlFor="stage1">Stage 1 MIDGARD</label>
      <br />
      <input type="radio" id="stage2" name="stage" value="vanaheim" />
      <label htmlFor="stage2">Stage 2 VANAHEIM</label>
      <br />
      <input type="radio" id="stage3" name="stage" value="jotunheim" />
      <label htmlFor="stage3">Stage 3 JOTUNHEIM</label>
      <br />
      <p>migdard</p>
      <ul>{displayedM.map((item) => (item.act !== "break" ? <li> {item.act} </li> : null))}</ul>
      <p>vanaheim</p>
      <ul>{displayedV.map((item) => (item.act !== "break" ? <li> {item.act} </li> : null))}</ul>
      <p>jotunheim</p>
      <ul>{displayedJ.map((item) => (item.act !== "break" ? <li> {item.act} </li> : null))}</ul>

      {/* {Object.keys(midgard).map((array) => array.map((item) => (item.act !== "break" ? <li> {item.act} </li> : null)))} */}
      {/* <ul>{Object.keys(midgard).map((key) => midgard[key].map((item) => <p> {item.act} </p>))}</ul> */}
      {/* Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
}); */}
      {/* <ul>{midgard.mon.map((item) => (item.act !== "break" ? <li> {item.act} </li> : null))}</ul> */}
    </div>
  );
}
