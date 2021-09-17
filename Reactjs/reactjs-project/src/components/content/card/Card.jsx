import "./Card.scss";
import { showStar } from "../../sidebar/filters/ratings/Rating";

/**
 * format money to USD
 */
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Card(props) {
  const product = props.product;

  return (
    <div className="col-3">
      <div className="card">
        <div className="d-flex justify-content-around card__img">
          <img
            src={product.src}
            className="card-img-top img-fluid"
            alt={product.alt}
          />
        </div>
        <div className="card-body">
          <p className="card__text--bold">{product.name}</p>

          <div className="d-flex justify-content-between mt-3">
            <p className="rating">{showStar(product.ratings)}</p>
            <p className="card__text--bold">
              {formatter.format(product.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
