import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Twitter, Terminal } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:ulhasbhalerao@email.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-5 relative top-0 " ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="section-header">
                        {/* <span className="section-tag"># contact</span> */}
                    </div>
                    <h2 className="section-title">Initiate Connection</h2>
                    <p className="section-subtitle">
                        Let's discuss your next project
                    </p>
                </motion.div>

                {/* Two Column Grid - Centered */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Terminal Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="terminal-window"
                        >
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="terminal-title">contact.sh</span>
                            </div>
                            <div className="terminal-body">
                                <div className="terminal-line mb-2">
                                    <span className="terminal-prompt">$</span>
                                    <span className="terminal-command">cat contact_info.json</span>
                                </div>
                                <div className="text-sm space-y-2 ml-4 mb-6">
                                    <div>
                                        <span className="text-terminal-purple">"email"</span>
                                        <span className="text-text-muted">: </span>
                                        <span className="text-terminal-green">"ulhasbhalerao@email.com"</span>
                                    </div>
                                    <div>
                                        <span className="text-terminal-purple">"location"</span>
                                        <span className="text-text-muted">: </span>
                                        <span className="text-terminal-green">"India"</span>
                                    </div>
                                    <div>
                                        <span className="text-terminal-purple">"status"</span>
                                        <span className="text-text-muted">: </span>
                                        <span className="text-terminal-green">"Available"</span>
                                    </div>
                                </div>

                                <div className="terminal-line mb-2">
                                    <span className="terminal-prompt">$</span>
                                    <span className="terminal-command">echo $SOCIAL_LINKS</span>
                                </div>
                                <div className="flex justify-center gap-3 mt-4">
                                    <motion.a
                                        href="https://github.com/ulhas001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-btn"
                                        whileHover={{ y: -3 }}
                                    >
                                        <Github className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/ulhas-bhalerao-44171a1b9/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-btn"
                                        whileHover={{ y: -3 }}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href="https://twitter.com/ulhas_007"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-btn"
                                        whileHover={{ y: -3 }}
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bento-card"
                        >
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <Terminal className="w-5 h-5 text-terminal-green" />
                                <span className="font-mono text-sm text-text-muted">./send-message.sh</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-mono text-xs text-text-muted mb-2 ml-1">--name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="input-terminal"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs text-text-muted mb-2 ml-1">--email</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="input-terminal"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs text-text-muted mb-2 ml-1">--message</label>
                                    <textarea
                                        placeholder="Your message..."
                                        rows={4}
                                        className="input-terminal resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="btn-command w-full justify-center"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Send className="w-4 h-4" />
                                    Execute
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
