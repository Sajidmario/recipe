import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import Register from './pages/register';
import Home from './pages/Home';
function App() {
  return (
<>
<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>

</>

  );
}

export default App;
