import { useNavigate } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useSelector } from "react-redux";

const Section3 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleNextClicked = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/signup/plan/select");
      setLoading(false);
    }, 1000);
  };
  const list = [
    "No Commitments, cancel anytime.",
    "Everything on Netflix for low price.",
    "No ads and no extra fees. Ever.",
  ];

  const isAuthenticated = useSelector((store) => store.User.isAuthenticated);
  return (
    <div className="w-[100%] h-[700px] flex items-center justify-center">
      {isAuthenticated ? (
        <div className="w-[300px] md:w-[400px] h-auto flex flex-col gap-5 md:items-center">
          <CiCircleCheck size={62} color="red" />
          <div className="flex flex-col gap-2 w-[100%]">
            <h1 className="font-medium text-[#333] text-sm md:text-center">
              STEP 2 OF 3
            </h1>
            <h1 className="font-bold text-4xl text-[#333] text-left md:text-center">
              Choose your plan
            </h1>
            {list.map((value, index) => (
              <div
                className="flex -mx-5 items-center text-xl font-[Netflix-Sans] text-[#333]"
                key={index}
              >
                <IoIosCheckmark size={64} color="red" />
                {value}
              </div>
            ))}

            <div
              className="w-[100%] h-[70px] bg-red-600 rounded-lg text-3xl flex items-center justify-center text-white cursor-pointer"
              onClick={() => handleNextClicked()}
            >
              {loading ? (
                <ClipLoader color="white" loading={loading} />
              ) : (
                "Next"
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-red-600 text-lg">
          Please sign in to access this page. Click{" "}
          <span
            className="text-blue-600 underline"
            onClick={() => navigate("/signin")}
          >
            here
          </span>{" "}
          to redirect to login.
        </div>
      )}
    </div>
  );
};

export default Section3;
