import React from "react";
import { CgPen } from "react-icons/cg";
import { TbFilePencil, TbPentagonNumber4 } from "react-icons/tb";

const Features = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold my-10">Our Features</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <div className="p-5 border rounded-lg">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#DFDC89] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-3xl ">
              <CgPen/>

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
        <div className="p-5 border rounded-lg">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#ED9393] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-3xl ">
              <TbFilePencil />

              </div>
            </div>
            <h4 className="text-xl font-medium">Submit assignments timely</h4>
            <p className="leading-7 text-gray-600">
              Clearly outline the goals and
              <span className="sm:block"> learning outcomes you want to</span>
              achieve with the....
            </p>
          </div>
        </div>
        <div className="p-5 border rounded-lg">
          <div className="flex flex-col  items-center text-center gap-2">
            <div className="bg-[#B2EE96] size-20 rounded-full">
              <div className="flex items-center justify-center size-20 text-3xl ">
              <TbPentagonNumber4 />

              </div>
            </div>
            <h4 className="text-xl font-medium">Grade assignment</h4>
            <p className="leading-7 text-gray-600">
              Clearly outline the goals and
              <span className="sm:block"> learning outcomes you want to</span>
              achieve with the....
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="bg-[#0C3330] px-3.5 py-2 text-white font-medium rounded-lg ">View all features </button>
      </div>
    </div>
  );
};

export default Features;
