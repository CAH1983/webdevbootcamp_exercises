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
        .then(function(data) {
            let fullName = data.name.first;
            fullNameSpan.innerText = fullName;
            avatar.src = data.picture.medium;
        })
        .then(updateProfile)
        .catch(function (err) {
            console.log(err);
        })
});

function handleErrors(request) {
    if(!request.ok) {
        console.log(request.status);
        throw Error(request.status);
    }
        return request;
}

function parseJSON(res) {
    console.log(res);
    return res.json()
    .then(function(data) {
        return data.results[0];
    })
}


// function updateProfile(data) {
//     
// }

// function printError(error) {
//     console.log('there is a problem');
// }