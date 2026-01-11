import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
    {
        name: 'Cloud & Infrastructure',
        skills: [
            { name: 'AWS', level: 90, icon: '☁️' },
            { name: 'Azure', level: 75, icon: '🔷' },
            { name: 'GCP', level: 70, icon: '🌐' },
            { name: 'Linux', level: 95, icon: '🐧' },
        ]
    },
    {
        name: 'Containerization & Orchestration',
        skills: [
            { name: 'Docker', level: 95, icon: '🐳' },
            { name: 'Kubernetes', level: 88, icon: '☸️' },
            { name: 'Helm', level: 80, icon: '⎈' },
            { name: 'Podman', level: 70, icon: '📦' },
        ]
    },
    {
        name: 'CI/CD & Automation',
        skills: [
            { name: 'Jenkins', level: 92, icon: '🔧' },
            { name: 'GitLab CI', level: 85, icon: '🦊' },
            { name: 'GitHub Actions', level: 88, icon: '⚡' },
            { name: 'ArgoCD', level: 80, icon: '🔄' },
        ]
    },
    {
        name: 'Infrastructure as Code',
        skills: [
            { name: 'Terraform', level: 90, icon: '🏗️' },
            { name: 'Ansible', level: 88, icon: '🔴' },
            { name: 'CloudFormation', level: 75, icon: '📋' },
            { name: 'Pulumi', level: 65, icon: '🟣' },
        ]
    },
    {
        name: 'Monitoring & Observability',
        skills: [
            { name: 'Prometheus', level: 85, icon: '🔥' },
            { name: 'Grafana', level: 88, icon: '📊' },
            { name: 'ELK Stack', level: 75, icon: '📈' },
            { name: 'Datadog', level: 70, icon: '🐕' },
        ]
    },
    {
        name: 'Scripting & Programming',
        skills: [
            { name: 'Python', level: 85, icon: '🐍' },
            { name: 'Bash', level: 92, icon: '💻' },
            { name: 'Go', level: 65, icon: '🔹' },
            { name: 'JavaScript', level: 75, icon: '🟨' },
        ]
    }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-20 lg:py-32 relative" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
                        &lt;SKILLS /&gt;
                    </span>
                    <h2 className="section-heading">
                        Technologies I <span className="gradient-text">Work With</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        A comprehensive toolkit for building and maintaining modern cloud infrastructure
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {skillCategories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            variants={itemVariants}
                            onClick={() => setActiveCategory(index)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === index
                                ? 'bg-gradient-to-r from-primary to-primary-dark text-dark-900 shadow-lg glow-primary'
                                : 'glass text-gray-300 hover:text-white hover:border-primary/30'
                                }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="card group"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{skill.icon}</span>
                                    <span className="font-semibold text-gray-100">{skill.name}</span>
                                </div>
                                <span className="text-primary font-mono text-sm">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16"
                >
                    <h3 className="text-xl font-semibold text-center mb-8 text-gray-200">
                        Full Technology Stack
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Ansible',
                            'Python', 'Bash', 'Git', 'Linux', 'Nginx', 'RabbitMQ',
                            'PostgreSQL', 'MongoDB', 'Redis', 'Prometheus', 'Grafana', 'ELK',
                            'ArgoCD', 'Helm', 'GitLab CI', 'GitHub Actions', 'SonarQube', 'Vault'
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.5 + index * 0.03 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="tech-badge cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default Skills;
