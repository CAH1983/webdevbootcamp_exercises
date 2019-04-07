const URL = 'https://randomuser.me/api/';
const button = document.querySelector('#btn');
const avatar = document.querySelector('#avatar');
const fullNameSpan = document.querySelector('#fullname');
const userNameSpan = document.querySelector('#username');
const emailSpan = document.querySelector('#email');
const citySpan = document.querySelector('#city');


// handle errors
function handleErrors(request) {
    if(!request.ok) {
        console.log(request.status);
        throw Error(request.status);
    }
    return request;
}

// get the data
function parseJSON(res) {
    console.log(res);
    return res.json()
    .then(function(parsedData) {
        return parsedData.results[0];
    })
}

// update the divs form the profile
function updateProfile(data) {
        let fullName = data.name.first + ' ' + data.name.last;
        fullNameSpan.innerText = fullName;
        avatar.src = data.picture.medium;
        userNameSpan.innerText = data.login.username;
        emailSpan.innerText = data.email;
        citySpan.innerText = data.location.city;
    }
    
    
// display errors
function printError(err) {
        console.log(err);
    }

// --------ADD EVENT LISTENER --------
button.addEventListener('click', function() {
    console.log('clicked');
    fetch(URL)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
    });