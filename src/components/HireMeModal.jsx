import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';
import { message } from 'antd';
import { sendEmail } from '../utils/emailjs';

export default function HireMeModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const modalRef = useRef(null);

  // Lock scroll & handle ESC key press
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Reset form and errors when modal closes/opens
  useEffect(() => {
    if (!isOpen) {
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    }

    // Optional phone validation: if entered, check digit length or characters
    if (formData.phone.trim()) {
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    try {
      const templateParams = {
        from_name: formData.fullName,
        reply_to: formData.email,
        phone_number: formData.phone || 'N/A',
        message: formData.message,
        
        // Expose standard fallback fields so EmailJS template never complains about empty recipient address
        to_email: 'vk0902569@gmail.com',
        email: formData.email,
        from_email: formData.email,
        my_email: 'vk0902569@gmail.com',
        recipient: 'vk0902569@gmail.com'
      };

      const res = await sendEmail(templateParams);
      
      if (res.status === 200) {
        message.success({
          content: 'Inquiry received! I will get back to you shortly.',
          duration: 4
        });
        onClose();
      } else {
        throw new Error(res.text || 'Transmission failed');
      }
    } catch (err) {
      console.error("EmailJS Submission Error:", err);
      // Resolve detailed text from EmailJS or general error message
      const errorMsg = err?.text || err?.message || 'Please try again or email directly.';
      message.error({
        content: `Failed to send enquiry: ${errorMsg}`,
        duration: 6
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-gray-900 border border-gray-800 text-white rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl z-10"
          >
            {/* Background Blob Effects */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Collaboration</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">Hire Me</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl text-gray-400 hover:text-white bg-gray-800/40 hover:bg-gray-800 border border-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isSending}
                    placeholder="John Doe"
                    className={`w-full h-12 pl-11 pr-4 bg-gray-950/60 border rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
                      errors.fullName
                        ? 'border-red-500/60 focus:border-red-500/80 focus:ring-1 focus:ring-red-500/20'
                        : 'border-gray-800 hover:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSending}
                    placeholder="john@example.com"
                    className={`w-full h-12 pl-11 pr-4 bg-gray-950/60 border rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? 'border-red-500/60 focus:border-red-500/80 focus:ring-1 focus:ring-red-500/20'
                        : 'border-gray-800 hover:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSending}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full h-12 pl-11 pr-4 bg-gray-950/60 border rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
                      errors.phone
                        ? 'border-red-500/60 focus:border-red-500/80'
                        : 'border-gray-800 hover:border-gray-700 focus:border-indigo-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-4 pointer-events-none text-gray-500">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSending}
                    placeholder="Tell me about your project, target budget, or what you need..."
                    className={`w-full pl-11 pr-4 py-3 bg-gray-950/60 border rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500/80 focus:ring-1 focus:ring-red-500/20'
                        : 'border-gray-800 hover:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full h-12 mt-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/40 text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
