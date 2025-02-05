export interface User {
  _id: string;
  username: string;
  email: string;
  token: string;
}

export interface Snippet {
  _id: string;
  title: string;
  language: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  user: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
} 