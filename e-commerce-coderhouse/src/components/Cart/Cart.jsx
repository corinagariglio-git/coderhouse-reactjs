import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío 🛒</p>
        <Link className="btn" to="/">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <section className="cart">
      <h2>Carrito</h2>

      <div className="cart-list">
        {cart.map((prod) => (
          <div className="cart-item" key={prod.id}>
            <div>
              <h3 className="cart-item__name">{prod.name}</h3>
              <p className="cart-item__price">Precio: ${prod.price}</p>
              <p className="cart-item__qty">Cantidad: {prod.quantity}</p>
            </div>

            <p className="cart-item__subtotal">
              Subtotal: ${prod.price * prod.quantity}
            </p>
          </div>
        ))}
      </div>

      <h3 className="cart-total">Total: ${total}</h3>

      <div className="cart-actions">
        <button className="btn" onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link className="btn" to="/checkout">
          Ir a checkout
        </Link>
      </div>
    </section>
  );
}

export default Cart;
