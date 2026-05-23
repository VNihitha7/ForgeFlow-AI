const Lead =
  require("../models/Lead");

const getAnalytics =
  async (req, res) => {
    try {
      const leads =
        await Lead.find();

      // STATUS COUNTS
      const won =
        leads.filter(
          (lead) =>
            lead.status ===
            "Won"
        ).length;

      const negotiation =
        leads.filter(
          (lead) =>
            lead.status ===
            "Negotiation"
        ).length;

      const quotation =
        leads.filter(
          (lead) =>
            lead.status ===
            "Quotation Sent"
        ).length;

      const newLead =
        leads.filter(
          (lead) =>
            lead.status ===
            "New Lead"
        ).length;

      // PRIORITY COUNTS
      const high =
        leads.filter(
          (lead) =>
            lead.priority ===
            "High"
        ).length;

      const medium =
        leads.filter(
          (lead) =>
            lead.priority ===
            "Medium"
        ).length;

      const low =
        leads.filter(
          (lead) =>
            lead.priority ===
            "Low"
        ).length;

      res.json({
        leadStatus: [
          {
            name: "Won",
            value: won,
          },
          {
            name:
              "Negotiation",
            value:
              negotiation,
          },
          {
            name:
              "Quotation",
            value:
              quotation,
          },
          {
            name:
              "New Lead",
            value:
              newLead,
          },
        ],

        priorityData: [
          {
            name: "High",
            value: high,
          },
          {
            name:
              "Medium",
            value: medium,
          },
          {
            name: "Low",
            value: low,
          },
        ],

        totalLeads:
          leads.length,

        conversionRate:
          leads.length > 0
            ? Math.round(
                (won /
                  leads.length) *
                  100
              )
            : 0,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getAnalytics,
};