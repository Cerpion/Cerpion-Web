import { NavLink } from "react-router-dom";
import Logo from "./Final Final.png";
import Logo2 from "./Logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="SideNav">
      <div className="LogoContainer">
        <img className="CerpionLogo" src={Logo2} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/Cerpion-Web/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
