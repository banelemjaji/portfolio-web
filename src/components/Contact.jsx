import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  
  const [formData, setFormData] = useState({
    from_name: '', 
    reply_to: '',  
    message: ''    
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: false, message: '' });

  const formRef = useRef(); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    setSubmitStatus({ success: false, error: false, message: '' });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' }); 

    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are not set correctly.");
        setSubmitStatus({ success: false, error: true, message: 'Configuration error. Cannot send message.' });
        setIsSubmitting(false);
        return;
    }

    
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
          setIsSubmitting(false); 
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-3xl"> 
        
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-100 mb-6">
          Get In <span className="text-[#89FFAA]">Touch</span>
        </h2>
        
        <p className="text-center text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Have a question, a project idea, or just want to connect? Feel free to reach out using the form below. Let's build something awesome together!
        </p>

        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
          
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Name">Name</label>
            <input
              type="text"
              name="from_name" 
              id="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#172A3A] border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:border-transparent transition duration-200"
              placeholder="Your Name"
            />
          </div>

          
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Email">Email</label>
            <input
              type="email"
              name="reply_to"  for reply-to
              id="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#172A3A] border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:border-transparent transition duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1" aria-label="Your Message">Message</label>
            <textarea
              name="message" 
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#172A3A] rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#89FFAA] transition duration-200 border-none resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          
          <div className="text-center">
            
            {submitStatus.message && (
              <p className={`mb-4 text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'} animate-fade-in`} aria-live="polite" aria-atomic="true">
                {submitStatus.message}
              </p>
            )}

            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-6 py-2 border border-[#89FFAA] rounded text-[#89FFAA] font-medium focus:outline-none focus:ring-1 focus:ring-[#89FFAA] transition-all duration-200 ${
                isSubmitting
                  ? 'bg-slate-600 text-slate-400 border-slate-600 cursor-not-allowed'
                  : 'bg-transparent hover:bg-[#89FFAA]/10'
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

