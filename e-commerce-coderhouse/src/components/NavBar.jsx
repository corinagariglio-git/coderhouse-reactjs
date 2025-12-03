import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span>LilaFit</span>
      </div>

      <nav className="navbar-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/categoria/calzas">Calzas</NavLink>
        <NavLink to="/categoria/tops">Tops</NavLink>
        <NavLink to="/categoria/buzos">Buzos</NavLink>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
