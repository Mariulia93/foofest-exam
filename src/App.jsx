import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sass/App.scss";
// import NavContainer from "./pages/NavContainer";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Schedule from "./pages/Schedule";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home bands={bands} />} />
        <Route path="/tickets" element={<Tickets availableSpots = {availableSpots} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/info" element={<Info />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
