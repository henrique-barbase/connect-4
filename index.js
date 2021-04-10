document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for(let i = 0; i < squares.length; i++){
        squares[i].onclick = () => {
        //if the square below your current sqaure is taken, you can go ontop of it
            if(square[i + 7].classList.contains('taken')) {
                if(currentPlayer == 1) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } if (currentPlayer == 2){ 
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer= 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            } alert('cant gohere')
        }
    }

    
})