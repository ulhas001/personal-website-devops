import { Github, Linkedin, Twitter, ArrowUp, Heart, Terminal } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-15 border-t border-border relative top-0 ">
            <div className="container">
                {/* Main Footer - Centered */}
                <div className="flex justify-center items-center gap-10">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-terminal-green rounded-lg flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-bg-dark" />
                        </div>
                        <div className="text-center">
                            <span className="font-mono font-semibold text-lg">ulhas<span className="text-terminal-green">.dev</span></span>
                            <p className="text-text-muted text-sm font-mono">DevOps Engineer</p>
                        </div>
                    </div>

                    {/* Links - Centered */}
                    <div className="flex flex-wrap justify-center items-center gap-8 font-mono text-sm">
                        <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-text-muted hover:text-terminal-green transition-colors">/home</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-text-muted hover:text-terminal-green transition-colors">/about</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-text-muted hover:text-terminal-green transition-colors">/projects</a>
                        <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-text-muted hover:text-terminal-green transition-colors">/experience</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-text-muted hover:text-terminal-green transition-colors">/contact</a>
                    </div>

                    {/* Social - Centered */}
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/ulhas001" target="_blank" rel="noopener noreferrer" className="social-btn">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ulhas-bhalerao-44171a1b9/" target="_blank" rel="noopener noreferrer" className="social-btn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/ulhas_007" target="_blank" rel="noopener noreferrer" className="social-btn">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom - Centered */}
                <div className="flex justify-center items-center gap-4 mt-12 pb-5 pt-8 border-t border-border">
                    <p className="text-text-muted text-sm font-mono flex items-center gap-2">
                        <span className="text-terminal-green">$</span>
                        echo "© {currentYear} Ulhas Bhalerao"
                        <Heart className="w-3 h-3 text-terminal-red fill-terminal-red" />
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-text-muted hover:text-terminal-green text-sm font-mono transition-colors group"
                    >
                        cd ~
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
