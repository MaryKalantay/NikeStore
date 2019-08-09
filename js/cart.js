let cart = JSON.parse(localStorage.getItem("cart"));
if (cart === null) {
    cart = {};
}
console.log('cart: ', cart);

showShoesInTheCart();

function showShoesInTheCart(shoes) {
  if (cart !== null) {
    let shoesInCart = document.querySelector(".cart-list");
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        shoesInCart.insertAdjacentHTML('afterbegin', `
       <li class="item">
          <a href="">  
            <picture>
              <source type="image/webp" srcset="${cart[key].img}">
              <source  type="image/jpg" srcset="${cart[key].img}"> 
              <img src="${cart[key].img}" alt="Popular Arrivals">
            </picture>
          </a>
          <div class="item-info">
            <div class="name"><a href="#">${cart[key].name}</a></div>
            <div class="price">$ ${cart[key].price}</div>
            <div class="quality"><input type="number" value="1"/></div>
            <a href="#" class="remove">Remove</a>
          </div>
        </li>
        `);
      }
    }
  }
}



