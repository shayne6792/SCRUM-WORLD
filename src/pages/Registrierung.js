import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 ضروري للتنقل
import './Register.css';

function Registrierung() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate(); // 👈 استخدمه للتوجيه

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    setSubmitted(true);
    console.log('User Registered:', formData);

    // بدل من إظهار رابط فقط، نقوم بالتوجيه بعد ثانية
    setTimeout(() => {
      navigate('/welcome');
    }, 1000);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />{' '}
              Ich stimme der Datenschutzerklärung zu
            </label>
          </div>

          <button type="submit" disabled={!accepted}>
            Register
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <p>📩 Ein Aktivierungslink wurde an Ihre E-Mail gesendet...</p>
        </div>
      )}
    </div>
  );
}

export default Registrierung;
