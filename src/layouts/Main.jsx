import { Outlet } from "react-router-dom";
import Navber from "../pages/home/Navber";
import Footer from "../pages/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <div className="space-y-8 mt-5">
        <Outlet></Outlet>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
