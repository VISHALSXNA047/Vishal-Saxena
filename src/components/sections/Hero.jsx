
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button } from 'antd';
import { FileText, Send, Computer, Briefcase, Rocket, Code2 } from 'lucide-react';

export default function Hero({ onHireMeClick }) {
  const [text] = useTypewriter({
    words: [
      'Front-End Developer',
      'Graphic Designer',
      'UI/UX Enthusiast',
      'Creative Thinker'],

    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px] animate-blob animation-delay-4000" />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-100/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Available for hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white transition-colors">
            <span className="text-slate-900 dark:text-white">I&apos;m</span> <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Vishal Saxena</span>
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-gray-100 mb-8 h-[1.5em] tracking-tight">
            <span className="text-indigo-600 dark:text-indigo-400">&gt; </span>
            <span>{text}</span>
            <Cursor cursorStyle="_" cursorColor="#6366F1" />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
            Crafting pixel-perfect, highly performant, and stunning digital experiences. I bridge the gap between design and development with creativity and code.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              type="primary"
              size="large"
              onClick={onHireMeClick}
              className="h-14 px-8 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/25 shadow-lg flex items-center gap-2 border-none cursor-pointer hover:scale-105 active:scale-95 duration-200"
              icon={<Send size={20} />}>

              Hire Me
            </Button>
            <div>
              <Button
                size="large"
                onClick={() => window.open('https://drive.google.com/file/d/1v89xsNLxuixvEbIjzQYJ5f2KFM9MsA8a/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                className="h-14 px-8 text-lg font-semibold border border-gray-200 dark:border-gray-800 transition-all flex items-center gap-2 rounded-xl text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-indigo-500/80 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer hover:scale-105 active:scale-95 duration-200"
                icon={<FileText size={20} />}
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-400 hover:text-indigo-600 transition-colors">
              <Computer size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-400 hover:text-indigo-600 transition-colors">
              <Briefcase size={24} />
            </a>
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />
            <span className="text-sm font-medium text-gray-400 dark:text-gray-400 uppercase tracking-widest">Connect with me</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end">

          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 group border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none">
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="Developer Coding"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105" />


              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-xl p-4 rounded-2xl z-20">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">UI/UX</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Designer</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-xl p-4 rounded-2xl z-20">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Code</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Developer</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-2">

          <div className="w-1 h-2 bg-indigo-600 rounded-full" />
        </motion.div>
      </div>
    </section>);

}
