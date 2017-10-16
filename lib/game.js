const GameBoard = require('./game_board.js');
const Piece = require('./piece.js');

const VALUES = require('./values.js').module;
const SHAPES = require('./shape.js');
const SIZE = { width: 21, height: 42};


class Game {
    constructor(boardSize=SIZE, shapes=SHAPES){
      this.board = new GameBoard(boardSize.width, boardSize.height);
      this.piece = new Piece(shapes);
      this.piece.createPiece();
      return this;
    }

    clearBoard() {
        for (let i = this.board.matrix.length -1; i > 0; i--) {
                if (this.board.matrix[i].some( x => x === VALUES.emptyCell)) {
                    break;
                }
           const row = this.board.matrix.splice(i, 1)[0].fill(VALUES.emptyCell);
           this.board.matrix.unshift(row);
           i++;

        }
        return this;
    }


    isCollision() {
        let m = this.piece.pieceMatrix;
        let p = this.piece.position;
        for (let y = 0; y < m.length; y++) {
            for (let x = 0; x < m[y].length; x++) {
                if (m[y][x] !== VALUES.emptyCell &&
                    (this.board.matrix[y + p.y] &&
                        this.board.matrix[y + p.y][x + p.x]) !== VALUES.emptyCell) {
                    return true;
                }
            }
        }
        return false;
    }

    resetBoard(){
        this.board = new GameBoard(this.board.width, this.board.height);
        return this;
    }

    merge() {
        this.piece.pieceMatrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== VALUES.emptyCell) {
                    this.board.matrix[y + this.piece.position.y][x + this.piece.position.x] = value;
                }
            });
        });
    return this;
    }

}



module.exports = Game;