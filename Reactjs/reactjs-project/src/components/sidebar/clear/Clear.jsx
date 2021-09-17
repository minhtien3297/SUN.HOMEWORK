import "./Clear.scss";
import { setFilters } from "../../../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const eraser = "fas fa-eraser";

function Clear() {
  const dispatch = useDispatch();

  const  products  = useSelector((state) => state.product.products);
  const  filter = useSelector((state) => state.product.filter);

  return (
    <div className="clear d-flex justify-content-center align-items-center">
      {products !== filter && (
        <button
          type="button"
          class="btn btn-light"
          onClick={() => dispatch(setFilters(products))}
        >
          <i className={eraser}></i> <span>Clear all filters</span>
        </button>
      )}
    </div>
  );
}

export default Clear;
