import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CounterPage from '../pages/CounterPage';
import Navbar from './Navbar';
import NotFound404 from '../pages/NotFound404';
import FormPage from '../pages/FormPage';
function Approutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<CounterPage/>}/>
                <Route path='/Form' element={<FormPage/>}/>
            </Route>
            <Route path='*' element={<NotFound404/>}/>
        </Routes>        
    </Router> 
    </>
  )
}

export default Approutes;