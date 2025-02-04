import { motion } from 'framer-motion';
import { Snippet } from '../types';
import { format } from 'date-fns';
import Link from 'next/link';

interface SnippetCardProps {
  snippet: Snippet;
  onDelete: (id: string) => void;
}

const SnippetCard = ({ snippet, onDelete }: SnippetCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{snippet.title}</h3>
          <span className="text-sm text-gray-500">
            {format(new Date(snippet.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
        
        <div className="mt-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {snippet.language}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <Link
            href={`/snippet/${snippet._id}`}
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
          >
            View
          </Link>
          <Link
            href={`/snippet/edit/${snippet._id}`}
            className="text-green-600 hover:text-green-500 text-sm font-medium"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(snippet._id)}
            className="text-red-600 hover:text-red-500 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SnippetCard; 