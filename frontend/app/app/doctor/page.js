import React from "react";
import DoctorLayout from "./layout";
import { FiSearch } from "react-icons/fi";

function DoctorLandingPage() {
  const doctorName = "Dr. Adam";

  return (
    <DoctorLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-2xl mb-20 mt-20 font-bold">
          Welcome {doctorName}!
        </h1>
        <h2 className="text-2xl mb-4">Search Patient</h2>
        <div className="relative flex items-center mb-40">
          <input
            type="text"
            placeholder="Enter Health ID"
            className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 pr-10"
          />
          <FiSearch className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
        </div>
        <div className="mt-50 w-full">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
            Scan Patient QR code
          </button>
        </div>
      </div>
    </DoctorLayout>
  );
}

export default DoctorLandingPage;
