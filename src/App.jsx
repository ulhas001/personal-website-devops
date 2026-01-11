import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-bg-dark min-h-screen">
      {/* Grid Background - Full Page */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-terminal-green/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-terminal-blue/3 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-terminal-purple/3 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
