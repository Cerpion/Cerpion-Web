import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./localization/LanguageContext";

import NavBar from "./Pages/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Games from "./Pages/GamesPage/Games";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import CrimsonSoul from "./Pages/Proyects/CrimsonSoul";
import ForesightSports from "./Pages/Proyects/ForesightSports";
import PanDeBonus from "./Pages/Proyects/PanDeBonus";

import CerpionFooter from "./Pages/Footer/CerpionFooter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <div className="container">
          <NavBar />

          <div className="middle">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Games" element={<Games />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />

              <Route path="/CrimsonSoul" element={<CrimsonSoul />} />
              <Route path="/ForesightSports" element={<ForesightSports />} />
              <Route path="/PanDeBonus" element={<PanDeBonus />} />
            </Routes>
          </div>

          <CerpionFooter />
        </div>
      </Router>
    </LanguageProvider>
  </StrictMode>,
);
