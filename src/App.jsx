import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/App.scss";
import NavContainer from "./pages/NavContainer";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Schedule from "./pages/Schedule";
import Info from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavContainer />}>
          <Route index element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
