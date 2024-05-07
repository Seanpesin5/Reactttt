import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pixa from './comps/Pixa';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/pixa" />} />
            <Route path="/pixa" element={<Pixa />} />
        </Routes>
    </Router>
);

export default App;