import React, { useState, CSSProperties } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const EPledge: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const location = useLocation();
  const navigate = useNavigate();

  const pledgeText =
    language === "en"
      ? `Dear Fri,

Youth is the energy of any nation and the power of youth has an important contribution in the development of society and country.

Today we unite under the Nasha Mukt Bharat Abhiyaan and take a pledge that not only the community, family, friends, but also ourselves will be drug free.

Let us all take a firm decision to make our country drug free.

Jai Hind!`
      : `प्रिय मित्रों,

युवा किसी भी राष्ट्र की ऊर्जा हैं और देश के विकास में उनका महत्वपूर्ण योगदान है।

आज हम सब नशा मुक्त भारत अभियान के अंतर्गत यह संकल्प लेते हैं कि हम स्वयं और हमारा समाज नशामुक्त रहेगा।

जय हिंद!`;

  return (
    <div style={layout}>
      {/* SIDEBAR */}
      <div style={sidebar}>
        <h2 style={{ marginBottom: "30px" }}>NMBA</h2>
        <NavItem label="Dashboard" to="/" currentPath={location.pathname} />
        <NavItem label="Activity Snapshot" to="/activity" currentPath={location.pathname} />
        <NavItem label="E-Pledge" to="/epledge" currentPath={location.pathname} />
        <NavItem label="Facilities" to="#" currentPath={location.pathname} />
        <NavItem label="Helpline" to="#" currentPath={location.pathname} />
      </div>

      {/* MAIN */}
      <div style={main}>
        <div style={topBar}>Government of India</div>

        <div style={headerBar}>
          <h2 style={{ margin: 0 }}>
            Ministry of Social Justice & Empowerment
          </h2>
        </div>

        {/* <div style={bannerStyle}>
          <img
            src={BannerImage}
            alt="banner"
          
          />
        </div> */}

        <div style={cardWrapper}>
          <div style={badgeStyle}>500 Pledges Taken Today</div>

          <div style={titleRow}>
            {/* <h2>Nasha Mukt Bharat Abhiyaan Pledge</h2> */}

            <div>
              <button
                onClick={() => setLanguage("en")}
                style={language === "en" ? activeLangBtn : langBtn}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                style={language === "hi" ? activeLangBtn : langBtn}
              >
                हिंदी
              </button>
            </div>
          </div>

          <div style={pledgeBox}>
            <pre style={pledgeTextStyle}>{pledgeText}</pre>
          </div>

          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <button
              style={primaryBtn}
              onClick={() => navigate("/epledge/form")}
            >
              I Take this Pledge →
            </button>
          </div>

          <p style={certificateText}>
            Taken the pledge before?{" "}
            <span style={{ color: "#1d4ed8", cursor: "pointer" }}>
              Download your Certificate directly.
            </span>
          </p>
        </div>

        <div style={footer}>
          © 2025 - UX4G | Terms & Conditions | Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default EPledge;

/* ---------------- NAV ITEM ---------------- */

const NavItem: React.FC<{
  label: string;
  to: string;
  currentPath: string;
}> = ({ label, to, currentPath }) => {
  const active =
    to === "/"
      ? currentPath === "/"
      : currentPath.startsWith(to);

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

const headerBar: CSSProperties = {
  background: "#fff",
  padding: "20px 40px",
  borderBottom: "1px solid #e5e7eb",
};



const cardWrapper: CSSProperties = {
  background: "#fff",
  margin: "0 40px 40px 40px",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
};

const titleRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const badgeStyle: CSSProperties = {
  background: "#d1fae5",
  color: "#065f46",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  display: "inline-block",
  marginBottom: "10px",
};

const pledgeBox: CSSProperties = {
  background: "#fff7ed",
  border: "1px solid #fdba74",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "15px",
};

const pledgeTextStyle: CSSProperties = {
  whiteSpace: "pre-wrap",
  fontFamily: "inherit",
};

const primaryBtn: CSSProperties = {
  background: "#1d4ed8",
  color: "#fff",
  padding: "12px 25px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
};

const langBtn: CSSProperties = {
  padding: "6px 12px",
  border: "1px solid #d1d5db",
  background: "#fff",
  cursor: "pointer",
};

const activeLangBtn: CSSProperties = {
  ...langBtn,
  background: "#1d4ed8",
  color: "#fff",
};

const certificateText: CSSProperties = {
  textAlign: "center",
  marginTop: "12px",
  fontSize: "13px",
};

const footer: CSSProperties = {
  background: "#123c6a",
  color: "#fff",
  padding: "15px",
  textAlign: "center",
};