 function swapList(){
    let firstElement = prompt("Choose which list you will like to swap [one,two,three,four]")  
    let secondElement = prompt("Choose which list you will like to swap with [one,two,three,four]") 
       let x = document.getElementById(firstElement).innerText
       let y = document.getElementById(secondElement).innerText
        
       document.getElementById(firstElement).innerText = y
       document.getElementById(secondElement).innerText = x
    

}

swapList()


var retry = document.getElementById("link").addEventListener("click", function(event) {
    swapList()
});