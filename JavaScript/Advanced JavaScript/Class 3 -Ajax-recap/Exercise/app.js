const productCardEl = document.querySelector("#card");

const PRODUCT_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(PRODUCT_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      for (let el of data) {
        productCardEl.innerHTML += createCards(el);
      }
    });
}

function createCards(card) {
  return `<div class="product-card">
  <h1 id=title>${card.id}.${card.title}</h1>
  <img src="${card.image}" />
    <p id=description>${card.description}</p>
    <strong><p id= price>${card.price}$</p></strong>
  </div>`;
}

fetchProducts();
