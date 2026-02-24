import React from "react";
import { useNavigate } from "react-router-dom";

const EPledgeOathHI: React.FC = () => {
  const navigate = useNavigate();

  const pledgeText = `प्रिय मित्रों,

युवा किसी भी राष्ट्र की ऊर्जा हैं और देश के विकास में उनका महत्वपूर्ण योगदान है।

आज हम सब नशा मुक्त भारत अभियान के अंतर्गत यह संकल्प लेते हैं कि हम स्वयं और हमारा समाज नशामुक्त रहेगा।

जय हिंद!`;

  return (
    <div style={{ background: "#f3f5f8", minHeight: "100vh" }}>
      <div style={{ height: 180, background: "linear-gradient(90deg,#f7b267,#f79d84)", borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }} />

      <div style={{ padding: "0 24px 40px" }}>
        <div style={{ maxWidth: 820, margin: "-60px auto 0" }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ background: "#d1fae5", color: "#065f46", padding: "6px 12px", borderRadius: 20, fontSize: 12 }}>500 Pledges Taken Today</div>
              <div>
                <button style={{ marginRight: 8, padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db" }} onClick={() => navigate('/epledge')}>English</button>
                <button style={{ padding: "6px 12px", borderRadius: 6, background: "#1d4ed8", color: '#fff', border: 'none' }} onClick={() => navigate('/epledge/oath-hi')}>हिंदी</button>
              </div>
            </div>

            <h2 style={{ marginTop: 6 }}>नशा मुक्त भारत अभियान संकल्प</h2>

            <div style={{ background: "#fff7ed", border: "1px solid #fdba74", padding: 18, borderRadius: 8, marginTop: 12 }}>
              <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{pledgeText}</pre>
            </div>

            <div style={{ textAlign: 'center', marginTop: 18 }}>
              <button style={{ background: '#1d4ed8', color: '#fff', padding: '10px 18px', borderRadius: 8, border: 'none' }} onClick={() => navigate('/epledge/form')}>I Take this Pledge →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPledgeOathHI;
