'use client';


import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
{
  title: 'Course of Computer Concepts',
  issuer: 'NIELIT',
  date: '2021',
  link: 'https://drive.google.com/file/d/1CQBuwAwSY7icdp72id1s8s9CuoJPzeaY/view?usp=sharing',
  color: 'from-blue-500 to-cyan-400'
},
{
  title: 'Certificate of Internship',
  issuer: 'AJA Education (NGO)',
  date: '2023',
  link: 'https://drive.google.com/file/d/1ejMzzJBy7x-TZDGJuDyZyB4ZPwq_3BkZ/view?usp=sharing',
  color: 'from-indigo-600 to-purple-500'
},
{
  title: 'Certificate of Virtual Internship',
  issuer: 'Eduskills',
  date: '2025',
  link: 'https://drive.google.com/file/d/1mye3FHBHRoVr6xrPc227dtBu944DeiV9/view?usp=drive_link',
  color: 'from-pink-500 to-rose-400'
},
{
  title: 'IBM Certificate Of Data Science',
  issuer: 'Cognitive Class',
  date: '2025',
  link: 'https://drive.google.com/file/d/1iWDwaVsIgdQ6AY5pk75iWOCWK3fwwx0v/view?usp=drive_link',
  color: 'from-orange-500 to-amber-400'
},
{
  title: 'IBM Certificate of DB',
  issuer: 'Cognitive Class',
  date: '2025',
  link: 'https://drive.google.com/file/d/1iSUHBdP1LOHSWbi7oc_N5zaOyaWS9K48/view?usp=drive_link',
  color: 'from-indigo-600 to-purple-500'
},
{
  title: 'Drive Clone using HTML,CSS',
  issuer: 'Devtown',
  date: '2024',
  link: 'https://drive.google.com/file/d/1_Uo1sxbYdxM9zEUawK7UoFVxnCGDL89_/view?usp=sharing',
  color: 'from-blue-500 to-cyan-400'
}
,
{
  title: 'Developer Student Club',
  issuer: 'Devtown',
  date: '2024',
  link: 'https://drive.google.com/file/d/1vQw66FqYAnDMDmpm-byxj_xDtwPeDjjh/view?usp=sharing',
  color: 'from-orange-500 to-amber-400'
}
,
{
  title: '1 day PowerBI workhop',
  issuer: 'Ducat',
  date: '2025',
  link: 'https://drive.google.com/file/d/1iMWxekDbW2b1Pi42Yu029H0LMHWOiouz/view?usp=sharing',
  color: 'from-pink-500 to-rose-400'
}

];


export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
            
            <ShieldCheck size={16} />
            <span>Achievements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white">
            
            Professional <span className="text-indigo-600">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) =>
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-full">
            
              <div className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`} />
              <div className="relative h-full glass-card p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div className={`w-14 h-14 bg-linear-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mt-2">
                  {cert.issuer} • {cert.date}
                </p>
                <div className="mt-auto">
                   <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:gap-3 transition-all">
                  
                     View Certificate <ExternalLink size={14} />
                   </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
