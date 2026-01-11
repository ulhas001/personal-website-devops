import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ArrowUpRight, Package } from 'lucide-react';

const projects = [

    {
        id: 1,
        title: 'ArticleToMarkdown',
        shortTitle: 'Article To Markdown',
        description: 'Utility tool to convert web articles into clean Markdown format for documentation and note-taking.',
        tech: ['Python', 'Markdown', 'Web Scraping'],
        github: 'http://d3p34y1uj4vxc8.cloudfront.net/',
        color: 'terminal-purple',
        featured: true
    },
    {
        id: 4,
        title: 'AI-Text-Cleaner',
        shortTitle: 'AI Text Cleaner',
        description: 'Intelligent text processing tool leveraging AI capabilities for cleaning and formatting text data.',
        tech: ['Python', 'AI/ML', 'NLP'],
        github: 'https://d2rvqgmip0xjv3.cloudfront.net/',
        color: 'terminal-cyan',
        featured: true
    },

    {
        id: 3,
        title: 'Setup-AWS-EFS-with-Persistent-Mount-',
        shortTitle: 'AWS EFS Setup',
        description: 'Infrastructure automation for AWS Elastic File System with persistent mount configurations across EC2 instances.',
        tech: ['AWS', 'EFS', 'Terraform', 'Shell'],
        github: 'https://github.com/ulhas001/Setup-AWS-EFS-with-Persistent-Mount-',
        color: 'terminal-blue',
        featured: true
    },
    {
        id: 4,
        title: 'RabbitMQ_Cluster_with_Ansible',
        shortTitle: 'RabbitMQ Cluster',
        description: 'Automated deployment of highly available RabbitMQ cluster using Ansible playbooks with clustering, user management, and monitoring.',
        tech: ['Ansible', 'RabbitMQ', 'Linux', 'Shell'],
        github: 'https://github.com/ulhas001/RabbitMQ_Cluster_with_Ansible',
        color: 'terminal-amber',
        featured: true
    },
    {
        id: 5,
        title: 'Chest-Disease-Detection',
        shortTitle: 'Chest Disease Detection',
        description: 'ML project for medical image classification to detect chest diseases from X-ray images using deep learning.',
        tech: ['Python', 'TensorFlow', 'Deep Learning'],
        github: 'https://github.com/ulhas001/Chest-Disease-Detection-And-Classification',
        color: 'terminal-green',
        featured: true
    }
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="py-5 relative top-0" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="section-header">
                        {/* <span className="section-tag"># projects</span> */}
                    </div>
                    <h2 className="section-title"> Personal Projects</h2>
                    <p className="section-subtitle">
                        Open source projects and automation tools I've built
                    </p>
                </motion.div>

                {/* Bento Grid - Centered */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.a
                                key={project.id}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bento-card group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-10 h-10 rounded-lg bg-${project.color}/10 flex items-center justify-center`}>
                                        <Package className={`w-5 h-5 text-${project.color}`} />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-terminal-green transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="font-mono text-sm text-text-muted mb-1">{project.title}</h3>
                                <h4 className="text-lg font-semibold text-text mb-3 group-hover:text-terminal-green transition-colors">
                                    {project.shortTitle}
                                </h4>
                                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* View All - Centered with more margin */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-6"
                >
                    <motion.a
                        href="https://github.com/ulhas001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Github className="w-4 h-4" />
                        git clone all-repos
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
