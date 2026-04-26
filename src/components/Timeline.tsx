import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    company: 'Vemtap',
    role: 'Current Phase – Innovation & Growth',
    contributions: 'Spearheading innovation and driving growth through strategic data analysis and operational improvements.',
    skills: ['Strategic Planning', 'Innovation', 'Growth Strategy']
  },
  {
    company: 'HELP2HOME LTD',
    role: 'Data Analysis & Business Insights',
    contributions: 'Extracted key business insights from complex datasets to inform strategic decision-making and optimize operations.',
    skills: ['Data Analysis', 'Business Insights', 'Reporting']
  },
  {
    company: '247 GBS',
    role: 'Structured Global Business Operations',
    contributions: 'Developed and implemented structured business operations across global teams, enhancing cross-functional efficiency.',
    skills: ['Global Operations', 'Process Structuring', 'Cross-functional Leadership']
  },
  {
    company: 'Help2Rent',
    role: 'Property Tech & Operational Systems',
    contributions: 'Managed operational systems in the property tech sector, streamlining workflows for better client experiences.',
    skills: ['PropTech', 'Workflow Optimization', 'System Management']
  },
  {
    company: 'Cashiet LTD',
    role: 'Financial Operations & Workflows',
    contributions: 'Optimized financial operations and internal workflows to increase accuracy and reduce operational bottlenecks.',
    skills: ['Financial Operations', 'Workflow Design', 'Accuracy Improvement']
  },
  {
    company: 'Synergfy Global',
    role: 'Business Systems & Strategy',
    contributions: 'Expanded focus into comprehensive business systems and overarching strategy implementation.',
    skills: ['Business Strategy', 'Systems Implementation', 'Scaling']
  },
  {
    company: 'Synergy Media',
    role: 'Foundation in Media & Branding',
    contributions: 'Built foundational skills in media, branding, and early operational coordination.',
    skills: ['Media Management', 'Branding', 'Coordination']
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Career Journey
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={16} />
                </div>
              </div>
              <div className="timeline-content glass">
                <h3 className="timeline-company text-gradient">{exp.company}</h3>
                <h4 className="timeline-role">{exp.role}</h4>
                <p className="timeline-contributions">{exp.contributions}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
