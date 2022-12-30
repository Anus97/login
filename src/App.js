import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Router>
    </div>
  );
}

export default App;
