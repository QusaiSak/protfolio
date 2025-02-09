import { Code2, Database, Palette, Terminal } from "lucide-react";
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./Animated";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}>
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
    <div className="relative bg-[#0a0a1f] overflow-hidden h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,100,0.2),transparent_70%)]" />
      <div className="relative z-10 grid grid-cols-2 h-full p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-medium text-white/80 mb-2">
            I constantly try to improve
          </h2>
          <h1 className="text-4xl font-bold text-white">My tech stack</h1>
        </div>

        <div className="overflow-hidden pr-4">
          <div className="animate-scroll grid grid-cols-2 gap-2">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="bg-[#1a1a3f]/80 px-3 py-2.5 backdrop-blur-sm border border-white/10 rounded-md shadow-lg hover:border-white/20 transition-all duration-300">
                <span className="text-white/90 text-sm font-medium">
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

// ... existing code ...

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

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

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
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

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_2">
          <TechStackCard />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <div className="relative size-full">
            <img
              src="img/b5.svg"
              className="absolute left-32 top-10 size-full object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
              <div>
                <h1 className="bento-title special-font">Coding</h1>

                <p className="mt-3 max-w-64 text-xs md:text-base">
                  Exploring the endless possibilities of code, one line at a
                  time.
                </p>
              </div>
            </div>{" "}
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

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <div className="relative size-full">
            <img
              src="img/b4.svg"
              className="absolute left-36 top-10 size-full object-cover object-center"
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
            </div>{" "}
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font  text-black">
              Do you w<b>a</b>nt to st<b>a</b>rt <b>a</b> proj<b>e</b>ct tog
              <b>e</b>th<b>e</b>r ?
            </h1>
            <a
              href="mailto:youremail@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-end ">
              <button className="flex items-center justify-center  p-2 rounded ">
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
