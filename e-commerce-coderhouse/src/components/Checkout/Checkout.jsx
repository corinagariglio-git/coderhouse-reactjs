import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const fakeId = "ORDER-" + Date.now();
    setOrderId(fakeId);
    clearCart();
  };

  if (orderId) {
    return (
      <main className="page">
        <section className="checkout">
          <h2>Compra confirmada ✅</h2>
          <p>Tu número de orden es:</p>
          <strong>{orderId}</strong>

          <br />
          <br />

          <Link className="btn" to="/">
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="checkout">
        <h2>Checkout</h2>

        {cart.length === 0 ? (
          <>
            <p>Carrito vacío 😅</p>
            <Link className="btn" to="/">
              Volver al catálogo
            </Link>
          </>
        ) : (
          <>
            <p>Total a pagar: ${total}</p>

            <form className="checkout-form" onSubmit={handleConfirm}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <button className="btn" type="submit">
                Confirmar compra
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default Checkout;
