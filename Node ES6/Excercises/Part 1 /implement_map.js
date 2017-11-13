var array = [1, 2, 3, 4, 5];

var double = function (num) {
  return num * 2;
}

function map(arr, callback){
    var doubledArr = []
    arr.map(function(elem){
        doubledArr.push(double(elem))
    },double)

    return doubledArr
}

console.log(map(array,double))