const Lead =
  require("../models/Lead");

const getDashboardStats =
  async (req, res) => {
    try {
      // TOTAL LEADS
      const totalLeads =
        await Lead.countDocuments();

      // WON DEALS
      const wonDeals =
        await Lead.countDocuments({
          status: "Won",
        });

      // HIGH PRIORITY
      const highPriority =
        await Lead.countDocuments({
          priority: "High",
        });

      // CONVERSION RATE
      const conversionRate =
        totalLeads > 0
          ? (
              (wonDeals /
                totalLeads) *
              100
            ).toFixed(1)
          : 0;

      res.json({
        totalLeads,
        wonDeals,
        highPriority,
        conversionRate,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getDashboardStats,
};