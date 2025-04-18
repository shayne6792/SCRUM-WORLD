import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="admin-links">
        <Link to="/adminfragen" className="btn">🛠 Admin: Fragen</Link>
        <Link to="/glossaryinput" className="btn">➕ Glossar hinzufügen</Link>
      </div>
    </div>
  );
}

export default AdminPanel;
