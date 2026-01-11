import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download, Terminal } from 'lucide-react';

const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 150) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ${isScrolled
                    ? 'bg-bg-dark/95 backdrop-blur-2xl border border-white/5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
                    : 'bg-bg-dark/60 backdrop-blur-xl border border-white/5 py-4 rounded-2xl'
                    }`}
            >
                <div className="container flex items-center justify-between px-6">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-2 font-mono"
                        whileHover={{ scale: 1.02 }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                    >
                        <div className="w-8 h-8 bg-terminal-green rounded-lg flex items-center justify-center">
                            <Terminal className="w-4 h-4 text-bg-dark" />
                        </div>
                        <span className="text-text font-semibold">ulhas<span className="text-terminal-green">.dev</span></span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                            >
                                /{link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-2">
                        <a
                            href="https://github.com/ulhas001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ulhas-bhalerao-44171a1b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="/Ulhas Bhalerao Resume DevOps.pdf"
                            download
                            className="btn-command text-xs py-2 px-4"
                        >
                            <Download className="w-3 h-3" />
                            resume.pdf
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-terminal-green hover:text-text transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[80px] left-4 right-4 z-40 bg-bg-dark/95 backdrop-blur-xl border border-border rounded-2xl md:hidden overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`nav-link py-3 ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                                >
                                    /{link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-2 pt-4 mt-2 border-t border-border">
                                <a href="https://github.com/ulhas001" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <Github className="w-4 h-4" />
                                </a>
                                <a href="https://www.linkedin.com/in/ulhas-bhalerao-44171a1b9/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="/Ulhas Bhalerao Resume DevOps.pdf" download className="btn-command text-xs py-2 px-4 ml-auto">
                                    <Download className="w-3 h-3" />
                                    resume.pdf
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
