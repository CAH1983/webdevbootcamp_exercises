const URL = 'https://randomuser.me/api/';
const button = document.querySelector('#btn');
const avatar = document.querySelector('#avatar');
const fullNameSpan = document.querySelector('#fullname');
const userNameSpan = document.querySelector('#fullname');
const emailSpan = document.querySelector('#email');
const citySpan = document.querySelector('#city');

button.addEventListener('click', function() {
    console.log('clicked');
    fetch(URL)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
});

function handleErrors(request) {
    if(!request.ok) {
        console.log(request.status);
        throw Error(request.status);
    }
        return request;
}

function parseJSON(response) {
    console.log(response);
    return response.json();
}

function updateProfile(data) {
    let fullName = data.results.name.first + ' ' + data.results.name.last;
    fullNameSpan.innerText = fullName;
}

function printError(error) {
    console.log('there is a problem');
}