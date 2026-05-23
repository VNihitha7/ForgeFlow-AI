const express = require("express");

const router =
  express.Router();

const {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
  updateLeadStatus,
} = require(
  "../controllers/leadController"
);

// Get all leads
router.get(
  "/",
  getLeads
);

// Add lead
router.post(
  "/",
  addLead
);

// Update lead
router.put(
  "/:id",
  updateLead
);

// Update lead status (Pipeline Drag & Drop)
router.put(
  "/status/:id",
  updateLeadStatus
);

// Delete lead
router.delete(
  "/:id",
  deleteLead
);

module.exports =
  router;