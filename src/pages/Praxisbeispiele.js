import React from 'react';
import praxisBeispiele from '../data/praxisData';

function Praxisbeispiele() {
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2 style={{ fontSize: '28px' }}>🛠 Praxisbeispiele</h2>
      <p>Hier siehst du, wie Scrum im Alltag angewendet wird.</p>

      {praxisBeispiele.map((item, idx) => (
        <div
          key={idx}
          style={{
            maxWidth: 600,
            margin: '30px auto',
            padding: 20,
            textAlign: 'left',
            backgroundColor: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>{item.titel}</h3>
          <p>{item.beschreibung}</p>
          <ul>
            {item.checklist.map((step, i) => (
              <li key={i} style={{ margin: '4px 0' }}>
                • {step}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Praxisbeispiele;
