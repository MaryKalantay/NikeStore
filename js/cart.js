// User Cart

var sectionShoes = document.querySelector(".catalog-popular-arrivals");
// var section = document.querySelector('section');


var requestURL = "js/goods.json";
console.log(requestURL)
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = "json";
request.send();
console.log("Запрос:" + request);

request.onload = function() {
  var arrShoes = request.response;
  console.log("Запрос:" + arrShoes);

  popularArrivals(arrShoes);
  // showHeroes(arrShoes);
}

function popularArrivals(jsonObj) {
  var sectionShoes = document.querySelector(".catalog-popular-arrivals");

    var nameItem = document.createElement("p");
    console.log(nameItem);
    nameItem.textContent = jsonObj["name"];
    sectionShoes.appendChild(nameItem);

    var priceItem = document.createElement('p');
    console.log(priceItem);
    priceItem.textContent = '$: ' + jsonObj['price'] ;
    sectionShoes.appendChild(priceItem); 
}