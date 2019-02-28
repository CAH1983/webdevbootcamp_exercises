function echo(word, numberOfTimes) {
    for(i=0; i<numberOfTimes; i++) {
        console.log(word);
    }
}

echo('echo!!!', 10)
echo('tater tots', 3)

const scores = [90, 98, 89, 100, 86, 94];
const scores2 = [25, 32, 89, 786, 12, 99];

function average(scores) {
    return Math.round(scores.reduce((a,b) => a+b,0) / scores.length);
}

console.log(average(scores));
console.log(average(scores2));

