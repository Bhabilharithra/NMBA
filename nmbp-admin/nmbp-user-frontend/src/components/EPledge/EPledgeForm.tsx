import React from "react";
import { useNavigate } from "react-router-dom";

const EPledgeform: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f3f5f8", minHeight: "100vh" }}>
      <div style={bannerStyle} />

      <div style={{ padding: "0 24px 40px" }}>
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={badgeStyle}>500 Pledges Taken Today</div>
              <h2 style={{ margin: "8px 0 0 0" }}>Nasha Mukt Bharat Abhiyaan Pledge</h2>
            </div>
          </div>

          <h4 style={{ marginTop: 12, marginBottom: 20 }}>Generate Certificate</h4>

          <div style={gridStyle}>
            <Input label="Full Name *" placeholder="Name as per records" />
            <Input label="Age *" placeholder="Years" />
            <Input label="Gender *" placeholder="Select Gender" />
            <Input label="Pincode *" placeholder="Eg: 110001" />
            <Input label="District *" placeholder="Select District" />
            <Input label="State *" placeholder="Select State" />
            <Input label="Mobile Number *" placeholder="+91 10 digit mobile number" />
            <Input label="Email Address" placeholder="name@example.com" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <button
              type="button"
              style={backBtn}
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>

            <button
              type="button"
              style={primaryBtn}
              onClick={() => navigate("/epledge/otp")}
            >
              Send OTP & Verify →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label style={{ fontSize: "14px", marginBottom: "6px" }}>
      {label}
    </label>
    <input
      placeholder={placeholder}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #d1d5db",
      }}
    />
  </div>
);

const cardStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  maxWidth: "900px",
  margin: "-80px auto 0",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};

const primaryBtn = {
  background: "#1d4ed8",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const bannerStyle = {
  height: 220,
  backgroundImage:
    "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=60')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
};

const badgeStyle = {
  background: "#d1fae5",
  color: "#065f46",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  display: "inline-block",
};

const backBtn = {
  background: "#e5e7eb",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default EPledgeform;