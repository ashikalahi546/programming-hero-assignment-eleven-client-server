import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Assignment = ({ assignment }) => {
  const { _id, image, title, description, level, mark, date } = assignment;

  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log("delete confirm");

  //       fetch(`http://localhost:5000/create${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "your Assignment has been deleted.",
  //               icon: "success",
  //             });
      
  //           }
  //         });
  //     }
  //   });
  // };
  

  const handleDelete = (_id)=>{
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

        
    console.log('delete confirm')

    fetch(`http://localhost:5000/create/${_id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount  > 0){
          Swal.fire({
            title: "Deleted!",
            text: "your coffee has been deleted.",
            icon: "success"
          });
        }
    })
    }
      });
  }
  return (
    <div className="border rounded-3xl p-7">
      <div className="flex sm:flex-row flex-col gap-5 relative">
        <img className="sm:h-72 w-56  h-72 rounded-3xl" src={image} alt="" />
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
            <Link>
              <button className="border-2 py-2.5 rounded-lg px-2.5 text-2xl border-[#0C3330] text-[#0C3330]">
                <SlPencil />
              </button>
            </Link>

            <Link>
              <button
                onClick={() => handleDelete(_id)}
                className="border-2 py-2.5 rounded-lg px-2.5 text-2xl border-[#F35050] text-[#F35050]"
              >
                <RiDeleteBin6Line />
              </button>
            </Link>

            <Link>
              <button className=" py-2.5 rounded-lg px-5 text-base font-medium  bg-[#0C3330] text-white">
                view
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
