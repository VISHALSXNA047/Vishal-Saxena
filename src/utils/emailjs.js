import emailjs from '@emailjs/browser';

// Dynamically read environment variables or fallback to placeholders
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_yjjkaib';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_o16xqtp';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '584FWqjEHPc5-mUGj';

/**
 * Sends email using EmailJS.
 * If placeholders are detected, it simulates a successful request for dev/testing.
 * 
 * @param {Object} templateParams - Parameters like full_name, email, phone_number, message
 * @returns {Promise<{status: number, text: string}>}
 */
export const sendEmail = async (templateParams) => {
  // If any config is using placeholder names, fall back to mock sending for easy demonstration.
  if (
    SERVICE_ID === 'SERVICE_ID' ||
    TEMPLATE_ID === 'TEMPLATE_ID' ||
    PUBLIC_KEY === 'PUBLIC_KEY'
  ) {
    console.warn(
      'EmailJS placeholders detected. Simulating successful transmission...\n' +
      'To send real emails, define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
      'and VITE_EMAILJS_PUBLIC_KEY in your frontend environment variables.'
    );

    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, text: 'OK (Mock Send Success)' });
      }, 1500);
    });
  }

  // Real EmailJS execution
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
