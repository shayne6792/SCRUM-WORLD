import React, { useEffect, useRef, useState } from "react";
import "./Profil.css";

function Profil() {
  const [user, setUser] = useState({
    vorname: "Roronoa",
    nachname: "Zoro",
    email: "user@example.com",
    zertifikat: "Certified Scrum Master",
    level: "Fortgeschritten",
  });

  const [letztesErgebnis, setLetztesErgebnis] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserData, setNewUserData] = useState(user);
  const [avatarPreview, setAvatarPreview] = useState("/avatar.png");
  const fileInputRef = useRef();

  useEffect(() => {
    const gespeichertes = localStorage.getItem('letztesErgebnis');
    if (gespeichertes) {
      setLetztesErgebnis(JSON.parse(gespeichertes));
    }
  }, []);

  const berechneProzent = () => {
    if (!letztesErgebnis) return 0;
    return Math.round((letztesErgebnis.punkte / letztesErgebnis.total) * 100);
  };

  const loescheErgebnis = () => {
    localStorage.removeItem('letztesErgebnis');
    setLetztesErgebnis(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };

  const speichern = () => {
    setUser(newUserData);
    setIsEditing(false);
  };

  const abbrechen = () => {
    setNewUserData(user);
    setIsEditing(false);
  };

  return (
    <div className="profil-container">
      <h2>👤 Mein Profil</h2>

      <div className="profil-card">
        <img
          src={avatarPreview}
          alt="Profilbild"
          className="profil-avatar"
        />
        <button onClick={() => fileInputRef.current.click()} className="avatar-button">
          Bild ändern
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <div className="profil-details">
          {isEditing ? (
            <>
              <input name="vorname" value={newUserData.vorname} onChange={handleInputChange} />
              <input name="nachname" value={newUserData.nachname} onChange={handleInputChange} />
              <input name="email" value={newUserData.email} onChange={handleInputChange} />
              <button onClick={speichern}>Speichern</button>
              <button onClick={abbrechen}>Abbrechen</button>
            </>
          ) : (
            <>
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
              <button onClick={() => setIsEditing(true)}>Bearbeiten</button>
            </>
          )}

          {letztesErgebnis && (
            <div className="testergebnis-box">
              <h3>📊 Letztes Testergebnis</h3>
              <p>Level: <strong>{letztesErgebnis.level}</strong></p>
              <p>Punkte: <strong>{letztesErgebnis.punkte} / {letztesErgebnis.total}</strong></p>
              <p>Datum: <strong>{letztesErgebnis.datum}</strong></p>

              <div className="fortschritt">
                <div className="balken" style={{ width: `${berechneProzent()}%` }}>
                  {berechneProzent()}%
                </div>
              </div>

              <button onClick={loescheErgebnis} className="loesch-button">
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
