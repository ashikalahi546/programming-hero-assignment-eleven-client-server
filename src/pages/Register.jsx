import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

import { RxEyeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordShow, setPasswordShow] = useState("");
  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12 w-10/12  shadow-2xl bg-base-100">
          <h1 className="md:text-3xl text-2xl text-center pt-5 font-medium">
            Register Now
          </h1>
          <form className="card-body ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                placeholder="name"
                name="name"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="password"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span className="absolute top-[51px] right-5 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)}>
                {passwordShow ? <IoEyeOutline /> : <RxEyeClosed />}
              </span>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
          <div className="flex items-center justify-center gap-2 text-base pb-4 font-medium">
                <p className="">Create An Account  ?</p>
                <Link to='/login' className=" text-blue-700">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
