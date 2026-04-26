import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Global Operations Restructuring',
    category: 'Process Improvement',
    problem: 'Disjointed communication and operational bottlenecks across international teams leading to delayed deliverables.',
    approach: 'Audited existing workflows, implemented a unified operational framework, and introduced cross-functional KPI tracking.',
    outcome: 'Improved cross-functional efficiency by 35% and reduced project delivery times by 2 weeks on average.'
  },
  {
    title: 'Financial Workflow Optimization',
    category: 'Business Operations',
    problem: 'Manual financial data entry processes causing high error rates and slow reporting cycles.',
    approach: 'Automated data collection using SQL/Python, integrated direct reporting into Power BI dashboards.',
    outcome: 'Reduced manual entry errors by 90% and accelerated end-of-month financial reporting from 5 days to 1 day.'
  },
  {
    title: 'Property Tech Insights Platform',
    category: 'Data Analysis',
    problem: 'Lack of actionable insights into tenant behavior and property performance metrics.',
    approach: 'Aggregated disjointed data sources, cleaned and structured data, and built interactive dashboards for stakeholders.',
    outcome: 'Enabled data-driven decision making, leading to a 20% increase in tenant retention strategies effectiveness.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card glass"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-details">
                <div className="detail-group">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="detail-group">
                  <h4>Approach</h4>
                  <p>{project.approach}</p>
                </div>
                <div className="detail-group outcome">
                  <h4>Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
              
              <button className="project-link">
                View Details <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
