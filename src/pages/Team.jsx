import { useState } from "react";
import {
  FaPlus,
  FaUserTie,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import toast from "react-hot-toast";

function Team() {
  const [showModal, setShowModal] =
    useState(false);

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Sales Manager",
      email: "rahul@forgeflow.ai",
      phone: "+91 9876543210",
      performance: 92,
      deals: 24,
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Business Development",
      email: "priya@forgeflow.ai",
      phone: "+91 9876541111",
      performance: 78,
      deals: 16,
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "Sales Executive",
      email: "arjun@forgeflow.ai",
      phone: "+91 9876549999",
      performance: 85,
      deals: 20,
    },
  ]);

  const [formData, setFormData] =
    useState({
      name: "",
      role: "",
      email: "",
      phone: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleAddMember = () => {
    if (
      !formData.name ||
      !formData.role
    ) {
      toast.error(
        "Please fill required fields"
      );
      return;
    }

    const newMember = {
      id: Date.now(),
      ...formData,
      performance: Math.floor(
        Math.random() * 30 + 70
      ),
      deals: Math.floor(
        Math.random() * 20 + 5
      ),
    };

    setTeam([
      newMember,
      ...team,
    ]);

    toast.success(
      "Team Member Added 🚀"
    );

    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
    });

    setShowModal(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-5xl font-bold">
            Team Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your sales team and performance
          </p>
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-cyan-500/20"
        >
          <FaPlus />
          Add Member
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-[#111827] border border-slate-800 rounded-[30px] p-6">
          <p className="text-slate-400 text-sm">
            Total Employees
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {team.length}
          </h2>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-[30px] p-6">
          <p className="text-slate-400 text-sm">
            Active Deals
          </p>

          <h2 className="text-4xl font-bold mt-3">
            48
          </h2>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-[30px] p-6">
          <p className="text-slate-400 text-sm">
            Monthly Revenue
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ₹8.2L
          </h2>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-[30px] p-6">
          <p className="text-slate-400 text-sm">
            Avg Performance
          </p>

          <h2 className="text-4xl font-bold mt-3">
            85%
          </h2>
        </div>

      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-3 gap-6">

        {team.map((member) => (
          <div
            key={member.id}
            className="bg-[#111827] border border-slate-800 rounded-[35px] p-6 hover:border-cyan-500 transition-all"
          >

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaUserTie />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  {member.name}
                </h2>

                <p className="text-slate-400">
                  {member.role}
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">
                <FaEnvelope className="text-cyan-400" />

                {member.email}
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <FaPhone className="text-cyan-400" />

                {member.phone}
              </div>

            </div>

            {/* Performance */}
            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <p className="text-slate-400">
                  Performance
                </p>

                <p className="font-semibold">
                  {member.performance}%
                </p>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">

                <div
                  className="bg-cyan-500 h-3 rounded-full"
                  style={{
                    width: `${member.performance}%`,
                  }}
                ></div>

              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-8">

              <div>
                <p className="text-slate-400 text-sm">
                  Deals Closed
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  {member.deals}
                </h3>
              </div>

              <button
                onClick={() => {
                  setTeam(
                    team.filter(
                      (item) =>
                        item.id !==
                        member.id
                    )
                  );

                  toast.success(
                    "Member Removed"
                  );
                }}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-5 py-3 rounded-2xl transition-all"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-[#111827] border border-slate-800 rounded-[35px] w-[650px] p-8">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Add Team Member
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={
                  handleChange
                }
                placeholder="Full Name"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={
                  handleChange
                }
                placeholder="Role"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={
                  handleChange
                }
                placeholder="Email"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={
                  handleChange
                }
                placeholder="Phone Number"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 transition"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleAddMember
                }
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 font-semibold transition"
              >
                Add Member
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Team;