import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import SnippetForm from '../../../components/SnippetForm';
import { getSnippetById, updateSnippet } from '../../../utils/api';
import { Snippet } from '../../../types';

const EditSnippetPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSnippet = async () => {
      if (id) {
        try {
          const data = await getSnippetById(id as string);
          setSnippet(data);
        } catch (err: any) {
          setError(err.response?.data?.message || 'Failed to load snippet');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSnippet();
  }, [id]);

  const handleUpdate = async (data: any) => {
    try {
      setIsLoading(true);
      setError('');
      await updateSnippet(id as string, data);
      router.push(`/snippet/${id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update snippet');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!snippet) return <div>Snippet not found</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Snippet</h1>
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        <SnippetForm
          initialData={snippet}
          onSubmit={handleUpdate}
          isLoading={isLoading}
        />
      </div>
    </Layout>
  );
};

export default EditSnippetPage; 