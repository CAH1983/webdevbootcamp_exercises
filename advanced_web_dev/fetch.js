// connect bitcoin API
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


// Fetch handling errors

const errorBtn = document.querySelector('#error-btn');

errorBtn.addEventListener('click', function() {
  
    let secondUrl = 'https://api.github.com/users/coltdd';

    fetch(secondUrl)
    .then(handleErrors)
    .then(function(request) {
        console.log('everything is fine');
        console.log(request);
    })
    .catch(function(error) {
        console.log('there is a problem!');
    });
        
});

function handleErrors(request) {

    if(!request.ok) {
        throw Error(request.status);
    }
        return request;
}