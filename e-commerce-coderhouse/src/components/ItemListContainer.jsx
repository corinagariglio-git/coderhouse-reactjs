import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log("Error cargando productos", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <main className="item-list-container">
      <h1>{greeting}</h1>

      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos para esta categoría.</p>
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
}

export default ItemListContainer;
