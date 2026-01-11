import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cloud, GitBranch, Code2, Container, Settings } from 'lucide-react';

const skills = [
    { name: 'Docker', icon: Container, level: 95, textClass: 'text-terminal-blue', bgClass: 'bg-terminal-blue' },
    { name: 'Azure', icon: Settings, level: 90, textClass: 'text-terminal-purple', bgClass: 'bg-terminal-purple' },
    { name: 'Kubernetes', icon: Settings, level: 70, textClass: 'text-terminal-green', bgClass: 'bg-terminal-purple' },
    { name: 'AWS', icon: Cloud, level: 90, textClass: 'text-terminal-amber', bgClass: 'bg-terminal-amber' },
    { name: 'Terraform', icon: Server, level: 88, textClass: 'text-terminal-cyan', bgClass: 'bg-terminal-cyan' },
    { name: 'Ansible', icon: Code2, level: 85, textClass: 'text-terminal-green', bgClass: 'bg-terminal-green' },
    { name: 'GitLab', icon: GitBranch, level: 90, textClass: 'text-terminal-blue', bgClass: 'bg-terminal-blue' },

];

const techStack = [
    'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Ansible', 'GitLab',
    'Python', 'Bash', 'Git', 'Linux', 'Prometheus', 'Grafana',
    'PostgreSQL', 'RabbitMQ',
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="py-5 relative top-0" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="section-header">
                        {/* <span className="section-tag"># about</span> */}
                    </div>
                    <h2 className="section-title">System Configuration</h2>
                    <p className="section-subtitle">
                        Core competencies and technology stack
                    </p>
                </motion.div>

                {/* Bento Layout - Centered */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        {/* Main Terminal - Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-2 terminal-window"
                        >
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="terminal-title">skills.config</span>
                            </div>
                            <div className="terminal-body">
                                <div className="terminal-line mb-4">
                                    <span className="terminal-prompt">$</span>
                                    <span className="terminal-command">cat /etc/skills.conf</span>
                                </div>

                                <div className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="flex items-center gap-4"
                                        >
                                            <span className={`${skill.textClass} w-24`}>{skill.name}</span>
                                            <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                                    className={`h-full ${skill.bgClass} rounded-full`}
                                                />
                                            </div>
                                            <span className="text-text-muted text-sm w-12">{skill.level}%</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Cards */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bento-card text-center"
                            >
                                <div className="text-4xl font-bold text-terminal-green mb-2">2+</div>
                                <div className="text-text-muted text-sm font-mono">years_experience</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bento-card text-center"
                            >
                                <div className="text-4xl font-bold text-terminal-blue mb-2">10+</div>
                                <div className="text-text-muted text-sm font-mono">projects_completed</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bento-card text-center"
                            >
                                <div className="text-4xl font-bold text-terminal-purple mb-2">15+</div>
                                <div className="text-text-muted text-sm font-mono">technologies</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Tech Stack - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bento-card text-center"
                    >
                        <div className="terminal-line mb-6 justify-center">
                            <span className="terminal-prompt font-mono">$</span>
                            <span className="terminal-command font-mono">ls -la /usr/local/tools/</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.6 + index * 0.03 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="tech-tag cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
