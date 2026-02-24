import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import ActivitySnapshot from "./components/ActivitySnapshot/ActivitySnapshot";
import EPledge from "./components/EPledge/EPledge";
import EPledgeForm from "./components/EPledge/EPledgeForm";
import EPledgeOtp from "./components/EPledge/EPledgeOtp";
import EPledgeOathEN from "./components/EPledge/EPledgeOathEN";
import EPledgeOathHI from "./components/EPledge/EPledgeOathHI";
import Facilities from "./components/Facilities/Facilities";
import Helpline from "./components/Helpline/Helpline";
import AppShell from "./components/Layout/AppShell";
import ActivityDetail from "./components/ActivitySnapshot/ActivityDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell><Dashboard /></AppShell>} />
      <Route path="/activity" element={<AppShell><ActivitySnapshot /></AppShell>} />
      <Route path="/activity/:id" element={<AppShell><ActivityDetail /></AppShell>} />
      <Route path="/facilities" element={<AppShell><Facilities /></AppShell>} />
      <Route path="/helpline" element={<AppShell><Helpline /></AppShell>} />
      <Route path="/epledge" element={<AppShell><EPledgeOathEN /></AppShell>} />
      <Route path="/epledge/oath-hi" element={<AppShell><EPledgeOathHI /></AppShell>} />
      <Route path="/epledge/form" element={<AppShell><EPledgeForm /></AppShell>} />
      <Route path="/epledge/otp" element={<AppShell><EPledgeOtp /></AppShell>} />
    </Routes>
  );
}

export default App;