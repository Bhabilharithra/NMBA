import React from "react";
import "./Helpline.css";

const mockStateRows = Array.from({ length: 10 }).map((_, i) => ({
  sno: i + 1,
  state: [
    "Andaman and Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
  ][i],
  answered: Math.floor(Math.random() * 5000),
  completed: Math.floor(Math.random() * 5000),
}));

const Helpline: React.FC = () => {
  return (
    <div className="helpline-page">
      <header className="hel-header">
        <h3>Helpline</h3>
      </header>

      <div className="hel-main">
        <aside className="hel-left">
          <div className="hel-cta">
            <div className="cta-text">
              <strong>Confidential Support is Available</strong>
              <p>If you or someone you know is struggling with substance use, trained counsellors are available for confidential support, 24x7 Toll Free.</p>
            </div>
            <div className="cta-number">14446</div>
          </div>

          <div className="stats-cards">
            <div className="small-card">
              <div className="card-title">Total Calls Received</div>
              <div className="card-value">13,189</div>
              <div className="card-sub">Till Date 4,30,890</div>
            </div>
            <div className="small-card">
              <div className="card-title">Total Calls Completed</div>
              <div className="card-value">13,174</div>
              <div className="card-sub">Till Date 4,19,779</div>
            </div>
          </div>

          <div className="charts">
            <div className="chart-placeholder">Line chart (calls)</div>
            <div className="chart-placeholder">Area chart (calls)</div>
          </div>
        </aside>

        <section className="hel-right">
          <div className="table-card">
            <div className="table-actions">
              <div>All India States</div>
              <div className="table-controls">
                <button className="ctrl">Copy</button>
                <button className="ctrl">Excel</button>
                <button className="ctrl">PDF</button>
                <button className="ctrl">Print</button>
              </div>
            </div>

            <table className="states-table">
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>State</th>
                  <th>Answered</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {mockStateRows.map((r) => (
                  <tr key={r.sno}>
                    <td>{r.sno}</td>
                    <td>{r.state}</td>
                    <td>{r.answered.toLocaleString()}</td>
                    <td>{r.completed.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="chart-card">
            <div className="chart-card-head">Call Category Stats</div>
            <div className="chart-placeholder big">Stacked bar chart</div>
          </div>

          <div className="ctabottom">
            <div className="ctabox">
              <h4>Combat Drug Crime: Report and Seek Help</h4>
              <p>The NCIS NMBA Portal is your secure platform to report drug-related issues and access crucial resources.</p>
              <div className="cta-actions">
                <button className="btn primary">Proceed to NCIS NMBA Portal</button>
                <button className="btn outline">Call NCB Helpline: 1033</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Helpline;
