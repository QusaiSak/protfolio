import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technical", href: "#technical" },
  { label: "Projects", href: "#project" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isAudio, setIsAudio] = useState(false);
  const [isIndicator, setIsIndicator] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const audioRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudio((prev) => !prev);
    setIsIndicator((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (isAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudio]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      let currentSection = "home";
      let minDistance = Infinity;

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Single Audio Element shared by both desktop and mobile */}
      <audio ref={audioRef} src="/audio/loop.mp3" loop className="hidden" />

      <div
        ref={navRef}
        className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="mx-auto max-w-7xl">
            <div className="relative flex items-center justify-between px-4 py-3 backdrop-blur-md bg-black/30 rounded-2xl border border-white/10">
              <div className="flex items-center gap-7">
                {/* Logo visible on desktop only */}
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-14 hidden md:block"
                />
                <a
                  href="/Qusai_Sakerwala.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    id="resume-button"
                    title="Resume"
                    rightIcon={
                      <TiLocationArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    }
                    containerClass="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 md:flex hidden items-center justify-center group"
                  />
                </a>
              </div>
              <div className="flex items-center">
                {/* Desktop Nav Items */}
                <div className="hidden md:flex space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-white bg-white/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}>
                      {item.label}
                    </a>
                  ))}
                </div>
                {/* Desktop Audio Toggle Button visible on desktop only */}
                <button
                  onClick={toggleAudioIndicator}
                  className="ml-6 hidden md:flex items-center space-x-0.5 bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`indicator-line ${isIndicator ? "active" : ""}`}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))}
                </button>
                {/* Hamburger icon for mobile */}
                <button
                  onClick={toggleSidebar}
                  className="md:hidden flex items-center ml-4">
                  {isSidebarOpen ? (
                    <AiOutlineClose size={24} className="text-white" />
                  ) : (
                    <AiOutlineMenu size={24} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div
            className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-gray-900 to-black p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <img src="/img/logo.png" alt="logo" className="w-14" />
              <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5 bg-white/5 px-3 py-2 rounded-lg">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${isIndicator ? "active" : ""}`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(e, item.href);
                    toggleSidebar();
                  }}>
                  {item.label}
                </a>
              ))}
              <a
                href="/Qusai_Sakerwala.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleSidebar}>
                <Button
                  id="mobile-resume"
                  title="Resume"
                  rightIcon={
                    <TiLocationArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  }
                  containerClass="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 w-full flex items-center justify-center mt-4 group"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
