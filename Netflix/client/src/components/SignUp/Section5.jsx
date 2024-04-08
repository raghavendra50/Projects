import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import Lock from "../../assets/Lock.png";
import { IoMdUnlock } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import Visa from "../../assets/Visa.png";
import Mastercard from "../../assets/Mastercard.png";
import Diners from "../../assets/Diners.png";
import Bhim from "../../assets/Bhim.png";
import Phonepe from "../../assets/Phonepe.png";
import Amazonpay from "../../assets/Amazonpay.png";
import Gpay from "../../assets/Gpay.png";
import { useSelector } from "react-redux";

const Section5 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((store) => store.User.isAuthenticated);
  const handleNextClicked = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/home");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-[100%] min-h-[700px] flex items-center justify-center">
      {isAuthenticated ? (
        <div className="w-[300px] md:w-[400px] h-auto flex flex-col gap-5 md:items-center p-5">
          <img src={Lock} alt="Lock-Image" width={64} />
          <div className="flex flex-col gap-2 w-[100%]">
            <h1 className="font-medium text-[#333] text-sm md:text-center">
              STEP 3 OF 3
            </h1>
            <h1 className="font-bold text-4xl text-[#333] text-left md:text-center">
              Choose how to pay
            </h1>
            <p className="mt-5 font-[Netflix-Sans-Regular] text-[#333] md:text-center text-lg">
              Your payment is encrypted and you can change your payment method
              at anytime.
            </p>
            <div className="text-lg font-[Netflix-Sans-Medium] md:text-center">
              <h1>Secure for peace of mind.</h1>
              <h1>Cancel easily online.</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="flex items-center gap-1 self-end text-xs">
                End-to-End encrypted <IoMdUnlock color="#ffb53f" />
              </h1>
              <div className="w-[100%] border-[1px] border-[#767676] rounded-md flex items-center justify-between px-5 py-6">
                <div className="flex flex-col gap-1">
                  <h1>Credit or Debit Card</h1>
                  <span className="flex gap-1">
                    <img src={Visa} alt="Visa-Image" />
                    <img src={Mastercard} alt="Visa-Image" />
                    <img src={Diners} alt="Visa-Image" />
                  </span>
                </div>
                <SlArrowRight size={24} />
              </div>
              <div className="w-[100%] border-[1px] border-[#767676] rounded-md flex items-center justify-between px-5 py-6">
                <div className="flex flex-col gap-1">
                  <h1>UPI AutoPay</h1>
                  <span className="flex gap-1">
                    <img src={Bhim} alt="Visa-Image" />
                    <img src={Phonepe} alt="Visa-Image" />
                    <img src={Amazonpay} alt="Visa-Image" />
                    <img src={Gpay} alt="Visa-Image" />
                  </span>
                </div>
                <SlArrowRight size={24} />
              </div>
            </div>
            <h1
              className="flex self-end text-red-600 text-xs px-3 py-1 rounded-xl"
              onClick={() => handleNextClicked()}
            >
              {loading ? (
                <ClipLoader color="red" size={12} loading={loading} />
              ) : (
                "Skip"
              )}
            </h1>
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

export default Section5;
