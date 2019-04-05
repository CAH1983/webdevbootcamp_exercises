// const request = require('request');
// request('https://www.google.com', function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//         console.log(body) //shows the HTML fot the Google homepage
//     }
// })

const request = require('request');
request('https://www.reddit.com', function(error, response, body) {
    if(error){
        console.log('something went wrong!');
        console.log(error);

    } else {
        if(response.statusCode == 200) {
            // things worked!
            console.log(body);
        }
    }
});