import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationSuccess() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f0f1f5', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '32px' }}>🎉 Willkommen bei SCRUM WORLD!</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        Dein Account wurde erfolgreich bestätigt.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Zur Startseite
      </button>
      <footer style={{ marginTop: '40px', color: '#666' }}>
        © {new Date().getFullYear()} Scrum World. All rights reserved.
      </footer>
    </div>
  );
}

export default RegistrationSuccess;
