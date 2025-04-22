import React from 'react';
import praxisBeispiele from '../data/praxisData';

function Praxisbeispiele() {
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>🛠 Praxisbeispiele</h2>
      {praxisBeispiele.map((item, idx) => (
        <div key={idx} style={{ margin: '30px auto', maxWidth: 600, textAlign: 'left' }}>
          <h3>{item.titel}</h3>
          <p>{item.beschreibung}</p>
          <ul>
            {item.checklist.map((step, i) => <li key={i}>{step}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Praxisbeispiele;
