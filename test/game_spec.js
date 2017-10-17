const Game = require('../lib/game.js');

const chai = require('chai');
const assert = require('assert');
chai.use(require('chai-change'));
chai.should();

describe('Game', function () {

    let SHAPE = {
        L: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ]
    };
    let SIZE = { width: 3, height: 5};
    let game = new Promise( (resolve) =>  resolve(new Game(SIZE, SHAPE)) );


    describe('#constructor', function () {
        it('should have board with SIZE', function () {
            return game.then( g => assert.deepEqual(g.board.matrix,

                   [[0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]]
            ));

        });
        it('should have piece with SHAPE', function () {
            return game.then( g => assert.deepEqual(g.piece.shapes, SHAPE
            ));

        });
    });


    describe('#reset board', function () {
        let game = new Game(SIZE, SHAPE);
        game.board.matrix.fill( new Array(SIZE.width).fill(1));

        let reset =  new Promise( (resolve) =>  resolve( game.resetBoard() ) );
        it('should reset board to zero`s values', function () {
            return reset.then( g => assert.deepEqual(g.board.matrix,

                   [[0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]]
            ));

        });

    });

    describe('#clear board', function () {
        let game = new Game(SIZE, SHAPE);
        game.board.matrix =                    [[1,0,0],
                                                [1,1,0],
                                                [1,1,1],
                                                [1,1,1],
                                                [1,1,1]];

        let clear =  new Promise( (resolve) =>  resolve( game.clearBoard() ) );
        it('should clear board line with all values eq "1" and unshift zero`s line', function () {
            return clear.then( g => assert.deepEqual(g.board.matrix,

                   [[0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [1,0,0],
                    [1,1,0]]
            ));

        });

    });

    describe('#merge board and piece', function () {
        let game = new Game(SIZE, SHAPE);
        it('should merge board and piece', function () {
            return new Promise( (resolve) =>  resolve( game.merge() ))
                .then( g => assert.deepEqual(g.board.matrix,

                   [[0,1,0],
                    [0,1,0],
                    [0,1,1],
                    [0,0,0],
                    [0,0,0]]
            ));
        });
        it('should merge board and piece', function () {
            game.piece.pieceMatrix = [[1,1,1],
                                      [1,1,1],
                                      [1,1,1],
                                      [1,1,1],
                                      [1,1,1]];
            return new Promise( (resolve) => { resolve( game.merge() ) })
                .then( g => assert.deepEqual(g.board.matrix,

                       [[1,1,1],
                        [1,1,1],
                        [1,1,1],
                        [1,1,1],
                        [1,1,1]]
                ));
        });
    });

    describe('#isCollision?', function () {
        let game = new Game(SIZE, SHAPE);
        it('return false for empty board', function () {
            assert.equal(game.isCollision(), false);
        });
        it('return false if NO collision with piece', function () {
            game.board.matrix =
                   [[1,0,1],
                    [1,0,1],
                    [1,0,0],
                    [1,1,1],
                    [1,1,1]];

            assert.equal(game.isCollision(), false);
        });
        it('return true for filled board', function () {
            game.board.matrix =
               [[1,1,1],
                [1,1,1],
                [1,1,1],
                [1,1,1],
                [1,1,1]];

            assert.equal(game.isCollision(), true);
        });
        it('return true if collision with piece', function () {
            game.board.matrix =
                   [[1,0,1],
                    [1,0,1],
                    [1,0,1],
                    [1,1,1],
                    [1,1,1]];

            assert.equal(game.isCollision(), true);
        });

    });
});

