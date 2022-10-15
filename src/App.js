
import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/SignUp';
import Feed from './components/Feed';
import { SingleBed } from '@material-ui/icons';
import './components/SignUp.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Login from './components/Login';
import {AuthProvider} from './context/Authcontext';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    // <>
    <Router>
    <AuthProvider>
    
      <Routes>
          
        
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          {/* <PrivateRoute path="/" element={<Feed />}/> */}
          {/* <Signup/>  */}
          {/* <Login/> */}
        
       </Routes>
    </AuthProvider>
    </Router>
    // </>
  );
}

export default App;
