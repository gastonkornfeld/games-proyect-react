export const UNIT = 9;
export const BOARD_ZISE = 450;

export const GAME_READY = 1;
export const GAME_PLAYING = 2;
export const GAME_ENDED = 3;



export const DIRECTIONS = {
    LEFT: {x: -UNIT, y:0},
    RIGHT: {x: UNIT, y:0},
    UP: {x: 0, y: -UNIT},
    DOWN: {x:0, y:UNIT},

}

export const PLAYER_ONE = {
    color: 'green',
    id: '1',
    keys: {
        38: DIRECTIONS.UP,
        39: DIRECTIONS.RIGHT,
        40: DIRECTIONS.DOWN,
        37: DIRECTIONS.LEFT,
    },
    direction: DIRECTIONS.RIGHT,
    position: {x: UNIT* 6, y: UNIT* 6},
    hasDied : false,
    instructions: "To move use the Arrow Keys",

}

export const PLAYER_TWO = {
    color: 'salmon',
    id: '2',
    keys: {
        87: DIRECTIONS.UP,
        68: DIRECTIONS.RIGHT,
        83: DIRECTIONS.DOWN,
        65: DIRECTIONS.LEFT,
    },
    direction: DIRECTIONS.LEFT,
    position: {x: UNIT* 43, y: UNIT* 43},
    hasDied : false,
    instructions: "To move use ASDW Keys",


}