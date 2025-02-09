import { FaLocationArrow } from "react-icons/fa";
import AnimatedTitle from "./Animated";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A matrix theme personal portfolio showcasing projects, skills, and contact information with a modern UI.",
    image: "/img/project1.png",
    link: "https://marknoxproj.vercel.app/",
    Live: true,
  },
  {
    title: "Vision Capital",
    description:
      "A financial dashboard for tracking investments, providing real-time data visualization and analytics.",
    image: "/img/project2.png",
    link: "https://github.com/QusaiSak/VisionCapital",
  },
  {
    title: "Iotian",
    description:
      "An ecommerce website focused on selling tech devices project focusing on smart device integration with real-time monitoring and control features.",
    image: "/img/project3.png",
    link: "https://github.com/Karannisar/ioreact",
  },
  {
    title: "Kaios",
    description:
      "A weather application designed with a modern UI which helps my team secure 3rd place in a Frontend Hackathon.",
    image: "/img/project4.png",
    link: "https://github.com/QusaiSak/WeatherGreek",
  },
  {
    title: "Coin Search",
    description:
      "A cryptocurrency tracker that provides market trends, price updates, and detailed coin information.",
    image: "/img/project5.png",
    link: "https://github.com/QusaiSak/Crypto-React",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bento-tilt_2 border-hsla mr-4">
      <div className="relative ">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-300">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4">
          {project.description}
        </p>
        <a
          href={project.link}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
          {project.Live ? (
            <span className="mr-2">Check Live Site</span>
          ) : (
            <span className="mr-2">Github Link</span>
          )}
          <FaLocationArrow />
        </a>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedTitle
            title="<b>My Projects</b>"
            containerClass="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400"
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
