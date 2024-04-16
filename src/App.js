
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesComp from './comps/GamesComp';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/games" element={<GamesComp />} />
         
        </Routes>
      </Router>
    );
  }
  
  export default App;