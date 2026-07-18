import { useLanguage } from "../../localization/LanguageContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo2 from "../../assets/IconsSVG/Cerpion Icon.svg";
import "./NavBar.css";

function NavBar() {
  const { language, ToggleLanguage, texts } = useLanguage();

  return (
    <nav className="SideNav">
      <div className="nav-inner">
        <div className="NavLogoContainer">
          <img className="NavLogo" src={Logo2} alt="Cerpion logo" />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/about">{texts.common.navbar.about}</NavLink>
          </li>
          <li>
            <NavLink to="/" end>
              {texts.common.navbar.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/games">{texts.common.navbar.projects}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{texts.common.navbar.contact}</NavLink>
          </li>
        </ul>

        <button className="LangToggle" onClick={ToggleLanguage}>
          {language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
