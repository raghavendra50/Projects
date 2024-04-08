import React from "react";
import NetflixLogo from "../../assets/NetflixLogo.png";

const Header = () => {
  return (
    <div className="w-[100%] flex justify-between items-center">
      <img
        src={NetflixLogo}
        alt="Netflix-Logo"
        className="w-[120px] lg:w-[200px]"
      />
      <button className="bg-red-600 rounded-md w-[80px] h-[35px] text-[15px] text-white font-medium">
        Sign In
      </button>
    </div>
  );
};

export default Header;
