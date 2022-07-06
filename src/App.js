import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayNumber from './components/gridArray';
import Board from './components/Board';


function App() {
  const [outputArray,setOutputArray] = useState([]); 

  const [gridArray, setGridArray] = useState([]); 
  {/* 
  Planning of this app
  1, generate en random array 5 * 5 (25 numbers) 
  2, display on display bar <display />
  3, display on Bingo Board 
  4, Click and mark it
  5, display array on lower bar...


  line
  comment
*/}

  const randomNumber = (startNum, endNum) => {
    let numberList = [];
    for (let i = startNum; i <= endNum; i++) {
      numberList = numberList.concat(i);
    }
    let result = [];
    for (let i = startNum; i <= endNum; i++) {
      let newNum;
      newNum = Math.floor(Math.random() * (endNum - i + 1));
      console.log('i is: ', i, 'created a new number', numberList[newNum], "newNum is: ", newNum);

      result = result.concat(numberList[newNum]);
      numberList.splice(newNum, 1);
    }
    return result;
  }
  //let gridArray
  useEffect (()=>{
    setGridArray(randomNumber(1, 25))}, [])
  

  const numberClick = (event) => {
    event.preventDefault();
    let clickedNum = event.target.innerText;
    !outputArray.includes(clickedNum) && setOutputArray(outputArray.concat(event.target.innerText));
  }


  return (
    <div className="App">
      Lets Start Now!
      <DisplayNumber className="display-number" inputArray={gridArray.slice()} />
     
      <DisplayNumber className="display-number" inputArray={gridArray.slice().sort()} />
      <Board inputArray = {gridArray} onClick={numberClick} />

      <DisplayNumber className="display-number" inputArray = {outputArray} />
      </div>
  );
}

export default App;
