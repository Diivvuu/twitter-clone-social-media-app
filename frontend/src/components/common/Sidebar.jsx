import React from "react";
import { Link } from "react-router-dom";
import XSvg from "../svgs/X";
import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Sidebar = () => {
  const data = {
    fullName: "Divyanshu",
    username: "divu",
    profileImg: "/avatars/boy1.png",
  };
  return (
    <div className="md : flex-[2_2_0] w-18 max-w-52">
      <div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full">
        <Link to="/" className="flex justify-center ml-4 md:justify-start">
          <XSvg className="w-12 h-12 px-2 fill-white hover:bg-stone-900 rounded-full" />
        </Link>
        <ul className="flex flex-col gap-3 mt-4">
          <li className="flex justify-center md:justify-start">
            <Link
              to="/"
              className="flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
            >
              <MdHomeFilled className="w-8 h-8" />
              <span className="text-lg hidden md:block">Home</span>
            </Link>
          </li>
          <li className="flex justify-center md:justify-start">
            <Link
              to="/notifications"
              className="flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
            >
              <IoNotifications className="w-6 h-6" />
              <span className="text-lg hidden md:block">Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/profile/${data?.username}}"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
