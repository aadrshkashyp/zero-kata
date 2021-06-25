export default class Game {
    constructor() {
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null)
        console.log(this.board);
    }

    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }


    }
    makeMove(i) {
        this.board[i] = this.turn;
    }

}