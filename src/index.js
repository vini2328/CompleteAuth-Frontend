import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SendResetEmail from './components/SendResetEmail';
import Confrimpass from './components/Confrimpass';
import Signup from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/sendresetlink" element={<SendResetEmail/>} />
    <Route path="/confirmpassword/:id/:token" element={<Confrimpass/>} />




  </Routes>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
