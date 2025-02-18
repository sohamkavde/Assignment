import React from 'react'
import { animated,useSpring } from '@react-spring/web';
function CounterView({count,onIncrease,onDecrease,onReset}) {
  const styles = useSpring({
    backgroundColor: `rgb(${Math.min(count, 255)}, 100, 150)`,
    width:'100vw',
    height:'100vh'
  });
  return (
    <animated.div style={{...styles,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1>{count}</h1>
    <button onClick={onIncrease}>Increase</button><br />
    <button onClick={onDecrease}>Decrease</button><br />
    <button onClick={onReset}>Reset</button>    
    </animated.div>
    
  )
}

export default CounterView;