import "./Rating.scss";
import { setFilters } from "../../../../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

/**
 * show star rating
 */
export const showStar = (starNumber) => {
  const star = "fas fa-star";
  const emptyStar = "far fa-star";
  let rate = [];

  for (let i = 5; i > 0; i--) {
    if (starNumber >= i) {
      rate.unshift(<i className={star}></i>);
    } else {
      rate.unshift(<i className={emptyStar}></i>);
    }
  }

  return rate;
};

const numberOfRates = [5, 4, 3, 2, 1];

function Rating() {  const dispatch = useDispatch();

  const  filter  = useSelector((state) => state.product.filter);

  /**
   * count product
   */
  function count(arg) {
    let count = 0;

    filter.forEach((item) => {
      if (item.ratings === arg) {
        count++;
      }
    });

    return count;
  }

  function rateFilter(arg) {
    let rate = filter.filter((item) => item.ratings === arg);

    dispatch(setFilters(rate));
  }

  const showRating = numberOfRates.map((item) => {
    return (
      <div>
        <a
          href="#."
          className="rating"
          onClick={() => {
            rateFilter(item);
          }}
        >
          {showStar(item)} <span className="count"> & Up {count(item)}</span>
        </a>
      </div>
    );
  });

  return (
    <div className="rate">
      <p className="fw-bold mb-2">Rating</p>

      {showRating}
    </div>
  );
}

export default Rating;
