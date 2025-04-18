import React from 'react';
import { useNavigate } from 'react-router-dom';

function LevelAuswahl() {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    navigate(`/fragen/${level}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2 style={{ fontSize: '28px' }}>🧪 Tests</h2>
      <p>Wähle dein Level, um mit dem Wissenstest zu starten.</p>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <button className="btn" onClick={() => handleLevelClick("anfaenger")}>🟢 Anfänger</button>
        <button className="btn" onClick={() => handleLevelClick("fortgeschritten")}>🟡 Fortgeschritten</button>
        <button className="btn" onClick={() => handleLevelClick("experte")}>🔴 Experte</button>
      </div>
    </div>
  );
}

export default LevelAuswahl;
