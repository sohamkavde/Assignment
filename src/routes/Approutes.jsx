import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CounterPage from '../pages/CounterPage';
import Navbar from './Navbar';
import NotFound404 from '../pages/NotFound404';
import FormPage from '../pages/FormPage';

import GoogleSignInButton from "../views/GoogleSignInButton";
import LogoutButton from "../views/LogoutButton";
import {app} from "../firebase";
import useCheckAuthForLogin from '../models/CheckAuthForLogin';
import Dashboard from '../views/Dashboard';
 

function Approutes() {
  const  { user } = useCheckAuthForLogin();   
  return (
    <Router>
      {console.log(app)}
      
      <Navbar />
      <Routes>
        <Route path="/login" element={
          !user ? (
            <GoogleSignInButton />
          ) : ( <Dashboard/>
          )
        } />
        <Route path="/" element={<CounterPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default Approutes;
