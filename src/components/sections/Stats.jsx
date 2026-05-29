import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Code2, GitPullRequest, Star, Coffee } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const stats = [
{ label: 'Lines of Code', value: '50k+', icon: <Code2 size={24} />, color: 'bg-blue-500' },
{ label: 'Commits', value: '1.2k+', icon: <GitPullRequest size={24} />, color: 'bg-green-500' },
{ label: 'GitHub Stars', value: '250+', icon: <Star size={24} />, color: 'bg-yellow-500' },
{ label: 'Cups of Coffee', value: '100+', icon: <Coffee size={24} />, color: 'bg-orange-500' }];


export default function Stats() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="py-20 bg-gray-950 border-y border-gray-200 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 glass-card border-none rounded-3xl group">
            
              <div className={`w-16 h-16 ${stat.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform premium-shadow`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-white mb-2 leading-tight tracking-tighter">
                {stat.value}
              </div>
              <div className="text-gray-400 font-bold text-sm uppercase tracking-widest leading-none">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col items-center">
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            
              <span className="w-2 h-8 bg-green-500 rounded-full" />
              GitHub Contribution Graph
            </motion.h3>
           
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-10 rounded-3xl w-full max-w-4xl overflow-hidden">
            
              <div className="flex justify-center overflow-x-auto pb-4 contribution-grid">
                <GitHubCalendar
                username="vishalsaxena"
                colorScheme={resolvedTheme}
                fontSize={14}
                blockSize={14}
                blockMargin={4}
                theme={{
                  light: ['#f1f5f9', '#818cf8', '#6366f1', '#4f46e5', '#3730a3'],
                  dark: ['#1e293b', '#6366f1', '#4f46e5', '#3730a3', '#312e81']
                }} />
              
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex items-center gap-4">
                     <div className="flex flex-col">
                        <span className="text-white font-bold text-lg">842 Contributions</span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-none mt-1">In the last year</span>
                     </div>
                 </div>
                 <div className="flex flex-wrap justify-center gap-4">
                    {[
                { label: 'Frontend', pos: '85%' },
                { label: 'Design', pos: '70%' },
                { label: 'Backend', pos: '40%' }].
                map((item) =>
                <div key={item.label} className="flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 dark:text-gray-400 font-bold uppercase mb-1">{item.label}</span>
                        <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: item.pos }} />
                        </div>
                      </div>
                )}
                 </div>
                  <div className="flex items-center gap-2">
                     <span className="text-gray-400 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Less</span>
                     {[0, 1, 2, 3, 4].map((v) =>
                <div key={v} className="w-3.5 h-3.5 rounded-sm bg-indigo-500" style={{ opacity: 0.1 + v * 0.225 }} />
                )}
                     <span className="text-gray-400 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">More</span>
                  </div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Removed style jsx since standard React doesn't support it without styled-jsx. Let's use standard global CSS or inline styles */}
      <style>{`
        .contribution-grid .react-activity-calendar {
          max-width: 100%;
        }
        .contribution-grid svg {
          margin: 0 auto;
        }
      `}</style>
    </section>);

}
