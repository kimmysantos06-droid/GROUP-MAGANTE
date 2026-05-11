import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MajorCourseOutput.css';

const MajorCourseOutput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  

  const activities = [
    { id: 1, description: 'Create a landing page with reactJS.', path: '/Activity-1' },
    { id: 2, description: 'Create a program using useState.', path: '/Activity-2' },
    { id: 3, description: 'Create a program that display data from JSON file.', path: '/Activity-3' },
    { id: 4, description: 'Create a program that display data from JSON file with loader.', path: '/Activity-4' },
  ];

  const members = [
    { name: 'Magante, Casey', color: '#3e2723' },
    { name: 'Magos, Cyra', color: '#5d4037' },
    { name: 'Santos, Kimberly',color: '#795548' },
    { name: 'Carig, Maria Soe',color: '#8d6e63' },
    { name: 'Calagos, Jehreal',color: '#a1887f' },
    { name: 'Nabor, Shiela',color: '#bcaaa4'},
  ];

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand"> MAJOR OUTPUT </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#team">Team</a>
            <a href="#activities">Activities</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - redesigned to match reference image layout */}
      <header className="hero" id="home">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="major-title">Major Course Output </h1>
            <p className="subtitle-emerging">MCO IN ITE6</p>
            <p className="description-highlight">
              A structured compilation of completed activities.
            </p>
            <button className="hero-cta" onClick={() => document.getElementById('activities').scrollIntoView()}>
              View Activities
            </button>
          </div>
          <div className="student-info-card">
            <h3 className="card-title">Group Information</h3>
            <div className="info-row"><span className="label">Name</span><span className="value">GROUP-MAGANTE</span></div>
            <div className="info-row"><span className="label">Year / Section</span><span className="value">2D - BSIT</span></div>
            <div className="info-row"><span className="label">Submission</span><span className="value">Major Course Output </span></div>
          </div>
        </div>
      </header>

      {/* Interactive Team Section */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet the Group Team</h2>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search members..." 
                className="member-search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="team-grid">
            {filteredMembers.map((member, index) => (
              <div 
                key={index} 
                className="member-card interactive"
                onClick={() => setSelectedMember(member)}
              >
                <div className="avatar-wrapper">
                  <div className="avatar" style={{ backgroundColor: member.color }}>
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h4>{member.name}</h4>
                <p className="role-text">{member.role}</p>
                <div className="view-profile">Click to view bio</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedMember(null)}>&times;</button>
            <div className="modal-avatar" style={{ backgroundColor: selectedMember.color }}>
              {selectedMember.name.charAt(0)}
            </div>
            <h3>{selectedMember.name}</h3>
            <p className="modal-role">{selectedMember.role}</p>
            <p className="modal-bio">{selectedMember.bio}</p>
            <div className="modal-socials">💼 LinkedIn • ✉️ Email • 🌐 Portfolio</div>
          </div>
        </div>
      )}

      {/* Activities Grid - redesigned to match reference image style */}
      <section id="activities" className="section bg-light">
        <div className="container activities-container">
          <div className="section-header">
            <h2>Activities</h2>
          </div>
          <div className="activities-list">
            {activities.map((act) => (
              <div key={act.id} className="activity-card-row">
                <div className="activity-content">
                  <h3 className="activity-title">Activity {act.id} - {act.title}</h3>
                  <p className="activity-description">{act.description}</p>
                  <div className="activity-meta">
                    <Link to={act.path} className="view-activity-link">View Activity →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 — Major Course Output </p>
      </footer>
    </div>
  );
};

export default MajorCourseOutput;