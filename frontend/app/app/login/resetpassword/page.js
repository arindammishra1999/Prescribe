"use client";
import React from "react";

import EmailInput from "@components/EmailInput";

function ResetPasswordPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
      <div>
        <div className="mb-4">
          <h6>Enter your email address to reset password.</h6>
        </div>
        <EmailInput />
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage;
