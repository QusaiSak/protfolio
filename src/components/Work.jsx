import { FaLocationArrow } from "react-icons/fa";
import AnimatedTitle from "./Animated";

const workExperience = [
  {
    id: 1,
    title: "Freelancing Frontend",
    desc: "Lead Developer in creating the Iotian website",
    link: "https://github.com/Karannisar/ioreact",
    className: "md:col-span-1",
    thumbnail: "img/exp1.svg",
  },
];

const WorkCard = ({ project }) => {
  return (
    <div className="bento-tilt_2 mx-auto">
      <div className="p-6 flex flex-col items-center justify-center">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className="object-cover size-64"
        />
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-300">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4">
          {project.desc}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
          <span className="mr-2">Github Link</span>
          <FaLocationArrow />
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section
      className="min-h-screen w-full text-white  px-4 md:px-8 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("img/gallery-2.webp")' }}
      id="work">
      <div className="text-center  bg-opacity-60 p-8 rounded-xl">
        <AnimatedTitle
          title="<b> Work Experience</b>"
          containerClass="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-8"
        />
        {workExperience.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
