import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import ForgetPassword from './components/forgetPassword';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </Router>
);
}

export default App;
