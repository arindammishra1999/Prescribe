import React from "react";
import { Fredoka } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function LoginLayout({ children }) {
  return (
    <div className="flex justify-center items-center h-screen w-screen px-4 sm:px-8">
      <div className="flex flex-col items-center justify-center w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`text-4xl sm:text-5xl mb-4 text-teal-700 font-bold font-fredoka`}
          >
            Prescribe
          </h1>
        </div>
        <AuthProvider>{children}</AuthProvider>
      </div>
    </div>
  );
}
