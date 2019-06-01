const Board = require('./board.js');

class Game {
    constructor() {
        this.currentPlayer = 'X'
        this.board = new Board()
    }

    promptMove(reader, callback) {
        this.board.print();
        reader.question(`${this.currentPlayer} make a move: `, mark => {
          const pos = parseInt(mark);
          callback(pos);
        });
    }
    
    move(pos) {
        if (this.isValidMove(pos)) {
            if (this.currentPlayer === 'X') this.board.place_mark(pos, 1)
            if (this.currentPlayer === 'O') this.board.place_mark(pos, 2)
            this.currentPlayer === 'X' ? this.currentPlayer = 'O' : this.currentPlayer = 'X'
            return true;
        } else {
            return false;
        }
    }

    isValidMove(pos) {
        return this.board.empty(pos);
    }
    
    run(reader, gameCompletionCallback) {
        this.promptMove(reader, pos => {
            this.move(pos);

            if (this.isOver()){
                this.board.print();
                if (this.board.won()) {
                    console.log(`GG WP :)`);
                } else {
                    console.log('NO ONE WINS!');
                }
                gameCompletionCallback();
            } else {
                this.run(reader, gameCompletionCallback);
            }
        });
    }

    isOver() {
        return this.board.isOver();
    }
};

module.exports = Game;
