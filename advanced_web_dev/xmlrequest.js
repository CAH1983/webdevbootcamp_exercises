var XHR = new XMLHttpRequest();

// github zen API
XHR.open('GET', 'https://api.github.com/zen');
XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) {
        if(XHR.status == 200) {
        console.log(XHR.responseText);
        } else {
        console.log('there was a problem');
        }
    }
} 

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();

// dog images API
var btn = document.querySelector("#btn");
var img = document.querySelector('#photo');

btn.addEventListener('click', function() {
    // make the request
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            console.log(XHR.responseText);
            var url = JSON.parse(XHR.responseText).message;
            img.src = url; 
        }
    }

    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
})

// bitcoin converter API exercise

const convertBtn = document.querySelector('#convert-btn');
// const convertedAmount = document.querySelector('#amount-span');

// convertBtn.addEventListener('click', function() {

//     XHR.onreadystatechange = function() {
//         if(XHR.readyState == 4 && XHR.status == 200) {
//             console.log(XHR.responseText);
//             let currentPrice = JSON.parse(XHR.responseText).bpi.GBP.rate;
//             convertedAmount.innerHTML = '£' + currentPrice;
//         }
//     }

//     XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
//     XHR.send();
// })

// instructor's solution

var btn = document.querySelector('#convert-btn');
var priceDisp = document.querySelector('#amount-span');

var currency = 'USD';

btn.addEventListener('click', function () {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi[currency].rate;
            priceDisp.innerText = price + ' ' + currency;
        }
    }

    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
})







