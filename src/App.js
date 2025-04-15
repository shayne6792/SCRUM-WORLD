import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Theorie from './pages/Theorie';
import Lernkarten from './pages/Lernkarten';
import Praxisbeispiele from './pages/Praxisbeispiele';
import Registrierung from './pages/Registrierung';
import LevelAuswahl from './pages/LevelAuswahl';
import Fragen from './pages/Fragen';

function App() {
  return (
    <Router>
      <div className="App">
        <img src="/logo.png" alt="SCRUM WORLD Logo" className="logo" />
        <h1>
          Willkommen bei <span className="highlight">SCRUM WORLD</span>
        </h1>

        <div className="buttons">
          <Link to="/theorie" className="btn">📘 Theorie</Link>
          <Link to="/lernkarten" className="btn">🧠 Lernkarten</Link>
          <Link to="/praxisbeispiele" className="btn">🛠️ Praxisbeispiele</Link>
          <Link to="/registrierung" className="btn">📝 Registrierung</Link>
          <Link to="/level" className="btn">🎯 Level wählen</Link>
        </div>

        <Routes>
          <Route path="/theorie" element={<Theorie />} />
          <Route path="/lernkarten" element={<Lernkarten />} />
          <Route path="/praxisbeispiele" element={<Praxisbeispiele />} />
          <Route path="/registrierung" element={<Registrierung />} />
          <Route path="/level" element={<LevelAuswahl />} />
          <Route path="/fragen/:level" element={<Fragen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
