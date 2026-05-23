import axios from "axios";

const API =
  "http://localhost:5000/api/leads";

const getToken = () => {
  return localStorage.getItem(
    "token"
  );
};

export const getLeads = () =>
  axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const addLead = (
  leadData
) =>
  axios.post(API, leadData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const updateLead = (
  id,
  leadData
) =>
  axios.put(
    `${API}/${id}`,
    leadData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

export const updateLeadStatus =
  (id, status) =>
    axios.put(
      `${API}/status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

export const deleteLead = (
  id
) =>
  axios.delete(
    `${API}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );