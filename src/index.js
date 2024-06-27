import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Bookingpage from './pages/BookingPage'
import ConfirmationPage from './pages/ConfirmationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Bookingpage/>} path="/bookings"/>
      <Route element={<ConfirmationPage/>} path="/confirmation"/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
