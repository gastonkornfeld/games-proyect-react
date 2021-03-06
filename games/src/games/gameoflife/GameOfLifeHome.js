import React, {useState, useCallback, useRef} from 'react'
import styled from 'styled-components'
import produce from 'immer'






const numCols = 100;
const numRows = 100;

// to make the neighbours count easier i create an operations list

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
]

// Function to clear all of the square
const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows ; i++) {
        rows.push(Array.from(Array(numCols), () => 0))
    }

    return rows;
}

function GameOfLifeHome() {



    const [grid, setGrid] = useState(() => {
       return generateEmptyGrid();
    });

    // changes the state of the simulation, and the button to run or not
    const [running, setRunning] = useState(false);

    // I create a reference to the running state so i can use it in to the next function
    const runningRef = useRef(running);
    runningRef.current = running;

    // here runningRef.current is checking if the running is true or false.
    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

           // Simulate
        // create a new grid constantly
        setGrid(g => {
            return produce(g, gridCopy => {
                for (let i = 0 ; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++){
                        let neighbours = 0;

                        // I add the x and y from operations to the real i and k indexes. then chek if they 
                        // go out of the board limits. Then add how many neighbours it have
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbours += g[newI][newK];
                            }
                        });
// now with the amount of neighbours there I let die or live the cell
                        if (neighbours < 2 || neighbours > 3) {
                            gridCopy[i][k] = 0;
                        } else if (g[i][k] === 0 && neighbours === 3){
                            gridCopy[i][k] = 1;
                        }
                    }
                }    
            });
        });
        
     


        
        setTimeout(runSimulation, 100);
    }, []);

// ---------------------------------------------------------------------------------------------------
//  the page pagination starts here 
// ---------------------------------------------------------------------------------------------------

    return (
        <Container>
            <GameOfLifeTitle>
                <h1 className="gameHeader">Game of life</h1>
            </GameOfLifeTitle>
            <ButtonsContainer>
                <StartButton
                    onClick= {() => {
                        setRunning(!running);
                        if (!running) {
                            runningRef.current = true;
                            runSimulation();
                        }
                    }}
                >
                    {running ? 'STOP' : "REPRODUCE"}
                </StartButton>
                <ClearButton
                    onClick={() => {
                        setGrid(generateEmptyGrid());
                    }}
                >
                    CLEAR
                </ClearButton>
                <RandomButton
                    onClick={() => {
                        const rows = [];
                        for (let i = 0; i < numRows; i++) {
                            rows.push(
                                Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0 )));
                        }
                        setGrid(rows);
                    }}
                >
                    RANDOM
                </RandomButton>
            </ButtonsContainer>
            <Grid style={{
                display: "grid",
                gridTemplateColumns: `repeat(${numCols}, 15px)`
            }}>
                {grid.map((rows, i) => 
                    rows.map((col, k) => ( 
                        <div
                        key = {`${i}-${k}`}
                        onClick = {() => {
                            const newGrid = produce(grid, gridCopy => {
                                gridCopy[i][k] = grid[i][k] ? 0 : 1;
                            })
                            setGrid(newGrid);
                        }}
                            style={{ 
                                width: 15, 
                                height: 15,
                                backgroundColor: grid[i][k] ? 'white' : undefined,
                                border: 'solid 1px white'
                            }} 

                        />
                    ))
                )}

            </Grid>
            
        </Container>
    )
}

export default GameOfLifeHome


const GameOfLifeTitle = styled.div`
    text-align: center;
`

const Container = styled.div`
    background-color: inherit;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Grid = styled.div`
    display:flex;
    justify-content: center;

`
const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`


const StartButton = styled.button`
    width: 200px;
    margin-bottom: 20px;
    padding: 10px 0;
    background-color: #b73a1c;
    color: aliceblue;
    
    :hover {
        background-color: red;
        color: yellow; 
        font-size: 14px;
    }
    
`

const ClearButton = styled.button`
    width: 200px;
    margin-bottom: 20px;
    padding: 10px 0;
    background-color: #b73a1c;
    color: aliceblue;


    :hover {
        background-color: white;
        color: black; 
        font-size: 14px;
    }
`

const RandomButton = styled.button`
    width: 200px;
    margin-bottom: 20px;
    padding: 10px 0;
    background-color: #b73a1c;
    color: aliceblue;


    :hover {
        background-color: green;
        color: black; 
        font-size: 14px;
    }
`