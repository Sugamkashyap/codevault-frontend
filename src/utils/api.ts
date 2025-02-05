import axios from 'axios';
import { Snippet } from '../types'; // Import the Snippet type from the correct path
import { LanguageSupport } from '@codemirror/language';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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

export const getSnippets = async (): Promise<Snippet[]> => {
  const response = await fetch('/api/snippets');
  if (!response.ok) {
    throw new Error('Failed to fetch snippets');
  }
  const data = await response.json();
  console.log(data); // Log the response to inspect its structure
  return data; // Ensure this matches the Snippet type
};

export const getSnippetById = async (id: string): Promise<Snippet | null> => {
  const response = await fetch(`/api/snippets/${id}`);
  if (!response.ok) {
    return null; // Handle error appropriately
  }
  const snippet: Snippet = await response.json();
  return snippet;
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