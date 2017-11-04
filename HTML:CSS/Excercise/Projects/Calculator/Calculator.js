var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
    try {
        return eval(mathExp)
    } catch (e) {
        return NaN
    }
}


document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');

    document.addEventListener('click', function (event) {
        var elementId
       
        switch (event.target.id) {
            case "add":
                elementId = '+'
                break;
            case "sub":
                elementId = "-"
                break;
            case "mul":
                elementId = "*"
                break;
            case "div":
                elementId = "/"
                break;
            case "eq":
            let num = outputDiv.innerText
                elementId = calculate(num)
                break;
            case "clr":
                elementId = ''
                break;
            default:
                elementId = event.target.id
                break;
        }
        if(event.target.id === 'eq' || event.target.id === 'clr'){
            outputDiv.innerText = ''
        }
        outputDiv.innerText += elementId;
        // logging the element id for debug purposes
        console.log(elementId)

    })
})