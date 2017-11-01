
let btn = document.querySelector('#btn')


btn.addEventListener('click', function(event){
    event.preventDefault()
    
    let form = document.querySelector('#input').value
    let reverse = form.split('').reverse().join('')
    let text = document.querySelector('p')
    text.innerHTML = reverse
    
})
