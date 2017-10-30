let inputStr =  prompt("Type what ever your heart desires")
let inputNum = prompt("Enter the amount of times you want it to be repeated")



function repeatX(inputStr,inputNum) {
    let  string = " "
    for (var i = 1; i <= inputNum; i++) {
        string = string + ' ' + inputStr
    }

    return string
}

alert(repeatX(inputStr,inputNum))