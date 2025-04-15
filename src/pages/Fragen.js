// src/pages/Fragen.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fragenData from '../data/fragen';

function Fragen() {
  const { level } = useParams();
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const fragen = fragenData[level] || [];

  const handleSelect = (index, antwort) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: antwort,
    }));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>Fragen für Level: {level}</h3>
      {fragen.map((frage, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>{frage.frage}</strong></p>
          <ul className="question-list">
            {frage.antworten.map((antwort, i) => (
              <li key={i}>
                <label>
                  <input
                    type="radio"
                    name={`frage-${index}`}
                    value={antwort}
                    checked={selectedAnswers[index] === antwort}
                    onChange={() => handleSelect(index, antwort)}
                  />
                  {antwort}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Fragen;
