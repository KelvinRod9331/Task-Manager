
var Num_Arr = [2,4,10,12,20]

function forEachSum(arr){
    var sum = 0
    arr.forEach(x => {
    sum = sum+x
        return sum
    });
    return sum
   
}

console.log(forEachSum(Num_Arr))