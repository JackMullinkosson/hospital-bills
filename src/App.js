import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { ResultsPage } from './pages/ResultsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
           <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/results" element={<ResultsPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
