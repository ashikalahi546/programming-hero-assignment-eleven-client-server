import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#0C3330] " : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "text-[#0C3330] " : "text-gray-500"
          }
        >
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "text-[#0C3330] " : "text-gray-500"
          }
        >
          Create assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pending"
          className={({ isActive }) =>
            isActive ? "text-[#0C3330] " : "text-gray-500"
          }
        >
          Pending assignments
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow top-0  w-full  z-20 sticky">
      <div className="navbar bg-base-100 xl:w-9/12 lg:w-10/12 mx-auto lg:px-0 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-2.5 w-48 shadow bg-base-100 rounded text-center "
            >
              {navlinks}
            </ul>
          </div>
          <div>
            <Link className=" items-center gap-1.5 md:text-xl flex font-medium text-sm   ">
              <img className="sm:w-auto w-5" src="/images/clip.png" alt="" />
              <h2> Assiantment.bd</h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex font-medium text-sm  ">
          <ul className="flex gap-3 px-1 ">{navlinks}</ul>
        </div>

        <div className="navbar-end gap-3">
          <ul className="menu menu-horizontal px-1">
            {!user && (
              <div>
                <Link to="/login" className="btn bg-[#0C3330] text-white ">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="border border-[#0C3330] hover:bg-[#0C3330] duration-150 delay-150 hover:text-white py-3 ml-4 px-4 rounded-lg cursor-pointer font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>

          {user && (
            <div className="flex items-center gap-2">
              <h1> {user?.displayName}</h1>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="size-10 rounded-full">
                    <img
                      className=""
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60"
                >
                  <li>
                    <Link className=" bg-[#0C3330] hover:text-black text-white" to="/bid-request">My Attempted Assignments</Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={logOut}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
