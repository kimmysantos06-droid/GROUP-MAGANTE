import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Activity1.css';

const Activity1 = () => { 
    
    const topRef = useRef(null);
    const aboutRef = useRef(null);
    const membersRef = useRef(null);

  
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const members = [
        { name: "Casey, Magante A.", role: "Leader", description: "This is Casey" },
        { name: "Magos, Cyra Z.", role: "Designer", description: "This is Cyra" },
        { name: "Santos, Kimberly A.", role: "Developer", description: "This is Kimberly" },
        { name: "Calagos, Jeheal S.", role: "Researcher", description: "This is Jeheal" },
        { name: "Carig, Maria Soe L.", role: "Tester", description: "This is Maria" },
        { name: "Nabor, Shiela", role: "Documenter", description: "This is Shiela" },
    ];

    return (
        <div ref={topRef} className="activity-container">
        
            <nav className="navbar">
                <h2>GROUP-MAGANTE</h2>
                <ul className="nav-links">
           
                    <li onClick={() => scrollToSection(topRef)}>Home</li>
                    <li onClick={() => scrollToSection(aboutRef)}>About</li>
                    <li onClick={() => scrollToSection(membersRef)}>Members</li>
                </ul>
            </nav>

            <section className="welcome-section">
                <h1>Welcome to Our Group</h1>
                <p>Passionate students, creating the future with ReactJS.</p>
                <button className="btn-view" onClick={() => scrollToSection(membersRef)}>
                    View Members
                </button>
            </section>


            <section ref={aboutRef} className="about-section">
                <h2 className="section-title">About Our Group</h2>
                <p className="about-text">
                    Our group focuses on teamwork, creativity, and innovation. We work together on projects and explore new technologies like ReactJS to build high-quality web applications.
                </p>
            </section>


            <section ref={membersRef} className="members-section">
                <h2 className="section-title">Group Members</h2>
                <div className="members-grid">
                    {members.map((member, index) => (
                        <div key={index} className="member-card">
                            <p className="member-name">{member.name}</p>
                            <span className="member-role">{member.role}</span>
                            <p className="member-desc">{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer-area">
                <Link to="/">← Back to MCO</Link>
            </footer>
        </div>
    );
};

export default Activity1;