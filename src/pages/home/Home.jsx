import Accordion from "../Accordion";
import Features from "../Features";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className=" ">
      <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
        <Slider />
        <Features />
  
      </div>
      <Accordion />
    </div>
  );
};

export default Home;
