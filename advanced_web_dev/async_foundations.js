// Print Array values doubled
var arr = [1,2,3,4,5,6];

function double(arr) {
    for(var i=0; i<arr.length; i++) {
        console.log(arr[i]*2);
    }
}

double(arr);

// refactor with forEach 
function double() {
    var arr = [1, 2, 3, 4, 5, 6];
    arr.forEach(function(number) {
        return number*2;
    })
}

double();