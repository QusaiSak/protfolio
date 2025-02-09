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
      <div className="initial-content relative mb-8 mt-36 flex flex-col items-center gap-5 will-change-transform">
        <p className="font-general text-sm uppercase md:text-2xl">About Me</p>
        <AnimatedTitle
          title="Fronte<b>n</b>d<br />develo<b>per</b>"
          containerClass="mt-5 !text-black text-center"
        />
        
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image will-change-[transform,width,height]">
          <img
            src="/img/about.webp"
            alt="about"
            className="absolute left-0 top-0 size-full object-cover"
            loading="eager"
          />

          <div className="about-content absolute inset-0 opacity-0 translate-y-8 p-8 bg-black/50 will-change-transform overflow-y-auto">
            <div className="relative h-full flex ">
              <div className="flex-1 mt-20">
                <p className="font-general text-sm uppercase md:text-2xl text-white">
                  About Me
                </p>
                <h1 className="special-font subhero-heading text-blue-100">
                  Fronte<b>n</b>d<br />
                  develo<b>per</b>
                </h1>
                <p className="font-general text-sm uppercase md:text-2xl text-white">
                  Passionate about creating seamless web experiences
                </p>
                <p className="font-general text-sm uppercase md:text-2xl text-blue-50">
                  Specialized in React, Node.js, and modern web technologies
                </p>
              </div>

              <img
                src="/img/profile.png"
                alt="Profile"
                className="size-auto "
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
