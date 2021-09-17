import "./Price.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../redux/actions/product.action";
import React from "react";

const priceRange = [
  {
    low: 5,
    high: 80,
  },
  {
    low: 80,
    high: 160,
  },
  {
    low: 160,
    high: 240,
  },
  {
    low: 240,
    high: 320,
  },
  {
    low: 320,
    high: 680,
  },
  {
    low: 680,
    high: 1500,
  },
];

function Price() {
  const dispatch = useDispatch();
  const  filter = useSelector((state) => state.product.filter);
  let [lowPrice, setLowPrice] = React.useState("");
  let [highPrice, setHighPrice] = React.useState("");

  function filterPrice(low, high) {
    let price = filter.filter(
      (item) => item.price >= low && item.price <= high
    );

    dispatch(setFilters(price));
  }

  const showPriceRange = priceRange.map((item, key) => {
    return (
      <div key={key}>
        <a
          href="#."
          className="price-range"
          onClick={() => filterPrice(item.low, item.high)}
        >
          $ {item.low} - {item.high}
        </a>
      </div>
    );
  });

  return (
    <div className="price">
      <p className="fw-bold mb-2">Price</p>

      {showPriceRange}

      <p className="mt-3">
        ${" "}
        <input
          type="number"
          className="w-25"
          value={lowPrice}
          onChange={(e) => setLowPrice(e.target.value)}
        ></input>{" "}
        to ${" "}
        <input
          type="number"
          className="w-25"
          value={highPrice}
          onChange={(e) => setHighPrice(e.target.value)}
        ></input>
      </p>

      <button
        className="rounded-circle my-3 btn__submit"
        onClick={() => filterPrice(lowPrice, highPrice)}
      >
        Go
      </button>

      <hr />
      <p className="my-3">Data courtesy of Best Buy</p>
    </div>
  );
}

export default Price;
