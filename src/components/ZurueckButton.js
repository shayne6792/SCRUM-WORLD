// src/components/ZurueckButton.js
import { useNavigate } from 'react-router-dom';

function ZurueckButton() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        🔙 Zurück
      </button>
    </div>
  );
}

export default ZurueckButton;
