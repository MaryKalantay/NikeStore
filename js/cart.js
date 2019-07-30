// User Cart
var cart = [];
var sectionShoes = document.querySelector(".catalog-popular-arrivals");

var objShoes = {
  "item1" : {
       "id": "1",
      "name": "Nike shoesOne",
      "price": "120",
      "img": "img/popular-arrivals-1.jpg",
      "link": "#"
  },
  "item2" :{
       "id": "2",
      "name": "Nike shoesTwo",
      "price": "230",
      "img": "img/popular-arrivals-2.jpg",
      "link": "#"
  },
  "item3" :{
       "id": "3",
      "name": "Nike shoesThree",
      "price": "114",
      "img": "img/popular-arrivals-3.jpg",
      "link": "#"
  },
  "item4" :{
      "id": "4",
      "name": "Nike shoesFour",
      "price": "99",
      "img": "img/popular-arrivals-4.jpg",
      "link": "#"
  }
}

var a = JSON.stringify(objShoes);
console.log(a);
var b = JSON.parse(a);
console.log(b);
popularArrivals(b);

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

    // Add item to catr
    
    var anchors = document.getElementsByClassName("add-cart");
    console.log(anchors);
    for(var i = 0; i < anchors.length; i++) {
      anchors[i].onclick = function() {
        addCart();
      };
    }
    
  }
}

function addCart() {
  var dataItem = key;
    cart.push(dataItem);
    console.log(cart);
    var cartCount = document.querySelector(".cart-count");
    cartCount.innerHTML = cart.length;
}
// var requestURL = "js/goods.json";

// console.log(requestURL)
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);

// request.responseType = "json";
// request.send();
// console.log("Запрос:" + request);

// request.onload = function() {
//   var arrShoes = request.response;
//   console.log("Запрос:" + arrShoes);

//   var a = JSON.stringify(arrShoes);
//   console.log(a);
//   var b = JSON.parse(a);
//   console.log(b);
//   popularArrivals(b);
// }


