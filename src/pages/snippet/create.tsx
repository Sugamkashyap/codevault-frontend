import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SnippetForm from '../../components/SnippetForm';
import { createSnippet } from '../../utils/api';

const CreateSnippetPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (data: any) => {
    try {
      setIsLoading(true);
      setError('');
      await createSnippet(data);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create snippet');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Snippet</h1>
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        <SnippetForm onSubmit={handleCreate} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default CreateSnippetPage; 