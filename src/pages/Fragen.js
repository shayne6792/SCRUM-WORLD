import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const fragenData = {
  anfaenger: [
    {
      frage: "Was ist Scrum?",
      antworten: [
        "Ein Kochrezept",
        "Ein agiles Rahmenwerk",
        "Ein Computerspiel",
        "Eine Programmiersprache",
      ],
      richtigAntwort: "Ein agiles Rahmenwerk",
    },
    {
      frage: "Was ist ein Sprint im Scrum?",
      antworten: [
        "Ein 100m Lauf",
        "Ein fester Zeitraum zur Umsetzung von Aufgaben",
        "Ein Dokument",
        "Ein Meeting",
      ],
      richtigAntwort: "Ein fester Zeitraum zur Umsetzung von Aufgaben",
    },
    {
      frage: "Wer ist Teil des Scrum Teams?",
      antworten: [
        "Product Owner, Scrum Master, Entwickler",
        "Manager, Tester, Designer",
        "Käufer, Verkäufer, Nutzer",
        "Coach, Trainer, Spieler",
      ],
      richtigAntwort: "Product Owner, Scrum Master, Entwickler",
    },
  ],
  fortgeschritten: [
    {
      frage: "Was macht ein Scrum Master?",
      antworten: [
        "Moderiert Prozesse und beseitigt Hindernisse",
        "Schreibt Code",
        "Erstellt Grafiken",
        "Verkauft das Produkt",
      ],
      richtigAntwort: "Moderiert Prozesse und beseitigt Hindernisse",
    },
    {
      frage: "Was ist das Product Backlog?",
      antworten: [
        "Eine Liste von offenen Bugs",
        "Eine Liste von Anforderungen, die das Produkt benötigt",
        "Ein Projektplan",
        "Ein Kalender",
      ],
      richtigAntwort: "Eine Liste von Anforderungen, die das Produkt benötigt",
    },
    {
      frage: "Was ist ein Daily Scrum?",
      antworten: [
        "Ein tägliches Meeting, um Fortschritte zu besprechen",
        "Ein Sprint Planning",
        "Ein Review Meeting",
        "Ein Meeting mit dem Kunden",
      ],
      richtigAntwort: "Ein tägliches Meeting, um Fortschritte zu besprechen",
    },
  ],
  experte: [
    {
      frage: "Was ist ein Burndown Chart?",
      antworten: [
        "Ein Tool zur Verwaltung von Bugs",
        "Ein Diagramm, das den verbleibenden Arbeitsaufwand im Sprint zeigt",
        "Ein Zeitplan für Urlaube",
        "Eine Checkliste für das Daily Scrum",
      ],
      richtigAntwort: "Ein Diagramm, das den verbleibenden Arbeitsaufwand im Sprint zeigt",
    },
    {
      frage: "Was ist ein Sprint Review?",
      antworten: [
        "Ein Meeting zur Planung des nächsten Sprints",
        "Ein Meeting, um das Inkrement zu zeigen und Feedback zu sammeln",
        "Ein Meeting zur Team-Bewertung",
        "Ein Brainstorming-Treffen",
      ],
      richtigAntwort: "Ein Meeting, um das Inkrement zu zeigen und Feedback zu sammeln",
    },
    {
      frage: "Was ist ein Increment im Scrum?",
      antworten: [
        "Ein Teil des Product Backlogs",
        "Die Anzahl der Entwickler im Team",
        "Das fertige Produkt oder Produktbestandteil nach einem Sprint",
        "Ein Plan für das nächste Release",
      ],
      richtigAntwort: "Das fertige Produkt oder Produktbestandteil nach einem Sprint",
    },
  ]
};

function Fragen() {
  const { level } = useParams();
  const fragen = fragenData[level] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (antwort) => {
    const isCorrect = antwort === fragen[currentIndex].richtigAntwort;

    if (currentIndex + 1 < fragen.length) {
      if (isCorrect) {
        setPunkte((prev) => prev + 1);
      }
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 300);
    } else {
      const finalePunkte = isCorrect ? punkte + 1 : punkte;
      const ergebnis = {
        level,
        punkte: finalePunkte,
        total: fragen.length,
        datum: new Date().toLocaleDateString('de-DE'),
      };
      localStorage.setItem('letztesErgebnis', JSON.stringify(ergebnis));
      setPunkte(finalePunkte);
      setSubmitted(true);
    }
  };

  if (!fragen.length) {
    return <p style={{ textAlign: 'center' }}>Keine Fragen für dieses Level.</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h3>Fragen für Level: <span style={{ textTransform: 'capitalize' }}>{level}</span></h3>

      {!submitted ? (
        <div key={currentIndex} style={{ marginTop: '20px' }}>
          <p><strong>{fragen[currentIndex].frage}</strong></p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {fragen[currentIndex].antworten.map((antwort, i) => (
              <li key={i} style={{ margin: '8px 0' }}>
                <label>
                  <input
                    type="radio"
                    name={`frage-${currentIndex}`}
                    value={antwort}
                    onChange={() => handleSelect(antwort)}
                  /> {antwort}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ color: 'green', fontWeight: 'bold', marginTop: '20px' }}>
          ✅ Du hast {punkte} von {fragen.length} richtig beantwortet!
        </div>
      )}
    </div>
  );
}

export default Fragen;
