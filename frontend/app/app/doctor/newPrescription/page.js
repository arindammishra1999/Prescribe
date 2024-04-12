import React from "react";
import { FiArrowLeft, FiSearch, FiPlus, FiMinus } from "react-icons/fi";

const Page = () => {
    return (
        <div className="mx-auto p-4 flex flex-col justify-center min-h-screen">
            <div className="w-full mb-20">
                <FiArrowLeft className="text-4xl ml-5 cursor-pointer absolute top-0 left-0 mt-4 ml-4" />
                <h1 className="text-4xl sm:text-2xl font-bold text-center">
                    New Prescription
                </h1>
            </div>

            <h4 className="ml-2 mb-2">Drug Name</h4>
            <div className="relative flex items-center mb-5">
                <input
                    type="text"
                    placeholder="Find a drug"
                    className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 pr-10"
                />
                <FiSearch className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
            </div>

            <h4 className="ml-2 mb-2">Dose</h4>
            <div className="relative flex items-center mb-5">
                <FiMinus className="absolute left-0 top-0 mt-2 ml-2 w-6 h-6 cursor-pointer" />
                <input
                    type="text"
                    placeholder="500 mg"
                    className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 text-center"
                />
                <FiPlus className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
            </div>

            <h4 className="ml-2 mb-2">Days</h4>
            <div className="relative flex items-center mb-10">
                <FiMinus className="absolute left-0 top-0 mt-2 ml-2 w-6 h-6 cursor-pointer" />
                <input
                    type="text"
                    placeholder="7 days"
                    className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 text-center"
                />
                <FiPlus className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
            </div>

            <div className="w-full">
                <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
                    Prescribe
                </button>
            </div>
        </div>
    );
};

export default Page;
