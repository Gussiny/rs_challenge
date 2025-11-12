import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: { city }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};
