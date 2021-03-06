'use strict';

const SHAPE = {

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
    ],

    J: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],

    D: [
        [1, 1],
        [1, 1]
    ],

    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],

    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],

    T: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
};

module.exports = { SHAPE };
