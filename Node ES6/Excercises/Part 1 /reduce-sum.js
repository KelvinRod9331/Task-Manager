function sum(array) {
    var sum = array.reduce(function (a, b) {
        return a + b

    })

    return sum
    
}

console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20