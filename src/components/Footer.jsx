import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/qusaisakerwala/",
    icon: <FaLinkedin className="text-xl md:text-2xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/qusai_754/",
    icon: <FaInstagram className="text-xl md:text-2xl" />,
    label: "Instagram",
  },
  {
    href: "https://github.com/QusaiSak",
    icon: <FaGithub className="text-xl md:text-2xl" />,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/QusaiCodes/",
    icon: <SiLeetcode className="text-xl md:text-2xl" />,
    label: "LeetCode",
  },
  {
    href: "https://www.codechef.com/users/qusai_codes",
    icon: <SiCodechef className="text-xl md:text-2xl" />,
    label: "CodeChef",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-black py-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Qusai Sakerwala
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.label}>
                <span className="absolute -inset-2 -z-10 rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                <span className="relative text-gray-400 transition-all duration-300 group-hover:text-blue-300">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
