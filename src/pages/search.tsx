import { useState } from 'react';
import Layout from '../components/Layout';
import SnippetCard from '../components/SnippetCard';
import { searchSnippets, deleteSnippet } from '../utils/api';
import { Snippet } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      setError('');
      const results = await searchSnippets(query);
      setSnippets(results);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to search snippets');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this snippet?')) {
      try {
        await deleteSnippet(id);
        setSnippets(snippets.filter(snippet => snippet._id !== id));
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to delete snippet');
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Snippets</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search using natural language..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {snippets.map((snippet) => (
              <SnippetCard
                key={snippet._id}
                snippet={snippet}
                onDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
        </div>

        {!isLoading && snippets.length === 0 && (
          <div className="text-center text-gray-500">
            No snippets found. Try a different search query.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage; 