const Lead =
  require("../models/Lead");

// GET ALL LEADS
const getLeads =
  async (req, res) => {
    try {
      const leads =
        await Lead.find();

      res.json(leads);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// ADD LEAD
const addLead =
  async (req, res) => {
    try {
      const lead =
        await Lead.create(
          req.body
        );

      res
        .status(201)
        .json(lead);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// UPDATE LEAD
const updateLead =
  async (req, res) => {
    try {
      const updatedLead =
        await Lead.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.json(
        updatedLead
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// DELETE LEAD
const deleteLead =
  async (req, res) => {
    try {
      await Lead.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Lead Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// UPDATE LEAD STATUS
const updateLeadStatus =
  async (req, res) => {
    try {
      const lead =
        await Lead.findByIdAndUpdate(
          req.params.id,
          {
            status:
              req.body.status,
          },
          { new: true }
        );

      res.status(200).json(
        lead
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// EXPORTS
module.exports = {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
  updateLeadStatus,
};