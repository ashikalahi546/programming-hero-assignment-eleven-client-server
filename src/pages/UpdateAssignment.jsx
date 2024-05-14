import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const data = useLoaderData();

  const { _id, title, image, description, mark, level } = data;
  console.log(data);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const level = form.level.value;
    const mark = form.mark.value;
    const description = form.description.value;

    const updateData = {
      title,
      image,
      level,
      mark,
      description,
    };

    fetch(`${import.meta.env.VITE_APP_URL}/create/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: " Updated  successfully",
            icon: "success",
            confirmButtonText: "Update",
          });
        }
      });
  };

  return (
    <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
      <h1 className="md:text-3xl text-xl font-medium"> Update Assignments</h1>
      <form
        onSubmit={handleUpdate}
        className="w-full grid sm:grid-cols-2 gap-6 mt-5"
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          defaultValue={title}
          className="input input-bordered w-full"
          required
        />
        <select
          name="level"
          defaultValue={level}
          className="select select-bordered  "
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <input
          type="text"
          placeholder="thumbnail image URL"
          name="image"
          defaultValue={image}
          className="input input-bordered w-full"
          required
        />
        <select
          name="mark"
          defaultValue={mark}
          className="select select-bordered w-full "
        >
          <option value="30">40</option>
          <option value="40">50</option>
          <option value="50">60</option>
        </select>
        <textarea
          className="textarea textarea-bordered h-32 resize-none"
          name="description"
          defaultValue={description}
          placeholder="description"
        ></textarea>
        <div className="w-full">
       <DatePicker
            className="p-2 border w-[100%] rounded-lg"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
       </div>
        <div className="flex sm:justify-end justify-center my-6 relative">
          <button className="bg-[#0C3330] px-3.5 py-2 text-white font-medium rounded-lg  absolute sm:-right-28 ">
            Update Assignments
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAssignment;
