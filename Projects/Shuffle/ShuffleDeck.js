
var suits = ['clubs', 'spades', 'diamonds', 'hearts']
var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', "king"]



document.querySelector('button').addEventListener('click', event => {
    document.querySelector('div').innerHTML = ""
    var imgName
    var number = document.querySelector('input').value
    if (number <= 10) {
        for (let i = 1; i <= number; i++) {
            var CardImg = document.createElement('img')
            var cards = {
                suit: suits[Math.floor(Math.random() * suits.length)],
                value: values[Math.floor(Math.random() * values.length)]
            }
            imgName = cards.value + cards.suit + ".png"
            CardImg.src = imgName
            document.querySelector('div').appendChild(CardImg)
        }
    }


})





