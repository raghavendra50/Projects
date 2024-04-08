import { useNavigate } from "react-router-dom";
import Devices2 from "../../assets/Devices2.png";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const Section1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleNextClicked = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/signup/regform");
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="w-[100%] h-[700px] flex items-center justify-center">
      <div className="w-[300px] md:w-[400px] h-auto flex flex-col gap-10 ">
        <img src={Devices2} alt="Devices2-Image" />
        <div className="flex flex-col gap-3 md:items-center">
          <h1 className="font-medium text-[#333] text-sm font-sans">
            STEP 1 OF 3
          </h1>
          <h1 className="font-bold text-4xl text-[#333] md:text-center">
            Finish setting up your account
          </h1>
          <p className="text-xl text-[#333] font-normal md:text-center">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <div
            className="w-[100%] h-[70px] bg-red-600 rounded-lg text-3xl flex items-center justify-center text-white cursor-pointer"
            onClick={() => handleNextClicked()}
          >
            {loading ? <ClipLoader color="white" loading={loading} /> : "Next"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
