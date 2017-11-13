var str_Numbers= ['1','2','3','4','5']


function map_strings_to_nums(array){
    var numbers=[]
    array.map(function(x){
        numbers.push(parseInt(x))
    })
return numbers
}

console.log(map_strings_to_nums(str_Numbers))