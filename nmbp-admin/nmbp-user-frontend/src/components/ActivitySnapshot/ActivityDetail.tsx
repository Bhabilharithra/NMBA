import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ActivitySnapshot.css";

const mockDetail = {
  title: "Mass Awareness Rally at Dnyanraj Education Society",
  tag: "Awareness Rally",
  location: "Alandi, Pune, Maharashtra",
  date: "25 Jan 2026",
  image: "/assets/activity_detail.jpg",
  about:
    "A mass awareness rally was organised by Dnyanraj Education Society in Alandi, Pune to mark Republic Day. The primary objective was to sensitise the youth about the detrimental effects of substance abuse.",
  participants: 250,
  venueType: "Public / Educational Inst.",
  organisedBy: "Dnyanraj Education Society",
  submittedOn: "26 Jan 2026",
};

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="activity-detail">
      <div className="detail-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/activity">Activity Snapshot</Link> / <span>{mockDetail.title}</span>
      </div>

      <div className="detail-header">
        <div className="detail-left">
          <div className="detail-tag">{mockDetail.tag}</div>
          <h2 className="detail-title">{mockDetail.title}</h2>
          <div className="detail-meta">{mockDetail.location} • {mockDetail.date}</div>
          <img className="detail-image" src={mockDetail.image} alt="activity" />
        </div>

        <aside className="detail-right">
          <div className="map-placeholder">Map preview here</div>
        </aside>
      </div>

      <div className="detail-body">
        <div className="about">
          <h4>About the Activity</h4>
          <p>{mockDetail.about}</p>
        </div>

        <div className="detail-stats">
          <table>
            <tbody>
              <tr><td>Participants Count</td><td>{mockDetail.participants}</td></tr>
              <tr><td>Venue Type</td><td>{mockDetail.venueType}</td></tr>
              <tr><td>Organised By</td><td>{mockDetail.organisedBy}</td></tr>
              <tr><td>Submitted On</td><td>{mockDetail.submittedOn}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
