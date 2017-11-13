var str = 'messiah es el mas vakano'

function  firstLetter(str){
    var strArr = str.split(' ')
   var newStr =  strArr.map(elem => elem[0].toUpperCase() + elem.slice(1))
    return newStr.join(' ')
}

console.log(firstLetter(str))