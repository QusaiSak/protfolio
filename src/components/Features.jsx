import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./Animated";

export const BentoTilt = ({ children, className = "" }) => {
  return (
    <div
      className={className}
      >
      {children}
    </div>
  );
};

// ... existing code ...

export const TechStackCard = () => {
  const techStack = [
    "ReactJS",
    "Express",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "REST APIs",
    "TailwindCSS",
    "Next.js",
  ];

  return (
    <div className="relative bg-[#0a0a1f] overflow-hidden h-auto md:h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,100,0.2),transparent_70%)]" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full p-4 md:p-8">
        <div className="flex flex-col justify-center mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl font-medium text-white/80 mb-2">
            I constantly try to improve
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My tech stack
          </h1>
        </div>

        <div className="overflow-hidden pr-2 md:pr-4">
          <div className="animate-scroll grid grid-cols-2 gap-2 md:gap-4">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="bg-[#1a1a3f]/80 px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm border border-white/10 rounded-md shadow-lg hover:border-white/20 transition-all duration-300">
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      {src && (
        <img
          src={src}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52" id="technical">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32 flex flex-col items-center">
        <AnimatedTitle
          title="t<b>e</b>chnical"
          containerClass="mt-5 text-center"
        />
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 text-center mt-3">
          A comprehensive toolkit of modern web technologies and development
          practices, enabling the creation of scalable and performant
          applications.
        </p>
      </div>

      <div className="grid w-full gap-7 grid-cols-1 md:grid-cols-2 md:grid-rows-3 h-auto md:h-[135vh] ">
        <BentoTilt className="bento-tilt_2">
          <TechStackCard />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <div className="relative size-full">
            <img
              src="img/b5.svg"
              className="absolute left-1/2 top-10 transform -translate-x-1/2 md:left-32 md:translate-x-0 size-full object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
              <div>
                <h1 className="bento-title special-font">Coding</h1>
                <p className="mt-3 max-w-64 text-xs md:text-base">
                  Exploring the endless possibilities of code, one line at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/b1.svg"
            title={
              <>
                Tim<b>e</b> Zone
              </>
            }
            description="I'm very flexible with time zone communications"
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <div className="relative size-full">
            <img
              src="img/b4.svg"
              className="absolute left-1/2 top-10 transform -translate-x-1/2 md:left-36 md:translate-x-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
              <div>
                <h1 className="bento-title special-font">
                  T<b>e</b>ch <b>e</b>nthusiast
                </h1>
                <p className="mt-3 max-w-64 text-xs md:text-base">
                  with a passion for development.
                </p>
              </div>
            </div>
          </div>
        </BentoTilt>
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font text-black">
              Do you w<b>a</b>nt to st<b>a</b>rt <b>a</b> proj<b>e</b>ct tog
              <b>e</b>th<b>e</b>r?
            </h1>
            <a
              href="mailto:qusaisakerwala@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-end">
              <button className="flex items-center justify-center p-2 rounded">
                <h3 className="bento-title text-5xl special-font text-black">
                  Email Me
                </h3>
                <TiLocationArrow className="scale-[4] m-4" />
              </button>
            </a>
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
