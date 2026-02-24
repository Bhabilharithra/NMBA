import React from "react";
import { useNavigate } from "react-router-dom";
import "./EPledgeOathEN.css";
import BannerImage from "../../assets/banner_image.svg";

const EPledgeOathEN: React.FC = () => {
  const navigate = useNavigate();

  const pledgeText = `Dear friends,\n\nYouth is the energy of any nation and the power of youth has an important contribution in the development of society and country. Therefore, it is very important that maximum number of youth join the drug free India campaign. Accepting this challenge of the country, today we unite under the Nasha Mukt Bharat Abhiyaan and take a pledge that not only the community, family, friends, but also ourselves will be drug free because change should start with ourselves. So let us all together take a firm decision to make our district/state…..(name) drug-free. I pledge that I will do everything possible to the best of my ability to make my country drug-free.\n\nJai Hind!`;

  return (
    <div className="epledge-page">
      <div className="epledge-banner" />

      <div className="epledge-container">
        <img src={BannerImage} alt="banner" className="epledge-banner-image" />
        <div className="pledge-card">
          <div className="pledge-head">
            <div className="pledge-badge">500 Pledges Taken Today</div>
            <div style={{ flex: 1 }}>
              <h3 className="pledge-title">Nasha Mukt Bharat Abhiyaan Pledge</h3>
            </div>
            <div className="lang-group">
              <button className="lang-btn" onClick={() => navigate('/epledge')}>English</button>
              <button className="lang-btn primary" onClick={() => navigate('/epledge/oath-hi')}>हिंदी</button>
            </div>
          </div>

          <div className="pledge-body">
            <div className="pledge-text-box">
              <div style={{ whiteSpace: 'pre-wrap' }}>{pledgeText}</div>
            </div>

            <div className="pledge-actions">
              <button className="pledge-cta" onClick={() => navigate('/epledge/oath-hi')}>I Take this Pledge →</button>
              <div className="pledge-footer">
                <div>Taken the pledge before?</div>
                <div className="pledge-download" onClick={() => alert('Download certificate')}>Download your Certificate directly.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPledgeOathEN;
