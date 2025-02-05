import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SnippetCard from '../components/SnippetCard';
import { getSnippets, deleteSnippet } from '../utils/api';
import { Snippet } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardPage = () => {
  const router = useRouter();
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      const data = await getSnippets();
      setSnippets(data as Snippet[]);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load snippets');
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Snippets</h1>
          <button
            onClick={() => router.push('/snippet/create')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create New Snippet
          </button>
        </div>

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
      </div>
    </Layout>
  );
};

export default DashboardPage; 