import axios from 'axios';

const API_URL = 'http://localhost:5000/api/portfolio';

// Helper to add auth token to headers
const authConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Get current user's portfolio
export const getMyPortfolio = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/me`, authConfig(token));
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch portfolio' };
  }
};

// Create or update portfolio
export const createOrUpdatePortfolio = async (token, portfolioData) => {
  try {
    const response = await axios.post(`${API_URL}`, portfolioData, authConfig(token));
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to save portfolio' };
  }
};

// Delete portfolio
export const deletePortfolio = async (token) => {
  try {
    const response = await axios.delete(`${API_URL}`, authConfig(token));
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete portfolio' };
  }
};
