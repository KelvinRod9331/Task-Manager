// var blurbKey = 'allTheBlurb'; 

var blurb = document.querySelector('#blurb'); 
blurb.addEventListener('input', function(event) { 
    // var allTheBlurb = document.querySelector('#alltheblurb'); 
    window.localStorage.setItem('blurb', event.target.value);
    
}); 

// var blurb = document.querySelector("#blurb");
blurb.value = window.localStorage.getItem('blurb');