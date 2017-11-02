
document.addEventListener('click', function (event) {
    var t = event.target.style // event.target is the element that is being targetted so the whole div will be an element.
    t.backgroundColor = t.backgroundColor === 'black' ? 'white' : 'black'
    
})