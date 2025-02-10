import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/Project";
import Work from "./components/Work";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ProjectShowcase />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
