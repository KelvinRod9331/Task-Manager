document.addEventListener('DOMContentLoaded', function () {
    player1 = 'X',
    player2 = "O",
    currentPlayer = player1,
    turn = 0

    function nextMove(quadrant) {
        if (quadrant.innerText === "") {
            quadrant.innerText = currentPlayer
            togglePlayer()
        }
    }

    function togglePlayer() {
        if (checkForWinner(currentPlayer)) {
            document.querySelector('h1').innerText = currentPlayer + " Wins! The Game"
        } else if (currentPlayer === player1) {
            currentPlayer = player2
            turn +=1
            board.style.cursor = "url(o.png), auto"
        } else {
            currentPlayer = player1
            board.style.cursor = "url(Rounded_X.png), auto"
            turn +=1
        }

        if(turn === 9){
            document.querySelector('h1').innerText = "DRAW! PLAY AGAIN"
        }
    }

    function checkRow(a, b, c, move) {
        var results = false;
        if (getQuadrant(a) === move && getQuadrant(b) === move && getQuadrant(c) === move) {
            results = true
        }

        return results
    }

    function getQuadrant(number) {
        return document.getElementById('q' + number).innerText
    }

    function checkForWinner(move) {
        var results = false
        if (
            checkRow(1, 2, 3, move) ||
            checkRow(4, 5, 6, move) ||
            checkRow(7, 8, 9, move) ||
            checkRow(1, 4, 7, move) ||
            checkRow(2, 5, 8, move) ||
            checkRow(3, 6, 9, move) ||
            checkRow(1, 5, 9, move) ||
            checkRow(3, 5, 7, move)) {
            results = true
        }

        return results
    }



    function startGame() {

        var board = document.getElementById('board')
        board.addEventListener('click', function (event) {
            nextMove(event.target)

        })
    }


    document.querySelector('#reset').addEventListener('click', function (event) {
        location.reload()
    })

    startGame()

})







