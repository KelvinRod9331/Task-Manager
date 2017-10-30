function changeHeader(){
    let headText = document.getElementById("main-text");
    let newText = window.prompt("Enter a text");
    headText.innerHTML = newText;
}
// run every 0.5 seconds
setInterval(changeHeader,500)