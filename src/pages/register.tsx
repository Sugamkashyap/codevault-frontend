import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthForm from '../components/AuthForm';
import { register } from '../utils/api';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (data: { username: string; email: string; password: string }) => {
    try {
      setIsLoading(true);
      setError('');
      const user = await register(data.username, data.email, data.password);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <AuthForm type="register" onSubmit={handleRegister} isLoading={isLoading} />

        <div className="text-center">
          <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage; 