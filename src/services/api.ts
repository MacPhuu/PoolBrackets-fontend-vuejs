// src/services/api.ts
import axios from 'axios';

// Định nghĩa URL API
const api = axios.create({
  baseURL: 'https://1b8c-1-52-232-246.ngrok-free.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420",
  },
});

export default api;
