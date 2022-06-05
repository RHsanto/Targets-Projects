/* eslint-disable no-eval */
import React, { useState } from 'react';

const Calculator = () => {
  const [result,setResult]=useState("");

  const clickBtn=(event)=>{
   setResult(result.concat(event.target.value))
  }
  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
 const clear=()=>{
   setResult("")
 }
 function backspace() {
  setResult(result.slice(0, -1));
}
  return (
    <div className='calculator'>
      <h1>My Calculator</h1>
      <input type="text" placeholder='0' id='result' value={result} />
      <input type="button" value="9" className='btn' onClick={clickBtn} />
      <input type="button" value="8" className='btn'  onClick={clickBtn} />
      <input type="button" value="7" className='btn'  onClick={clickBtn} />
      <input type="button" value="6" className='btn'  onClick={clickBtn} />
      <input type="button" value="5" className='btn'  onClick={clickBtn} />
      <input type="button" value="4" className='btn'  onClick={clickBtn} />
      <input type="button" value="3" className='btn'  onClick={clickBtn} />
      <input type="button" value="2" className='btn'  onClick={clickBtn} />
      <input type="button" value="1" className='btn'  onClick={clickBtn} />
      <input type="button" value="0" className='btn'  onClick={clickBtn} />
      <input type="button" value="." className='btn'  onClick={clickBtn} />
      <input type="button" value="+" className='btn'  onClick={clickBtn} />
      <input type="button" value="-" className='btn'  onClick={clickBtn} />
      <input type="button" value="*" className='btn'  onClick={clickBtn} />
      <input type="button" value="/" className='btn'  onClick={clickBtn} />
      <input type="button" value="%" className='btn'  onClick={clickBtn} />
      <input type="button" value="AC" className='btn1 '  onClick={ clear} />
      <input type="button" value="Del " className='btn1 red' onClick={backspace} />
      <input type="button" value="=" className='btn2' onClick={calculate} />
    </div>
  );
};

export default Calculator;