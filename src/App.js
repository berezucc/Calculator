import './App.css';
import { useState } from 'react'

const App = () => {
  const [output, setOutput] = useState("")
  const [newNum, setNewNum] = useState(false) 
  {/*When false -> on current num, when true means on second num of operation */}

  const isOperand = () => {
    let prevOper = output[output.length - 1];
    if(prevOper === "+" && prevOper === "-" && prevOper === "x" && prevOper === "÷"){
      return true;
    }
  }
  {/*Add digit to screen */}
  const digit = (num) => {
    let checker = false;
    if((output.length == 0 || isOperand) && num == 0) {
      checker = true;
    }
    else if(output.length < 15 && !checker){
      setOutput(output+num)
    }
  }
  {/*Checks so that only 1 decimal point is added */}
  const decimal = () => {
    if(!newNum){
      digit(".")
    }
    setNewNum(true)
  }
  const reset = () => {
    setOutput("")
    setNewNum(false)
  }
  const del = () => {
    setOutput(output.substring(0,(output.length-1)))
  }
  {/*Converts to percentage */}
  const percent = () => {
    if(output.length > 0)
      setOutput(parseFloat(output)/100)
  }
  const operator = (operand) => {
    let prevOper = output[output.length - 1];
    if(prevOper !== "+" && prevOper !== "-" && prevOper !== "x" && prevOper !== "÷"){
      setOutput(output+operand)
      setNewNum(false)
    }
  }
  const equals = () => {
    let final = output.replace("÷","/");
    final = final.replace("x","*");
    setOutput(eval(final))
  }

  return (
    <div className="App">
      {/* Screen */}
      <div className='output'> {output}</div>
      {/* Action Buttons */}
      <div className='act grey' onClick={reset}> AC </div>
      <div className='act grey' onClick={del}> DEL </div>
      <div className='act grey' onClick={percent}> % </div>
      <div className='act orange' onClick={() => operator("÷")}> ÷ </div>
      {/* Digits*/}
      <div className='num' onClick={() => digit(7)}> 7 </div>
      <div className='num' onClick={() => digit(8)}> 8 </div>
      <div className='num' onClick={() => digit(9)}> 9 </div>
      <div className='act orange' onClick={() => operator("x")}> x </div>
      <div className='num' onClick={() => digit(4)}> 4 </div>
      <div className='num' onClick={() => digit(5)}> 5 </div>
      <div className='num' onClick={() => digit(6)}> 6 </div>
      <div className='act orange' onClick={() => operator("-")}> - </div>
      <div className='num' onClick={() => digit(1)}> 1 </div>
      <div className='num' onClick={() => digit(2)}> 2 </div>
      <div className='num' onClick={() => digit(3)}> 3 </div>
      <div className='act orange' onClick={() => operator("+")}> + </div>
      <div className='num' id = "zero" onClick={() => digit(0)}> 0 </div>
      <div className='num' onClick={decimal}> . </div>
      <div className='act orange' onClick={equals}> = </div>

    </div>
  );
}

export default App;
