import React from "react";
import { FaPen } from "react-icons/fa";

const Features = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold mb-5">Our Features</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <div className="p-5 shadow rounded-md">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#DFDC89] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-xl">
                <FaPen />
              </div>
            </div>
            <h4 className="text-xl font-medium">Easy to create assignments</h4>
            <p className="leading-7 text-gray-600">
              Clearly outline the goals and
              <span className="sm:block"> learning outcomes you want to</span>
              achieve with the....
            </p>
          </div>
        </div>
        <div className="p-5 shadow rounded-md">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#DFDC89] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-xl">
                <FaPen />
              </div>
            </div>
            <h4 className="text-xl font-medium">Easy to create assignments</h4>
            <p className="leading-7 text-gray-600">
              Clearly outline the goals and
              <span className="sm:block"> learning outcomes you want to</span>
              achieve with the....
            </p>
          </div>
        </div>
        <div className="p-5 shadow rounded-md">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#DFDC89] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-xl">
                <FaPen />
              </div>
            </div>
            <h4 className="text-xl font-medium">Easy to create assignments</h4>
            <p className="leading-7 text-gray-600">
              Clearly outline the goals and
              <span className="sm:block"> learning outcomes you want to</span>
              achieve with the....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
