import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EPledgeOtp: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div style={{ padding: "40px", background: "#f3f5f8", minHeight: "100vh" }}>
      <div style={cardStyle}>
        <div style={badgeStyle}>500 Pledges Taken Today</div>

        <h2 style={{ marginBottom: "30px" }}>
          Nasha Mukt Bharat Abhiyaan Pledge
        </h2>

        <div style={{ textAlign: "center" }}>
          <h4>Verify Mobile</h4>
          <p style={{ color: "#6b7280" }}>
            Enter the 6-digit OTP sent to <strong>9912341824</strong>
          </p>

          <div style={otpContainer}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                style={otpInput}
              />
            ))}
          </div>

          <p style={{ marginTop: "15px", color: "#6b7280" }}>
            Resend OTP in 0:45
          </p>
        </div>

        <div style={buttonRow}>
          <button style={backBtn} onClick={() => navigate(-1)}>
            ← Back
          </button>

          <button style={primaryBtn}>
            Verify & Submit →
          </button>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  maxWidth: "700px",
  margin: "0 auto",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
};

const badgeStyle = {
  background: "#d1fae5",
  color: "#065f46",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  display: "inline-block",
  marginBottom: "20px",
};

const otpContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
};

const otpInput = {
  width: "45px",
  height: "50px",
  textAlign: "center" as const,
  fontSize: "20px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

const buttonRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px",
};

const primaryBtn = {
  background: "#1d4ed8",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const backBtn = {
  background: "#e5e7eb",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default EPledgeOtp;