import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log("Error cargando producto", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <main className="item-list-container">
        <p>Cargando producto...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="item-list-container">
        <p>No se encontró el producto.</p>
      </main>
    );
  }

  return (
    <main className="item-list-container">
      <ItemDetail product={product} />
    </main>
  );
}

export default ItemDetailContainer;
