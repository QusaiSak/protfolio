import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/qusaisakerwala/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/qusai_754/",
    icon: <FaInstagram />,
  },
  {
    href: "https://github.com/QusaiSak",
    icon: <FaGithub />,
  },
  {
    href: "https://leetcode.com/u/QusaiCodes/",
    icon: <SiLeetcode />,
  },
  {
    href: "https://www.codechef.com/users/qusai_codes",
    icon: <SiCodechef />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex gap-2 ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-yellow-400 md:text-xl">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
