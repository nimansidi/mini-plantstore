import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Plants API
export const plantsAPI = {
  // Get all plants with search and filters
  getPlants: async (params = {}) => {
    try {
      const response = await api.get('/plants', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get plant by ID
  getPlantById: async (id) => {
    try {
      const response = await api.get(`/plants/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Add new plant
  addPlant: async (plantData) => {
    try {
      const response = await api.post('/plants', plantData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update plant
  updatePlant: async (id, plantData) => {
    try {
      const response = await api.put(`/plants/${id}`, plantData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete plant
  deletePlant: async (id) => {
    try {
      const response = await api.delete(`/plants/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await api.get('/plants/categories/all');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Health check - FIXED: removed /api prefix
export const healthCheck = async () => {
  try {
    const response = await axios.get('http://localhost:5000/health');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;