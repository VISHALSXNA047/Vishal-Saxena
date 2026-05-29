
import { motion } from 'framer-motion';
import { Progress, Tabs } from 'antd';
import {
  Code,
  Layers,
  Terminal,
  PenTool,
  Cpu,
  Monitor,
  Database,
  Frame,
  GitBranch } from
'lucide-react';

const skillCategories = [
{
  key: 'programming',
  label: 'Programming',
  icon: <Terminal size={18} />,
  skills: [
  { name: 'C', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'Java', level: 60 },
  { name: 'JavaScript', level: 80 }]

},
{
  key: 'frontend',
  label: 'Frontend',
  icon: <Monitor size={18} />,
  skills: [
  { name: 'HTML5/CSS3', level: 80 },
  { name: 'React.js', level: 70 },
  { name: 'Next.js', level: 50 },
  { name: 'Tailwind CSS', level: 80 },]

},
{
  key: 'backend',
  label: 'Backend',
  icon: <Database size={18} />,
  skills: [
  { name: 'Node.js', level: 70 },
  { name: 'Express.js', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'Firebase', level: 60 }]

},
{
  key: 'design',
  label: 'Design',
  icon: <PenTool size={18} />,
  skills: [
  { name: 'Photoshop', level: 90 },
  { name: 'Illustrator', level: 80 },
  { name: 'Figma', level: 75 },
  { name: 'Canva', level: 90 }]

}];


export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 premium-shadow">
            
            <Cpu size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            
            My <span className="text-indigo-600">Technical Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl">
            
            A comprehensive overview of the technologies and tools I&apos;ve mastered over the years to build high-quality digital solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-10 rounded-3xl">
          
          <Tabs
            defaultActiveKey="frontend"
            className="skill-tabs"
            items={skillCategories.map((cat) => ({
              key: cat.key,
              label:
              <div className="flex items-center gap-2 px-2">
                  {cat.icon}
                  <span>{cat.label}</span>
                </div>,

              children:
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-10">
                  {cat.skills.map((skill, index) =>
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">{skill.level}%</span>
                      </div>
                      <Progress
                    percent={skill.level}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#6366F1',
                      '100%': '#a855f7'
                    }}
                    railColor="rgba(99, 102, 241, 0.1)"
                    className="dark:opacity-80" />
                  
                    </motion.div>
                )}
                </div>

            }))} />
          
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
          {[
          { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
          { name: 'VS Code', icon: Code, color: 'text-blue-500' },
          { name: 'Tailwind', icon: Layers, color: 'text-cyan-500' },
          { name: 'React.js', icon: Monitor, color: 'text-sky-500' },
          { name: 'Figma', icon: Frame, color: 'text-purple-500' },
          { name: 'Responsive', icon: Monitor, color: 'text-green-500' }].
          map((tool, i) =>
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-3 p-6 glass-card rounded-2xl transition-all hover:border-indigo-500/50">
            
              <tool.icon className={`w-8 h-8 ${tool.color}`} />
              <span className="text-sm font-bold text-slate-900 dark:text-gray-300 uppercase tracking-widest">{tool.name}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Global styles for AntD tabs (scoped to larger devices to prevent mobile squishing) */}
      <style>{`
        @media (min-width: 640px) {
          .skill-tabs .ant-tabs-nav-list {
            width: 100%;
            justify-content: space-between;
          }
          .skill-tabs .ant-tabs-tab {
            font-weight: 600;
            padding: 12px 0;
            flex: 1;
            justify-content: center;
          }
        }
        .skill-tabs .ant-tabs-ink-bar {
          background: #6366F1;
          height: 3px !important;
        }
        .skill-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #6366F1 !important;
        }
      `}</style>
    </section>);

}
