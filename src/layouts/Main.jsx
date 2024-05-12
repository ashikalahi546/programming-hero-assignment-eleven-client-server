import { Outlet } from "react-router-dom";
import Navber from "../pages/home/Navber";
import Footer from "../pages/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <div className=" mt-6 space-y-10">
      <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
      <Outlet></Outlet>
      </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
