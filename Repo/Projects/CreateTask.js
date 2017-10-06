
var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}


function createTask(title) {
    var task = {
        title: title,
        completed: false
    }
    return task
}


function showActive(active) {
    for (var i = 0; i < active.length; i++) {
        if (active[i].completed === false) {
            console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
        }
    }
}
function showCompleted(active) {
    for (var i = 0; i < active.length; i++) {
        if (active[i].completed === true) {
            console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
        }
    }
}

function logTodoList(taskArr) {
    for (var i = 0; i < taskArr.length; i++) {
        console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
    }
}

function logTasks(array, callback) {

    taskArr.push(callback)
    for (var i = 0; i < taskArr.length; i++) {
        console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + '\n')
    }
}


function toggleID(arr, id) {
    if (arr[id].completed === false) {
        arr[id].completed = true
        console.log("Congratulation on completing this task!\n\n" + "Title: " + arr[id].title + '. Completed: ' + arr[id].completed + "\n")
    } else {
        console.log('You already completed this task\n')
    }

}



var taskArr = []

rl.on('line', function (input) {
    clear()
    console.log("Todo List\n")

    var inputArr = input.toLowerCase().trim().split(' ')
    if (inputArr[0] === "add") {
        logTasks(taskArr,createTask(inputArr.slice(1).join(' '))) 
    } else if (inputArr[0] === 'show' && inputArr[1] === "all") {
        logTodoList(taskArr)
    } else if (inputArr[0] === "show" && inputArr[1] === "active") {
        showActive(taskArr)
    } else if (inputArr[0] === "show" && inputArr[1] === "completed") {
        showCompleted(taskArr)
    } else if (inputArr[0] === 'toggle' && inputArr[1] !== undefined) {
        var id = Number(inputArr[1])
        toggleID(taskArr, id - 1)
    } else {
        console.log('Wrong Input\n')
    }

    console.log("Hello Welcome to your Task Manager! What will you like to do: Show [All, Active, Completed] ADD or Toggle [ID]\n")
})

console.log("Hello Welcome to your Task Manager! What will you like to do: Show [All, Active, Completed] ADD or Toggle [ID]\n")
