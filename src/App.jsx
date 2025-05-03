import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Games from "./Pages/GamesPage/Games";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import CrimsonSoul from "./Pages/Proyects/CrimsonSoul";

import CerpionFooter from "./Pages/Footer/CerpionFooter";

function App() {
  return (
    <div className="MainContainer">
      <Router>
        <div className="Content">
          <NavBar />
          <div className="ContentPages">
            <div className="Pages">
              <Routes>
                <Route path="/Cerpion-Web" element={<Home />} />
                <Route path="/Games" element={<Games />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />

                <Route path="/CrimsonSoul" element={<CrimsonSoul />} />
              </Routes>
            </div>
            <CerpionFooter></CerpionFooter>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
