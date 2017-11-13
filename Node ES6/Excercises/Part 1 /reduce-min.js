function reduceMin(array) {
    var min = array.reduce(function (a, b) {
        if(a < b){
            return a
        }else {
            return b
        } 

    })

    return min
    
}

console.log(reduceMin([2, 3, 4, 5, 1])); //returns 1
console.log(reduceMin([6, 7, 7, 4])); //returns 4
console.log(reduceMin([10, 0, 100, 1, -100, 20, 33]));