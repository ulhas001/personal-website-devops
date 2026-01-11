import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Terminal, Play } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'ulhas-bhalerao --role="DevOps Engineer"';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20 top-8">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-terminal-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-terminal-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=""
                    >
                        <div className="status-badge inline-flex">
                            <span className="status-dot" />
                            <span>AVAILABLE FOR HIRE</span>
                        </div>
                    </motion.div>

                    {/* Terminal Window - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="terminal-window glow-green mb-12 max-w-2xl mx-auto"
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot terminal-dot-red" />
                            <div className="terminal-dot terminal-dot-yellow" />
                            <div className="terminal-dot terminal-dot-green" />
                            <span className="terminal-title">portfolio@ulhas:~</span>
                        </div>
                        <div className="terminal-body text-left">
                            <div className="terminal-line">
                                <span className="terminal-prompt">$</span>
                                <span className="terminal-command">whoami</span>
                            </div>
                            <div className="terminal-output mb-4">
                                → Ulhas Bhalerao
                            </div>
                            <div className="terminal-line">
                                <span className="terminal-prompt">$</span>
                                <span className="terminal-command">{typedText}</span>
                                {showCursor && <span className="terminal-cursor" />}
                            </div>
                            <div className="terminal-output mt-4">
                                <div className="flex flex-wrap justify-center gap-4 mt-2">
                                    <span className="text-terminal-green">✓ Docker</span>
                                    <span className="text-terminal-blue">✓ Kubernetes</span>
                                    <span className="text-terminal-purple">✓ AWS</span>
                                    <span className="text-terminal-amber">✓ Terraform</span>
                                    <span className="text-terminal-cyan">✓ Ansible</span>
                                    <span className="text-terminal-blue">✓ Git</span>  
                                    <span className="text-terminal-amber">✓ Azure</span>  
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Building <span className="text-terminal-green glow-text-green">Infrastructure</span>
                            <br />That Scales
                        </h1>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            DevOps Engineer passionate about automating everything,
                            building CI/CD pipelines, and deploying cloud-native applications.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-12"
                    >
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            className="btn-command"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Play className="w-4 h-4" />
                            ./view-projects.sh
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className="btn-outline"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Terminal className="w-4 h-4" />
                            ./contact-me.sh
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    
                        
                   
                </div>
            </div>
        </section>
    );
};

export default Hero;
