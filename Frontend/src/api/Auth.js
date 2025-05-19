import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Signin user
export const signin = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, credentials);
    return response.data; // { token }
  } catch (error) {
    throw error.response?.data || { message: 'Signin failed' };
  }
};

// Signup user
export const signup = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, credentials);
    return response.data; // { token }
  } catch (error) {
    throw error.response?.data || { message: 'Signup failed' };
  }
};
