let paymentInput = document.querySelectorAll(".paymentInput");

/**
 * Validate input on submit
 */
function paymentSubmit() {
  for (let i = 0; i < paymentInput.length; i++) {
    if (paymentInput[i].value == "") {
      validateEmptyInput(paymentInput[i]);
    } else {
      if (paymentInput[i].type == "email") {
        validateEmail(paymentInput[i]);
      } else {
        paymentInput[i].nextElementSibling.innerHTML = "";
      }
    }
  }
}

/**
 *  validate empty input
 */
function validateEmptyInput(input) {
  let alert = `
    Thông tin không được để trống
    `;

  input.nextElementSibling.innerHTML = alert;
}

/**
 * validate email input
 */
function validateEmail(input) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value.match(regexEmail)) {
    document.getElementById("emailPayment").nextElementSibling.innerHTML = "";
  } else {
    let alert = `
        Email không hợp lệ
        `;

    document.getElementById("emailPayment").nextElementSibling.innerHTML =
      alert;
  }
}

/**
 * clear form
 */
function clearForm() {
  for (let i = 0; i < paymentInput.length; i++) {
    paymentInput[i].value = "";
  }
}

/**
 * submit form
 */
$("#submit").submit(function (event) {
  clearTable();
  clearForm();
  window.location = "http://localhost:3000/product-list.html";
  event.preventDefault();
});
