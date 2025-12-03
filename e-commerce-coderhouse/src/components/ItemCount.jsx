import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [quantity, setQuantity] = useState(initial);

  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubstract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Agregaste ${quantity} unidad(es) al carrito (en construcción).`);
  };

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button onClick={handleSubstract}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>

      <button className="item-count__button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
