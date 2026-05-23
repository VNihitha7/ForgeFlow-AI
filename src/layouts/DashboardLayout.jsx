import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaCog,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  MdDashboard,
  MdAnalytics,
} from "react-icons/md";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#111827] border-r border-slate-800 px-6 py-8 flex flex-col">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">
            ForgeFlow AI
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Manufacturing CRM
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-col gap-3">

          {/* Dashboard */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <MdDashboard size={22} />
            Dashboard
          </NavLink>

          {/* Leads */}
          <NavLink
            to="/leads"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <FaUsers size={20} />
            Leads
          </NavLink>

          {/* Pipeline */}
          <NavLink
            to="/pipeline"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <FaProjectDiagram size={20} />
            Pipeline
          </NavLink>

          {/* Analytics */}
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <MdAnalytics size={22} />
            Analytics
          </NavLink>

          {/* Team */}
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <FaChartPie size={20} />
            Team
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <FaCog size={20} />
            Settings
          </NavLink>

        </nav>

        {/* Bottom Upgrade Card */}
        <div className="mt-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-5">
          <h3 className="font-semibold text-lg">
            Upgrade Team Plan 🚀
          </h3>

          <p className="text-sm text-cyan-100 mt-2">
            Unlock AI insights & advanced reports.
          </p>

          <button className="mt-4 bg-white text-black px-4 py-2 rounded-xl font-medium hover:opacity-90">
            Upgrade
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;