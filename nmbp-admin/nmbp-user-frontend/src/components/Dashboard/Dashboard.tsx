import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handlePledgeClick = () => {
    navigate('/epledge');
  };
  return (
    <div className="dashboard-content">
      <div className="hero">
        <div className="hero-text">
          <h1>Nasha Mukt Bharat Abhiyaan</h1>
          <p>Join 98 Lakh+ citizens committed to a drug-free society.</p>
        </div>
        <div className="hero-cta">
          <button className="primary-btn" onClick={handlePledgeClick}>Take the Pledge</button>
        </div>
      </div>

      <div className="page-header">
        <h2 className="page-title">Dashboard</h2>
        <div className="page-controls">
          <select className="select">All States</select>
          <select className="select">All Districts</select>
        </div>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Pledges</div>
          <div className="stat-value">22,75,906</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">People Reached</div>
          <div className="stat-value">25,89,78,572</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Youth Reached</div>
          <div className="stat-value">9,33,63,189</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Women Reached</div>
          <div className="stat-value">6,36,83,454</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Activities Conducted</div>
          <div className="stat-value">8,16,100</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Villages Covered</div>
          <div className="stat-value">3,79,707</div>
        </div>
      </section>

      <h3 className="section-title">NUMBER OF PROGRAMMES</h3>

      <section className="program-grid">
        <article className="program-card">
          <div className="program-head">
            <h4>Education & Youth</h4>
          </div>
          <div className="program-body">
            <div className="prog-item">
              <div className="prog-label">School/College/University Programme</div>
              <div className="prog-value">20,503</div>
            </div>
            <div className="prog-item">
              <div className="prog-label">Youth Reached Out</div>
              <div className="prog-value">77,687</div>
            </div>
          </div>
        </article>

        <article className="program-card">
          <div className="program-head">
            <h4>Community Outreach</h4>
          </div>
          <div className="program-body">
            <div className="prog-item">
              <div className="prog-label">Awareness Rally/March/Run</div>
              <div className="prog-value">9,019</div>
            </div>
            <div className="prog-item">
              <div className="prog-label">Community Programmes</div>
              <div className="prog-value">58,851</div>
            </div>
          </div>
        </article>

        <article className="program-card">
          <div className="program-head">
            <h4>Governance & Local Bodies</h4>
          </div>
          <div className="program-body">
            <div className="prog-item">
              <div className="prog-label">District Level Committee Meeting</div>
              <div className="prog-value">898</div>
            </div>
            <div className="prog-item">
              <div className="prog-label">Villages Covered</div>
              <div className="prog-value">39,296</div>
            </div>
          </div>
        </article>

        <article className="program-card">
          <div className="program-head">
            <h4>Targeted Interventions</h4>
          </div>
          <div className="program-body">
            <div className="prog-item">
              <div className="prog-label">Women Group/Mahila Programme</div>
              <div className="prog-value">9,515</div>
            </div>
            <div className="prog-item">
              <div className="prog-label">Hotspot Identification</div>
              <div className="prog-value">2,974</div>
            </div>
          </div>
        </article>
      </section>

      <footer className="footer">© 2025 Government of India</footer>
    </div>
  );
};

export default Dashboard;