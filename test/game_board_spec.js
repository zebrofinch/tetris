const Board = require('../lib/game_board.js');

const chai = require('chai');
const assert = require('assert');
chai.use(require('chai-change'));
chai.should();

describe('Game board', function () {

    describe('#constructor', function () {
        let w = 3;
        let h = 5;
        let board = new Promise( (resolve) =>  resolve(new Board(w,h)) );

        it('should have width and height', function () {
            return board.then( b => b.height.should.equal(h) && b.width.should.equal(w))
        });

        it('should be a matrix width x height', function () {
            return board.then( b => assert.deepEqual(b.matrix,

                   [[0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]]
            ));
        });
    });
});