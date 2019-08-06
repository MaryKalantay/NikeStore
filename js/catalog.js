// User Catalog
var cart = [];

var sectionShoes = document.querySelector(".catalog-popular-arrivals");

var objShoes = {
    "item1": {
        "id": "1",
        "name": "Nike shoesOne",
        "price": "120",
        "img": "img/popular-arrivals-1.jpg",
        "link": "#"
    },
    "item2": {
        "id": "2",
        "name": "Nike shoesTwo",
        "price": "230",
        "img": "img/popular-arrivals-2.jpg",
        "link": "#"
    },
    "item3": {
        "id": "3",
        "name": "Nike shoesThree",
        "price": "114",
        "img": "img/popular-arrivals-3.jpg",
        "link": "#"
    },
    "item4": {
        "id": "4",
        "name": "Nike shoesFour",
        "price": "99",
        "img": "img/popular-arrivals-4.jpg",
        "link": "#"
    }
}

popularArrivals(objShoes);

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
        <button name="shoeCartButton" data-item="${key}"  class="add-cart"><svg width="25" height="27"><use  xlink:href="#cart" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></button>                  
        </div>
      </div>
    `;
        item.innerHTML = markup;
    }

    var cartButtons = document.getElementsByName("shoeCartButton");
    console.log(cartButtons);
    for (var i = 0; i < cartButtons.length; i++) {
        cartButtons[i].onclick = function () {
            var item = jsonObj[this.getAttribute("data-item")];
            if (!isItemInCart(item)) {
                addCart(item);
                if (item != null) {
                    this.innerHTML = "<svg width='25' height='27'><use  xlink:href='#remove' xmlns:xlink='http://www.w3.org/1999/xlink'></use></svg>";
                    this.classList.remove("add-cart");
                    this.classList.add("remove");
                    this.onclick = function () {
                        removeFromCart(item);
                        this.innerHTML = '<svg width="25" height="27"><use  xlink:href="#cart" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
                        this.classList.remove("remove");
                        this.classList.add("add-cart");
                    }
                }
            }
        };
    }
}

function addCart(dataItem) {
    cart.push(dataItem);
    console.log('items in cart: ', cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount();

}

function cartCount() {
    console.log('cart: ', cart.length);
    var cartCount = document.querySelector(".cart-count");
    if (cart.length == 0) {
        cartCount.innerHTML = "empty";
    }
    cartCount.innerHTML = cart.length.toString();
}

// User Cart

checkCart();

function checkCart() {
    // localStorage.removeItem("cart");
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
        var cartButtons = document.getElementsByName("shoeCartButton");
        for (var i = 0; i < cartButtons.length; i++) {
            var targetItem = objShoes[cartButtons[i].getAttribute("data-item")];
            var targetButton = cartButtons[i];
            if (isItemInCart(targetItem)) {
                targetButton.innerHTML = "<svg width='25' height='27'><use  xlink:href='#remove' xmlns:xlink='http://www.w3.org/1999/xlink'></use></svg>";
                targetButton.classList.remove("add-cart");
                targetButton.classList.add("remove");
                targetButton.onclick = function () {
                    removeFromCart(objShoes[this.getAttribute("data-item")]);
                    this.innerHTML = '<svg width="25" height="27"><use  xlink:href="#cart" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
                    this.classList.remove("remove");
                    this.classList.add("add-cart");
                }
            }
        }
    }
}

function isItemInCart(item) {
    for (let count = 0; count < cart.length; count++) {
        if (cart[count].id === item.id) {
            return true;
        }
    }
}

function removeFromCart(item) {
    var itemIndex = cart.map(
        function (mapItem) {
            return mapItem.id;
        }).indexOf(item.id);
    cart.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
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

