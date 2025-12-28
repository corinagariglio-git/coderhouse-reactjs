import { useContext, useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <section className="item-detail">
      <h2>{product.name}</h2>
      <p className="item-detail__category">{product.category}</p>
      <p className="item-detail__description">{product.description}</p>
      <p className="item-detail__price">${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito ✅</p>
      )}
    </section>
  );
}

export default ItemDetail;
