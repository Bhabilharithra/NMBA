import React from "react";
import "./Facilities.css";

type Facility = {
  id: number;
  name: string;
  address: string;
  distance: string;
  tags?: string[];
};

const MOCK_FACILITIES: Facility[] = [
  {
    id: 1,
    name: "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
    address: "Hosur Road, Bangalore - 560029",
    distance: "1.5 KM",
    tags: ["Rehabilitation", "Counselling"],
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences (AIIMS)",
    address: "Ansari Nagar, New Delhi - 110029",
    distance: "1.9 KM",
    tags: ["Treatment", "Rehab"],
  },
  {
    id: 3,
    name: "Muktangan Rehabilitation Centre",
    address: "Thane West, Mumbai - 400601",
    distance: "3.2 KM",
    tags: ["Rehab", "Outreach"],
  },
];

const Facilities: React.FC = () => {
  return (
    <div className="facilities-page">
      <header className="fac-header">
        <div className="fac-left">
          <h3>Help Centres & Facilities</h3>
          <p className="fac-sub">Find de-addiction centres, counselling services, and support facilities across India</p>
        </div>
        <div className="fac-actions">
          <input className="fac-search" placeholder="Search by facility name, city, state, PIN or address" />
          <select className="fac-filter">
            <option>All Facility Types</option>
            <option>Rehabilitation</option>
            <option>Counselling</option>
          </select>
          <button className="fac-btn primary">Find More</button>
        </div>
      </header>

      <div className="fac-layout">
        <div className="map-col">
          <div className="map-frame">
            {/* placeholder map - replace with real map component when available */}
            <div className="map-placeholder">Map preview here</div>
          </div>
        </div>

        <aside className="list-col">
          <div className="list-panel">
            <div className="list-header">Facilities ({MOCK_FACILITIES.length})</div>

            <div className="facility-list">
              {MOCK_FACILITIES.map((f) => (
                <div key={f.id} className="facility-card">
                  <div className="facility-card-left">
                    <div className="facility-title">{f.name}</div>
                    <div className="facility-address">{f.address}</div>
                    <div className="facility-tags">
                      {f.tags?.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="facility-card-right">
                    <div className="facility-distance">{f.distance}</div>
                    <div className="facility-actions">
                      <button className="btn outline">Get Directions</button>
                      <button className="btn primary">Call Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Facilities;
