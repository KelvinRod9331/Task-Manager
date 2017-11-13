
var Num_Arr = [2,4,11,50,3,6,13]

function greaterThan10(arr){
    newArr=[]
    arr.filter(function(elem){
        if(elem > 10){
            newArr.push(elem) 
        }
    })
    return newArr
}

console.log(greaterThan10(Num_Arr))