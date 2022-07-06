import React from "react";
import Squares from './Squares'

const Board = ({inputArray, onClick}) =>{
    // Board is a 5 x 5 box 
    // row    0 is B I N G O
    // column 0 is 1 2 3 4 5
    return (
        <div className="board">
            <Squares inputArray = {['B',"I","N","G","O"]} size={5} onClick={null}/>
            <Squares inputArray = {inputArray} size={inputArray.length} onClick={onClick}/>

        </div>
    )
}

export default Board;
