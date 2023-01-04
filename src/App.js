import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Pages/Home';
import Postes from './Components/Postes';
function App() {
  return (
    <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/university" element={<Postes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;