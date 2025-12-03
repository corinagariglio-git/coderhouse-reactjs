import ItemCard from "./ItemCard";

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
