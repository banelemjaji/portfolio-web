import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    from_name: '', // Corresponds to {{from_name}} in EmailJS template
    reply_to: '',  // Corresponds to {{reply_to}} or your email field name
    message: ''    // Corresponds to {{message}}
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: false, message: '' });

  const formRef = useRef(); // Ref to access the form element for EmailJS

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear status message on new input
    setSubmitStatus({ success: false, error: false, message: '' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' }); // Reset status

    // Access environment variables (ensure Vite server was restarted after setting .env)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are not set correctly.");
        setSubmitStatus({ success: false, error: true, message: 'Configuration error. Cannot send message.' });
        setIsSubmitting(false);
        return;
    }

    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus({ success: true, error: false, message: 'Message sent successfully! Thank you.' });
          setFormData({ from_name: '', reply_to: '', message: '' }); // Clear form
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus({ success: false, error: true, message: `Failed to send message. ${error.text || 'Please try again.'}` });
      })
      .finally(() => {
          setIsSubmitting(false); // Re-enable button
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-3xl"> {/* Centered container */}
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 mb-6">
          Get In <span className="text-[#89FFAA]">Touch</span>
        </h2>
        {/* Description */}
        <p className="text-center text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Have a question, a project idea, or just want to connect? Feel free to reach out using the form below. Let's build something awesome together!
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
          {/* Name Input */}
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Name">Name</label>
            <input
              type="text"
              name="from_name" // Should match EmailJS template variable
              id="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#172A3A] border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:border-transparent transition duration-200"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Email">Email</label>
            <input
              type="email"
              name="reply_to" // Should match EmailJS template variable for reply-to
              id="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#172A3A] border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:border-transparent transition duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Message">Message</label>
            <textarea
              name="message" // Should match EmailJS template variable
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#172A3A] border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:border-transparent transition duration-200 resize-none" // Added resize-none
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button & Status Message */}
          <div className="text-center">
            {/* Status Message Area */}
            {submitStatus.message && (
              <p className={`mb-4 text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'} animate-fade-in`} aria-live="polite" aria-atomic="true">
                {submitStatus.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className={`inline-flex items-center justify-center px-8 py-2.5 border-2 border-[#89FFAA] rounded font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:ring-offset-2 focus:ring-offset-[#0C1821] ${
                isSubmitting
                  ? 'bg-slate-600 text-slate-400 border-slate-600 cursor-not-allowed' // Disabled style
                  : 'bg-transparent text-[#89FFAA] hover:bg-[#89FFAA] hover:text-[#0C1821] hover:-translate-y-0.5' // Normal style
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

