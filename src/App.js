import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;