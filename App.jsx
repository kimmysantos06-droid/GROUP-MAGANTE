import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Theme & Styles ---
const styles = {
  container: {
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: "1rem 0",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  navLink: {
    color: "#61dafb",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    transition: "color 0.3s",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    marginTop: "60px",
    width: "450px",
    textAlign: "center",
    border: "1px solid #eaeaea",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "25px 0",
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "2px solid #eee",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  saveBtn: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    flex: 1,
  },
  clearBtn: {
    padding: "12px 24px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    flex: 1,
  },
  displayBox: {
    backgroundColor: "#f0f8ff", // Light blue background like Activity 1
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    textAlign: "center",
    borderLeft: "5px solid #007bff", // Strong blue accent bar
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)", 
  }
};

// --- Page 1: Home Dashboard ---
const Home = () => (
  <div style={styles.card}>
    <h1 style={{ color: "#1a1a1a", marginBottom: "15px" }}>🏠 Home Dashboard</h1>
    <p style={{ color: "#666", lineHeight: "1.6" }}>
      Welcome to <strong>Activity 2</strong>.
    </p>
    <div style={{ marginTop: "30px", fontSize: "0.9rem", color: "#888" }}>
      Click "Profile Activity" in the menu above to test the functionality.
    </div>
  </div>
);

// --- Page 2: Profile Activity ---
const Profile = () => {
  // useState for data display
  const [name, setName] = useState("Guest User");
  const [status, setStatus] = useState("Offline");

  // useRef for input handling
  const nameInputRef = useRef(null);
  const statusInputRef = useRef(null);

  const handleUpdate = () => {
    const newName = nameInputRef.current.value;
    const newStatus = statusInputRef.current.value;

    if (newName.trim() !== "") setName(newName);
    if (newStatus.trim() !== "") setStatus(newStatus);

    nameInputRef.current.value = "";
    statusInputRef.current.value = "";
    nameInputRef.current.focus();
  };

  const handleClear = () => {
    setName("Guest User");
    setStatus("Offline");
    nameInputRef.current.value = "";
    statusInputRef.current.value = "";
    nameInputRef.current.focus();
  };

  return (
    <div style={styles.card}>
      <h2 style={{ color: "#1a1a1a" }}>👤 User Profile</h2>
      
      <div style={styles.displayBox}>
        <div style={{ marginBottom: "10px" }}>
          <small style={{ color: "#666", fontWeight: "bold" }}>NAME</small>
          <h3 style={{ margin: "2px 0", color: "#007bff" }}>{name}</h3>
        </div>
        <div>
          <small style={{ color: "#666", fontWeight: "bold" }}>STATUS</small>
          <h3 style={{ margin: "2px 0", color: "#28a745" }}>{status}</h3>
        </div>
      </div>

      <div style={styles.inputGroup}>
        <input ref={nameInputRef} type="text" placeholder="Enter New Name..." style={styles.input} />
        <input ref={statusInputRef} type="text" placeholder="Enter New Status..." style={styles.input} />
      </div>

      <div style={styles.buttonGroup}>
        <button style={styles.saveBtn} onClick={handleUpdate}>Save Profile</button>
        <button style={styles.clearBtn} onClick={handleClear}>Reset All</button>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/profile" style={styles.navLink}>Profile Activity</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}