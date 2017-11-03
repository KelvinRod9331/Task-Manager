var muffinKey = 'muffincount'


function muffinChange(n){
    var muffincnt = Math.max(0,Number(window.localStorage.getItem(muffinKey)) + n)
    window.localStorage.setItem(muffinKey,muffincnt)
    document.querySelector('#muffincount').innerText = window.localStorage.getItem(muffinKey)
}

document
    .querySelector('#eatmuffin')
    .addEventListener('click',function(event){
        muffinChange(5)
    })

document
    .querySelector('#bakedmuffin')
    .addEventListener('click',function(event){
        muffinChange(-1)
    })
   
if(isNaN(window.localStorage.getItem(muffinKey))){
    window.localStorage.getItem(muffinKey,10)
}

muffinChange(0)