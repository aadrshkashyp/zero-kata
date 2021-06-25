import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

let titles = document.querySelectorAll(".board-title")
titles.forEach((title) => {
    title.addEventListener("click", () => {
        onTitleClick(title.dataset.index);
    })
})

function onTitleClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);

}

