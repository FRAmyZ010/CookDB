import "./Navbar.css";
import Logo from "../assets/Logo.png";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="" className="logo" />

        <div className="nav-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
