import React, { useState } from 'react';
import lernkarten from '../data/lernkarteData';

function Lernkarten() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => {
    setFlipped(false);
    setCurrent((i) => (i + 1) % lernkarten.length);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>🧠 Lernkarten</h2>
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          cursor: 'pointer',
          width: 300,
          margin: '40px auto',
          padding: 20,
          border: '1px solid #ccc',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        {flipped ? lernkarten[current].antwort : lernkarten[current].frage}
      </div>
      <button className="btn" onClick={next}>Nächste Karte</button>
    </div>
  );
}

export default Lernkarten;
