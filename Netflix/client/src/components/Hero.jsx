import Gradient from "./Gradient";
import Header from "./Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-[100%] h-[600px] bg-[url(./assets/Background.jpg)] bg-cover">
      <Gradient />
      <div className="flex flex-col p-5 lg:px-40 relative z-20 gap-5">
        <Header />
        <h1 className="text-white text-3xl font-bold text-center mt-10 lg:text-5xl lg:mt-20">
          Unlimited movies, TV shows and more
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl">
          Watch anywhere. Cancel anytime.
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center lg:px-40">
          <input
            type="text"
            placeholder="Email address"
            className="border-[1px] p-3 text-white h-[50px] w-[300px] border-white rounded-md lg:w-[400px] lg:h-[60px] outline-none bg-gray-800 bg-opacity-50"
          />
          <div className="flex text-xl text-white font-medium bg-red-600 h-[50px] w-[300px] rounded-md items-center justify-center lg:h-[60px] lg:flex:1">
            Get Started <MdOutlineKeyboardArrowRight size="32px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
