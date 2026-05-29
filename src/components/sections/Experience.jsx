'use client';


import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
{
  type: 'work',
  title: 'Web Development Intern',
  company: 'Eduskills',
  date: '2025 - 2025',
  location: 'Remote',
  description: 'Developed responsive user interfaces and optimized front-end performance for educational platforms.',
  achievements: ['Load time reduced by 40%', 'Gained core industry experience and technical insights']
},
{
  type: 'work',
  title: 'Graphic Designer',
  company: 'Aja Education NGO',
  date: '2023 - 2023',
  location: 'Bareilly',
  description: 'Designed visually appealing marketing materials and social media graphics for the organization.',
  achievements: ['Designed 100+ social media posts', 'Increased engagement by 25%']
},
{
  type: 'edu',
  title: 'Master of Computer Applications (MCA)',
  company: 'Invertis University',
  date: '2024 - 2026',
  location: 'Bareilly',
  description: 'Specializing in Computer Science and Application development.',
  achievements: ['72% in Academics', 'Attend International Conference']
},
{
  type: 'edu',
  title: 'Bachelor of Computer Applications (BCA)',
  company: 'GF PG College (MJPRU)',
  date: '2021 - 2024',
  location: 'Shahjahanpur',
  description: 'Foundation in Computer Science, Data Structures, and Programming.',
  achievements: ['Top 10 in class']
}];


export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
            
            <Briefcase size={16} />
            <span>My Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            
            Experience & <span className="text-indigo-600">Education</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center gap-8 ${
              i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`
              }>
              
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white dark:bg-gray-950 border-4 border-indigo-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                  {item.type === 'work' ? <Briefcase size={18} className="text-indigo-600" /> : <GraduationCap size={18} className="text-indigo-600" />}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ml-12 md:ml-0 overflow-hidden`}>
                  <div className="glass-card p-6 md:p-8 rounded-3xl group hover:border-indigo-500 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full whitespace-nowrap">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 font-medium italic text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">{item.company}</span>
                      <span className="text-gray-300 dark:text-gray-700">|</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                       {item.achievements.map((ach, j) =>
                     <div key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 bg-slate-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                           {ach}
                         </div>
                    )}
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
