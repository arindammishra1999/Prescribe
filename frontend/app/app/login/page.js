"use client";
import React from "react";
import { Fredoka } from "next/font/google";
import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";
const fredoka = Fredoka({
  subsets: ["latin"],
  weights: [700],
});
function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center w-1/3 p-8 mx-auto gap-12">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-5xl mb-4 text-teal-700 font-bold"
            style={{ fontFamily: fredoka.style.fontFamily }}
          >
            Prescribe
          </h1>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
        </div>
        <div>
          <EmailInput />
          <PasswordInput />
          <div className="mb-4">
            <a href="#" className="text-teal-900">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 w-full">
            <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
              Login
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-teal-900">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
