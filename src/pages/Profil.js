import React, { useEffect, useState } from "react";
import "./Profil.css";

function Profil() {
  const user = {
    vorname: "Roronoa",
    nachname: "Zoro",
    email: "user@example.com",
    zertifikat: "Certified Scrum Master",
    level: "Fortgeschritten",
  };

  const [letztesErgebnis, setLetztesErgebnis] = useState(null);

  useEffect(() => {
    const gespeichertes = localStorage.getItem('letztesErgebnis');
    if (gespeichertes) {
      setLetztesErgebnis(JSON.parse(gespeichertes));
    }
  }, []);

  const loescheErgebnis = () => {
    localStorage.removeItem('letztesErgebnis');
    setLetztesErgebnis(null);
  };

  const berechneProzent = () => {
    if (!letztesErgebnis) return 0;
    return Math.round((letztesErgebnis.punkte / letztesErgebnis.total) * 100);
  };

  return (
    <div className="profil-container">
      <h2>👤 Mein Profil</h2>

      <div className="profil-card">
        <img
          src="/avatar.png"
          alt="Profilbild"
          className="profil-avatar"
        />
        <div className="profil-details">
          <p><strong>Vorname:</strong> {user.vorname}</p>
          <p><strong>Nachname:</strong> {user.nachname}</p>
          <p><strong>E-Mail:</strong> {user.email}</p>
          <p><strong>Zertifikat:</strong> {user.zertifikat}</p>
          <p>
            <strong>Aktuelles Level:</strong>{" "}
            <span className={`level-badge ${user.level.toLowerCase()}`}>
              {user.level}
            </span>
          </p>

          {letztesErgebnis && (
            <div className="testergebnis-box" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <h3>📊 Letztes Testergebnis</h3>
              <p>Level: <strong>{letztesErgebnis.level}</strong></p>
              <p>Punkte: <strong>{letztesErgebnis.punkte} / {letztesErgebnis.total}</strong></p>
              <p>Datum: <strong>{letztesErgebnis.datum}</strong></p>

              {/* 🔵 Fortschrittsanzeige */}
              <div style={{ marginTop: '10px' }}>
                <div style={{
                  height: '20px',
                  background: '#e0e0e0',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${berechneProzent()}%`,
                    background: '#4caf50',
                    height: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    lineHeight: '20px'
                  }}>
                    {berechneProzent()}%
                  </div>
                </div>
              </div>

              {/* 🗑️ Lösch-Button */}
              <button
                onClick={loescheErgebnis}
                style={{
                  marginTop: '15px',
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                🗑️ Ergebnis löschen
              </button>
            </div>
          )}

          {!letztesErgebnis && (
            <p style={{ color: '#777', marginTop: '20px' }}>Keine Testergebnisse vorhanden.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profil;
