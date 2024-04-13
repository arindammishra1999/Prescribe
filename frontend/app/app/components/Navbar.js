"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { useLogout } from "../../hooks/useLogout";
const Navbar = ({ tabs, options }) => {
  const router = useRouter();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <div className="bottom-0 z-10 w-screen md:w-64 flex flex-row pt-3 text-black md:flex-col border-black border-2 bg-white md:justify-between md:h-screen md:p-8 md:bg-teal-900 md:text-white">
      <div className="logo hidden md:block">
        <h1 className="text-4xl text-center font-bold font-fredoka">
          Prescribe
        </h1>
      </div>

      {/* Body: Navigation Tabs Centered */}
      <div className="flex flex-row md:flex-col items-center justify-center grow">
        <ul className="flex flex-row md:flex-col items-start justify-start gap-8">
          {tabs.map((tab, index) => (
            <li key={index} className="mb-2">
              <a
                href={tab.link}
                className="flex md:flex-row flex-col items-center md:justify-center md:text-3xl"
              >
                <div className="text-xl">{tab.icon}</div>
                <span className="md:ml-2">{tab.title}</span>{" "}
                {/* Ensure text alignment */}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: User Options and Logout */}
      <div className="flex flex-col items-center">
        {options && options.length > 0 && (
          <div className="user-options mb-4">
            {options.map((option, index) => (
              <div key={index} className="option mb-2">
                <a href={option.link} className="flex items-center">
                  {option.icon}
                  <span className="ml-2 text-2xl">{option.title}</span>{" "}
                </a>
              </div>
            ))}
          </div>
        )}
        {/* Logout Button */}
        <div className="logout hidden md:block">
          <a className="flex items-center" onClick={handleLogout}>
            <FaSignOutAlt />
            <span className="ml-2 text-xl">Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
