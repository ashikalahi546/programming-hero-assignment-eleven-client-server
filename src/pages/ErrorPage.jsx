import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h2 className="text-2xl">Not Found</h2>
      <Link to="/">
     
        <button className="btn">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
