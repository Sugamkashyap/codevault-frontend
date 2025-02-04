import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

export const register = async (username: string, email: string, password: string) => {
  const response = await api.post('/api/auth/register', { username, email, password });
  return response.data;
};

export const createSnippet = async (snippetData: Partial<Snippet>) => {
  const response = await api.post('/api/snippets', snippetData);
  return response.data;
};

export const getSnippets = async () => {
  const response = await api.get('/api/snippets');
  return response.data;
};

export const updateSnippet = async (id: string, snippetData: Partial<Snippet>) => {
  const response = await api.put(`/api/snippets/${id}`, snippetData);
  return response.data;
};

export const deleteSnippet = async (id: string) => {
  const response = await api.delete(`/api/snippets/${id}`);
  return response.data;
};

export const searchSnippets = async (query: string) => {
  const response = await api.post('/api/snippets/search', { query });
  return response.data;
};

export default api; 