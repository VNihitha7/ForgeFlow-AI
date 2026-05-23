import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Settings() {
  const [darkMode, setDarkMode] =
    useState(true);

  const [settings, setSettings] =
    useState({
      company:
        "ForgeFlow AI",
      email:
        "admin@forgeflow.ai",
      phone:
        "+91 9876543210",
      notifications: true,
    });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      document.body.style.background =
        "#0B1120";

      document.body.style.color =
        "white";
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      document.body.style.background =
        "#F8FAFC";

      document.body.style.color =
        "black";
    }
  }, [darkMode]);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleToggle = (
    field
  ) => {
    setSettings({
      ...settings,
      [field]:
        !settings[field],
    });
  };

  const handleSave = () => {
    toast.success(
      "Settings Saved 🚀"
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your CRM preferences and company details
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="col-span-2 space-y-6">

          {/* Company Settings */}
          <div className="bg-[#111827] border border-slate-800 rounded-[35px] p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Company Information
            </h2>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="text-slate-400 text-sm">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={
                    settings.company
                  }
                  onChange={
                    handleChange
                  }
                  className="mt-2 w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm">
                  Business Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    settings.email
                  }
                  onChange={
                    handleChange
                  }
                  className="mt-2 w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={
                    settings.phone
                  }
                  onChange={
                    handleChange
                  }
                  className="mt-2 w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
                />
              </div>

            </div>

          </div>

          {/* Preferences */}
          <div className="bg-[#111827] border border-slate-800 rounded-[35px] p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Preferences
            </h2>

            <div className="space-y-6">

              {/* Notifications */}
              <div className="flex justify-between items-center">

                <div>
                  <h3 className="font-semibold text-lg">
                    Email Notifications
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Receive updates for new leads and deals
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleToggle(
                      "notifications"
                    )
                  }
                  className={`w-16 h-9 rounded-full transition-all ${
                    settings.notifications
                      ? "bg-cyan-500"
                      : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full mt-1 transition-all ${
                      settings.notifications
                        ? "ml-8"
                        : "ml-1"
                    }`}
                  ></div>
                </button>

              </div>

              {/* THEME TOGGLE */}
              <div className="flex justify-between items-center">

                <div>
                  <h3 className="font-semibold text-lg">
                    Dark Mode
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Toggle application theme
                  </p>
                </div>

                <button
                  onClick={() =>
                    setDarkMode(
                      !darkMode
                    )
                  }
                  className={`w-16 h-9 rounded-full transition-all ${
                    darkMode
                      ? "bg-cyan-500"
                      : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full mt-1 transition-all ${
                      darkMode
                        ? "ml-8"
                        : "ml-1"
                    }`}
                  ></div>
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          <div className="bg-[#111827] border border-slate-800 rounded-[35px] p-8 text-center">

            <div className="w-24 h-24 rounded-full bg-cyan-500/20 mx-auto flex items-center justify-center text-4xl font-bold text-cyan-400">
              N
            </div>

            <h2 className="text-2xl font-semibold mt-5">
              Nihitha Velpuru
            </h2>

            <p className="text-slate-400 mt-1">
              CRM Administrator
            </p>

            <div className="mt-6 bg-slate-900 rounded-2xl p-4">

              <p className="text-slate-400 text-sm">
                Current Plan
              </p>

              <h3 className="text-xl font-bold mt-2">
                Enterprise 🚀
              </h3>

            </div>

          </div>

          <button
            onClick={handleSave}
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-5 rounded-3xl font-semibold text-lg transition-all shadow-lg shadow-cyan-500/20"
          >
            Save Settings
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;