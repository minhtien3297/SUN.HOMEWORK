import "./Filter.scss";
import Type from "../../../components/sidebar/filters/types/Types";
import Brand from "../../../components/sidebar/filters/brand/Brand";
import Rating from "../../../components/sidebar/filters/ratings/Rating";
import Price from "../../../components/sidebar/filters/prices/Prices";

function Filter() {
  return (
    <div className="filter d-flex align-items-start flex-column justify-content-center">
      <p className="filter__heading">Refine by</p>

      <Type />
      <br />

      <Brand />
      <br />

      <Rating />
      <br />

      <Price />
    </div>
  );
}

export default Filter;
