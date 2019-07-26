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
  console.log(a)
  var b = JSON.parse(a);
  console.log(b)

  popularArrivals(b);
   
}


function popularArrivals(jsonObj) {
  var nameItem = document.createElement("ul");
  nameItem.classList = "popular-list";
  var sectionShoes = document.querySelector(".popular-list");

  const markup = `
  <li class="popular-item">
     <h2>
         test
     </h2>
     <p class="location">test</p>
     <p class="bio">test</p>
  </div>
 `;

 sectionShoes.innerHTML = markup;

  for (var i = 0; i < jsonObj.length; i++) {
    
    console.log(jsonObj[i]);

    console.log(nameItem);
    nameItem.textContent = jsonObj[i].name;
    sectionShoes.appendChild(nameItem);

    var priceItem = document.createElement('p');
    console.log(priceItem);
    priceItem.textContent = '$: ' +  jsonObj[i].price ;
    sectionShoes.appendChild(priceItem); 

  }




}
