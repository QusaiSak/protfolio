import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/qusaisakerwala/",
    icon: (
      <FaLinkedin className="text-blue-100 hover:text-yellow-300 md:text-2xl text-lg transition-all duration-300" />
    ),
  },
  {
    href: "https://www.instagram.com/qusai_754/",
    icon: (
      <FaInstagram className="text-blue-100 hover:text-yellow-300 md:text-2xl text-lg transition-all duration-300" />
    ),
  },
  {
    href: "https://github.com/QusaiSak",
    icon: (
      <FaGithub className="text-blue-100 hover:text-yellow-300 md:text-2xl text-lg transition-all duration-300" />
    ),
  },
  {
    href: "https://leetcode.com/u/QusaiCodes/",
    icon: (
      <SiLeetcode className="text-blue-100 hover:text-yellow-300 md:text-2xl text-lg transition-all duration-300" />
    ),
  },
  {
    href: "https://www.codechef.com/users/qusai_codes",
    icon: (
      <SiCodechef className="text-blue-100 hover:text-yellow-300 md:text-2xl text-lg transition-all duration-300" />
    ),
  },
];

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialRef = useRef(null);
  const decorationRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
      .from(
        subtitleRef.current.children,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.5",
      )
      .from(
        socialRef.current.children,
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.3",
      )
      .from(
        ".decoration-element",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.5",
      );

    // Parallax effect on decoration elements
    gsap.to(".decoration-element", {
      y: "random(-100, 100)",
      x: "random(-100, 100)",
      rotation: "random(-180, 180)",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      id="hero-section"
      className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-0">
      {/* Decoration Elements */}
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden">
        <div className="decoration-element absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="decoration-element absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="decoration-element absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-6xl">
          <div className="text-center">
            <div ref={titleRef} className="overflow-hidden">
              <h1 className="bg-gradient-to-r from-blue-100 via-purple-300 to-yellow-200 bg-clip-text text-4xl font-bold text-transparent md:text-7xl lg:text-8xl">
                Hi, I&apos;m{" "}
                <span className="font-extrabold">Qusai Sakerwala</span>
              </h1>
            </div>

            <div ref={subtitleRef} className="mt-8 space-y-4">
              <p className="text-lg text-blue-100/80 md:text-xl">
                Third-Year Student at KJ Somaiya College of Engineering
              </p>
              <p className="text-lg text-blue-100/80 md:text-xl">
                Mumbai, India
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-400 md:text-base">
                Creating seamless digital experiences and
                turning complex problems into elegant solutions. Specialized in
                modern web technologies and best practices.
              </p>
            </div>

            <div
              ref={socialRef}
              className="mt-8 flex items-center justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative">
                  <span className="absolute -inset-2 -z-10 rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  <span className="relative transform transition-all duration-300 group-hover:scale-110">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-[1px]">
              <div className="rounded-full bg-black px-4 py-2 text-sm text-gray-400">
                Available for Freelance Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="mouse-scroll-animation">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
