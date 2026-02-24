import React from "react";
import { Link } from "react-router-dom";
import "./ActivitySnapshot.css";

const activities = [
  {
    id: 1,
    title: "Alandi Student Awareness Drive",
    location: "Pune, Maharashtra",
    date: "25 Jan 2026",
    image: "/assets/activity1.jpg",
    excerpt: "Awareness rally with students and pledge activity.",
  },
  {
    id: 2,
    title: "Government School Pledge",
    location: "Indore, Madhya Pradesh",
    date: "24 Jan 2026",
    image: "/assets/activity2.jpg",
    excerpt: "School level pledge and awareness drive.",
  },
  {
    id: 3,
    title: "Village Meeting",
    location: "Sikar, Rajasthan",
    date: "24 Jan 2026",
    image: "/assets/activity3.jpg",
    excerpt: "Village level meeting and counselling.",
  },
  {
    id: 4,
    title: "School Programme",
    location: "Nagpur, Maharashtra",
    date: "23 Jan 2026",
    image: "/assets/activity4.jpg",
    excerpt: "School awareness and pledge.",
  },
  {
    id: 5,
    title: "Rehabilitation Assistance",
    location: "Aurangabad, Maharashtra",
    date: "22 Jan 2026",
    image: "/assets/activity5.jpg",
    excerpt: "Rehab centre visits and counselling.",
  },
  {
    id: 6,
    title: "Empowerment Drive",
    location: "Ratlam, Madhya Pradesh",
    date: "21 Jan 2026",
    image: "/assets/activity6.jpg",
    excerpt: "Community empowerment sessions.",
  },
];

const ActivitySnapShot: React.FC = () => {
  return (
    <div className="activity-page">
      <div className="activity-header">
        <h2>Activity Snapshots</h2>
        <p className="muted">NMBA activities conducted across States and Districts.</p>
      </div>

      <div className="activity-grid">
        {activities.map((a) => (
          <Link to={`/activity/${a.id}`} key={a.id} className="activity-card">
            <div className="activity-image" style={{ backgroundImage: `url(${a.image})` }} />
            <div className="activity-body">
              <div className="badge">Awareness Rally</div>
              <h4 className="activity-title">{a.title}</h4>
              <div className="activity-meta">{a.location} • {a.date}</div>
              <p className="activity-excerpt">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="activity-bottom">
        <div className="facility-cta">
          <div>
            <h3>Find De-addiction Facilities Near You</h3>
            <p>Locate verified Integrated Rehabilitation Centres (IRCA) and Addiction Treatment Facilities (ATF) in your district.</p>
          </div>
          <button className="btn primary">View Facility Map →</button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySnapShot;

/* ---------------- NAV ITEM ---------------- */

const NavItem: React.FC<{
  label: string;
  to: string;
  current: string;
}> = ({ label, to, current }) => {
  const active =
    to === "/" ? current === "/" : current.startsWith(to);

  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "8px",
          background: active ? "#e8f0ff" : "transparent",
          fontWeight: active ? 600 : 500,
        }}
      >
        {label}
      </div>
    </Link>
  );
};

/* ---------------- STYLES ---------------- */

const layout: CSSProperties = {
  display: "flex",
  minHeight: "100vh",
  background: "#f3f5f8",
};

const sidebar: CSSProperties = {
  width: "250px",
  background: "#fff",
  padding: "25px",
  borderRight: "1px solid #e5e7eb",
};

const main: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const topBar: CSSProperties = {
  background: "#123c6a",
  color: "#fff",
  padding: "10px 30px",
};

const header: CSSProperties = {
  background: "#fff",
  padding: "20px 40px",
  borderBottom: "1px solid #e5e7eb",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
  padding: "10px",
};

const cardImage: CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
};

const pagination: CSSProperties = {
  marginTop: "30px",
  textAlign: "center",
};

const pageBtn: CSSProperties = {
  margin: "0 5px",
  padding: "8px 12px",
  border: "1px solid #d1d5db",
  background: "#fff",
  cursor: "pointer",
};

const facilitySection: CSSProperties = {
  marginTop: "40px",
  background: "#e5f0ff",
  padding: "30px",
  borderRadius: "16px",
};

const facilityBtn: CSSProperties = {
  marginTop: "15px",
  background: "#1d4ed8",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const footer: CSSProperties = {
  background: "#123c6a",
  color: "#fff",
  padding: "15px",
  textAlign: "center",
};