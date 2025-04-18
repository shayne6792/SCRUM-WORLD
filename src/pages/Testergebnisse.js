import React from 'react';
import './Testergebnisse.css';

function Testergebnisse() {
  const ergebnisse = [
    {
      benutzer: 'Zoro Roronoa',
      datum: '15.04.2025',
      level: 'Fortgeschritten',
      richtigeAntworten: 5,
      gesamtFragen: 6,
    },
    {
      benutzer: 'Nami Swann',
      datum: '16.04.2025',
      level: 'Anfänger',
      richtigeAntworten: 4,
      gesamtFragen: 6,
    },
    {
      benutzer: 'Monkey D. Luffy',
      datum: '17.04.2025',
      level: 'Experte',
      richtigeAntworten: 6,
      gesamtFragen: 6,
    },
  ];

  const headerStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const cellStyle = {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div className="testergebnisse-container">
      <h2>📊 Testergebnisse</h2>
      <p>Hier sind deine bisherigen Ergebnisse:</p>

      <table className="testergebnisse-table">
        <thead>
          <tr>
            <th style={headerStyle}>Benutzer</th>
            <th style={headerStyle}>Datum</th>
            <th style={headerStyle}>Level</th>
            <th style={headerStyle}>Richtige Antworten</th>
            <th style={headerStyle}>Gesamtfragen</th>
          </tr>
        </thead>
        <tbody>
          {ergebnisse.map((eintrag, index) => (
            <tr key={index}>
              <td style={cellStyle}>{eintrag.benutzer}</td>
              <td style={cellStyle}>{eintrag.datum}</td>
              <td style={cellStyle}>{eintrag.level}</td>
              <td style={cellStyle}>{eintrag.richtigeAntworten}</td>
              <td style={cellStyle}>{eintrag.gesamtFragen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Testergebnisse;
