const apiKey = "2be80236-95e0-4776-9d4c-0705572b3c29";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";

var capInfo = document.getElementById("capInfo");

//const feed = document.getElementById("feed");
document.getElementById("form").addEventListener("submit", computeTip);

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
  qString =
    "?CMC_PRO_API_KEY=" +
    apiKey +
    "&symbol=BTC,ETH,LTC,ADA,XRP,USDT&convert=USD";
function computeTip(e) {
  const bitAmount = document.getElementById("bitAmount").value;
  var serviceTip = document.querySelector('input[name="tipVal"]:checked').value;
  var restext = document.getElementById("restext");
  var serviceCurr = document.querySelector('input[name="currVal"]:checked')
    .value;

  if (bitAmount == "" || bitAmount === undefined || bitAmount <= 0) {
    alert("Please provide 1 or more coins");
  }
  if (serviceTip == "" || serviceCurr == "") {
    alert("Please select the type of cryptos");
  }

  fetch(proxyUrl + url + qString)
    .then(function (rs) {
      return rs.json();
    })
    .then(function (data) {
      console.log(data.data);
      var navContent = document.getElementById("nav-content");
      var navContent2 = document.getElementById("nav-content2");
      navContent.innerHTML = `   <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"
          >Crypto <i class="fab fa-btc"></i> Calculator</a
        >
      </div>
      <ul id="nav-navbar-nav" class="nav navbar-nav">
       
        <li>
          <a href="#" id="capInfo"><img class="bitIcons" src="./btc@2x.png" width="19%"/> </a>
        </li>
        <li>
          <a href="#" id="capInfo2"><i class="fab fa-ethereum"></i></a>
        </li>
        <li>
          <a href="#" id="capInfo3">
            <img src="./34464591-2b975084-ee54-11e7-8ce3-6be97ac66183.png"
          /></a>
        </li>
      </ul>
      <button class="butt" onclick="myFunction()"><i class="fas fa-arrow-circle-right"></i></button>

`;
      navContent2.innerHTML = `<div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"
        >Crypto <i class="fab fa-btc"></i> Calculator</a
      >
    </div>
    <ul id="nav-navbar-nav" class="nav navbar-nav">
     
      <li>
        <a href="#" id="capInfo4"><img class="bitIcons" src="./btc@2x.png" width="19%"/> </a>
      </li>
      <li>
        <a href="#" id="capInfo5"><i class="fab fa-ethereum"></i></a>
      </li>
      <li>
        <a href="#" id="capInfo6">
          <img src="./34464591-2b975084-ee54-11e7-8ce3-6be97ac66183.png"
        /></a>
      </li>
    </ul>
    <button class="butt" onclick="myFunction2()"><i class="fas fa-arrow-circle-left"></i></button>

`;
      navContent2.style.display = "none";
      var capInfo = document.getElementById("capInfo");
      capInfo.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/color/btc.png" width: "9%" />Market Cap :
     $${data.data.BTC.quote.USD.market_cap}`;

      var capInfo2 = document.getElementById("capInfo2");
      capInfo2.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/color/eth.png" width: "9%" />Market Cap : $${data.data.ETH.quote.USD.market_cap}`;

      var capInfo3 = document.getElementById("capInfo3");
      capInfo3.innerHTML = ` 
      <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/color/ada.png" width: "9%" />Market Cap : $${data.data.ADA.quote.USD.market_cap}`;

      var capInfo4 = document.getElementById("capInfo4");
      capInfo4.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/black/ltc.png" width: "9%" />Market Cap : $${data.data.LTC.quote.USD.market_cap}`;

      var capInfo5 = document.getElementById("capInfo5");
      capInfo5.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/color/xrp.png" width: "9%" />Market Cap : $${data.data.XRP.quote.USD.market_cap}`;

      var capInfo6 = document.getElementById("capInfo6");
      capInfo6.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/32/color/usdt.png" width: "9%" />Market Cap : $${data.data.USDT.quote.USD.market_cap}`;

      //feed.innerHTML = `${data.data.BTC.name}`;
      if (serviceTip == 12 && serviceCurr == "USD") {
        var amount1 = data.data.BTC.quote.USD.price;
        var amount = amount1.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "$ " + amount * bitAmount;
        restext.innerHTML = "The Bitcoin amount: ";
      } else if (serviceTip == 15 && serviceCurr == "USD") {
        var amount1 = data.data.ADA.quote.USD.price;
        var amount = amount1.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "$ " + amount * bitAmount;
        restext.innerHTML = "The Cardano amount: ";
      } else if (serviceTip == 18 && serviceCurr == "USD") {
        var amount1 = data.data.ETH.quote.USD.price;
        var amount = amount1.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "$ " + amount * bitAmount;
        restext.innerHTML = "The Ethereum amount: ";
      } else if (serviceTip == 20 && serviceCurr == "USD") {
        var amount1 = data.data.LTC.quote.USD.price;
        var amount = amount1.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "$ " + amount * bitAmount;
        restext.innerHTML = "The Litecoin amount: ";
      } else if (serviceTip == 22 && serviceCurr == "USD") {
        var amount1 = data.data.XRP.quote.USD.price;
        var amount = amount1.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "$ " + amount * bitAmount;
        restext.innerHTML = "The Ripple amount: ";
      } else if (serviceTip == 12 && serviceCurr == "INR") {
        var amount1 = data.data.BTC.quote.USD.price;
        var am = amount1 * 76.64;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "₹ " + amount * bitAmount;
        restext.innerHTML = "The Bitcoin amount: ";
      } else if (serviceTip == 15 && serviceCurr == "INR") {
        var amount1 = data.data.ADA.quote.USD.price;
        var am = amount1 * 76.64;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "₹ " + amount * bitAmount;
        restext.innerHTML = "The Cardano amount: ";
      } else if (serviceTip == 18 && serviceCurr == "INR") {
        var amount1 = data.data.ETH.quote.USD.price;
        var am = amount1 * 76.64;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "₹ " + amount * bitAmount;
        restext.innerHTML = "The Ethereum amount: ";
      } else if (serviceTip == 20 && serviceCurr == "INR") {
        var amount1 = data.data.LTC.quote.USD.price;
        var am = amount1 * 76.64;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "₹ " + amount * bitAmount;
        restext.innerHTML = "The Litecoin amount: ";
      } else if (serviceTip == 22 && serviceCurr == "INR") {
        var amount1 = data.data.XRP.quote.USD.price;
        var am = amount1 * 76.64;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "₹ " + amount * bitAmount;
        restext.innerHTML = "The Ripple amount: ";
      } else if (serviceTip == 12 && serviceCurr == "EUR") {
        var amount1 = data.data.BTC.quote.USD.price;
        var am = amount1 * 0.92;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "€ " + amount * bitAmount;
        restext.innerHTML = "The Bitcoin amount: ";
      } else if (serviceTip == 15 && serviceCurr == "EUR") {
        var amount1 = data.data.ADA.quote.USD.price;
        var am = amount1 * 0.92;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "€ " + amount * bitAmount;
        restext.innerHTML = "The Cardano amount: ";
      } else if (serviceTip == 18 && serviceCurr == "EUR") {
        var amount1 = data.data.ETH.quote.USD.price;
        var am = amount1 * 0.92;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "€ " + amount * bitAmount;
        restext.innerHTML = "The Ethereum amount: ";
      } else if (serviceTip == 20 && serviceCurr == "EUR") {
        var amount1 = data.data.LTC.quote.USD.price;
        var am = amount1 * 0.92;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "€ " + amount * bitAmount;
        restext.innerHTML = "The Litecoin amount: ";
      } else if (serviceTip == 22 && serviceCurr == "EUR") {
        var amount1 = data.data.XRP.quote.USD.price;
        var am = amount1 * 0.92;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "€ " + amount * bitAmount;
        restext.innerHTML = "The Ripple amount: ";
      } else if (serviceTip == 12 && serviceCurr == "GBP") {
        var amount1 = data.data.BTC.quote.USD.price;
        var am = amount1 * 0.8;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "£ " + amount * bitAmount;
        restext.innerHTML = "The Bitcoin amount: ";
      } else if (serviceTip == 15 && serviceCurr == "GBP") {
        var amount1 = data.data.ADA.quote.USD.price;
        var am = amount1 * 0.8;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "£ " + amount * bitAmount;
        restext.innerHTML = "The Cardano amount: ";
      } else if (serviceTip == 18 && serviceCurr == "GBP") {
        var amount1 = data.data.ETH.quote.USD.price;
        var am = amount1 * 0.8;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "£ " + amount * bitAmount;
        restext.innerHTML = "The Ethereum amount: ";
      } else if (serviceTip == 20 && serviceCurr == "GBP") {
        var amount1 = data.data.LTC.quote.USD.price;
        var am = amount1 * 0.8;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "£ " + amount * bitAmount;
        restext.innerHTML = "The Litecoin amount: ";
      } else if (serviceTip == 22 && serviceCurr == "GBP") {
        var amount1 = data.data.XRP.quote.USD.price;
        var am = amount1 * 0.8;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "£ " + amount * bitAmount;
        restext.innerHTML = "The Ripple amount: ";
      } else if (serviceTip == 12 && serviceCurr == "JPY") {
        var amount1 = data.data.BTC.quote.USD.price;
        var am = amount1 * 107.7;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "¥ " + amount * bitAmount;
        restext.innerHTML = "The Bitcoin amount: ";
      } else if (serviceTip == 15 && serviceCurr == "JPY") {
        var amount1 = data.data.ADA.quote.USD.price;
        var am = amount1 * 107.7;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "¥ " + amount * bitAmount;
        restext.innerHTML = "The Cardano amount: ";
      } else if (serviceTip == 18 && serviceCurr == "JPY") {
        var amount1 = data.data.ETH.quote.USD.price;
        var am = amount1 * 107.7;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "¥ " + amount * bitAmount;
        restext.innerHTML = "The Ethereum amount: ";
      } else if (serviceTip == 20 && serviceCurr == "JPY") {
        var amount1 = data.data.LTC.quote.USD.price;
        var am = amount1 * 107.7;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "¥ " + amount * bitAmount;
        restext.innerHTML = "The Litecoin amount: ";
      } else if (serviceTip == 22 && serviceCurr == "JPY") {
        var amount1 = data.data.XRP.quote.USD.price;
        var am = amount1 * 107.7;
        var amount = am.toFixed(2);
        document.getElementById("outAmount").innerHTML =
          "¥ " + amount * bitAmount;
        restext.innerHTML = "The Ripple amount: ";
      }
    });

  e.preventDefault();
}

function myFunction() {
  var y = document.getElementById("nav-content");
  var j = document.getElementById("nav-content2");
  if (y.style.display === "block") {
    j.style.display = "block";
    y.style.display = "none";
  } else {
    j.style.display = "none";
    y.style.display = "block";
  }
}

function myFunction2() {
  var i = document.getElementById("nav-content");
  var k = document.getElementById("nav-content2");
  if (k.style.display === "block") {
    i.style.display = "block";
    k.style.display = "none";
  } else {
    i.style.display = "none";
    k.style.display = "block";
  }
}
