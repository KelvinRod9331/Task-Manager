
var Num_Arr = [2,4,11,50,3,6,13]

function filterEvens(arr){
    newArr=[]
    arr.filter(function(elem){
        if(elem % 2 === 0){
            newArr.push(elem) 
        }
    })
    return newArr
}

console.log(filterEvens(Num_Arr))