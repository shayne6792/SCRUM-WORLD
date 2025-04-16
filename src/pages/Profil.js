import React from "react";
import "./Profil.css"; // تأكد إن الملف موجود أو عدل الاسم حسب الحاجة

function Profil() {
  return (
    <div className="profile-container">
      <h2>Mein Profil</h2>
      <form className="profile-form">
        <input type="text" placeholder="Vorname" />
        <input type="text" placeholder="Nachname" />
        <input type="email" placeholder="E-Mail" />
        <select>
          <option>Level wählen</option>
          <option>Anfänger</option>
          <option>Fortgeschritten</option>
          <option>Experte</option>
        </select>
        <input type="text" placeholder="Zertifikat" />
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}

export default Profil;
