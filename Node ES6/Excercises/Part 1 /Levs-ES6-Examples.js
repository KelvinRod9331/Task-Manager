// 1

const strToNumArr = (strArr) => strArr.map(str => Number(str))
const strToNumArr = (strArr) => strArr.map(Number)


const triple = (num) => num * 3
const tripleArr = (arr) => arr.map(triple)

//2
const firstLetterUpper = (str) => 
str.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')

//3
function map(arr, callback){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      newArr.push(callback(arr[i]))
    }
    return newArr
  }
  
  map([1,2,3], num => num * 2)

//4

const sum = (arr) => arr.reduce((acc, num) => {
    console.log(`acc: ${acc}, num: ${num}`)
    return acc + num
  })
  
  
  console.log(sum([2,3,4,5]))


//5
 

const reduceMin = (arr) => 
arr.reduce((min, num) => {
  if (num < min){
    return num;
  } else {
    return min;
  }
})

const reduceMin = (arr) => 
arr.reduce((min, num) => {
  console.log(`min: ${min}, num: ${num}`)
  return num < min ? num : min
})

console.log(reduceMin([2, 3, 4, 5, 1, 9]));


const max = (num1, num2) => {
if (num1 > num2){
  return num1
} else {
  return num2
}
}

const max = (num1, num2) => {
return num1 > num2 ? num1 : num2
}

//6

function countOddsAndEvens(arr) {
    return arr.reduce((acc, num) => {
      console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
      if (num % 2 === 0) {
        return {
          evens: acc.evens + 1,
          odds: acc.odds
        }
      } else {
        return {
          evens: acc.evens,
          odds: acc.odds + 1
        }
      }
    }, { odds: 0, evens: 0 })
  }
  
  console.log(countOddsAndEvens([11, 2, 36, 4, 15]));
  //  returns {odds: 2, evens: 3}