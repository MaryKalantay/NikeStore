
checkCart();
cartCount();
itemsInCart();


function checkCart() {
  if (  localStorage.getItem("cart") != null ) {
    cart = JSON.parse(localStorage.getItem("cart"))
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
}