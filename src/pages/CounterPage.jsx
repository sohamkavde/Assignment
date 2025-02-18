import React from 'react'
import CounterView from '../views/CounterView';
import useCounterController from '../controller/CounterController';

function CounterPage() {
  const {count,onIncrease,onDecrease,onReset}= useCounterController();
  return <CounterView count={count} onIncrease={onIncrease} onDecrease={onDecrease} onReset={onReset}/>  
}

export default CounterPage;