import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className=" h-fit lg:py-20 lg:px-20 w-full md:bg-pink-800  md:px-8 md:py-8 rounded-2xl sm:px-0 " id="experience">
      <h1 className="heading">
        <span className="text-red-200">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
             
              background: "rgb(4,7,29)",
              backgroundColor:
                "beige",
             
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
           
            className="flex-1 text-black dark:text-white border-neutral-200 "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 bg-red-100 ">
         
              <div className="lg:ms-5 ">
                <h1 className="text-start text-xl md:text-2xl font-bold text-pink-900">
                  {card.title}
                </h1>
                <p className="text-start text-pink-800 mt-1 font-semibold">{card.org}</p>
                <p className="text-start text-pink-600 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
