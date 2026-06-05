'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">V</div>
            <span className="text-lg font-bold text-slate-900 dark:text-gray-50">Vishal Saxena</span>
         </div>
         
         <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed text-center md:text-left">
           © {new Date().getFullYear()} Vishal Saxena.<br className="md:hidden" /> All Rights Reserved.
         </div>
         
         <button
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           className="md:hidden flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-indigo-500/25 border-none"
           aria-label="Back to top"
         >
           <ArrowUp size={16} /> Back To Top
         </button>
      </div>
    </footer>);
}
