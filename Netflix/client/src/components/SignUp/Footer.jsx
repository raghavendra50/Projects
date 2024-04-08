import React from "react";

const Footer = () => {
  return (
    <div className="w-100% h-auto bg-[#f3f3f3] flex flex-col p-10 text-[#737373]">
      <h1>
        Questions? Call{" "}
        <a
          href="tel:000-800-919-1694"
          className="text-decoration-line: underline"
        >
          000-800-919-1694
        </a>
      </h1>
      <div className="w-[100%] py-5 flex justify-center">
        <div className="flex-1 flex flex-col gap-2 lg:flex-row">
          <div className="flex-1 flex flex-col gap-2">
            <a href="" className="text-decoration-line: underline">
              FAQ
            </a>
            <a href="" className="text-decoration-line: underline">
              Privacy
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <a href="" className="text-decoration-line: underline">
              Help Centre
            </a>
            <a href="" className="text-decoration-line: underline">
              Cookie Preference
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 lg:flex-row">
          <div className="flex-1 flex flex-col gap-2">
            <a href="" className="text-decoration-line: underline">
              Netflix Shop
            </a>
            <a href="" className="text-decoration-line: underline">
              Corporate Information
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <a href="" className="text-decoration-line: underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
      <h1>Netflix India</h1>
    </div>
  );
};

export default Footer;
