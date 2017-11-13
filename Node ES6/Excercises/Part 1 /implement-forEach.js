var number=[
    1,2,3,4,5,6,7,8
]

function forEach(array, callback) {
    for (var i in array) {
        callback(array[i])
    }
}


var log = function (element) {
    console.log(element)
}


forEach(number,log)