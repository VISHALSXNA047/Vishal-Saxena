'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'antd';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-10 h-10" />;
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}>
      
      <Button
        type="text"
        shape="circle"
        icon={resolvedTheme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-200" />}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" />
      
    </motion.div>);

}
