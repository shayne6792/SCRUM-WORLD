import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === '1234' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Falsche Zugangsdaten!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Einloggen</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <button className="admin-panel-btn" onClick={() => navigate('/adminfragen')}>
        🛠 Admin: Fragen
      </button>
      <button className="admin-panel-btn" onClick={() => navigate('/glossaryinput')}>
        ➕ Glossar hinzufügen
      </button>
    </div>
  );
}

export default AdminPage;
