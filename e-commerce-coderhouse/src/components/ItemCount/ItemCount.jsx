import { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const agregar = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="itemcount">
      <div className="itemcount-controls">
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>

      <button onClick={agregar} disabled={stock === 0}>
        Agregar al carrito
      </button>

      {stock === 0 && <p className="no-stock">Producto sin stock</p>}
    </div>
  );
}

export default ItemCount;
