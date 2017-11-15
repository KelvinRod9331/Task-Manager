
const chalk = require('chalk');

// const str = 'Hello World!'

// function helloBlue(str) {
//     console.log(chalk.blue(str))
// }

// helloBlue(str)

// function helloRed(str) {
//     console.log(chalk.red(str))
// }

// helloRed(str)


// function strToColor(str, color) {
//     console.log(chalk.keyword(color.toLowerCase())(str))
// }

// strToColor('Hello World', 'Orange')


// function evensBlueOddYellow(str) {
//     const strArr = str.split(' ')
//     var newStr = ''
//     strArr.forEach((e, i) => {
//         if (i % 2 === 0) {
//             newStr += chalk.blue(e) + " "
//         } else {
//             newStr += chalk.yellow(e) + " "
//         }
//     });
//     return newStr
// }

// console.log(evensBlueOddYellow('This is a test'))


// function angryText(str) {
//     console.log(chalk.red.underline.bold(str.toUpperCase()))
// }

// angryText('fudge you')

// function backgroundCyan(str) {
//     console.log(chalk.white.bgCyan(str))
// }

// backgroundCyan(str)

// function boldFirstUnderlineLast(str) {
//     var strArr = str.split(' ')
//     var newStr = ''
//     for (var i = 0; i < strArr.length; i++) {
//         if (i === 0) {
//             newStr = chalk.bold(strArr[i]) + ' '
//         } else if (i === (strArr.length - 1)) {
//             newStr += chalk.underline(strArr[i]) 
//         } else {
//             newStr += strArr[i] + ' '
//         }
//     }
//     return newStr

// }

// console.log(boldFirstUnderlineLast('This is a test'))

let processInString = process.argv.join(' ')
let processBeingSplit = processInString.split(' ')
let processBeingSliced = processBeingSplit.slice(3,process.argv.length)
let userStr = processBeingSliced.join(' ')
let userColor = process.argv[process.argv.length - 1]



function commandLineChalk(str,color){
    console.log(chalk.keyword(color)(str))
}

commandLineChalk(userStr,userColor)