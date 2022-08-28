export const UNIT = 15;
export const BOARD_ZISE = 750;

export const DIRECTIONS = {
    LEFT: {x: -UNIT, y:0},
    RIGHT: {x: UNIT, y:0},
    UP: {x: 0, y: -UNIT},
    DOWN: {x:0, y:UNIT},

}

export const PLAYER_ONE = {
    color: '#CC0000',
    id: '1',
    keys: {
        38: 'up',
        39: 'right',
        40: 'down',
        37: 'left',
    },
    direction: DIRECTIONS.RIGHT,
    position: {x: UNIT* 6, y: UNIT* 6},

}

export const PLAYER_TWO = {
    color: '#0000CC',
    id: '2',
    keys: {
        87: 'up',
        68: 'right',
        83: 'down',
        65: 'left',
    },
    direction: DIRECTIONS.LEFT,
    position: {x: UNIT* 43, y: UNIT* 43},
}