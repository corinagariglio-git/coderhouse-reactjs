import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <article className="item-card">
      <h3>{product.name}</h3>

      <div className="item-card-box">
        <p className="item-card__category">{product.category}</p>
        <p className="item-card__price">${product.price}</p>
      </div>

      <Link to={`/item/${product.id}`} className="item-card__link">
        Ver detalle
      </Link>
    </article>
  );
}

export default ItemCard;
