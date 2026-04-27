/**
 * Axios Instance Configuration
 * 
 * Centralized HTTP client setup for all API calls
 * 
 * Features:
 * - Base URL configuration
 * - Default headers (auth tokens, content-type)
 * - Request/response interceptors
 * - Error handling
 * 
 * Usage:
 * import { axiosInstance } from '@/shared/lib/axios';
 * axiosInstance.get('/users');
 */

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // TODO: Get token from localStorage/Redux
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Handle common error scenarios
    // - 401: Redirect to login
    // - 403: Show permission error
    // - 5xx: Show server error
    return Promise.reject(error);
  }
);

export default axiosInstance;
