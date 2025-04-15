import React from 'react';
import { useNavigate } from 'react-router-dom';

function LevelAuswahl() {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    console.log("Gewähltes Level:", level);
    navigate(`/fragen/${level}`);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>🔎 Wähle dein Level</h2>
      <p>Bitte wähle dein Wissensniveau, um mit den Fragen zu beginnen:</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <button className="btn" onClick={() => handleLevelClick("anfaenger")}>🟢 Anfänger</button>
        <button className="btn" onClick={() => handleLevelClick("fortgeschritten")}>🟡 Fortgeschritten</button>
        <button className="btn" onClick={() => handleLevelClick("experte")}>🔴 Experte</button>
      </div>
    </div>
  );
}

export default LevelAuswahl;
