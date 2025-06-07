import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./Animated";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        scrub: 0.2,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    });

    mainTimeline
      .to(".initial-content", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(
        ".mask-clip-path",
        {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "-=0.1",
      )
      .to(".about-content", {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
  });

  return (
    <div id="about" className="min-h-screen w-screen overflow-hidden">
      <div className="initial-content relative mb-6 mt-20 md:mt-36 flex flex-col items-center gap-3 md:gap-5 will-change-transform">
        <p className="font-general text-md md:text-xl uppercase">Discover</p>
        <AnimatedTitle
          title="<b>Full-Stack</b><br />develo<b>per</b>"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="h-screen md:h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image will-change-[transform,width,height]">
          <img
            src="/img/entrance.webp"
            alt="about"
            className="absolute left-0 top-0 size-full object-cover"
            loading="eager"
          />

          <div className="about-content absolute inset-0 opacity-0 translate-y-8 p-4 md:p-8 bg-black/50 will-change-transform overflow-y-auto">
            <div className="relative h-full flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mt-10 md:mt-32 max-w-2xl">
                <p className="special-font text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-4">
                  Who I Am
                </p>
                <h1 className="special-font text-6xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-4">
                  <b>Full-Stack</b>
                  <br />
                  <b>developer</b>
                </h1>
                <p className="font-general text-md md:text-xl uppercase text-gray-300 mt-2">
                  Crafting digital experiences that matter
                </p>
                <p className="font-general text-sm md:text-base text-gray-300 mt-4 leading-relaxed">
                  I transform ideas into exceptional digital solutions. With expertise in React, Node.js, and cutting-edge web technologies, I build scalable applications that blend innovative design with robust functionality. My passion lies in creating user-centric experiences that not only look stunning but perform flawlessly across all platforms.
                </p>
              </div>

              <img
                src="/img/profile.png"
                alt="Profile"
                className=" rounded-full object-cover mt-4 md:mt-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;