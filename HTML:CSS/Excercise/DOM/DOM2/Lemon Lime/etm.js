let paragraph = document.querySelectorAll('p')

for (var i = 0; i < paragraph.length; i++) {
    if(i % 2 === 0){
        paragraph[i].classList.add("bgYellow")
    }else{
        paragraph[i].classList.add("bgGreen")
    }
    
}