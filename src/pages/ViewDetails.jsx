import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const viewDetails = useLoaderData()
    console.log(viewDetails)
    const {id, title, image, description, mark, level,deadline,date} = viewDetails;
    return (
        <div className=' xl:w-7/12 lg:w-10/12 lg:px-0 px-5 mx-auto'>
        <h2 className='text-3xl font-medium mb-6'>View Assignment</h2>
              <div className="border rounded-3xl p-7">
      <div className="flex sm:flex-row flex-col gap-8 relative">
        <img className="sm:h-80 w-72  h-72 rounded-3xl" src={image} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-2xl">{title}</h1>
          <h4 className="text-base leading-6 text-gray-500">
            {description.slice(0, 100)}
          </h4>
          <div className="w-20">
            <p className="text-red-500 capitalize font-medium">{level}</p>
          </div>
          <h3 className="mt-1 text-base">Mark : {mark}</h3>
          <p>Due : { date|| deadline}</p>
          
      <div>
      <button className=' py-2.5 rounded-lg px-5 text-sm font-medium  bg-[#0C3330] text-white mt-4'>Take Assignment</button>
      </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ViewDetails;