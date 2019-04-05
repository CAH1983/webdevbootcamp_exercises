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

var convertBtn = document.querySelector('#convert-btn');
var convertedAmount = document.querySelector('#amount-span');

convertBtn.addEventListener('click', function() {

    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            console.log(XHR.responseText);
            var currentPrice = JSON.parse(XHR.responseText).rate;
            convertedAmount.innerHTML = currentPrice;
        }
    }

    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
})












