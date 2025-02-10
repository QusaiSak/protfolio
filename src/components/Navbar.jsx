import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import Button from "./Button";

const navItems = ["Home", "About", "Technical", "Project", "Work", "Contact"];

const Navbar = () => {
  const [isAudio, setIsAudio] = useState(false);
  const [isIndicator, setIsIndicator] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (isAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudio]);

  return (
    <>
      {/* Single Audio Element shared by both desktop and mobile */}
      <audio ref={audioRef} src="/audio/loop.mp3" loop className="hidden" />

      <div
        ref={navRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex items-center justify-between p-4">
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
                  id="product"
                  title="Resume"
                  rightIcon={<TiLocationArrow />}
                  containerClass="bg-blue-50 md:flex hidden items-center justify-center"
                />
              </a>
            </div>
            <div className="flex items-center">
              {/* Desktop Nav Items */}
              <div className="hidden md:flex ">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn">
                    {item}
                  </a>
                ))}
              </div>
              {/* Desktop Audio Toggle Button visible on desktop only */}
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 hidden md:flex items-center space-x-0.5">
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
                className=" md:hidden flex items-center">
                {isSidebarOpen ? (
                  <AiOutlineClose size={24} className="text-white" />
                ) : (
                  <AiOutlineMenu size={24} className="text-white" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}>
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {/* Sidebar Header: Logo and Audio Toggle */}
            <div className="flex items-center justify-between mb-4">
              <img src="/img/logo.png" alt="logo" className="w-14" />
              <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5">
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
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-blue-600"
                  onClick={toggleSidebar}>
                  {item}
                </a>
              ))}
              <a
                href="/Qusai_Sakerwala.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleSidebar}>
                <Button
                  id="product"
                  title="Resume"
                  rightIcon={<TiLocationArrow />}
                  containerClass="!bg-yellow-300 flex-center gap-1"
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
