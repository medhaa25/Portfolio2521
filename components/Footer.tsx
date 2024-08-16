import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full h-3/4 pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center mt-16">
        <h1 className="heading text-pink-800 lg:max-w-[45vw]">
        I’d Love to Hear from  <span className="text-pink-600">You!</span>
        </h1>
      
        <a href="mailto:medhaa2521@gmail.com">
          <MagicButton
            title="Drop a Message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-pink-600">
          Copyright © 2024 Medha Rawat
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank"><Image src={info.img} alt="icons" width={20} height={20} /></a>
              
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
