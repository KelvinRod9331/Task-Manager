
function colorQuads() {
    let quadrant = "#" + prompt(`Select which guandrant you will like to add color to
topleft
topright
bottomleft
bottomright`)


    let color = prompt("Now Choose any color you'll like")

    let id = document.querySelector(quadrant)

    id.style.backgroundColor = color

    let option = prompt("Would you like to add another color to a quadrant? Yes Or No")

    if (option.toLowerCase() === "yes") {
        colorQuads()
    } 

}

colorQuads()



