// User Cart
var cart = {};
var sectionShoes = document.querySelector(".catalog-popular-arrivals");
// var section = document.querySelector('section');

var requestURL = "goods.json";
console.log(requestURL)
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = "json";
request.send();
console.log("Запрос:" + request);

request.onload = function() {
  var arrShoes = request.response;
  console.log("Запрос:" + arrShoes);

  var a = JSON.stringify(arrShoes);
  console.log(a);
  var b = JSON.parse(a);
  console.log(b);
  popularArrivals(b);
}

function popularArrivals(jsonObj) {
  var catalogShoes = document.querySelector(".popular-list");
  for (key in jsonObj) {
    var item = document.createElement("li");
    item.classList = "popular-item";
    catalogShoes.appendChild(item);

    var markup = `
      <picture>
        <img src="${jsonObj[key].img}" alt="Popular Arrivals">
        <div class="overlay">
          <a class="btn btn-overlay" href="${jsonObj[key].link}">
            View Details
          </a>
        </div>
      </picture>
      <div class="popular-info">
        <div class="name"><a href="${jsonObj[key].link}">${jsonObj[key].name}</a> <span class="outdoors">Shop Outdoors</span></div>
        <div class="price">$ ${jsonObj[key].price}
          <button data-item="${key}"  class="add-cart"><svg width="25" height="27"><use  xlink:href="#cart" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></button>                  
        </div>
      </div>
    `;
    item.innerHTML = markup;
    document.querySelector(".add-cart").addEventListener("click", addToCart);
  }
}

function addToCart() {
  alert("+");
    var dataItem = this.getAttribute("data-item");
    cart[dataItem] = 1;
    console.log(cart)
  
}


