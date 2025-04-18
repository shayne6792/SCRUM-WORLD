// src/pages/Welcome.js
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>🎉 Willkommen bei SCRUM WORLD!</h2>
      <p>Dein Account wurde erfolgreich bestätigt.</p>
      <Link to="/" className="btn">Zur Startseite</Link>
    </div>
  );
}

export default Welcome;
