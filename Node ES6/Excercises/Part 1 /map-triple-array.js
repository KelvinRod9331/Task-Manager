var numbers=[1,2,3,4,5,6]

function mapTripleArr(array){
    var multiple = []
    array.map(x =>multiple.push(x*3))
    return multiple
}

console.log(mapTripleArr(numbers))