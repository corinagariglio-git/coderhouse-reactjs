import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span>LilaFit</span>
      </div>

      <nav className="navbar-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
