import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { db } from "../../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: form,
      items: cart.map((prod) => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: total,
      date: serverTimestamp(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (orderId) {
    return (
      <main className="page">
        <section className="checkout">
          <h2>Compra confirmada ✅</h2>
          <p>Tu ID de orden es:</p>
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

              <button className="btn" type="submit" disabled={loading}>
                {loading ? "Generando orden..." : "Confirmar compra"}
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default Checkout;
