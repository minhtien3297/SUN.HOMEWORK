import "./Paging.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../../redux/actions/product.action";
import { setCurrentPage } from "../../../redux/actions/product.action";

const rightArrow = "fas fa-chevron-right";
const leftArrow = "fas fa-chevron-left";
const products_per_page = 16;
let maxPage = 0;

/**
 *  maximum pages
 */
function maxPages(products) {
  return (maxPage = Math.ceil(products.length / products_per_page));
}

function Paging() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.product.currentPage);
  const products = useSelector((state) => state.product.products);
  let pagination = [];

  maxPages(products);

  /**
   * show pages in pagination
   */
  function showPagination() {
    for (let i = 1; i <= maxPage; i++) {
      pagination.push(
        <a
          className="paging__link"
          href="#."
          onClick={() => {
            changePage(i);
          }}
        >
          {i}
        </a>
      );
    }
  }

  showPagination();

  /**
   * next page
   */
  function nextPage() {
    if (currentPage < maxPage) {
      changePage(currentPage + 1);
    }
  }

  /**
   * prev page
   */
  function prevPage() {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  }

  /**
   * change page
   */
  function changePage(pageChange) {
    // validate page
    if (pageChange < 1) {
      pageChange = 1;
    } else if (pageChange > maxPage) {
      pageChange = maxPage;
    }

    let page = [];

    for (
      var i = (pageChange - 1) * products_per_page;
      i < pageChange * products_per_page && i < products.length;
      i++
    ) {
      page.push(products[i]);
    }

    dispatch(setCurrentPage(pageChange));
    dispatch(setFilters(page));
  }

  return (
    <div className="paging d-flex justify-content-center">
      <div className="d-flex justify-content-around container w-25">
        <a
          className="paging__link"
          href="#."
          onClick={() => {
            prevPage();
          }}
        >
          <i className={leftArrow}></i>
          <span className="ms-3">Previous</span>
        </a>
        {pagination}
        <a
          className="paging__link"
          href="#."
          onClick={() => {
            nextPage();
          }}
        >
          <span className="me-3">Next</span>
          <i className={rightArrow}></i>
        </a>
      </div>
    </div>
  );
}

export default Paging;
