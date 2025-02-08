import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currI, setCurrI] = useState(1);
  const [hasC, setHasC] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadVid, setLoadVid] = useState(0);
  const totalVid = 4;
  const nextVdref = useRef(null);
  const getVdsrc = (i) => `videos/hero-${i}.mp4`;
  const handleVdLoad = () => {
    setLoadVid((prev) => prev + 1);
  };
  const handleminvidclick = () => {
    setHasC(true);
    setCurrI((prev) => (prev % totalVid) + 1);
  };
  useEffect(() => {
    if (loadVid === totalVid - 1) {
      setIsLoading(false);
    }
  }, [loadVid]);

  useGSAP(
    () => {
      if (hasC) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdref.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currI], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleminvidclick}>
              <video
                ref={nextVdref}
                src={getVdsrc((currI % totalVid) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVdLoad}
              />
            </div>
          </div>
          <video
            ref={nextVdref}
            src={getVdsrc(currI)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVdLoad}
          />
          <video
            src={getVdsrc(currI === totalVid - 1 ? 1 : currI)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVdLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          {" "}
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-25 px-5 md:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redifi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Tailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
