import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              My journey began in Nigeria, where I developed an early curiosity for how things work—and more importantly, how they could work better. That curiosity evolved into a career centered around optimizing processes and making data-driven decisions.
            </p>
            <p>
              Transitioning to the UK marked a significant period of growth and adaptability. I learned to navigate new business environments, bringing my foundation in analytical thinking to diverse roles. Whether I'm building operational workflows or extracting insights from complex datasets, my goal remains the same: to create scalable systems that drive real impact.
            </p>
            <p>
              I believe in the power of continuous learning and growth through imperfection. I am not just a Data Analyst or a Business Operations Specialist; I am a systems thinker dedicated to solving problems and empowering businesses to reach their full potential.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-card glass">
              <h3 className="stat-number text-gradient">7+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-card glass">
              <h3 className="stat-number text-gradient">Data</h3>
              <p className="stat-label">Driven Mindset</p>
            </div>
            <div className="stat-card glass">
              <h3 className="stat-number text-gradient">Systems</h3>
              <p className="stat-label">Thinker</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
