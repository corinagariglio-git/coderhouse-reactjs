import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <section className="item-detail">
      <h2>{product.name}</h2>
      <p className="item-detail__category">{product.category}</p>
      <p className="item-detail__description">{product.description}</p>
      <p className="item-detail__price">${product.price}</p>

      <ItemCount stock={product.stock} initial={1} />
    </section>
  );
}

export default ItemDetail;
