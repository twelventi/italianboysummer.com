import { Toolbar } from "@mui/material";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Tunes from "./pages/Tunes";


export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tunes" element={<Tunes />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </>
  );
}
