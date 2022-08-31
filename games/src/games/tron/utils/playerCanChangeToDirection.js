

import sumCoordinates from "./sumCoordinates";

export default function playerCanChangeToDirection(currentDirection, nextDirection) {
    const result = sumCoordinates(currentDirection, nextDirection);
    const test = Object.keys(result).filter(coordinate => result[coordinate] !== 0).length > 0;
    return test;
}

