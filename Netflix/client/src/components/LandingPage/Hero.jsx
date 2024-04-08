import { useState } from "react";
import Gradient from "./Gradient";
import Header from "./Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import getUser from "./getUser";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailAddressChange = (e) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = e.target.value;
    setEmail(value);
    value.match(pattern) ? setError(false) : setError(true);
  };

  const handleGetStarted = async () => {
    if (email == "") {
      toast.error("Email Address cannot be empty");
    } else if (email != "" && error) {
      toast.error("Enter a valid email address");
    } else {
      getUser(setLoading, navigate, email);
    }
  };
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
            type="email"
            placeholder="Email address"
            value={email}
            className={`border-[1px] p-3 text-white h-[50px] w-[300px] rounded-md lg:w-[400px] lg:h-[60px] outline-none bg-gray-800 bg-opacity-50 ${
              error === true
                ? "border-red-600"
                : error === false
                ? "border-green-600"
                : "border-white"
            } focus:border-[2px]`}
            onChange={(e) => handleEmailAddressChange(e)}
          />
          <div
            className="flex text-xl text-white font-medium bg-red-600 h-[50px] w-[300px] rounded-md items-center justify-center lg:h-[60px] lg:flex:1 cursor-pointer"
            onClick={() => handleGetStarted()}
          >
            {loading ? (
              <ClipLoader color="white" loading={loading} />
            ) : (
              <span className="flex">
                Get Started <MdOutlineKeyboardArrowRight size="32px" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
