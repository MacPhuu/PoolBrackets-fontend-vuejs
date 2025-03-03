// src/services/api.ts
import axios from 'axios';

// Định nghĩa URL API
const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
