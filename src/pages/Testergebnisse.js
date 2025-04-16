import React from "react";
import "./Testergebnisse.css";

function Testergebnisse() {
  // بيانات وهمية للعرض
  const ergebnisse = [
    {
      name: "Max Mustermann",
      datum: "2024-04-01",
      fragen: 10,
      richtig: 8,
    },
    {
      name: "Lisa Beispiel",
      datum: "2024-04-10",
      fragen: 15,
      richtig: 13,
    },
  ];

  return (
    <div className="ergebnisse-container">
      <h2>Übersicht der Testergebnisse</h2>
      <table>
        <thead>
          <tr>
            <th>Teilnehmer</th>
            <th>Datum</th>
            <th>Fragen</th>
            <th>Richtig</th>
            <th>Ergebnis</th>
          </tr>
        </thead>
        <tbody>
          {ergebnisse.map((eintrag, index) => {
            const prozent = Math.round((eintrag.richtig / eintrag.fragen) * 100);
            return (
              <tr key={index}>
                <td>{eintrag.name}</td>
                <td>{eintrag.datum}</td>
                <td>{eintrag.fragen}</td>
                <td>{eintrag.richtig}</td>
                <td>{prozent}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Testergebnisse;
