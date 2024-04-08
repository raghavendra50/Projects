import React from "react";

import { useSelector } from "react-redux";
const Home = () => {
  const isAuthenticated = useSelector((store) => store.User.isAuthenticated);
  return (
    <div className="w-[100%] min-h-screen flex justify-center items-center">
      {isAuthenticated ? (
        "Home"
      ) : (
        <div>
          {" "}
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

export default Home;
