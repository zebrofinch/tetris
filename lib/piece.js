'use strict';

let _ = require('lodash');


class Piece {
    constructor(shapes) {
        this.position = {x: 0, y: 0};
        this.pieceMatrix = null;
        this.shapes = shapes;
    };

    createPiece() {
        this.pieceMatrix = this.randomPiece();
        this.position.x = 0;
        this.position.y = 0;
        return this;
    };

    rotatePiece(direction = 'clockwise') {
        this.transpose();
        if (direction === 'clockwise') {
            this.pieceMatrix = this.pieceMatrix.map(row => row.reverse());
        } else if (direction === 'counterclockwise') {
            this.pieceMatrix = this.pieceMatrix.reverse();
        } else { throw 'Direction should be "clockwise" or "counterclockwise".' }
        return this;
    };

    transpose(){
            for (let y = 0; y < this.pieceMatrix.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [
                        this.pieceMatrix[x][y],
                        this.pieceMatrix[y][x],
                    ] = [
                        this.pieceMatrix[y][x],
                        this.pieceMatrix[x][y],
                    ];
                }
            }
        };



    randomPiece() {
        let pieces = _.keys(this.shapes);
        return this.shapes[pieces[pieces.length * Math.random() | 0]];
    };
}

module.exports =  Piece;