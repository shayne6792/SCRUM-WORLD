import React, { useState } from 'react';

function Theorie() {
  const [suche, setSuche] = useState("");

  const glossar = [
    { begriff: "Sprint", erklaerung: "Ein Sprint ist ein Zeitraum, in dem ein Inkrement erstellt wird." },
    { begriff: "Product Owner", erklaerung: "Verantwortlich für das Product Backlog und den geschäftlichen Erfolg." },
    { begriff: "Scrum Master", erklaerung: "Hilft dem Team, Scrum zu verstehen und umzusetzen." },
    { begriff: "Daily Scrum", erklaerung: "Tägliches kurzes Meeting zur Abstimmung im Team." },
    { begriff: "Inkrement", erklaerung: "Das Ergebnis eines Sprints, das potentiell auslieferbar ist." },
  ];

  const gefiltert = glossar.filter((eintrag) =>
    eintrag.begriff.toLowerCase().includes(suche.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2 style={{ fontSize: '28px' }}>📘 Glossar</h2>
      <p>Hier findest du alle wichtigen Begriffe rund um Scrum.</p>

      <input
        type="text"
        placeholder="🔍 Begriff suchen..."
        value={suche}
        onChange={(e) => setSuche(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '30px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

      {gefiltert.length > 0 ? (
        gefiltert.map((eintrag, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#007BFF' }}>{eintrag.begriff}</h3>
            <p>{eintrag.erklaerung}</p>
          </div>
        ))
      ) : (
        <p style={{ color: '#999' }}>Keine Begriffe gefunden.</p>
      )}
    </div>
  );
}

export default Theorie;
