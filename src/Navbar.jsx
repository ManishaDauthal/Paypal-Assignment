import React from "react";
import { CiSettings } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="p-5 bg-blue-900 flex items-center justify-start">
      <div className="w-8 h-8 ml-28 flex items-center">
        <img src="https://cdn.dribbble.com/users/5816579/screenshots/15144841/yt_4x.jpg" />{" "}
      </div>
      <div className="flex ml-5 space-x-10 ">
        <span className="text-white ">Home </span>
        <span className="text-white ">Finances</span>
        <span className="text-white ">Send and Request</span>
        <span className="text-white ">Deals</span>
        <span className="text-white ">Wallet</span>
        <span className="text-white ">Activity</span>
        <span className="text-white ">Help</span>
        <span className="text-white">
          <AiOutlineBell />
        </span>
        <span className="text-white ">
          <CiSettings />
        </span>
        <span className="text-white ">Log Out</span>
      </div>
    </div>
  );
};
export default Navbar;
