import { Outlet } from "react-router-dom";
import Navber from "../pages/home/Navber";
import Footer from "../pages/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <div className=" mt-6 space-y-10">
      <div>
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
