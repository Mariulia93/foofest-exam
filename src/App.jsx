import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sass/App.scss";
// import NavContainer from "./pages/NavContainer";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import SchedulePage from "./pages/SchedulePage";
import Info from "./pages/Info";
import Basket from "./pages/Basket";

function App() {
  const [bands, setBands] = useState([]);
  const [availableSpots, setAvailableSpots] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://foofest2022.herokuapp.com/bands");
      const res2 = await fetch("https://foofest2022.herokuapp.com/available-spots");
      const data = await res.json();
      const data2 = await res2.json();
      setBands(data);
      setAvailableSpots(data2);
    }
    getData();
  }, []);

  const vipPrice = 1299;
  const regularPrice = 799;
  let [vipCount, setVipCount] = useState(0);
  let [regularCount, setRegularCount] = useState(0);

  function incrementVipCount() {
    setVipCount((old) => old + 1);
  }
  function incrementRegularCount() {
    setRegularCount((old) => old + 1);
  }

  function decrementVipCount() {
    setVipCount((old) => old - 1);
  }

  function decrementRegularCount() {
    setRegularCount((old) => old - 1);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home bands={bands} />} />
        <Route
          path="/tickets"
          element={
            <Tickets
              availableSpots={availableSpots}
              vipPrice={vipPrice}
              regularPrice={regularPrice}
              vipCount={vipCount}
              regularCount={regularCount}
              incrementVipCount={incrementVipCount}
              incrementRegularCount={incrementRegularCount}
              decrementVipCount={decrementVipCount}
              decrementRegularCount={decrementRegularCount}
            />
          }
        />
        <Route path="/schedule" element={<SchedulePage bands={bands} />} />
        <Route path="/info" element={<Info />} />
        <Route
          path="/basket"
          element={
            <Basket
              vipCount={vipCount}
              regularCount={regularCount}
              vipPrice={vipPrice}
              regularPrice={regularPrice}
              incrementVipCount={incrementVipCount}
              incrementRegularCount={incrementRegularCount}
              decrementVipCount={decrementVipCount}
              decrementRegularCount={decrementRegularCount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
