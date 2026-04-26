import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, Download, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-container glass">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's build something great.</h3>
            <p>
              Whether you need to optimize operations, extract insights from data, or build scalable business systems, I'm ready to help.
            </p>
            
            <div className="contact-links">
              <a href="mailto:oyelakintobiloba01@gmail.com" className="contact-link">
                <div className="link-icon"><Mail size={20} /></div>
                <span>oyelakintobiloba01@gmail.com</span>
              </a>
              <a href="#" className="contact-link">
                <div className="link-icon"><Link size={20} /></div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
            
            <a href="#" className="btn btn-secondary cv-btn">
              Download CV <Download size={18} />
            </a>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
