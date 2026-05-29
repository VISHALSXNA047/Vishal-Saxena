'use client';



export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">V</div>
           <span className="text-lg font-bold text-white dark:text-gray-50">Vishal Saxena</span>
         </div>
         
         <div className="text-gray-300 text-sm font-bold uppercase tracking-widest leading-none">
           © {new Date().getFullYear()} Vishal Saxena. All rights reserved.
         </div>
         
         <div className="flex gap-6 text-gray-300 font-bold text-xs uppercase tracking-widest">
           <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
         </div>
      </div>
    </footer>);

}
