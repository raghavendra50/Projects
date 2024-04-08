import { useNavigate } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Divider from "./Divider";
import { useSelector, useDispatch } from "react-redux";
import updateUser from "./updateUser";

const Section4 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(1);
  const list = [
    "Watch all you want",
    "Recommendations just for you",
    "Change or cancel your plan anytime",
  ];
  const cards = [
    {
      bgColor:
        "bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#2172E3] via-[#4C00FF] to-[#1d529d]",
      plan: "Mobile",
      resolution: "480p",
      monthlyPrice: "149",
      videoAndSoundQuality: "Fair",
      spatialAudio: "Not Included",
      supportedDevices: "Mobile phone, tablet",
      devicesAtSameTime: "1",
      downloadDevices: "1",
    },
    {
      bgColor:
        "bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#6d3be3] via-[#581de4] to-[#1d529d]",
      plan: "Basic",
      resolution: "720p",
      monthlyPrice: "199",
      videoAndSoundQuality: "Good",
      spatialAudio: "Not Included",
      supportedDevices: "TV, computer, mobile phone, tablet",
      devicesAtSameTime: "1",
      downloadDevices: "1",
    },
    {
      bgColor:
        "bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#b038dc] via-[#581de4] to-[#1d529d]",
      plan: "Standard",
      resolution: "1080p",
      monthlyPrice: "499",
      videoAndSoundQuality: "Great",
      spatialAudio: "Not Included",
      supportedDevices: "TV, computer, mobile phone, tablet",
      devicesAtSameTime: "2",
      downloadDevices: "2",
    },
    {
      bgColor:
        "bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#e50914] via-[#581de4] to-[#1d529d]",
      plan: "Premium",
      resolution: "4k + HDR",
      monthlyPrice: "649",
      videoAndSoundQuality: "Best",
      spatialAudio: "Included",
      supportedDevices: "TV, computer, mobile phone, tablet",
      devicesAtSameTime: "4",
      downloadDevices: "6",
    },
  ];

  const isAuthenticated = useSelector((store) => store.User.isAuthenticated);
  const handleNextClicked = () => {
    updateUser(setLoading, navigate, dispatch, cards[selected]);
  };
  return (
    <div className="w-[100%] min-h-[700px] flex justify-center items-center p-5">
      {isAuthenticated ? (
        <div className="w-[400px] md:w-[550px] lg:w-[1200px] h-auto flex flex-col gap-5 md:items-center lg:items-start">
          <h1 className="font-medium text-[#333] text-sm md:text-center">
            STEP 2 OF 3
          </h1>
          <h1 className="font-bold text-4xl text-[#333] text-left md:text-center">
            Choose the plan that's right for you.
          </h1>
          <div className="flex flex-col -mx-5">
            {list.map((value, index) => (
              <div
                className="flex items-center font-[Netflix-Sans] text-xl h-[40px]"
                key={index}
              >
                <IoIosCheckmark size={64} color="red" />
                {value}
              </div>
            ))}
          </div>
          <div className="w-[100%] flex lg:hidden">
            {cards.map((obj, index) => (
              <Card1
                key={index}
                obj={obj}
                selected={selected}
                setSelected={setSelected}
                index={index}
              />
            ))}
          </div>
          <div className="w-[100%] hidden lg:flex">
            {cards.map((obj, index) => (
              <Card2
                key={index}
                obj={obj}
                selected={selected}
                setSelected={setSelected}
                index={index}
              />
            ))}
          </div>
          <div className="w-full flex flex-col gap-5 lg:hidden">
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Monthly Price</h1>
              <h1>₹ {cards[selected]["monthlyPrice"]}</h1>
            </div>
            <Divider />
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Video and sound quality</h1>
              <h1>{cards[selected]["videoAndSoundQuality"]}</h1>
            </div>
            <Divider />
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Resolution</h1>
              <h1>{cards[selected]["resolution"]}</h1>
            </div>
            <Divider />
            <div
              className={`${
                selected == 3 ? "flex" : "hidden"
              } justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]`}
            >
              <h1>Spatial audio (immersive sound)</h1>
              <h1>{cards[selected]["spatialAudio"]}</h1>
            </div>
            {selected == 3 && <Divider />}
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Supported Devices</h1>
              <h1>{cards[selected]["supportedDevices"]}</h1>
            </div>
            <Divider />
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Devices your household can watch at a time</h1>
              <h1>{cards[selected]["devicesAtSameTime"]}</h1>
            </div>
            <Divider />
            <div className="flex justify-between text-[#676767] text-sm font-[Netflix-Sans-Medium]">
              <h1>Download Devices</h1>
              <h1>{cards[selected]["downloadDevices"]}</h1>
            </div>
          </div>
          <div
            className="w-[100%] h-[70px] md:w-[550px] bg-red-600 rounded-lg text-3xl flex items-center justify-center text-white cursor-pointer self-center"
            onClick={() => handleNextClicked()}
          >
            {loading ? <ClipLoader color="white" loading={loading} /> : "Next"}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#737373] text-sm font-[Netflix-Sans]">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <span className="text-[#0071eb]">Terms of Use</span> for more
              details.
            </span>
            <span className="text-[#737373] text-sm font-[Netflix-Sans]">
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </span>
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

export default Section4;
