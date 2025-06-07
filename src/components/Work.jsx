import { FaLocationArrow } from "react-icons/fa";
import AnimatedTitle from "./Animated";

const workExperience = [
  {
    id: 1,
    title: "Freelancing Frontend",
    desc: "Lead Developer in creating the Iotian website",
    link: "https://github.com/Karannisar/ioreact",
    thumbnail: "img/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Offee",
  //   desc: "Fullstack Developer for Offee",
  //   thumbnail: "img/exp4.svg",
  // },
];

const WorkCard = ({ project }) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mx-auto max-w-sm">
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="w-64 h-64 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden w-full h-full items-center justify-center text-gray-400">
            <span>Image Not Found</span>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-300 text-center">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4 text-center">
          {project.desc}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium">
          <span className="mr-2">Github Link</span>
          <FaLocationArrow className="text-sm" />
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section
      className="h-[850px] w-full text-white px-4 md:px-8 flex items-center justify-center"
      style={{ backgroundImage: 'url("img/image.png")' }}
      id="work">
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <AnimatedTitle
          title="<b>Work Experience</b>"
          containerClass="text-3xl md:text-4xl lg:text-6xl font-bold mb-12"
        />
        <div className="grid grid-cols-1  gap-8 justify-items-center">
          {workExperience.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
