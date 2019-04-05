var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const convertBtn = document.querySelector('#convert-btn');
const convertedAmount = document.querySelector('#amount-span');

let currency = 'USD';

convertBtn.addEventListener('click', function() {

fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data.bpi[currency].rate);
        convertedAmount.innerText = data.bpi[currency].rate;
    });
});