import React from "react";

const CreateAssignments = () => {
  return (
    <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
      <h1 className="md:text-3xl text-xl font-medium"> Create Assignments</h1>
      <form className="w-full grid sm:grid-cols-2 gap-6 mt-5">
        <input
          type="text"
          placeholder="title"
          name="title"
          className="input input-bordered w-full"
          required
        />
        <select className="select select-bordered w-full ">
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='hard'>hard</option>
        </select>
        <input
          type="text"
          placeholder="thumbnail image URL"
          name="image"
          className="input input-bordered w-full"
          required
        />
        <input
          type="mark"
          placeholder="mark"
          className="input input-bordered w-full"
          required
        />
        <textarea
          className="textarea textarea-bordered"
          name="description"
          placeholder="description"
        ></textarea>
        <input
          type="date"
          placeholder="due date"
          className="input input-bordered w-full"
          required
        />
        <div className="flex justify-end my-6 relative">
          <button className="bg-[#0C3330] px-3.5 py-2 text-white font-medium rounded-lg  absolute -right-28 ">
            Create Assignments
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignments;
