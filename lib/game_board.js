const VALUES = require('./values.js').module;

class GameBoard {



    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = this.createMatrix(this.width, this.height);
    }

    createMatrix(width, height) {
           return new Array(height).fill(VALUES.emptyCell).map( h => new Array(width).fill(VALUES.emptyCell))
    }
}

module.exports = GameBoard;