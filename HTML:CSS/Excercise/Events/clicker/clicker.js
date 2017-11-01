let body = document.querySelector('body')


document.addEventListener('click',function(event){
   let side = event.screenX
    let width = window.innerWidth; 

   if(side <= width / 2){
    body.style.backgroundColor = 'mediumaquamarine'
   }else{
    body.style.backgroundColor = 'peachpuff'
   }

})