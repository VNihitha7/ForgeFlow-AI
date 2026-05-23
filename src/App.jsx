import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Pipeline from "./pages/Pipeline";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DashboardLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="leads"
          element={<Leads />}
        />

        <Route
          path="pipeline"
          element={<Pipeline />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />

        <Route
          path="team"
          element={<Team />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}

export default App;