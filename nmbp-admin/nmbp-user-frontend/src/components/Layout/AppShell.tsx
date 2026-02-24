import React from "react";
import { NavLink } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <header className="gov-strip">
        <div className="gov-left">
          <img src="/logo192.png" alt="Gov logo" className="gov-logo" />
          <div className="gov-title">Ministry of Social Justice & Empowerment</div>
        </div>
        <div className="gov-right">
          <div className="language">English</div>
          <div className="profile">SM</div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-top">
            <h2 className="logo">NMBA</h2>
          </div>
          <nav className="nav-list">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Dashboard
            </NavLink>
            <NavLink to="/activity" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Activity Snapshot
            </NavLink>
            <NavLink to="/epledge" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              E-Pledge
            </NavLink>
            <NavLink to="/facilities" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Facilities
            </NavLink>
            <NavLink to="/helpline" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Helpline
            </NavLink>
          </nav>
        </aside>

        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;
