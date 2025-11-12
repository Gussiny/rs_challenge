import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

export const getTeams = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teams`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error.response?.data?.error;
  }
};
