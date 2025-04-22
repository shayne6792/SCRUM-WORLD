import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Profil from "./pages/Profil";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminFragen from "./pages/AdminFragen";
import GlossaryInput from "./pages/GlossaryInput";
import Theorie from "./pages/Theorie";
import Lernkarten from "./pages/Lernkarten";
import Praxisbeispiele from "./pages/Praxisbeispiele";
import Registrierung from "./pages/Registrierung";
import LevelAuswahl from "./pages/LevelAuswahl";
import Fragen from "./pages/Fragen";
import Testergebnisse from "./pages/Testergebnisse";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <img src="/logo.png" alt="SCRUM WORLD Logo" className="logo" />
        <h1>
          Willkommen bei <span className="highlight">SCRUM WORLD</span>
        </h1>

        <div className="buttons">
          <Link to="/theorie" className="btn">
            📘 Glossary
          </Link>
          <Link to="/lernkarten" className="btn">
            💖 Lernkarten
          </Link>
          <Link to="/praxisbeispiele" className="btn">
            🛠 Praxisbeispiele
          </Link>
          <Link to="/registrierung" className="btn">
            📋 Registrierung
          </Link>
          <Link to="/levelauswahl" className="btn">
            🧠 Tests
          </Link>
          <Link to="/testergebnisse" className="btn">
            📊 Ergebnisse
          </Link>
        </div>

        <Link to="/login" className="profile-button">👤</Link>
        <Link to="/admin" className="admin-button">⚙️</Link>

        <Routes>
          {/* Home */}
          <Route path="/" element={<Welcome />} />

          {/* Hauptseiten */}
          <Route path="/theorie" element={<Theorie />} />
          <Route path="/lernkarten" element={<Lernkarten />} />
          <Route path="/praxisbeispiele" element={<Praxisbeispiele />} />
          <Route path="/registrierung" element={<Registrierung />} />
          <Route path="/levelauswahl" element={<LevelAuswahl />} />
          <Route path="/testergebnisse" element={<Testergebnisse />} />

          {/* Dynamische Fragen pro Level */}
          <Route path="/fragen/:level" element={<Fragen />} />

          {/* User & Admin */}
          <Route path="/login" element={<Login />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adminfragen" element={<AdminFragen />} />
          <Route path="/glossaryinput" element={<GlossaryInput />} />
        </Routes>

        {/* Footer auf allen Seiten */}
        <footer className="footer">
          © {new Date().getFullYear()} Scrum World. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
