import {
  useEffect,
  useState,
} from "react";

import {
  FaPlus,
  FaSearch,
} from "react-icons/fa";

import toast from "react-hot-toast";

import {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
} from "../api/leadApi";

function Leads() {
  const [showModal, setShowModal] =
    useState(false);

  const [editingLead, setEditingLead] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [leads, setLeads] =
    useState([]);

  const [formData, setFormData] =
    useState({
      company: "",
      contact: "",
      email: "",
      phone: "",
      status: "New Lead",
      priority: "Medium",
    });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads =
    async () => {
      try {
        const res =
          await getLeads();

        setLeads(
          res.data
        );
      } catch (error) {
        toast.error(
          "Failed to fetch leads"
        );
      }
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ADD OR UPDATE LEAD
  const handleSaveLead =
    async () => {
      if (
        !formData.company ||
        !formData.contact
      ) {
        toast.error(
          "Please fill required fields"
        );
        return;
      }

      try {
        if (editingLead) {
          await updateLead(
            editingLead._id,
            formData
          );

          toast.success(
            "Lead Updated 🚀"
          );
        } else {
          await addLead(
            formData
          );

          toast.success(
            "Lead Added 🚀"
          );
        }

        fetchLeads();

        setShowModal(false);

        setEditingLead(null);

        setFormData({
          company: "",
          contact: "",
          email: "",
          phone: "",
          status: "New Lead",
          priority: "Medium",
        });
      } catch (error) {
        toast.error(
          "Something went wrong"
        );
      }
    };

  // EDIT
  const handleEdit = (lead) => {
    setEditingLead(lead);

    setFormData({
      company:
        lead.company,
      contact:
        lead.contact,
      email:
        lead.email || "",
      phone:
        lead.phone || "",
      status:
        lead.status,
      priority:
        lead.priority,
    });

    setShowModal(true);
  };

  // DELETE
  const handleDelete =
    async (id) => {
      try {
        await deleteLead(id);

        toast.success(
          "Lead Deleted"
        );

        fetchLeads();
      } catch (error) {
        toast.error(
          "Delete Failed"
        );
      }
    };

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Leads Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all manufacturing leads
          </p>
        </div>

        <button
          onClick={() => {
            setEditingLead(
              null
            );

            setFormData({
              company: "",
              contact: "",
              email: "",
              phone: "",
              status:
                "New Lead",
              priority:
                "Medium",
            });

            setShowModal(
              true
            );
          }}
          className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-cyan-500/20"
        >
          <FaPlus />
          Add Lead
        </button>
      </div>

      {/* SEARCH */}
      <div className="bg-[#111827] border border-slate-800 rounded-[30px] p-5 flex items-center gap-4 mb-8">

        <FaSearch className="text-slate-500" />

        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="bg-transparent outline-none w-full text-white placeholder:text-slate-500"
        />
      </div>

      {/* TABLE */}
      <div className="bg-[#111827] border border-slate-800 rounded-[35px] overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-5 px-8 py-5 bg-slate-900 text-slate-400 font-semibold">
          <p>Company</p>
          <p>Contact</p>
          <p>Status</p>
          <p>Priority</p>
          <p>Action</p>
        </div>

        {/* ROWS */}
        {leads
          .filter((lead) =>
            lead.company
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              )
          )
          .map((lead) => (
            <div
              key={lead._id}
              className="grid grid-cols-5 px-8 py-6 border-t border-slate-800 hover:bg-slate-900/50 transition-all"
            >
              <p className="font-medium">
                {lead.company}
              </p>

              <p className="text-slate-300">
                {lead.contact}
              </p>

              <div>
                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                  {lead.status}
                </span>
              </div>

              <div>
                <span
                  className={`px-4 py-2 rounded-full text-sm ${
                    lead.priority ===
                    "High"
                      ? "bg-red-500/20 text-red-400"
                      : lead.priority ===
                        "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {lead.priority}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    handleEdit(
                      lead
                    )
                  }
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      lead._id
                    )
                  }
                  className="text-red-400 hover:text-red-300 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-[#111827] border border-slate-800 rounded-[35px] w-[700px] p-8 shadow-2xl">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                {editingLead
                  ? "Edit Lead"
                  : "Add New Lead"}
              </h2>

              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-2 gap-5">

              <input
                name="company"
                value={
                  formData.company
                }
                onChange={
                  handleChange
                }
                type="text"
                placeholder="Company Name"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                name="contact"
                value={
                  formData.contact
                }
                onChange={
                  handleChange
                }
                type="text"
                placeholder="Client Name"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                type="email"
                placeholder="Email"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <input
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                type="text"
                placeholder="Phone Number"
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
              />

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              >
                <option>
                  New Lead
                </option>
                <option>
                  Quotation Sent
                </option>
                <option>
                  Negotiation
                </option>
                <option>
                  Won
                </option>
              </select>

              <select
                name="priority"
                value={
                  formData.priority
                }
                onChange={
                  handleChange
                }
                className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              >
                <option>
                  High
                </option>
                <option>
                  Medium
                </option>
                <option>
                  Low
                </option>
              </select>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
                className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 transition"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleSaveLead
                }
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 font-semibold transition"
              >
                {editingLead
                  ? "Update Lead"
                  : "Save Lead"}
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leads;