import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";

const Assignment = ({ assignment }) => {
  console.log(assignment);
  const { image, title, description, level, mark, date } = assignment;
  return (
    <div className="border rounded-3xl p-7">
      <div className="flex sm:flex-row flex-col gap-5 relative">
        <img className="sm:h-auto h-72" src={image} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-2xl">{title}</h1>
          <h4 className="text-base leading-6 text-gray-500">
            {description.slice(0, 100)}
          </h4>
          <div className="w-20">
            <p className="bg-[#E1F3CA] text-center py-2 rounded-xl">{level}</p>
          </div>
          <h3 className="mt-1 text-lg">Mark : {mark}</h3>
          <p>Due : {date}</p>

          <div className=" flex gap-5 mt-5">
            <button className="border-2 py-2.5 rounded-lg px-2.5 text-2xl border-[#0C3330] text-[#0C3330]">
              <SlPencil />
            </button>
            <button className="border-2 py-2.5 rounded-lg px-2.5 text-2xl border-[#F35050] text-[#F35050]">
              <RiDeleteBin6Line />
            </button>
            <button className=" py-2.5 rounded-lg px-5 text-base font-medium  bg-[#0C3330] text-white">
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
