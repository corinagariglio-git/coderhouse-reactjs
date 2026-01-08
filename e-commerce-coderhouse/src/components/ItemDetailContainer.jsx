import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));
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
        <p>No se encontró el producto</p>
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
