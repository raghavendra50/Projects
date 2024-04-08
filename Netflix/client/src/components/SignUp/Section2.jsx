import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import addUser from "./addUser";
import { useDispatch } from "react-redux";

const Section2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email") || "",
    password: "",
  });

  const [error, setErrors] = useState({
    email: formData.email != "" ? false : null,
    password: null,
  });

  const handleFormDataChange = (e) => {
    const { id, value } = e.target;
    if (value == "") {
      setErrors((prev) => ({
        ...prev,
        [id]: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNextClicked = async () => {
    const noerrors = Object.values(error).every((value) => value == false);
    if (noerrors) {
      addUser(setLoading, navigate, dispatch, formData);
    } else {
      toast.error("Email or password cannot be empty");
    }
  };
  return (
    <div className="w-[100%] h-[700px] flex items-center justify-center">
      <div className="w-[300px] md:w-[400px] h-auto flex flex-col">
        <h1 className="font-medium text-[#333] text-sm font-sans">
          STEP 1 OF 3
        </h1>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl text-[#333]">
            Create a password to start your membership
          </h1>
          <p className="text-xl text-[#333] font-normal">
            Just a frew more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            className={`w-[100%] h-[65px] border-[0.5px] rounded-md p-5 outline-none font-[Netflix-Sans] ${
              error.email == true
                ? "border-red-600"
                : error.email == false
                ? "border-green-600"
                : "border-black"
            }`}
            onChange={(e) => handleFormDataChange(e)}
          />
          <input
            type="password"
            id="password"
            placeholder="Add a password"
            value={formData.password}
            onChange={(e) => handleFormDataChange(e)}
            className={`w-[100%] h-[65px] border-[0.5px] rounded-md p-5 outline-none font-[Netflix-Sans] ${
              error.password == true
                ? "border-red-600"
                : error.password == false
                ? "border-green-600"
                : "border-black"
            }`}
          />
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

export default Section2;
