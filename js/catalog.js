const shoes = {
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
};

let cart = JSON.parse(localStorage.getItem("cart"));
if (cart === null) {
    cart = {};
}
console.log('cart: ', cart);

popularArrivals(shoes);
renderAddRemoveToCartButtons();
bindOnclickEvents();

function popularArrivals(popularShoes) {
    let catalogShoes = document.querySelector(".popular-list");
    for (const key in popularShoes) {
        if (popularShoes.hasOwnProperty(key)) {
            catalogShoes.insertAdjacentHTML('afterbegin', `
                <li class="popular-item">
                    <picture>
                        <img src="${popularShoes[key].img}" alt="Popular Arrivals"/>
                        <div class="overlay">
                            <a class="btn btn-overlay" href="${popularShoes[key].link}">
                                View Details
                            </a>
                        </div>
                    </picture>
                    <div class="popular-info">
                        <div class="name">
                            <a href="${popularShoes[key].link}">${popularShoes[key].name}</a> 
                            <span class="outdoors">Shop Outdoors</span>
                        </div>f
                        <div class="price" id="${key}">
                            $ ${popularShoes[key].price}                
                        </div>
                    </div>
                </li>
                `);
        }
    }
}

function renderAddRemoveToCartButtons() {
    const priceDivs = document.getElementsByClassName("price");
    for (let i = 0; i < priceDivs.length; i++) {
        if (isShoeInTheCart(priceDivs[i].getAttribute("id"))) {
            priceDivs[i].insertAdjacentHTML('beforeend',
                '<button name="shoeCartButton" class="remove">\n' +
                '    <svg width="25" height="27">\n' +
                '        <use href="#remove"/>\n' +
                '    </svg>\n' +
                '</button>');
        } else {
            priceDivs[i].insertAdjacentHTML('beforeend',
                '<button name="shoeCartButton" class="add-cart">\n' +
                '    <svg width="25" height="27">\n' +
                '        <use href="#cart"/>\n' +
                '    </svg>\n' +
                '</button>');
        }
    }
}

function bindOnclickEvents() {
    const buttons = document.getElementsByName("shoeCartButton");
    for (let i = 0; i < buttons.length; i++) {
        toggleAddRemoveButton(buttons[i]);
    }
}

function addToCart(shoeKey) {
    cart[shoeKey] = shoes[shoeKey];
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(shoeKey) {
    delete cart[shoeKey];
    localStorage.setItem("cart", JSON.stringify(cart));
}

function toggleAddRemoveButton(button) {
    if (button.getAttribute("class") === "add-cart") {
        button.onclick = function () {
            const shoeKey = this.parentElement.getAttribute("id");
            addToCart(shoeKey);
            this.querySelector("use[href='#cart']").setAttribute("href", "#remove");
            this.classList.remove("add-cart");
            this.classList.add("remove");
            toggleAddRemoveButton(this);
        }
    } else {
        button.onclick = function () {
            const shoeKey = this.parentElement.getAttribute("id");
            removeFromCart(shoeKey);
            this.querySelector("use[href='#remove']").setAttribute("href", "#cart");
            this.classList.remove("remove");
            this.classList.add("add-cart");
            toggleAddRemoveButton(this);
        }
    }
}

function isShoeInTheCart(shoeKey) {
    if (cart !== null) {
        for (const shoeKeyInCart in cart) {
            if (cart.hasOwnProperty(shoeKeyInCart) && shoeKey === shoeKeyInCart) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}