import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [counter,setCounter] = useState(0)

    return (
        <div>
            <h3>this is the counter app</h3>
      <div id="counter_value" >{counter}</div>
      <button id="increment_btn" onClick={()=>setCounter(counter+1)} >increment</button>
      <button id="decrement_btn" onClick={()=>setCounter((prevalue)=>{
             return prevalue===0?0:prevalue-1
      } )
     } >decrement </button>
        </div>
    )
}

export default Counter
