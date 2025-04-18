// src/pages/GlossaryInput.js
import React, { useState } from "react";
import "./GlossaryInput.css";
import ZurueckButton from "../components/ZurueckButton";

function GlossaryInput() {
  const [begriff, setBegriff] = useState("");
  const [erklaerung, setErklaerung] = useState("");
  const [quelle, setQuelle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const eintrag = { begriff, erklaerung, quelle };
    console.log("Glossar-Eintrag:", eintrag);
    alert("Eintrag erfolgreich gespeichert!");
    setBegriff("");
    setErklaerung("");
    setQuelle("");
  };

  return (
    <div className="glossary-input-container">
      <ZurueckButton />

      <h2>Glossar-Begriff hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Begriff"
          value={begriff}
          onChange={(e) => setBegriff(e.target.value)}
          required
        />

        <textarea
          placeholder="Erklärung"
          value={erklaerung}
          onChange={(e) => setErklaerung(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Quelle"
          value={quelle}
          onChange={(e) => setQuelle(e.target.value)}
        />

        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}

export default GlossaryInput;
