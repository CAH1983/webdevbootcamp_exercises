// Print Array values doubled
var arr = [1,2,3,4,5,6];

function double(arr) {
    for(var i=0; i<arr.length; i++) {
        console.log(arr[i]*2);
    }
}

double(arr);

// refactored with forEach 
function double() {
    var arr = [1, 2, 3, 4, 5, 6];
    arr.forEach(function(number) {
        return number*2;
    })
}

double();

// findIndex returns the index of the 1st elem in the array for which the callbacl returns a truthy value. -1 is returned if the callback never returns a truthy value
// syntax
// function findIndex(array, callback) {
//     code to run
// }


var arr = [3, 4, 6, 2, 1];
findIndex(arr, function(num, index, array) {
    return num === 6;
});
// will return index of 2

var arr = [5, 11, 13, 8, 6, 7];
findIndex(arr, function(num, index, array) {
    return num%2 === 0;
});

// stack example
function upperCaseFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
    var words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = upperCaseFirst(words[i]);        
    }
    return words.join(' ');
}

upperCaseWords('lowercase words');