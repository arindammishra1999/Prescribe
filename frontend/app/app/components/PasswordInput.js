import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function PasswordInput() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="mb-4 relative">
      <h6 className="ml-2">Password</h6>
      <input
        type={passwordShown ? "text" : "password"}
        placeholder="Password"
        className="w-full border border-gray-300 p-4 rounded-full pr-10"
      />
      <IconContext.Provider value={{ size: "2em", color: "#134e4a" }}>
        <div className="absolute inset-y-2/3 right-0 pr-3 flex items-center text-sm leading-5">
          {passwordShown ? (
            <FaEyeSlash
              onClick={togglePasswordVisibility}
              className="cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={togglePasswordVisibility}
              className="cursor-pointer"
            />
          )}
        </div>
      </IconContext.Provider>
    </div>
  );
}
