let player1 = "X";
let player2 = "O";
let current_player = player1;
let moves = 0;
const winstate = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

function switchPlayer() {
    if (current_player === player1) {
        current_player = player2;
    } else {
        current_player = player1;
    }
}

function play(id) {
    const playboard = document.getElementById(`playboardtiles${id}`);


    if (playboard.innerHTML === "") {
        playboard.innerHTML = current_player;

        switchPlayer();
        moves++;
    } else {
        return;
    }
    if (moves >= 9) {
        setTimeout(() => {
            alert("GAME END");
        }, 250);
    }
}