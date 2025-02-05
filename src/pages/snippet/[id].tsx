import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getSnippetById } from '../../utils/api';
import { Snippet } from '../../types';
import { motion } from 'framer-motion';
import CodeMirror from '@uiw/react-codemirror';
import { languages } from '@codemirror/language-data';
import { LanguageSupport } from '@codemirror/language';
import { Extension } from '@codemirror/state';

const ViewSnippetPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [extensions, setExtensions] = useState<Extension[]>([]);

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

  useEffect(() => {
    const loadExtension = async () => {
      if (snippet) {
        const selectedLanguage = languages.find(
          (l) => l.name.toLowerCase() === snippet.language.toLowerCase()
        );

        if (selectedLanguage && selectedLanguage.load) {
          try {
            const loadedExtension: LanguageSupport = await selectedLanguage.load();
            setExtensions([loadedExtension]);
          } catch (error) {
            console.error('Error loading language support:', error);
            setExtensions([]);
          }
        } else {
          setExtensions([]);
        }
      }
    };

    loadExtension();
  }, [snippet]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!snippet) return <div>Snippet not found</div>;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{snippet.title}</h1>
          
          <div className="mb-4 flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {snippet.language}
            </span>
            {snippet.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="border rounded-lg overflow-hidden">
            <CodeMirror
              value={snippet.content}
              height="400px"
              editable={false}
              theme="dark"
              extensions={extensions}
            />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ViewSnippetPage; 