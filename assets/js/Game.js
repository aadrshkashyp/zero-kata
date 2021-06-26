export default class Game {

    constructor() {
        this.newGame();


    }



    newGame() {
        this.turn = "<span class=\"C\">C</class>";
        this.board = new Array(9).fill(null);
        this.winner = null;
    }

    nextTurn() {
        if (this.turn === "<span class=\"C\">C</class>") {
            this.turn = "<span class=\"T\">T</class>"
        } else {
            this.turn = "<span class=\"C\">C</class>"
        }
    }

    makeMove(i) {
        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombination()
        if (!winningCombination) {
            this.nextTurn();
        } else {
            this.winner = winningCombination[0]
        }

    }

    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }
        return null;
    }

    isInProgress() {
        if (!this.findWinningCombination() && this.board.includes(null)) {
            return true;
        } else {
            return false;
        }
    }

}