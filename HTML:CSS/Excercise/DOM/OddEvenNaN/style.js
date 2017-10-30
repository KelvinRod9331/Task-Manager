function oddEvenNaN(input) {
    if (isNaN(parseInt(input))) {
        alert("This is not a number")
    }
    else if (parseInt(input) % 2 === 0) {
        alert("This is an even number")
    } else {
        alert("This is an odd number")
    }
}
oddEvenNaN(prompt("Enter a number"))