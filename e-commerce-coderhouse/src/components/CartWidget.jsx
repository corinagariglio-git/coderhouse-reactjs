import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-icon" role="img" aria-label="carrito">
        🛒
      </span>
      <span className="cart-widget-count">{totalQuantity}</span>
    </Link>
  );
}

export default CartWidget;
