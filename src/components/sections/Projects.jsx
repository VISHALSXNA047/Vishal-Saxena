import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Tag, Tooltip } from 'antd';
import { Code2, ExternalLink, Rocket, FolderGit2, Palette, ArrowLeft, X, ZoomIn } from 'lucide-react';

// ─── LOCAL DESIGN IMAGES ──────────────────────────────────────────────────────
import imgCreative      from '../../designs/creative.jpg';
import imgDiwali        from '../../designs/diwali.png';
import imgDonateUs1     from '../../designs/donate_us_1.jpg';
import imgDonateUs      from '../../designs/Donateus.jpg';
import imgFurniture     from '../../designs/furniture_design.png';
import imgGandhiJyanti  from '../../designs/GandhiJyanti2.jpg';
import imgGrocery       from '../../designs/grocery.jpg';
import imgInstagram     from '../../designs/INSTAGRAM_PROMOTION_POST_RUPYZ_(1).png';
import imgKrishna       from '../../designs/krishna_hospital.jpg';
import imgNewDesign     from '../../designs/newdesign.jpg';
import imgPizza         from '../../designs/PIZZA_DESIGN.jpg';
import imgSchoolBanner  from '../../designs/school_banner.png';
import imgShoes         from '../../designs/shoes_design.jpg';
import imgThought       from '../../designs/thought_of_the_day.jpg';
import imgTution        from '../../designs/tution.png';
import imgHirelens      from '../../designs/HireLens.png'
import portfolio      from '../../designs/Old_Portfolio.png'

// ─── WEB PROJECTS ────────────────────────────────────────────────────────────
const webProjects = [
  {
    id: 'w1',
    title: 'HireLens',
    description: 'An AI-powered recruitment platform designed to streamline the hiring process with intelligent candidate filtering and automated scheduling.',
    tech: ['React', 'Next.js', 'Tailwind'],
    image: imgHirelens,
    github: 'https://github.com',
    live: 'https://hirelens-airesume.vercel.app/',
    featured: true,
    category: 'web',
  },
  {
    id: 'w2',
    title: 'Old Portfolio',
    description: 'A developer portfolio with Some basic Fetaures of previewing Designs and smooth Framer Motion animations.',
    tech: ['HTML', 'Css', 'JavaScript','Framer Motion'],
    image: portfolio,
    github: 'https://github.com/VISHALSXNA047/MY_portfolio.git',
    live: 'https://vishalsxna047.github.io/MY_portfolio/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnvnrp0oLeaLM8vIJDnZRbKQFbWQ7UBbQnN-BVw5CEo6EVIBnLkGYQHZVGDH8_aem_8MbAThoDXXVz2rg43SrpHg',
    featured: false,
    category: 'web',
  },
  // {
  //   id: 'w3',
  //   title: 'InsightCRM',
  //   description: 'A modern CRM system for small businesses to manage customer relationships, tasks, and sales pipelines with real-time analytics.',
  //   tech: ['TypeScript', 'Express', 'MongoDB'],
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  //   github: 'https://github.com',
  //   live: 'https://demo.com',
  //   featured: false,
  //   category: 'web',
  // },
  // {
  //   id: 'w4',
  //   title: 'PixelArt Studio',
  //   description: 'A web-based graphic design tool for creating pixel-perfect art assets, featuring a robust layer system and export options.',
  //   tech: ['Canvas API', 'Firebase', 'Redux'],
  //   image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  //   github: 'https://github.com',
  //   live: 'https://demo.com',
  //   featured: false,
  //   category: 'web',
  // },
];

// ─── DESIGN PROJECTS ─────────────────────────────────────────────────────────
const designProjects = [
  {
    id: 'd1',
    title: 'Creative Design',
    description: 'A vibrant creative design showcasing bold typography, layout composition, and visual storytelling techniques.',
    tech: ['Photoshop', 'Graphic Design'],
    image: imgCreative,
    featured: true,
    category: 'design',
  },
  {
    id: 'd2',
    title: 'Diwali Special',
    description: 'Festive Diwali promotional design with traditional motifs, warm color palette, and celebratory visual elements.',
    tech: ['Illustrator', 'Festival Design'],
    image: imgDiwali,
    featured: false,
    category: 'design',
  },
  {
    id: 'd3',
    title: 'Donate Us',
    description: 'A compelling donation campaign design crafted to inspire action with a clean, emotional visual approach.',
    tech: ['Photoshop', 'Campaign Design'],
    image: imgDonateUs1,
    featured: false,
    category: 'design',
  },
  {
    id: 'd4',
    title: 'Donate Us',
    description: 'Charity and donation-focused poster with a strong call-to-action layout and trust-building visual hierarchy.',
    tech: ['Illustrator', 'Poster Design'],
    image: imgDonateUs,
    featured: false,
    category: 'design',
  },
  {
    id: 'd5',
    title: 'Furniture Design',
    description: 'Elegant furniture brand promotional material with minimalist aesthetics and premium product showcase layout.',
    tech: ['Photoshop', 'Product Design'],
    image: imgFurniture,
    featured: false,
    category: 'design',
  },
  {
    id: 'd6',
    title: 'Gandhi Jayanti',
    description: 'Respectful tribute design for Gandhi Jayanti featuring patriotic tones, meaningful typography, and symbolic imagery.',
    tech: ['Illustrator', 'Event Design'],
    image: imgGandhiJyanti,
    featured: false,
    category: 'design',
  },
  {
    id: 'd7',
    title: 'Grocery Store',
    description: 'Fresh and inviting grocery store promotional banner with vibrant colors and appetite-stimulating visual design.',
    tech: ['Photoshop', 'Banner Design'],
    image: imgGrocery,
    featured: false,
    category: 'design',
  },
  {
    id: 'd8',
    title: 'Instagram Promo',
    description: 'Eye-catching Instagram promotional post designed for maximum engagement with trend-forward visual aesthetics.',
    tech: ['Figma', 'Social Media'],
    image: imgInstagram,
    featured: false,
    category: 'design',
  },
  {
    id: 'd9',
    title: 'Krishna Hospital',
    description: 'Professional healthcare branding design for Krishna Hospital — clean, trustworthy, and compassionate visual identity.',
    tech: ['Illustrator', 'Healthcare Design'],
    image: imgKrishna,
    featured: false,
    category: 'design',
  },
  {
    id: 'd10',
    title: 'Hiring Post',
    description: 'Your Next Opportunity Starts Here.',
    tech: ['Photoshop', 'Graphic Design'],
    image: imgNewDesign,
    featured: false,
    category: 'design',
  },
  {
    id: 'd11',
    title: 'Pizza Design',
    description: 'Mouthwatering pizza restaurant promotional design with rich colors and a vibrant food-forward layout.',
    tech: ['Photoshop', 'Food Design'],
    image: imgPizza,
    featured: false,
    category: 'design',
  },
  {
    id: 'd12',
    title: 'School Banner',
    description: 'Bright and welcoming school event banner designed to inspire students and communicate key information clearly.',
    tech: ['Illustrator', 'Banner Design'],
    image: imgSchoolBanner,
    featured: false,
    category: 'design',
  },
  {
    id: 'd13',
    title: 'Shoes Design',
    description: 'Stylish footwear promotional material with a sleek, modern layout and strong product-focused visual direction.',
    tech: ['Photoshop', 'Product Design'],
    image: imgShoes,
    featured: false,
    category: 'design',
  },
  {
    id: 'd14',
    title: 'Thought of the Day',
    description: 'Inspirational daily quote design with elegant typography, calming palette, and motivational visual layout.',
    tech: ['Canva', 'Typography Design'],
    image: imgThought,
    featured: false,
    category: 'design',
  },
  {
    id: 'd15',
    title: 'Tuition Classes',
    description: 'Attention-grabbing tuition centre promotional design aimed at students and parents with clear messaging.',
    tech: ['Photoshop', 'Education Design'],
    image: imgTution,
    featured: false,
    category: 'design',
  },
];

const allProjects = [...webProjects, ...designProjects];

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Title bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
            <p className="text-white font-bold text-xl">{title}</p>
          </div>

          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain bg-gray-950"
            style={{ maxHeight: '85vh' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, i, onPreview }) {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ delay: i * 0.08, duration: 0.45 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col glass-card rounded-3xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <div className="flex gap-4">
            {/* Web projects: GitHub + Live buttons */}
            {project.category === 'web' && (
              <>
                {project.github && (
                  <Tooltip title="View Code">
                    <Button
                      shape="circle"
                      size="large"
                      icon={<Code2 size={20} />}
                      className="bg-gray-950/20 backdrop-blur-md border-white/30 text-white hover:bg-gray-950 hover:text-indigo-600"
                      href={project.github}
                      target="_blank"
                    />
                  </Tooltip>
                )}
                <Tooltip title="Live Demo">
                  <Button
                    shape="circle"
                    size="large"
                    icon={<ExternalLink size={20} />}
                    className="bg-gray-950/20 backdrop-blur-md border-white/30 text-white hover:bg-gray-950 hover:text-indigo-600"
                    href={project.live}
                    target="_blank"
                  />
                </Tooltip>
              </>
            )}

            {/* Design projects: Preview button */}
            {project.category === 'design' && (
              <Tooltip title="Preview Design">
                <Button
                  shape="circle"
                  size="large"
                  icon={<ZoomIn size={20} />}
                  className="bg-gray-950/20 backdrop-blur-md border-white/30 text-white hover:bg-gray-950 hover:text-pink-500"
                  onClick={() => onPreview(project)}
                />
              </Tooltip>
            )}
          </div>
        </div>

        {/* Category badge */}
        <div className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 ${
          project.category === 'design' ? 'bg-pink-600' : 'bg-gray-700/80 backdrop-blur-sm'
        }`}>
          {project.category === 'design' ? <Palette size={11} /> : <Code2 size={11} />}
          {project.category === 'design' ? 'Design' : 'Web'}
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
            <Rocket size={12} />
            Featured
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <Tag
              key={t}
              color="purple"
              variant="solid"
              className="border-none rounded-lg px-3 py-1 font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
            >
              {t}
            </Tag>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
          {project.category === 'design' ? (
            /* Design: View Design → opens lightbox */
            <button
              onClick={() => onPreview(project)}
              className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              View Design <ZoomIn size={16} />
            </button>
          ) : (
            /* Web: Explore Project → opens live link */
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 group/link hover:gap-3 transition-all"
            >
              Explore Project <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [preview, setPreview] = useState(null); // { image, title }

  const getVisibleProjects = () => {
    if (showAll) return allProjects;
    if (filter === 'Web') return webProjects.slice(0, 4);
    if (filter === 'Design') return designProjects.slice(0, 4);
    return [...webProjects.slice(0, 2), ...designProjects.slice(0, 2)];
  };

  const visibleProjects = getVisibleProjects();

  const handlePreview = (project) => setPreview({ image: project.image, title: project.title });
  const handleClose   = () => setPreview(null);

  return (
    <>
      {/* ── Lightbox ── */}
      {preview && (
        <Lightbox image={preview.image} title={preview.title} onClose={handleClose} />
      )}

      <section id="projects" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="section-container">

          {/* ── Header ── */}
          {showAll ? (
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6 relative min-h-[80px]">
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider w-fit">
                  <FolderGit2 size={16} />
                  <span>All Projects</span>
                </div>
                <button
                  onClick={() => setShowAll(false)}
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-bold transition-colors w-fit cursor-pointer"
                >
                  <ArrowLeft size={20} /> Back
                </button>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white md:absolute md:left-1/2 md:-translate-x-1/2 transition-colors text-center w-full md:w-auto">
                Complete <span className="text-indigo-600">Portfolio</span>
              </h2>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4"
                >
                  <FolderGit2 size={16} />
                  <span>Portfolio</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors"
                >
                  Recent <span className="text-indigo-600">Creations</span>
                </motion.h2>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
                {['All', 'Web', 'Design'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`px-5 py-2 rounded-xl font-bold transition-all text-sm sm:text-base cursor-pointer ${
                      filter === item
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Projects Grid ── */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  i={i}
                  onPreview={handlePreview}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── View All / View Less Button ── */}
          <div className="mt-20 text-center">
            <Button
              size="large"
              onClick={() => setShowAll((prev) => !prev)}
              className="h-14 px-10 font-bold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-all rounded-xl border-none shadow-xl shadow-indigo-500/20 cursor-pointer"
            >
              {showAll ? 'View Less' : 'View All Projects'}
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
