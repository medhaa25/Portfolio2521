import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-40 place-self-center">

      <div
        className="h-screen w-full dark:bg-orange-100 bg-white dark:bg-grid-white/[0.03] bg-grid-orange-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
       
        <div
          
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-b from-red-200 to-pink-800 "
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">


          <TextGenerateEffect
            words="Hi! I&apos;m Medha."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-orange-50">
             Welcome to the vault.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
