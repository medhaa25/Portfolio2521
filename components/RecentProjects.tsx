"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
const RecentProjects = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading pt-32">
        A small selection of{" "}
        <span className="text-pink-800">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-5">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
            
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-0  top-0"
                  width={500}
                  height={150}

                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-red-100">
                {item.title}
              </h1>

              <p
                className="lg:h-20 lg:w-auto lg:text-l lg:font-normal font-light text-sm line-clamp-2 text-red-200"
                style={{
                  margin: "1vh 0",
                }}>
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center"></div>
              </div>
              <Link href= {item.link} className="hover:*:bg-pink-950 hover:rounded-2xl">
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-red-200">
                  Live Demo
                </p>
               <FaLocationArrow className="ms-3" color="#fecaca" />
              </div>
              </Link> 
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
