import Game from "./Game.js"

let game = new Game();

console.log(game.board);
console.log("My Turn is", game.turn);
game.nextTurn();
console.log("My Turn is", game.turn);
game.makeMove(3);
console.log(game.board);
game.makeMove(8);
console.log(game.board);