'use client';


import { motion } from 'framer-motion';
import { User, Code2, Palette, Zap } from 'lucide-react';

const stats = [
{ label: 'Experience', value: 'Fresh Graduate', icon: Zap, color: 'text-yellow-500' },
{ label: 'Projects', value: '3+', icon: Code2, color: 'text-indigo-500' },
{ label: 'Design Tools', value: '4', icon: Palette, color: 'text-pink-500' }];


export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
            
            <User size={16} />
            <span>About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white transition-colors">
            
            Passionate About <span className="text-indigo-600">Design & Code</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl opacity-50" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white transition-colors">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm">Hi</span>
              Who I am?
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am Vishal Saxena, a highly motivated Front-End Developer and Graphic Designer with a focus on creating modern, scalable, and user-friendly web applications. With a strong foundation in both technical development and creative design, I bring a unique perspective to every project.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              My goal is to build digital products that not only function perfectly but also look stunning. I enjoy solving complex problems through clean code and intuitive design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) =>
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-2xl bg-white dark:bg-gray-950/50 shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all flex flex-col items-center text-center">
                
                  <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                  <div className="text-l font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest leading-none mt-1">{stat.label}</div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8">
            
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <div className="w-2 h-6 bg-indigo-600 rounded-full" />
                Frontend Expertise
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Proficient in modern web technologies including React.js, Next.js, and TypeScript. I focus on writing clean, modular, and maintainable code while ensuring high performance and SEO optimization.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <div className="w-2 h-6 bg-pink-500 rounded-full" />
                Graphic Design Creativity
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Skilled in Adobe Photoshop, Illustrator, and Figma. I create visually compelling graphics, logos, and UI designs that communicate brand identity effectively.
              </p>
            </div>

            <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 text-2xl">Education</div>
            <div className="p-6 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 bg-indigo-500/5">
                <div className="font-bold text-slate-900 dark:text-gray-50">Master&apos;s of Computer Applications (MCA)</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Invertis University, Bareilly</div>
            </div>
            <div className="p-6 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 bg-indigo-500/5">
                <div className="font-bold text-slate-900 dark:text-gray-50">Bachelor&apos;s of Computer Applications (BCA)</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">GF PG College (MJPRU), Shahjahanpur</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
