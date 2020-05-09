import axios from 'axios';

export const configFormData = {
  headers: { 'content-type': 'multipart/form-data' },
};

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
