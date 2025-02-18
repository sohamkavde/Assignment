import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CounterPage from '../pages/CounterPage';
function Approutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<CounterPage/>}/>
        </Routes>        
    </Router> 
    </>
  )
}

export default Approutes;