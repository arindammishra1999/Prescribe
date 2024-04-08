import React from "react";
import Navbar from "../components/Navbar";
import { FaRegClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { AiOutlineQrcode } from "react-icons/ai"; // Assuming you have an icon for QR codes

const Layout = ({ children }) => {
  // Define the tabs
  const tabs = [
    {
      title: "New Orders",
      link: "/pharmacist/newOrders",
      icon: <LuPlusCircle />,
    },
    {
      title: "Past Orders",
      link: "/pharmacist/pastOrders",
      icon: <FaRegClock />,
    },
    {
      title: "Account",
      link: "/pharmacist/account",
      icon: <FaUser />,
    },
    {
      title: "Scan QR Code", // Add the title for your QR code scanner
      link: "/scan",        // Link to the path you'll handle QR code scanning
      icon: <AiOutlineQrcode />, // Replace with your QR code icon
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
