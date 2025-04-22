// src/pages/Registrierung.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrierung.css';  // Datei muss genau so heißen

function Registrierung() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert('Bitte stimme der Datenschutzerklärung zu.');
      return;
    }
    setSubmitted(true);
    console.log('User Registered:', formData);
    setTimeout(() => navigate('/welcome'), 1000);
  };

  return (
    <div className="registrierung-container">
      <h2>📋 Registrierung</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="registrierung-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E‑Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={accepted}
                onChange={e => setAccepted(e.target.checked)}
              />{' '}
              Ich stimme der Datenschutzerklärung zu
            </label>
          </div>

          <button type="submit" className="btn" disabled={!accepted}>
            Registrieren
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h3>🎉 Willkommen bei SCRUM WORLD!</h3>
          <p>Dein Account wurde erfolgreich bestätigt.</p>
          <button className="btn" onClick={() => navigate('/')}>
            Zur Startseite
          </button>
        </div>
      )}
    </div>
  );
}

export default Registrierung;
