import React, { useState } from "react";
import "./AdminFragen.css";

function AdminFragen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // سؤال وإجابات
  const [frage, setFrage] = useState("");
  const [antworten, setAntworten] = useState(["", "", "", ""]);
  const [korrekteAntwort, setKorrekteAntwort] = useState(0);
  const [level, setLevel] = useState("");
  const [zertifikat, setZertifikat] = useState("");

  const handleAntwortChange = (index, value) => {
    const newAntworten = [...antworten];
    newAntworten[index] = value;
    setAntworten(newAntworten);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "1234" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Benutzername oder Passwort ist falsch!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const neueFrage = {
      frage,
      antworten,
      korrekteAntwort,
      level,
      zertifikat,
    };
    console.log("Gespeicherte Frage:", neueFrage);
    alert("Frage erfolgreich gespeichert!");
    // Reset
    setFrage("");
    setAntworten(["", "", "", ""]);
    setKorrekteAntwort(0);
    setLevel("");
    setZertifikat("");
  };

  if (!loggedIn) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Einloggen</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-fragen-container">
      <h2>Neue Frage hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Frage eingeben"
          value={frage}
          onChange={(e) => setFrage(e.target.value)}
          required
        />

        {antworten.map((antwort, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Antwort ${index + 1}`}
            value={antwort}
            onChange={(e) => handleAntwortChange(index, e.target.value)}
            required
          />
        ))}

        <label>
          Korrekte Antwort (Index von 0–3):
          <input
            type="number"
            min="0"
            max="3"
            value={korrekteAntwort}
            onChange={(e) => setKorrekteAntwort(Number(e.target.value))}
            required
          />
        </label>

        <select value={level} onChange={(e) => setLevel(e.target.value)} required>
          <option value="">Level wählen</option>
          <option value="Einsteiger">Einsteiger</option>
          <option value="Fortgeschritten">Fortgeschritten</option>
          <option value="Experte">Experte</option>
        </select>

        <select value={zertifikat} onChange={(e) => setZertifikat(e.target.value)} required>
          <option value="">Zertifikat wählen</option>
          <option value="PSM1">PSM I</option>
          <option value="PSM2">PSM II</option>
          <option value="PSM3">PSM III</option>
        </select>

        <button type="submit">Frage speichern</button>
      </form>
    </div>
  );
}

export default AdminFragen;
