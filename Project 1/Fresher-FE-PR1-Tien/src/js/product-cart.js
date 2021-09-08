/**
 * catch actions affect localStorage
 */
function LocalStorage(products) {
  let cartGrid = document.querySelectorAll(".LocalStorageGrid");
  let cartList = document.querySelectorAll(".LocalStorageList");

  // cart grid
  for (let i = 0; i < cartGrid.length; i++) {
    cartGrid[i].onclick = () => {
      postLocalStorage(products[i]);
      countProducts();
    };
  }

  // cart list
  for (let i = 0; i < cartList.length; i++) {
    cartList[i].onclick = () => {
      postLocalStorage(products[i]);
      countProducts();
    };
  }
}

/**
 * post product to LocalStorage
 */
function postLocalStorage(product) {
  let oldProducts = JSON.parse(localStorage.getItem("productsCart")) || [];

  oldProducts.push({
    ...product,
  });

  localStorage.setItem("productsCart", JSON.stringify(oldProducts));

  // show toast
  $("#buyToast").toast({
    delay: 500,
  });
  $("#buyToast").toast("show");
}

/**
 * Count products in cart
 */
function countProducts() {
  let products = JSON.parse(localStorage.getItem("productsCart"));

  if (products) {
    $("#countProducts").html(`
    ${products.length} Sản phẩm
  `);
  } else {
    $("#countProducts").html(`
    0 Sản phẩm
  `);
  }
}

/**
 *  show products on table
 */
function cartTable() {
  let products = JSON.parse(localStorage.getItem("productsCart"));

  // remove duplicate products
  let uniqueProducts = removeDuplicateProducts(products);

  if (products) {
    let productsTable = uniqueProducts.map((product) => {
      // format money
      let priceFormatted = formatMoney(product.price);
      // count product
      let productCount = countSimilarProducts(product.id);
      // count total price
      let countTotalPrice = formatMoney(product.price * productCount);

      return `
    <tr>
      <td>
        <img class="img-fluid" src="${product.src}" alt="${product.alt}" />
      </td>
      <td class="text--green">${product.name}</td>
      <td>${priceFormatted}</td>
      <td>
        <span class="border p-3">${productCount}</span>
      </td>
      <td>${countTotalPrice}</td>
      <td>
        <i class="fas fa-trash-alt trash" onclick="deleteProduct(${product.id})"></i>
      </td>
    </tr>
    `;
    });

    $("#cartTable").html(productsTable);
  } else {
    $("#cartTable").html("");
  }
}

/**
 * show total price table
 */
function totalPriceTable() {
  // count product total price
  let totalProductPrice = countTotalProductPrice();
  // count vat
  let vat = countTotalProductPrice() * 0.1;
  // count total price
  let totalPrice = vat + totalProductPrice;

  // format money
  totalProductPrice = formatMoney(totalProductPrice);
  vat = formatMoney(vat);
  totalPrice = formatMoney(totalPrice);

  $("#totalProductPrice").html(totalProductPrice);
  $("#vat").html(vat);
  $("#totalPrice").html(totalPrice);
}

/**
 *  count total price table
 */
function countTotalProductPrice() {
  let products = JSON.parse(localStorage.getItem("productsCart"));
  let totalPrice = 0;

  if(products){
    products.map((product) => {
      totalPrice += product.price;
    });
  }

  return totalPrice;
}

/**
 *  Count similar products in cart
 */
function countSimilarProducts(id) {
  let products = JSON.parse(localStorage.getItem("productsCart"));
  let count = 0;

  products.map((item) => {
    if (item.id == id) {
      count++;
    }
  });

  return count;
}

/**
 * Remove duplicate products in cart
 */
function removeDuplicateProducts(products) {
  if (products) {
    let ids = products.map((product) => product.id);
    let uniqueProducts = products.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );

    return uniqueProducts;
  }
}

/**
 * Delete product
 */
function deleteProduct(id) {
  let oldProducts = JSON.parse(localStorage.getItem("productsCart"));

  for (let i = 0; i < oldProducts.length; i++) {
    if (oldProducts[i].id == id) {
      oldProducts.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("productsCart", JSON.stringify(oldProducts));

  // refresh table and products count, show toast
  $("#deleteToast").toast({
    delay: 500,
  });
  $("#deleteToast").toast("show");
  countProducts();
  cartTable();
  totalPriceTable();
  LocalStorage(oldProducts);
}

/**
 * Clear table
 */
function clearTable() {
  localStorage.clear();

  // refresh table and products count
  countProducts();
  cartTable();
  totalPriceTable();
}
