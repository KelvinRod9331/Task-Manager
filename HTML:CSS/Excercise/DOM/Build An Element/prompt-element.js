let input = prompt("Write​ ​an​ ​entire​ ​HTML element​ ​(opening​ ​tag,​ ​text,​ ​and​ ​closing​ ​tag) ")

function editDiv(input){
    let container = document.getElementById("test")
    container.innerHTML = input;
}

editDiv(input)