import React from "react";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((store) => store.User.isAuthenticated);
  return (
    <div className="w-[100%] px-5 py-2 flex justify-between items-center">
      <img
        src={NetflixLogo}
        alt="Netflix-Logo"
        className="w-[120px] lg:w-[200px]"
      />
      <button className="rounded-md w-[80px] h-[35px] text-[18px] text-black font-bold">
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default Header;
