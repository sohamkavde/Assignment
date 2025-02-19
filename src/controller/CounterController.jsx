import React, { useEffect, useState } from 'react';
import { getIntialValue } from '../models/CounterModel';

function useCounterController() {
  const [count,setCount] = useState(getIntialValue());

  useEffect(()=>{
    localStorage.setItem('counter',count);
  },[count]);

  const onIncrease = ()=> setCount((count)=>Math.min(count + 5,255)); 
  const onDecrease = ()=> setCount((count)=>Math.max(count - 5, 0)); 
  const onReset = ()=> setCount(0);
  return {
    count,
    onIncrease,
    onDecrease,
    onReset
  }
}

export default useCounterController;