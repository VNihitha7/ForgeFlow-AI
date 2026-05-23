import axios from "axios";

const API =
  "http://localhost:5000/api/leads";

// GET LEADS
export const getLeads =
  () => axios.get(API);

// ADD LEAD
export const addLead = (
  leadData
) =>
  axios.post(
    API,
    leadData
  );

// UPDATE LEAD
export const updateLead = (
  id,
  leadData
) =>
  axios.put(
    `${API}/${id}`,
    leadData
  );

// UPDATE LEAD STATUS
export const updateLeadStatus =
  (id, status) =>
    axios.put(
      `${API}/status/${id}`,
      { status }
    );

// ADD NOTE
export const addNote = (
  id,
  data
) =>
  axios.post(
    `${API}/note/${id}`,
    data
  );

// DELETE LEAD
export const deleteLead = (
  id
) =>
  axios.delete(
    `${API}/${id}`
  );