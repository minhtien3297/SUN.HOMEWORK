const baseUrl = "http://localhost:4000";
let productsArr = [];

/**
 * Get data from db.json
 */
async function getProducts() {
  let fetch = await $.ajax({
    method: "GET",
    url: `${baseUrl}/products`,
    headers: { "Content-Type": "application/json" },
    success: function (response) {
      productsArr = response;
      maxPages(response);
      filter(response);
      LocalStorage(response);
    },
  });

  if (fetch) {
    changePage(1);
    showPagination();
  }
}

// function run when reload
window.onload = function () {
  getProducts();
  countProducts();
  cartTable();
  totalPriceTable();
};

/**
 * Get products to page
 */
function productsShow(products) {
  // Product Grid
  let productsGrid = products.map((product) => {
    // format money
    let priceFormatted = formatMoney(product.price);
    let discountFormatted = formatMoney(product.discount);

    return `
    <div class="col">
      <div class="card rounded-0 h-100 product__card--vertical product__card">

        <div class="container-fluid">
            <img src="${product.src}" class="card-img-top" alt="${product.alt}" />
            <div class="card-img-overlay rounded-0">
                <div class="container d-flex justify-content-center">
                    <button class="rounded-pill buy__btn me-2 LocalStorageGrid"> MUA NGAY</button>
                    <button class="rounded-circle search__btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="card-body d-flex flex-column align-items-center">
            <a class="card-title" href="product-detail.html">${product.name}</a>

            <p class="card-text mb-2">
                <i class="product__star fas fa-star"></i>
                <i class="product__star fas fa-star"></i>
                <i class="product__star fas fa-star"></i>
                <i class="product__star fas fa-star"></i>
                <i class="product__star fas fa-star-half-alt"></i>
            </p>

            <div class="d-flex">
                <span class="me-2 product__price">${priceFormatted}</span>
                <span class="product__discount">${discountFormatted}</span>
            </div>
        </div>
      </div>
    </div>
    `;
  });

  // Product List
  let productsList = products.map((product) => {
    // format money
    let moneyFormatted = formatMoney(product.price);

    return `
    <div class="card product__card product__card--horizontal rounded-0 tab-img mt-5">
        <div class="row g-0">
            <div class="col-4 product__img">
                <img src="${product.src}" class="img-fluid rounded-start" alt="${product.alt}" />
            </div>
            <div class="col-8">
                <div class="card-body">
                    <a class="card-title" href="product-detail.html">${product.name}</a>

                    <p class="card-text mb-2">
                      <i class="product__star fas fa-star"></i>
                      <i class="product__star fas fa-star"></i>
                      <i class="product__star fas fa-star"></i>
                      <i class="product__star fas fa-star"></i>
                      <i class="product__star fas fa-star-half-alt"></i>
                    </p>

                    <p class="my-3"> Cây Ngọc ngân là loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn tặng người ấy. Ngọc Ngân không chỉ đẹp ở phiến lá xanh đốm trắng.</p>

                    <span class="me-2 product__price">${moneyFormatted}</span>

                    <div class="container d-flex justify-content-start mt-3">
                            <div class="d-flex justify-content-between inputs">
                                <button class="rounded-pill buy__btn me-2 LocalStorageList">MUA NGAY</button>

                                <button class="rounded-circle border border-dark search__btn">
                                    <i class="fas fa-search"></i></button>

                                <button class="rounded-circle border border-dark search__btn">
                                    <i class="fas fa-heart"></i></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  // add data to elements
  $("#productsGrid").html(productsGrid);
  $("#productsList").html(productsList);
}

/**
 * money format
 */
function formatMoney(money) {
  let moneyFormatted = money
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
    .replace(/[a-z]{3}/i, "đ")
    .trim();

  return moneyFormatted;
}

/**
 * filters
 */
function filter(products) {
  let filter = document.querySelectorAll("#price__filter");

  for (let i = 0; i < filter.length; i++) {
    filter[i].onclick = () => {
      filterPrice(i, products);
    };
  }
}

/**
 *  filter price
 */
function filterPrice(position, products) {
  const priceRange = [
    { min: 200000, max: 400000 },
    { min: 400000, max: 600000 },
    { min: 600000, max: 800000 },
    { min: 800000, max: 1000000 },
    { min: 1000000, max: 2000000 },
  ];

  let filterProducts = products.filter(
    (product) =>
      product.price > priceRange[position].min &&
      product.price <= priceRange[position].max
  );

  // show filterd products list
  productsShow(filterProducts);
  LocalStorage(filterProducts);
}
