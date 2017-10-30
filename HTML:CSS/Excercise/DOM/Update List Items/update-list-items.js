
function editList(){
    let list = prompt("Choose which list you will like to edit [one,two,three,four]")    
    if(document.getElementById(list) === null){
        alert("Not Valid Please Choose From The List, please choose again")
        editList();
    }else {
        let text = prompt("Great Now Write what ever you like")
        let container = document.getElementById(list)
        return container.innerHTML = text;
    }

}

editList()


var retry = document.getElementById("link").addEventListener("click", function(event) {
    editList()
});