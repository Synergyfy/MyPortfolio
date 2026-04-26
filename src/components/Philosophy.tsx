import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
  return (
    <section className="section philosophy-section">
      <div className="container">
        <motion.div 
          className="philosophy-content glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Quote size={48} className="quote-icon text-gradient" />
          <h2 className="philosophy-statement">
            "I believe in growth through imperfection, continuous learning, and building systems that create real impact."
          </h2>
          <div className="philosophy-author">
            — Tobiloba Oyelakin
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
