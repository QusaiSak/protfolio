import { FaLocationArrow } from "react-icons/fa";
import AnimatedTitle from "./Animated";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A matrix theme personal portfolio showcasing projects, skills, and contact information with a modern UI.",
    image: "/img/project1.png",
    link: "https://marknoxproj.vercel.app/",
    icon: ["img/next.svg", "img/ts.svg", "img/tail.svg"],
    live: true,
  },
  {
    title: "Vision Capital",
    description:
      "A financial dashboard for tracking investments, providing real-time data visualization and analytics.",
    image: "/img/project2.png",
    icon: ["img/re.svg", "img/tail.svg", "img/nodejs.svg"],
    link: "https://github.com/QusaiSak/VisionCapital",
    live: false,
  },
  {
    title: "Iotian",
    description:
      "An ecommerce website focused on selling tech devices, integrating animation for a better UX.",
    image: "/img/project3.png",
    icon: ["img/re.svg", "img/tail.svg"],
    link: "https://github.com/Karannisar/ioreact",
    live: false,
  },
  {
    title: "Kaios",
    description:
      "A weather application designed with a modern UI which helped my team secure 3rd place in a Frontend Hackathon.",
    image: "/img/project4.png",
    icon: ["img/re.svg", "img/tail.svg"],
    link: "https://github.com/QusaiSak/WeatherGreek",
    live: false,
  },
  {
    title: "Coin Search",
    description:
      "A cryptocurrency tracker that provides market trends, price updates, and detailed coin information.",
    image: "/img/project5.png",
    icon: ["img/re.svg", "img/tail.svg"],
    link: "https://github.com/QusaiSak/Crypto-React",
    live: false,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bento-tilt_2 border-hsla mr-4 md:scale-100 md:hover:scale-105">
      <div className="relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-60 w-full"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-300">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {project.icon.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}>
                <img src={icon} alt={`icon-${index}`} className="p-2" />
              </div>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
            {project.live ? (
              <span className="mr-2">Check Live Site</span>
            ) : (
              <span className="mr-2">Github Link</span>
            )}
            <FaLocationArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <section
      className="min-h-screen w-full bg-black text-white py-16 px-4 md:px-8"
      id="project">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedTitle
            title="<b>My Projects</b>"
            containerClass="text-3xl md:text-4xl lg:text-8xl font-bold "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;