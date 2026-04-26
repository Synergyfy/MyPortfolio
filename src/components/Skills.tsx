import React from 'react';
import { motion } from 'framer-motion';
import { Database, Settings, TrendingUp, Lightbulb, MessageSquare } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Data Analysis',
    icon: <Database size={24} />,
    skills: [
      { name: 'Excel', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Power BI', level: 85 },
      { name: 'Python', level: 75 }
    ]
  },
  {
    title: 'Business Operations',
    icon: <Settings size={24} />,
    skills: [
      { name: 'Workflow Optimization', level: 90 },
      { name: 'Strategic Planning', level: 85 },
      { name: 'Project Management', level: 88 },
      { name: 'Cross-functional Leadership', level: 80 }
    ]
  },
  {
    title: 'Process Improvement',
    icon: <TrendingUp size={24} />,
    skills: [
      { name: 'System Implementation', level: 92 },
      { name: 'Efficiency Auditing', level: 85 },
      { name: 'Bottleneck Resolution', level: 90 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: <Lightbulb size={24} />,
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Adaptability', level: 95 },
      { name: 'Systems Thinking', level: 88 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Competencies
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-card glass"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <div className="skill-icon text-gradient">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
