// User Cart

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
    console.log(jsonObj[key].name);
    var item = document.createElement("li");
    item.classList = "popular-item";
    catalogShoes.appendChild(item);
    var markup = `
      <picture>
        <img src="${jsonObj[key].img}" alt="Popular Arrivals">
        <div class="overlay">
          <a class="btn btn-overlay" href="#">
            View Details
          </a>
        </div>
      </picture>
      <div class="popular-info">
        <div class="name"><a href="#">${jsonObj[key].name}</a> <span class="outdoors">Shop Outdoors</span></div>
        <div class="price">$ ${jsonObj[key].price}
          <a href="" class="add-cart"><svg width="25" height="27"><use  xlink:href="#cart" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></a>                  
        </div>
      </div>
    `;
    item.innerHTML = markup;
  }
}
