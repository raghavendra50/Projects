import React from "react";
import { useParams, Outlet } from "react-router-dom";
import Header from "./Header";
import Divider from "./Divider";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { email } = useParams();
  return (
    <div className="w-[100%]">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Divider />
      <Outlet />
      <Divider />
      <Footer />
    </div>
  );
};

export default SignUp;
