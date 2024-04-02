"use client";
import React from "react";

import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";

function SignupPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <div>
        <EmailInput />
        <PasswordInput />
        <PasswordInput confirm={true} />
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
            Continue
          </button>
        </div>
        <p>
          Already a User?{" "}
          <a href="#" className="text-teal-900">
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default SignupPage;
