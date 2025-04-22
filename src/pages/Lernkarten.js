import React, { useState } from 'react';
import lernkarten from '../data/lernkarteData';
import '../App.css'; // damit .btn zur Verfügung steht

function Lernkarten() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setCurrent((idx) => (idx + 1) % lernkarten.length);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2 style={{ fontSize: '28px' }}>🧠 Lernkarten</h2>
      <p>Trainiere dein Wissen mit interaktiven Lernkarten.</p>

      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          cursor: 'pointer',
          width: 320,
          margin: '40px auto',
          padding: 20,
          border: '1px solid #ccc',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          backgroundColor: flipped ? '#f8f9fa' : '#fff'
        }}
      >
        {flipped 
          ? lernkarten[current].antwort 
          : lernkarten[current].frage}
      </div>

      <button className="btn" onClick={nextCard}>
        Nächste Karte
      </button>
    </div>
  );
}

export default Lernkarten;
