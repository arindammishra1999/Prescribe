import React from "react";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Layout = ({ children }) => {
  // Define the tabs
  const tabs = [
    {
      title: "Home",
      link: "/home",
      icon: <FaHome />,
    },
    {
      title: "Prescriptions",
      link: "/profile",
      icon: <FaPrescriptionBottleAlt />,
    },
    {
      title: "Account",
      link: "/settings",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen w-screen">
      {/* Navbar at the bottom for mobile, on the side for larger screens */}
      <div className="h-20 w-screen md:w-64 md:h-screen">
        <Navbar tabs={tabs} />
      </div>

      {/* Main content */}
      <div className="w-full h-full bg-white md:h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Layout;
