import Navbar from './components/Navbar'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import UserControllerApi from './js-client/api/UserControllerApi';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Routes>
        {/* 未登录时访问 /dashboard，会重定向到 /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
