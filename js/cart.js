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

var arrString = JSON.stringify(objShoes);
console.log(arrString);
var arrObj = JSON.parse(arrString);
console.log(arrObj);
checkCart();
itemsInCart();
popularArrivals(arrObj);


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
  }

  var cartButtons = document.getElementsByClassName("add-cart");
  console.log(cartButtons);
  for(var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].onclick = function() {
      addCart(objShoes[this.getAttribute("data-item")]);
    };
  }
}

function cartCount() {
  console.log('cart: ', cart.length);
  var cartCount = document.querySelector(".cart-count");
  if (cart.length == 0) {
    cartCount.innerHTML = "empty";
  }
  cartCount.innerHTML = cart.length.toString();
}

function addCart(dataItem) {
  cart.push(dataItem);
  console.log('items in cart: ', cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount();
  itemsInCart();
}

function checkCart() {
    if (  localStorage.getItem("cart") != null ) {
      cart = JSON.parse(localStorage.getItem("cart"))
    }
}

function itemsInCart() {
  var cartBox = document.querySelector(".cart-list");
  for(var i = 0; i < cart.length; i++) {
    console.log('items to page localStorage: ', cart);
    var cartItem = document.createElement("li");
    cartItem.classList = "item";
    cartBox.appendChild(cartItem);
    var cartMarkup = `
      <a href="">  
        <picture>
          <source type="image/webp" srcset="${cart[i].img}">
          <source  type="image/jpg" srcset="${cart[i].img}"> 
          <img src="${cart[i].img}" alt="Popular Arrivals">
        </picture>
      </a>
      <div class="item-info">
        <div class="name"><a href="#">${cart[i].name}</a></div>
        <div class="price">$ ${cart[i].price}</div>
        <div class="quality"><input type="number" value="1"/></div>
        <a href="#" class="remove">Remove</a>
      </div>`;
      cartItem.innerHTML = cartMarkup;

  }

function removeItem() {

}

  cartCount();
}






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


