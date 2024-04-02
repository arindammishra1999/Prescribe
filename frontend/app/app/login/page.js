"use client";
import React, { useState } from "react";

import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";
import DropDown from "../components/DropDown";

function LoginPage() {
  const [userType, setUserType] = useState("");
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div>
        <DropDown
          options={["Patient", "Doctor", "Pharmacy"]}
          fieldName={"Are you a..."}
          onSelect={setUserType}
        />
        <EmailInput />
        <PasswordInput />
        <div className="mb-4">
          <a href="#" className="text-teal-900">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
            Login
          </button>
        </div>
        <p>
          Don&apos;t have an account?{" "}
          <a href="#" className="text-teal-900">
            Register
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
