import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function PasswordInput({
  confirm,
  onPasswordChange,
  invalid,
  valid,
}) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handlePasswordChange = (event) => {
    onPasswordChange(event.target.value); // Pass the input value to the parent component
  };

  return (
    <div className="mb-4 relative">
      <h6 className="ml-2">{confirm ? "Confirm Password" : "Password"}</h6>
      <input
        type={passwordShown ? "text" : "password"}
        placeholder="********"
        className={`w-full border ${
          invalid
            ? "border-red-500"
            : valid
            ? "border-green-500"
            : "border-gray-300"
        } p-4 rounded-full focus:border-teal-900 focus:outline-none`}
        onChange={handlePasswordChange}
      />
      <IconContext.Provider value={{ size: "2em", color: "#134e4a" }}>
        <div className="absolute inset-y-2/3 right-0 pr-3 flex items-center text-sm leading-5 text-xs">
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
