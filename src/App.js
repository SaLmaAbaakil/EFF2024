import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Formulaire from './EFF/Formulaire';
import Experts1 from './EFF/Experts1'; 
import Experts2 from './EFF/Experts2'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <nav className="bg-pink-600 p-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/Experts1" className="text-white text-xl font-semibold hover:text-pink-200">
                Experts 1
              </Link>
            </li>
            <li>
              <Link to="/Experts2" className="text-white text-xl font-semibold hover:text-pink-200">
                Experts 2
              </Link>
            </li>
            <li>
              <Link to="/formulaire" className="text-white text-xl font-semibold hover:text-pink-200">
                Formulaire
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/Experts1" element={<Experts1 />} />
            <Route path="/Experts2" element={<Experts2 />} />
            <Route path="/formulaire" element={<Formulaire />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
