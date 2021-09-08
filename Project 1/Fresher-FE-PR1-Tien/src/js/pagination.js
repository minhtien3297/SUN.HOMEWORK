let currentPage = 1;
const products_per_page = 6;
let maxPage = 0;

/**
 *  maximum pages
 */
function maxPages(products) {
  return (maxPage = Math.ceil(products.length / products_per_page));
}

/**
 * next page
 */
function nextPage() {
  if (currentPage < maxPage) {
    currentPage++;
    changePage(currentPage);
  }
}

/**
 * prev page
 */
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
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
    i < pageChange * products_per_page && i < productsArr.length;
    i++
  ) {
    page.push(productsArr[i]);
  }

  currentPage = pageChange;

  productsShow(page);
  LocalStorage(page);
}

/**
 * show pages in pagination
 */
function showPagination() {
  let page;

  for (let i = 1; i <= maxPage; i++) {
    page = `
    <li class="page-item">
      <a class="page-link" href="#." onclick="changePage(${i})">${i}</a>
    </li>
    `;

    $("#pagesPagination").append(page);
  }
}
