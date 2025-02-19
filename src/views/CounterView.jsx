import React from 'react'
import { animated,useSpring } from '@react-spring/web';
import { Button } from "@mui/material";

function CounterView({count,onIncrease,onDecrease,onReset}) {
  const styles = useSpring({
    backgroundColor: `rgb(${Math.min(count, 255)}, 100, 150)`,
    width:'100%',
    height:'100vh'
  });
  return (
    <animated.div style={{...styles,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1>{count}</h1>
    <div>
    <Button variant="contained" color="primary" onClick={onIncrease}>Increase</Button> &nbsp;&nbsp;
    <Button variant="contained" color="error" onClick={onDecrease}>Decrease</Button> &nbsp;&nbsp;
    <Button variant="contained" color="primary" onClick={onReset}>Reset</Button>    &nbsp;&nbsp;
    </div>
    </animated.div>
    
  )
}

export default CounterView;