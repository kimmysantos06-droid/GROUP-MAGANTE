import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Activity2.css';

const Activity2 = () => {
  const [name, setName] = useState("User Input");
  const [status, setStatus] = useState("OFFLINE");
  const [nameInput, setNameInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

  
  const isOnline = status.toLowerCase() === "online";
  const statusColor = isOnline ? "#4e7d5a" : "#a94442"; 


  const statusShadowColor = isOnline ? "rgba(78, 125, 90, 0.4)" : "rgba(169, 68, 66, 0.4)"; 

  const handleUpdate = () => {
    if (nameInput.trim() !== "") setName(nameInput);
    if (statusInput.trim() !== "") setStatus(statusInput.toUpperCase());
    setNameInput("");
    setStatusInput("");
  };

  const handleClear = () => {
    setName("User Input");
    setStatus("OFFLINE");
    setNameInput("");
    setStatusInput("");
  };

  return (
    <div className="activity-page-wrapper">
      <div className="activity-user-card">
        <div className="user-card-header">
          <span>👤 User Profile</span>
        </div>
        
        <div 
          className="profile-info-display" 
          style={{ 
            boxShadow: `0 8px 20px ${statusShadowColor}`,
            backgroundColor: isOnline ? "#f2faf4" : "#faf3f2"
          }}
        >
          <h3 className="user-full-name">{name}</h3>
          <p className="user-status-label" style={{ color: statusColor }}>
            ● {status}
          </p>
        </div>

        <div className="user-input-fields">
          <input 
            type="text" 
            placeholder="Enter name" 
            className="profile-text-input" 
            value={nameInput} 
            onChange={(e) => setNameInput(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Enter status" 
            className="profile-text-input" 
            value={statusInput} 
            onChange={(e) => setStatusInput(e.target.value)} 
          />
        </div>

        <div className="action-buttons-container">
          <button className="btn-update" onClick={handleUpdate}>Save Changes</button>
          <button className="btn-reset" onClick={handleClear}>Reset</button>
        </div>
         <Link to="/">← Back to MCO</Link>
      </div>
    </div>
  );
};

export default Activity2;