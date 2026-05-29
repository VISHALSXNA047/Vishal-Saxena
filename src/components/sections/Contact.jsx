import { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Button, message, Tooltip } from 'antd';
import { Send, Mail, MapPin, CircleFadingPlus, Globe, Briefcase, MessageSquare, ExternalLink } from 'lucide-react';


export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        message.success({
          content: 'Thank you! Your message has been sent successfully.',
          className: 'custom-message'
        });
        form.resetFields();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 premium-shadow">
            
            <Send size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            
            Let&apos;s <span className="text-indigo-600">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl">
            
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8">
            
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none p-8 rounded-3xl space-y-8">
               <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 dark:text-gray-100">Email Me</h4>
                     <p className="text-gray-500 dark:text-gray-400 font-medium">vk0902569@gmail.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                     <CircleFadingPlus size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 dark:text-gray-100">Message Me</h4>
                     <p className="text-gray-500 dark:text-gray-400 font-medium">itz_vishalsaxena</p>
                  </div>
               </div>

               <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                     <MapPin size={24} />
                  </div>
                   <div>
                       <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                       <p className="text-gray-500 dark:text-gray-300 font-bold leading-none mt-1">Shahjahanpur, Uttar Pradesh, India</p>
                   </div>
               </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none p-8 rounded-3xl">
               <h4 className="font-bold text-slate-900 dark:text-white mb-6">Social Connect</h4>
               <div className="flex gap-4">
                  {[
                { icon: Globe, href: 'https://github.com//VISHALSXNA047', label: 'Github' },
                { icon: Briefcase, href: 'https://www.linkedin.com/in/vishal-saxena-08247125b/', label: 'Linkedin' },
                { icon: CircleFadingPlus, href: 'https://www.instagram.com/itz_vishalsaxena/', label: 'Instagram' }].
                map((social) =>
                <Tooltip key={social.label} title={social.label}>
                       <a
                    href={social.href}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all shadow-md">
                    
                          <social.icon size={22} />
                       </a>
                    </Tooltip>
                )}
               </div>
            </div>
            
            <div className="bg-indigo-600 p-8 rounded-3xl text-white relative overflow-hidden group premium-shadow">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
               <h4 className="text-xl font-bold mb-2">Available for projects</h4>
               <p className="text-indigo-100 mb-6 font-medium">Let&apos;s build something amazing together!</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7">
            
            <div className="bg-white/80 dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none p-8 md:p-12 rounded-3xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600">
                <Mail size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center py-10 px-6 text-center">
  
  {/* Namaste Icon */}
  <div className="relative mb-8">
    <div className="w-28 h-28 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-6xl animate-pulse">
      🙏
    </div>
    {/* Glow ring */}
    <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-xl scale-150" />
  </div>

  {/* Heading */}
  <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
    Aapka Shukriya!
  </h2>

  {/* Subtext */}
  <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-2">
    Thank you for visiting my portfolio.
  </p>
  <p className="text-indigo-600 dark:text-indigo-400 text-base font-semibold mb-8">
    ✨ Have a wonderful day ahead! ✨
  </p>

  {/* Divider */}
  <div className="w-16 h-px bg-indigo-500/40 mb-8" />

  {/* Message */}
  <p className="text-gray-500 dark:text-gray-500 text-sm max-w-sm leading-relaxed">
    If you'd like to connect or collaborate, feel free to reach out via the contact details above. I'd love to hear from you!
  </p>

  {/* Bottom badge */}
  <div className="mt-10 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 text-xs tracking-widest uppercase">
    Made with by Vishal Saxena
  </div>

</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
