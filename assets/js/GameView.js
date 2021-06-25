export default class GameView {

    constructor() {
        console.log("init game view");
    }

    updateBoard(game) {
        console.log("this is test");
        console.log(game.board);
        for (let i = 0; i < game.board.length; i++) {
            const title = document.querySelector(`.board-title [data-index='${i}']`);
            console.log(title);
        }
    }

}