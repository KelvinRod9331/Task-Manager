var body = document.querySelector('body')
var board = document.createElement('div')
board.id = 'board'
body.appendChild(board)



//var row = document.createElement('div')
// row.classList.add('row')

function makeRow(){
    // var row = document.createElement('div')
    // row.classList.add('row')
    for (var i = 0; i < 8; i++){
        var row = document.createElement('div')
        row.classList.add('row')
        for( var cell = 0; cell < 8; cell++ ){
            if (i % 2 === 0){
                if (cell % 2 === 0){
                    var brown = document.createElement('div')
                    brown.classList.add('brown')
                    row.appendChild(brown)
                } else {
                    var black = document.createElement('div')
                    black.classList.add('black')
                    row.appendChild(black)
                }
            } else {
                if (cell % 2 === 0){
                    var black = document.createElement('div')
                    black.classList.add('black')
                    row.appendChild(black)
                } else {
                    var brown = document.createElement('div')
                    brown.classList.add('brown')
                    row.appendChild(brown)
                }
            }
        }
        board.appendChild(row)
    }
}


    makeRow()



/**
 * 
 */