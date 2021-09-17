import "./Categories.scss";
import { setFilters } from "../../../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const arrowRight = "fas fa-chevron-right";

const categories = [
  {
    category: "Appliances",
    subCategory: ["Light", "Printer"],
  },
  {
    category: "Audio",
    subCategory: ["Headphone", "Speaker"],
  },
  {
    category: "Cameras & Camcorder",
    subCategory: ["Camera"],
  },
  {
    category: "Cellphones",
    subCategory: [],
  },
  {
    category: "Laptop",
    subCategory: [],
  },
  {
    category: "Office Supplies",
    subCategory: ["Paper"],
  },
  {
    category: "Tv & Home Theater",
    subCategory: ["Cable", "Projector", "Remote", "TV"],
  },
  {
    category: "Videos Game",
    subCategory: ["Figure", "Game-Voucher"],
  },
];

function Categories() {
  const dispatch = useDispatch();
  const  products  = useSelector((state) => state.product.products);
  let showProducts = [];

  /**
   * filter by category
   */
  function filterByCategory(category) {
    let cate = products.filter((item) => item.category === category);

    dispatch(setFilters(cate));
  }

  /**
   * filter by sub category
   */
  function filterBySubCategory(subCategory) {
    let subCate = products.filter((item) => item.subCategory === subCategory);

    dispatch(setFilters(subCate));
  }

  showProducts = categories.map((item, key) => {
    const subCategory = item.subCategory.map((item) => {
      return (
        <div
          key={key}
          id={"collapse" + key}
          className="accordion-collapse collapse"
          aria-labelledby={"heading" + key}
        >
          <a
            href="#."
            className="category__link ms-3"
            onClick={() => filterBySubCategory(item)}
          >
            <i className={arrowRight}></i>
            {item}
          </a>
        </div>
      );
    });

    return (
      <div key={key}>
        <a
          className="category__link"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + key}
          aria-expanded="true"
          aria-controls={"collapse" + key}
          href="#."
          onClick={() => filterByCategory(item.category)}
        >
          <i className={arrowRight}></i>
          {item.category}
        </a>
        {item.subCategory.length > 0 && subCategory}
      </div>
    );
  });

  return (
    <div className="categories d-flex justify-content-center flex-column align-items-center mt-3">
      <p className="filter__heading">Show results for</p>
      <div className="accordion" id="accordionExample">
        {showProducts}
      </div>
    </div>
  );
}

export default Categories;
