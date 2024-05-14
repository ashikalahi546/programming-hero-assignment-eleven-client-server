// import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CreateAssignments = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const level = form.level.value;
    const deadline = startDate;
    const mark = form.mark.value;
    const description = form.description.value;

    const createData = {
      title,
      image,
      level,
      deadline,
      mark,
      description,
    };
    console.log(createData)
   

    fetch(`${import.meta.env.VITE_APP_URL}/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: " create successfully",
            icon: "success",
            confirmButtonText: "Create",
          });
        }
        // console.log(data);
      });
  };
  return (
    <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
      <h1 className="md:text-3xl text-xl font-medium"> Create Assignments</h1>
      <form
        onSubmit={handleCreate}
        className="w-full grid sm:grid-cols-2 gap-6 mt-5"
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          className="input input-bordered w-full"
          required
        />
        <select name="level" className="select select-bordered  ">
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <input
          type="text"
          placeholder="thumbnail image URL"
          name="image"
          className="input input-bordered w-full"
          required
        />
        <select name="mark" className="select select-bordered w-full ">
          {/* <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option> */}
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <textarea
          className="textarea textarea-bordered h-32 resize-none"
          name="description"
          placeholder="description"
        ></textarea>


       <div className="w-full">
       <DatePicker
            className="p-2 border w-[100%] rounded-lg"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
       </div>

        <div className="flex justify-end ">
          <button className="bg-[#0C3330] px-3.5 py-2 text-white font-medium rounded-lg ">
            Create Assignments
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignments;
