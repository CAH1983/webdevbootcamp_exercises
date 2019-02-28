// Exercises
// create a function that returns x number of times a specific word and launch the javascript file through node terminal. 


function echo(word, numberOfTimes) {
    for(i=0; i<numberOfTimes; i++) {
        console.log(word);
    }
}

echo('echo!!!', 10)
echo('tater tots', 3)


// create a function that calculates the average score for each of the arrays
const scores = [90, 98, 89, 100, 86, 94];
const scores2 = [25, 32, 89, 786, 12, 99];

//my solution

function average(arr) {
    return Math.round(arr.reduce((a, b) => a + b, 0) /(arr.length));
}

console.log(average(scores));
console.log(average(scores2));

// teacher's solution
function average(scores) {

    var total = 0;
    //loop each array
    scores.forEach(function(score) {
        total += score;
    });
    //calc average
    var avg = total/scores.length;
    // round it
    return Math.round(avg);
}

console.log(average(scores));