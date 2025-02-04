import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  CodeIcon, 
  SearchIcon, 
  LogoutIcon 
} from '@heroicons/react/outline';

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <motion.div 
      className={`bg-white h-full shadow-lg ${isOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isOpen ? 256 : 80 }}
    >
      <div className="p-4">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>CodeVault</h1>
      </div>
      
      <nav className="mt-8">
        <Link href="/" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <HomeIcon className="h-6 w-6" />
          {isOpen && <span className="ml-4">Dashboard</span>}
        </Link>
        
        <Link href="/snippets" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <CodeIcon className="h-6 w-6" />
          {isOpen && <span className="ml-4">Snippets</span>}
        </Link>
        
        <Link href="/search" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <SearchIcon className="h-6 w-6" />
          {isOpen && <span className="ml-4">Search</span>}
        </Link>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 hover:bg-gray-100"
        >
          <LogoutIcon className="h-6 w-6" />
          {isOpen && <span className="ml-4">Logout</span>}
        </button>
      </nav>
    </motion.div>
  );
};

export default Sidebar; 