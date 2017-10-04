const assert = require('assert');
const Piece = require('../lib/piece.js');

const _ = require('lodash');


describe('Piece', function () {

    let SHAPE = {
        L: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ]
    };

    describe('#constructor', function () {
        let p = new Piece(SHAPE);

        it('should have list of shapes', function () {
            assert.equal(p.shapes, SHAPE);
        });
        it('should have empty piece', function () {
            assert.equal(p.pieceMatrix, null);
        });
        it('should have zero position', function () {
            assert.equal(p.position.x, 0);
            assert.equal(p.position.y, 0);
        });
    });

    describe('#createPiece()', function () {
        let p = new Piece(SHAPE);
        p.createPiece();
        it('should generate new piece', function () {
            assert.equal(p.pieceMatrix, SHAPE['L']);
        });

        describe('create random piece from list of shapes', function () {
            let SHAPES = {
                I: [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ],

                L: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1]
                ]
            };

            let p = new Piece(SHAPES);
            let generated = [];

            _.times(5, function() {
                generated.push(p.createPiece().pieceMatrix)
            });

            it('should generate new piece', function () {
                assert.deepEqual(_.uniq(generated).sort(), _.values(SHAPES).sort());
            });
        });
    });

    describe('#rotatePiece()', function () {
        describe('clockwise direction', function () {
            let direction = 'clockwise';

            it('should generate new piece - iteration 1', function () {
                let p = new Piece(SHAPE);
                p.createPiece().rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                       [[0, 0, 0],
                        [1, 1, 1],
                        [1, 0, 0]]);
            });
            it('should generate new piece - iteration 2', function () {
                let p = new Piece(SHAPE);
                p.createPiece()
                    .rotatePiece(direction)
                    .rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                       [[0, 0, 1],
                        [1, 1, 1],
                        [0, 0, 0]]);
            });
            it('should generate new piece - iteration 3', function () {
                let p = new Piece(SHAPE);
                p.createPiece().rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                       [[1, 1, 0],
                        [0, 1, 0],
                        [0, 1, 0]]);
            });
            it('should generate new piece - iteration 4', function () {
                let p = new Piece(SHAPE);
                p.createPiece().rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                       [[1, 1, 0],
                        [0, 1, 0],
                        [0, 1, 0]]);
            });
        });

        describe('counterclockwise direction', function () {
            let direction = 'counterclockwise';
            it('should generate new piece - iteration 1', function () {
                let p = new Piece(SHAPE);
                p.createPiece().rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                      [ [ 0, 0, 0 ],
                        [ 1, 1, 1 ],
                        [ 1, 0, 0 ] ]);
            });
            it('should generate new piece - iteration 2', function () {
                let p = new Piece(SHAPE);
                p.createPiece()
                    .rotatePiece(direction)
                    .rotatePiece(direction);
                assert.deepEqual(p.pieceMatrix,
                      [ [ 0, 0, 1 ],
                        [ 1, 1, 1 ],
                        [ 0, 0, 0 ]] );
            });
            it('should generate new piece - iteration 3', function () {
                let p = new Piece(SHAPE);
                p.createPiece()
                    .rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction);

                assert.deepEqual(p.pieceMatrix,
                      [ [ 0, 1, 0 ],
                        [ 0, 1, 0 ],
                        [ 0, 1, 1 ] ]);
            });
            it('should generate new piece - iteration 4', function () {
                let p = new Piece(SHAPE);
                p.createPiece()
                    .rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction)
                    .rotatePiece(direction);

                assert.deepEqual(p.pieceMatrix,
                      [ [ 0, 1, 0 ],
                        [ 0, 1, 0 ],
                        [ 0, 1, 1 ] ]);
            });
        });

    });
});